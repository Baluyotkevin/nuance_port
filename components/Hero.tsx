"use client"
import { useRef } from "react";


export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
    };


  return (
<section
  id="top"
  className="mx-auto max-w-[1440px] px-4 md:px-10"
>
  <div className="relative h-[46vh] min-h-[300px] overflow-hidden bg-black md:h-[62vh]">
    <video
      ref={videoRef}
      src="/images/hero/herovideo.mp4"
      autoPlay
      loop
      muted
      playsInline
      onClick={handleClick}
      className="absolute inset-0 h-full w-full cursor-pointer object-cover grayscale"
    />
  </div>
</section>
      );
}

// "use client";
// import { useRef } from "react";

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleClick = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//     }
//   };

//   return (
//     <section id="top" className="mx-auto max-w-[1440px] px-4 md:px-10">
//       <div className="flex justify-center">
//         <video
//           ref={videoRef}
//           src="/images/hero/herovideo.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           onClick={handleClick}
//           className="block h-auto max-h-[70dvh] w-auto max-w-full cursor-pointer grayscale"
//         />
//       </div>
//     </section>
//   );
// }