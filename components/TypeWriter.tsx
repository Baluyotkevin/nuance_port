"use client";
import { useEffect, useState } from "react";

export default function TypeWriter({
  text,
  speed = 20, // ms per letter
  delay = 300, // ms before it starts
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);

    // Skip the animation for people who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <p className={`whitespace-pre-line ${className}`}>
      {/* Full text for screen readers */}
      <span className="sr-only">{text}</span>
      {/* Typed letters are visible, the rest is invisible but still takes up space */}
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" className="opacity-0">
        {text.slice(count)}
      </span>
    </p>
  );
}