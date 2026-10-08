// // components/VideoTile.tsx
// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function VideoTile({
//   src,
//   poster,
//   title,
//   aspect = "aspect-[4/3]",
// }: {
//   src: string;
//   poster?: string;
//   title: string;
//   aspect?: string;
// }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [open, setOpen] = useState(false);

//   // Only play the preview while it's on screen
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) el.play().catch(() => {});
//         else el.pause();
//       },
//       { threshold: 0.4 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   // Esc to close + lock page scroll while open
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//   <>
//       <button
//         onClick={() => setOpen(true)}
//         aria-label={`Play ${title}`}
//         className="block w-full cursor-pointer"
//       >
//         <video
//           ref={ref}
//           src={src}
//           poster={poster}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className={`${aspect} w-full bg-black object-contain`}
//         />
//       </button>

//       {open && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
//           onClick={() => setOpen(false)}
//           role="dialog"
//           aria-modal="true"
//         >
//           <video
//             src={src}
//             controls
//             autoPlay
//             playsInline
//             className="max-h-full max-w-full"
//             onClick={(e) => e.stopPropagation()}
//           />
//           <button
//             onClick={() => setOpen(false)}
//             aria-label="Close"
//             className="absolute right-4 top-4 text-2xl hover:opacity-60"
//           >
//             ✕
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// components/VideoTile.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { parseVimeo } from "./VimeoEmbed";

export default function VideoTile({
  src,
  vimeoUrl,
  poster,
  title,
  aspect = "aspect-[4/3]",
}: {
  src?: string; // MP4 file
  vimeoUrl?: string; // or a Vimeo link
  poster?: string;
  title: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [thumb, setThumb] = useState<string | undefined>(poster);

  const vimeo = vimeoUrl ? parseVimeo(vimeoUrl) : null;

  // MP4 only: play the preview while it's on screen
  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  // Vimeo only: fetch the thumbnail image
  useEffect(() => {
    if (!vimeoUrl || poster) return;
    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=960`)
      .then((r) => r.json())
      .then((d) => setThumb(d.thumbnail_url))
      .catch(() => {});
  }, [vimeoUrl, poster]);

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

  if (!src && !vimeo) return null;

  const params = new URLSearchParams({ dnt: "1", autoplay: "1" });
  if (vimeo?.hash) params.set("h", vimeo.hash);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className="relative block w-full cursor-pointer"
      >
        {src ? (
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
        ) : (
          <>
            <div className={`${aspect} w-full bg-black`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {thumb && <img src={thumb} alt="" className="h-full w-full object-cover" />}
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-4xl">▶</span>
          </>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {src ? (
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className="aspect-video w-full max-w-[1100px]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${vimeo!.id}?${params.toString()}`}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
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