// components/VideoTile.tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoTile({
  src,
  poster,
  title,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  poster?: string;
  title: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  // Only play the preview while it's on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
  <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className="block w-full cursor-pointer"
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`${aspect} w-full bg-black object-contain`}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 text-2xl hover:opacity-60"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}