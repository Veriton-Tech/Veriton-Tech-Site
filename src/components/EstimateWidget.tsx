"use client";
import React, { useState } from "react";

export default function EstimateWidget() {
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("4-8 weeks");
  const [result, setResult] = useState<string | null>(null);

  const estimate = () => {
    if (!budget) {
      setResult("Please select a budget range.");
      return;
    }
    setResult(`Estimated scope: With a ${budget} budget we typically deliver a first MVP within ${timeline}. Contact us for a tailored quote.`);
  };

  return (
    <div className="space-y-3 text-sm">
      <label className="block font-semibold text-cyan-700">Budget</label>
      <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-2 rounded border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 bg-white text-slate-700">
        <option value="">Choose...</option>
        <option value="$5k-$10k">$5k-$10k</option>
        <option value="$10k-$25k">$10k-$25k</option>
        <option value="$25k+">$25k+</option>
      </select>

      <label className="block font-semibold text-cyan-700">Timeline</label>
      <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full p-2 rounded border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 bg-white text-slate-700">
        <option>4-8 weeks</option>
        <option>8-16 weeks</option>
        <option>3+ months</option>
      </select>

      <button onClick={estimate} className="w-full mt-2 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Estimate</button>

      {result ? <div className="mt-3 text-sm text-cyan-700 font-medium">{result}</div> : null}
    </div>
  );
}
