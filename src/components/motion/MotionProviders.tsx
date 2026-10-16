"use client";

import LenisProvider from "./LenisProvider";
import CustomCursor from "./CustomCursor";
import PageIntro from "./PageIntro";

export default function MotionProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <PageIntro />
      <CustomCursor />
      {children}
    </LenisProvider>
  );
}
