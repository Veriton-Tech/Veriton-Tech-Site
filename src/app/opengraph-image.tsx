import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Veriton — Android, Web, Shopify & AI Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12263a",
          padding: "56px 64px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* ImageResponse requires <img>; next/image is not supported here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={72}
            height={72}
            alt=""
            style={{ borderRadius: 8 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Product &amp; engineering studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            Veriton
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              color: "rgba(232,236,240,0.9)",
              maxWidth: 820,
            }}
          >
            Android, Web, Shopify &amp; AI Development Studio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.5)",
            fontSize: 24,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Berlin · Remote-friendly</span>
          <span>veriton.si</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
