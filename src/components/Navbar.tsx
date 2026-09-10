import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-[17px] font-semibold tracking-tight">Syllable Tech</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14.5px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-accent)]"
          >
            {t.nav.talk}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} compact />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden bg-[var(--color-bg)] transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-b border-[var(--color-line)]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-accent-soft)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[var(--color-ink)] px-4 py-3 text-center text-[15px] font-medium text-white"
              >
                {t.nav.talk}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
  compact = false,
}: {
  lang: "en" | "fr";
  setLang: (l: "en" | "fr") => void;
  compact?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-[var(--color-line)] p-0.5 text-[12.5px] font-medium ${compact ? "" : ""}`}
    >
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code
              ? "bg-[var(--color-ink)] text-white"
              : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
