import Logo from "./Logo";

const NAV = ["Home", "About", "Team", "Services", "Projects", "Contact"];
const SOCIAL = ["GitHub", "LinkedIn", "WhatsApp"];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-accent-deep)] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo dark />
            <span className="font-display text-[16px] font-semibold">Syllable Tech</span>
          </div>
          <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-white/60">
            Building modern digital solutions.
          </p>
        </div>

        <div>
          <h4 className="text-[13px] text-white/50">Navigation</h4>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[13.5px] text-white/80 hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] text-white/50">Social</h4>
          <ul className="mt-3 space-y-2">
            {SOCIAL.map((item) => (
              <li key={item}>
                <a href="#" className="text-[13.5px] text-white/80 hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-6 lg:px-8">
        <p className="text-[12.5px] text-white/40">© 2026 Syllable Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
