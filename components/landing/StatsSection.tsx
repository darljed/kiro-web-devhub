"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Production-Ready Snippets", value: 122, suffix: "+" },
  { label: "Languages & Frameworks", value: 15, suffix: "+" },
  { label: "Categories", value: 12, suffix: "+" },
  { label: "Copy Time (seconds)", value: 1, suffix: "" },
];

export function StatsSection() {
  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
