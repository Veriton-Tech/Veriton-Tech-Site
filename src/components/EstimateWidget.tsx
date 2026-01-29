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
      <label className="block font-semibold text-slate-800">Budget</label>
      <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-2 rounded border border-slate-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 bg-white text-slate-900 text-sm">
        <option value="" className="bg-white text-slate-900">Choose...</option>
        <option value="$5k-$10k" className="bg-white text-slate-900">$5k-$10k</option>
        <option value="$10k-$25k" className="bg-white text-slate-900">$10k-$25k</option>
        <option value="$25k+" className="bg-white text-slate-900">$25k+</option>
      </select>

      <label className="block font-semibold text-slate-800 mt-4">Timeline</label>
      <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full p-2 rounded border border-slate-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 bg-white text-slate-900 text-sm">
        <option className="bg-white text-slate-900">4-8 weeks</option>
        <option className="bg-white text-slate-900">8-16 weeks</option>
        <option className="bg-white text-slate-900">3+ months</option>
      </select>

      <button onClick={estimate} className="w-full mt-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded font-bold hover:from-cyan-700 hover:to-cyan-600 transition shadow-lg shadow-cyan-500/20">Estimate</button>

      {result ? <div className="mt-3 text-sm text-cyan-700 font-medium border border-cyan-200 bg-cyan-50 p-3 rounded">{result}</div> : null}
    </div>
  );
}
