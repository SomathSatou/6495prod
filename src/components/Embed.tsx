/** Embed responsive 16:9 pour YouTube / Vimeo / Twitch / lecteurs audio (iframe générique). */
export default function Embed({ url, title }: { url: string; title?: string }) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/40">
      <iframe
        src={url}
        title={title ?? 'Media'}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
