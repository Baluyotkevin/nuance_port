"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Reveal({
  words,
  image,
  heading = "The nuance is...",
}: {
  words: string[];
  image: string;
  heading?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLParagraphElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mouse = { y: 0, active: false };
    let raf = 0;

    const update = () => {
      raf = 0;
      const sc = scroller.current;
      if (!sc) return;
      const s = sc.getBoundingClientRect();

      const ref =
        fine.matches && mouse.active
          ? mouse.y
          : s.top + s.height / 2;

      items.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - ref) / (s.height / 2);
        const o = Math.min(1, Math.max(0.12, 1 - d * 1.1));
        el.style.opacity = String(o);
        el.style.transform = `translateX(${(1 - o) * -14}px)`;
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onMove = (e: MouseEvent) => {
      mouse.y = e.clientY;
      mouse.active = true;
      schedule();
    };
    const onLeave = () => {
      mouse.active = false;
      schedule();
    };

    const f = frame.current;
    const sc = scroller.current;
    f?.addEventListener("mousemove", onMove);
    f?.addEventListener("mouseleave", onLeave);
    sc?.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      f?.removeEventListener("mousemove", onMove);
      f?.removeEventListener("mouseleave", onLeave);
      sc?.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="px-0 pb-16 pt-4 md:pt-8">
      <div
        ref={frame}
        className="relative h-[60vh] w-full overflow-hidden md:h-[65vh]"
      >
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col px-6 md:mx-auto md:max-w-[1100px] md:flex-row md:px-10">
          {/* Div 1: heading */}
          <div className="pt-12 text-center md:w-1/2 md:pt-[calc(22vh+0.75rem)] md:text-left">
            <h1
              className={`text-2xl font-light leading-tight transition-[opacity,transform] duration-1000 ease-out md:text-6xl ${
                ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {heading}
            </h1>
          </div>

          {/* Div 2: scrolls inside the photo */}
          <div
            ref={scroller}
            className="min-h-0 flex-1 overflow-y-auto text-center text-2xl font-light [scrollbar-width:none] md:w-2/3 md:text-left md:text-6xl [&::-webkit-scrollbar]:hidden"
          >
            {/* Top spacer: pushes the first word to the bottom on mobile */}
            <div className="h-[18vh] md:h-[22vh]" />

            {words.map((w, i) => (
              <p
                key={w}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className="ml-3 py-2 leading-tight opacity-10 will-change-[opacity,transform] md:py-1"
              >
                {w}
              </p>
            ))}

            <div className="h-[18vh] md:h-[22vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}