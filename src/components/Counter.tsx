// components/StatsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 200, suffix: "+", label: "Travels" },
  { value: 500, suffix: "+", label: "Clients" },
  { value: 30, label: "Employees" },
  { value: 20, label: "Countries" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-fit  !py-24 md:!py-28 bg-fixed  bg-center bg-cover"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg"
          alt="Scenic background"
          fill
          className="object-cover center"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="!mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              animate={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Subcomponent ---------------- */

function StatCard({
  stat,
  animate,
  index,
}: {
  stat: Stat;
  animate: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * stat.value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [animate, stat.value]);

  return (
    <div
      className="
        relative rounded-2xl border border-transparent/20
        bg-transparent/10 backdrop-blur-md
        shadow-xl !p-2
        transition-all duration-400
        will-change-transform
        
      "
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <h3
        className="!text-5xl md:!text-6xl font-extrabold text-white tracking-tight"
        aria-label={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
      >
        {count}
        {stat.suffix}
      </h3>

      <p className="!mt-8 !text-sm md:!text-base uppercase !tracking-widest text-white/80">
        {stat.label}
      </p>

      {/* Glow accent */}
      <span className="pointer-events-none absolute inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}
