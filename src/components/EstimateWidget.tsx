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
    setResult(
      `With a ${budget} budget we typically deliver a first MVP within ${timeline}. Contact us for a tailored quote.`
    );
  };

  const selectClass =
    "w-full border border-[#d9dde3] bg-[#f7f6f3] px-3 py-2.5 text-sm text-[#14181f] transition-colors focus:border-[#12263a] focus:bg-white focus:outline-none";

  return (
    <div className="space-y-4 text-sm">
      <div>
        <label
          htmlFor="estimate-budget"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          Budget
        </label>
        <select
          id="estimate-budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={selectClass}
        >
          <option value="">Choose a range</option>
          <option value="$5k–$10k">$5k–$10k</option>
          <option value="$10k–$25k">$10k–$25k</option>
          <option value="$25k+">$25k+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="estimate-timeline"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          Timeline
        </label>
        <select
          id="estimate-timeline"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className={selectClass}
        >
          <option>4-8 weeks</option>
          <option>8-16 weeks</option>
          <option>3+ months</option>
        </select>
      </div>

      <button
        type="button"
        onClick={estimate}
        className="btn-primary mt-2 w-full !py-2.5"
      >
        Estimate
      </button>

      {result ? (
        <div className="mt-1 border border-[#d9dde3] bg-[#f7f6f3] p-3.5 text-[0.88rem] leading-relaxed text-[#5e6670]">
          {result}
        </div>
      ) : null}
    </div>
  );
}
