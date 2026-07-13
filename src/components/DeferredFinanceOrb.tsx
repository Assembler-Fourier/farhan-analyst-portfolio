"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const FinanceOrb = dynamic(
  () => import("@/components/FinanceOrb").then((module) => module.FinanceOrb),
  { ssr: false },
);

export function DeferredFinanceOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="finance-orb-deferred">
      {shouldRender ? <FinanceOrb /> : <div className="orb-placeholder" />}
    </div>
  );
}
