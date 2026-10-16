#!/usr/bin/env node
/**
 * Blocks / heals malware injections in postcss.config.mjs.
 *
 * Known attack: obfuscated payload appended after `export default config;`
 * (crypto/RPC downloader using createRequire, spawn, _0x* hex strings).
 *
 * Usage:
 *   node scripts/guard-postcss.mjs          # check + auto-heal, exit 1 if healed or still bad
 *   node scripts/guard-postcss.mjs --check  # check only (CI), never rewrite
 *   node scripts/guard-postcss.mjs --heal   # rewrite to clean baseline, exit 0
 */

import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const TARGET = join(ROOT, "postcss.config.mjs");
const MAX_CLEAN_BYTES = 400;

const CLEAN_POSTCSS = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
`;

/** Patterns seen in the Aug 2025 / origin-main infection (and common variants). */
const MALWARE_MARKERS = [
  /BLOCK_MULTIPLE/,
  /NONCE_FANOUT/,
  /INDEXER_URL/,
  /RPC_ENDPOINTS/,
  /_0x[0-9a-f]{4,}/i,
  /global\.i\s*=/,
  /createRequire\s*\(/,
  /\bspawn\s*\(/,
  /child_process/,
  /eval\s*\(/,
  /Function\s*\(/,
  /https?:\/\/[^\s'"]+/i,
];

const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");
const forceHeal = args.has("--heal");

function fail(message, code = 1) {
  console.error(`[guard-postcss] ${message}`);
  process.exit(code);
}

function ok(message) {
  console.log(`[guard-postcss] ${message}`);
}

function writeClean() {
  writeFileSync(TARGET, CLEAN_POSTCSS, "utf8");
  ok(`Wrote clean baseline → ${TARGET}`);
}

function analyze(raw) {
  const reasons = [];
  const size = Buffer.byteLength(raw, "utf8");

  if (size > MAX_CLEAN_BYTES) {
    reasons.push(`file too large (${size} bytes; clean is ~${CLEAN_POSTCSS.length})`);
  }

  for (const re of MALWARE_MARKERS) {
    if (re.test(raw)) {
      reasons.push(`matched malware pattern: ${re}`);
    }
  }

  // Legitimate file is only the Tailwind plugin config — reject surprise imports/side effects.
  const stripped = raw
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .trim();

  if (!/^const config\s*=\s*\{[\s\S]*\}\s*;\s*export default config\s*;?\s*$/.test(stripped)) {
    reasons.push("content does not match the expected PostCSS Tailwind config shape");
  }

  if (stripped.includes("import ") || stripped.includes("require(")) {
    reasons.push("unexpected import/require in postcss config");
  }

  return reasons;
}

if (!existsSync(TARGET)) {
  if (checkOnly) fail(`Missing ${TARGET}`);
  writeClean();
  process.exit(0);
}

let raw;
try {
  raw = readFileSync(TARGET, "utf8");
} catch (err) {
  fail(`Cannot read ${TARGET}: ${err.message}`);
}

if (forceHeal) {
  writeClean();
  process.exit(0);
}

const reasons = analyze(raw);

if (reasons.length === 0) {
  const size = statSync(TARGET).size;
  ok(`OK — postcss.config.mjs is clean (${size} bytes)`);
  process.exit(0);
}

console.error("[guard-postcss] MALWARE / unexpected content detected in postcss.config.mjs:");
for (const r of reasons) console.error(`  - ${r}`);

if (checkOnly) {
  fail("Refusing to continue (--check). Run: node scripts/guard-postcss.mjs --heal");
}

writeClean();
fail(
  "Healed postcss.config.mjs. Re-run your command. Investigate how this file was changed (git history / compromised machine).",
  1
);
