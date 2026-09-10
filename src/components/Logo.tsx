interface LogoProps {
  className?: string;
  dark?: boolean;
}

/**
 * Placeholder mark: three ascending bars, echoing spoken syllable beats.
 * Swap this file's contents for the real Syllable Tech logo when ready —
 * every place it's used (Navbar, Footer) references this one component.
 */
export default function Logo({ className = "", dark = false }: LogoProps) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-end justify-center gap-[3px] rounded-lg ${
        dark ? "bg-white/10" : "bg-[var(--color-accent-soft)]"
      } p-2 ${className}`}
      aria-hidden="true"
    >
      <span className="w-[3px] rounded-full bg-[var(--color-accent)]" style={{ height: "40%" }} />
      <span className="w-[3px] rounded-full bg-[var(--color-accent)]" style={{ height: "100%" }} />
      <span className="w-[3px] rounded-full bg-[var(--color-accent)]" style={{ height: "65%" }} />
    </div>
  );
}
