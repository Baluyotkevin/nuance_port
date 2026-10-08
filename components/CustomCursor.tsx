"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
    };
    const onLeave = () => (el.style.opacity = "0");

    const tick = () => {
      // smooth follow: move 25% of the distance each frame
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src="/images/logo/logo1.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 opacity-0 transition-opacity duration-200 [@media(hover:hover)]:block"
    />
  );
}