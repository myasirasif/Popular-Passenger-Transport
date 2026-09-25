"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 7, decimals: 0, suffix: "+", label: "Years in Dubai" },
  { value: 6, decimals: 0, suffix: "", label: "Service types" },
  { value: 4.6, decimals: 1, suffix: "", label: "Google rating" },
  { value: 7, decimals: 0, suffix: "", label: "Days a week" },
];

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setN(value);
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} aria-hidden>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Company at a glance" className="container-x pt-16 sm:pt-20">
      <dl className="grid grid-cols-2 gap-y-10 border-y border-slate/10 py-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-2 sm:px-6 ${i % 2 ? "border-l border-slate/10" : ""} lg:border-l lg:first:border-l-0`}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="sr-only">
                {s.value}
                {s.suffix}
              </span>
              <span className="block font-heading text-4xl font-extrabold text-brand-blue sm:text-5xl">
                <Counter {...s} />
              </span>
              <span className="mt-2 block text-sm font-medium text-slate" aria-hidden>
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
