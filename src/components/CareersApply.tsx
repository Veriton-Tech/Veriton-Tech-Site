"use client";

import React, { useState } from "react";
import ApplyForm from "@/components/ApplyForm";

type CareersApplyProps = {
  role: string;
  variant?: "primary" | "band";
  label?: string;
};

export default function CareersApply({
  role,
  variant = "primary",
  label = "Apply for this role",
}: CareersApplyProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={variant === "band" ? "btn-primary" : "btn-primary mt-8 inline-flex"}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <ApplyForm role={role} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
