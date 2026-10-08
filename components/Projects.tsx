import { projects } from "@/lib/data";
import Image from "next/image";
import VideoTile from "@/components/VideoTile";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-4 pb-16 md:px-10 md:pb-24">
      {projects.map((p) => (
        <article key={p.title} className="mb-14 md:mb-20">
          <Link href={`/projects/${p.id}`} className="mb-3 block px-2 text-base hover:underline md:px-1 md:text-lg">
            {p.title}
          </Link>

          {p.homePhotos && (
            <div className="grid grid-cols-3 gap-2 md:gap-8">
              {p.homePhotos.map((photo, index) => (
                <Image
                  key={index}
                  src={photo}
                  alt={p.title}
                  width={800}
                  height={600}
                />
              ))}
            </div>
          )}

          {/* {p.videos && (
            <div className="grid grid-cols-3 gap-2 md:gap-8">
              {p.videos.map((video) => (
                <VideoTile key={video} src={video} title={p.title} />
              ))}
            </div>
          )} */}
        </article>
      ))}
    </section>
  );
}