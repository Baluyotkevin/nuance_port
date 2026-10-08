
function getYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

export default function YouTubeEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const id = getYouTubeId(url);
  if (!id) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}