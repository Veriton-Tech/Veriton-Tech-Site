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
      <label className="block font-medium">Budget</label>
      <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-2 rounded border">
        <option value="">Choose...</option>
        <option value="$5k-$10k">$5k-$10k</option>
        <option value="$10k-$25k">$10k-$25k</option>
        <option value="$25k+">$25k+</option>
      </select>

      <label className="block font-medium">Timeline</label>
      <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full p-2 rounded border">
        <option>4-8 weeks</option>
        <option>8-16 weeks</option>
        <option>3+ months</option>
      </select>

      <button onClick={estimate} className="w-full mt-2 py-2 bg-indigo-600 text-white rounded">Estimate</button>

      {result ? <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{result}</div> : null}
    </div>
  );
}
