import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const CONTACT_ITEMS = [
    { icon: Mail, label: t.contact.email, value: "hello@syllabletech.com", href: "mailto:hello@syllabletech.com" },
    { icon: Phone, label: t.contact.phone, value: "+237 6XX XXX XXX", href: "tel:+2376XXXXXXXX" },
    { icon: MessageCircle, label: t.contact.whatsapp, value: "+237 6XX XXX XXX", href: "#" },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: undefined },
  ];

  return (
    <section id="contact" className="bg-[var(--color-surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-lg">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.label}>
              <item.icon size={20} className="text-[var(--color-accent)]" strokeWidth={1.75} />
              <p className="mt-3 text-[13px] text-[var(--color-muted)]">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-0.5 block text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                  {item.value}
                </a>
              ) : (
                <p className="mt-0.5 text-[15px] font-medium text-[var(--color-ink)]">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-[var(--color-line)] pt-8">
          <a href="#" aria-label="Syllable Tech on GitHub" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            <FaGithub size={19} />
          </a>
          <a href="#" aria-label="Syllable Tech on LinkedIn" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            <FaLinkedin size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
