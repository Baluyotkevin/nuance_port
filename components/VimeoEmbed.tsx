// components/VimeoEmbed.tsx
export function parseVimeo(url: string) {
  const match = url.match(
    /vimeo\.com\/(?:channels\/[\w-]+\/|groups\/[\w-]+\/videos\/|video\/|)(\d+)(?:\/([a-zA-Z0-9]+))?/
  );
  if (!match) return null;
  return { id: match[1], hash: match[2] };
}

export default function VimeoEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const parsed = parseVimeo(url);
  if (!parsed) return null;

  const params = new URLSearchParams({ dnt: "1" }); // no tracking
  if (parsed.hash) params.set("h", parsed.hash); // needed for unlisted videos

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={`https://player.vimeo.com/video/${parsed.id}?${params.toString()}`}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}