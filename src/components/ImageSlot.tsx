interface ImageSlotProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string; // tailwind aspect-* class
}

/**
 * Reusable image placeholder. Swap the `src` values in the data files
 * (src/data/team.ts, src/data/projects.ts) with real image URLs or local
 * paths under /public/images — no other changes needed.
 */
export default function ImageSlot({ src, alt, className = "", aspect = "aspect-[4/5]" }: ImageSlotProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[var(--color-accent-soft)] ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        onError={(e) => {
          // graceful fallback while placeholder paths are still in use
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
