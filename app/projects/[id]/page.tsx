// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/data";
import VideoTile from "@/components/VideoTile";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VimeoEmbed from "@/components/VimeoEmbed";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  const photos = project.projectPhotos ?? [];
  const videos = project.videos ?? [];

  const wrap = "mx-auto w-full max-w-[1440px]"; // videos + photos only
  const gap = "gap-8 md:gap-14";
  const twoColumns = "mx-auto mt-8 grid w-full max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-8";

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-16 md:px-10 md:pb-24">
      <h1 className="my-6 text-2xl md:text-4xl">{project.title}</h1>

      {/* YouTube video: on top, centered */}
          {project.youtubeUrl ? (
              <div className="mx-auto mb-10 w-full max-w-[1000px] md:mb-16">
                <YouTubeEmbed url={project.youtubeUrl} title={project.title} />
              </div>
            ) : project.vimeoUrl ? (
              <div className="mx-auto mb-10 w-full max-w-[1000px] md:mb-16">
                <VimeoEmbed url={project.vimeoUrl} title={project.title} />
              </div>
            ) : null}

      {/* Videos */}
      {videos.length > 0 && (
         <div
    className={
          id === "1"
              ? twoColumns
              : `${wrap} mb-8 mt-8 grid grid-cols-2 md:grid-cols-3 ${gap}`
          }
        >
          {videos.map((video) => (
            <VideoTile key={video} src={video} title={project.title} />
          ))}
        </div>
      )}

      {/* Photos */}
      {photos.length > 0 && (
        <div className={photos.length === 2 ? twoColumns : `${wrap} grid grid-cols-2 md:grid-cols-3 ${gap}`}>
  {photos.map((photo, index) => (
    <div
      key={photo}
      className="relative h-[220px] w-full overflow-hidden md:h-[420px]"
    >
      <Image
        src={photo}
        alt={`${project.title} image ${index + 1}`}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover"
      />
    </div>
  ))}
</div>
      )}

    </main>
  );
}