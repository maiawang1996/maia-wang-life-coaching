"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { content, Language } from "@/lib/content";

const email = "maiaworld@163.com";
const redNoteUrl = "https://www.xiaohongshu.com/user/profile/5f8f21aa0000000001002ad6";
const youtubeUrl = "https://www.youtube.com/channel/UCnZMoERieFqMkHyRs7iBykA";
const podcastUrl = "https://www.xiaoyuzhoufm.com/podcast/67114d960d2f24f289ecc048";

type SiteContent = (typeof content)[Language];

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "coaching", href: "#coaching" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
] as const;

export default function LifeCoachSite() {
  const [language, setLanguage] = useState<Language>("en");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const t = useMemo(() => content[language], [language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main lang={language === "zh" ? "zh-CN" : "en"} className={language === "zh" ? "font-zh" : undefined}>
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <LetterSection t={t} />
      <MeetMaia t={t} />
      <HowWeWork t={t} />
      <Services t={t} />
      <Testimonials t={t} />
      <FAQ t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Contact t={t} submitted={submitted} onSubmit={handleSubmit} />
      <Footer t={t} />
    </main>
  );
}

function Header({
  language,
  setLanguage,
  t
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  t: SiteContent;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sage/10 bg-ivory/88 backdrop-blur-xl">
      <div className="site-shell flex h-16 items-center justify-between gap-5 sm:h-[72px]">
        <a
          href="#home"
          className="font-serif text-xl tracking-[0.02em] text-ink transition hover:text-sage"
          onClick={() => setMenuOpen(false)}
        >
          Maia Wang
        </a>

        <nav className="hidden items-center gap-8 text-[13px] text-stone lg:flex">
          {navItems.map((item) => (
            <a key={item.key} className="quiet-link" href={item.href}>
              {t.meta[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <SocialLinks t={t} />
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher language={language} setLanguage={setLanguage} compact />
          <button
            type="button"
            className="rounded-full border border-sage/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink transition hover:border-sage/45 hover:bg-mist/35"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? t.meta.close : t.meta.menu}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-sage/10 bg-ivory/96 px-5 py-5 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-sm gap-4 text-sm text-ink">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="py-1" onClick={() => setMenuOpen(false)}>
                {t.meta[item.key]}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-3 border-t border-sage/12 pt-4 text-xs text-stone">
              <SocialLinks t={t} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  compact = false
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  compact?: boolean;
}) {
  return (
    <div className="flex rounded-full border border-sage/20 bg-parchment/70 p-1 text-xs shadow-[0_8px_24px_rgba(47,53,50,0.05)]">
      {(["en", "zh"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={`rounded-full px-3 py-1.5 transition ${
            language === item ? "bg-sage text-white" : "text-stone hover:text-ink"
          } ${compact ? "px-2.5" : ""}`}
          onClick={() => setLanguage(item)}
        >
          {item === "en" ? "English" : "中文"}
        </button>
      ))}
    </div>
  );
}

function SocialLinks({ t }: { t: SiteContent }) {
  return (
    <>
      <a className="quiet-link px-1" href={redNoteUrl} target="_blank" rel="noreferrer">
        {t.meta.redNote}
      </a>
      <a className="quiet-link px-1" href={youtubeUrl} target="_blank" rel="noreferrer">
        {t.meta.youtube}
      </a>
      <a className="quiet-link px-1" href={podcastUrl} aria-label="Podcast placeholder">
        {t.meta.podcast}
      </a>
    </>
  );
}

function Hero({ t }: { t: SiteContent }) {
  return (
    <section id="home" className="site-shell grid min-h-[92vh] items-center gap-12 pb-20 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,0.94fr)_minmax(300px,0.72fr)]">
      <div className="animate-fade-up max-w-[760px]">
        <p className="section-label">{t.hero.label}</p>
        <h1 className="mt-7 max-w-[760px] font-serif text-[clamp(3.25rem,6vw,6.75rem)] leading-[0.98] text-ink">
          {t.hero.title}
        </h1>
        <p className="mt-8 max-w-[690px] text-lg leading-8 text-stone sm:text-xl sm:leading-9">
          {t.hero.subtitle}
        </p>
        <a href="#contact" className="button-primary mt-10">
          {t.hero.cta}
        </a>
      </div>

      <div className="animate-fade-in relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-t-[220px] rounded-b-lg border border-white/60 bg-mist/35 shadow-soft">
        <Image
          src="/images/hero-wellness.png"
          alt={t.hero.imageAlt}
          fill
          priority
          className="object-cover opacity-[0.92] saturate-[0.78]"
          sizes="(min-width: 1024px) 390px, 86vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/28 via-transparent to-white/12" />
      </div>
    </section>
  );
}

function LetterSection({ t }: { t: SiteContent }) {
  return (
    <section className="border-y border-sage/10 bg-parchment/55 py-24 sm:py-32">
      <div className="narrow-shell">
        <p className="section-label">{t.letter.label}</p>
        <div className="mt-8 space-y-3.5 sm:space-y-4">
          {t.letter.lines.map((line, index) => (
            <p
              key={`${line}-${index}`}
              className={`animate-fade-up text-pretty leading-9 text-ink ${
                isEmphasisLine(line) ? "font-serif text-xl leading-8 sm:text-2xl sm:leading-9" : "text-base leading-7 sm:text-lg sm:leading-8"
              }`}
              style={{ animationDelay: `${Math.min(index * 35, 360)}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetMaia({ t }: { t: SiteContent }) {
  return (
    <section id="about" className="site-shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">{t.meet.label}</p>
        <h2 className="mt-7 max-w-md font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {t.meet.title}
          </h2>
        </div>
        <div>
          <div className="max-w-[760px] space-y-6 text-lg leading-9 text-stone">
            {t.meet.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 max-w-[760px]">
            <h3 className="font-serif text-3xl text-ink">{t.meet.journeyTitle}</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.meet.journey.map((item) => (
                <div key={item} className="journal-card px-5 py-4 text-sm leading-6 text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork({ t }: { t: SiteContent }) {
  return (
    <section id="coaching" className="bg-mist/35 py-24 sm:py-32">
      <div className="narrow-shell">
        <p className="section-label">{t.work.label}</p>
        <h2 className="mt-7 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.work.title}</h2>
        <div className="mt-14 divide-y divide-sage/15 border-y border-sage/15">
          {t.work.items.map((item) => (
            <article key={item.title} className="grid gap-3 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-10">
              <h3 className="font-serif text-2xl leading-snug text-ink">{item.title}</h3>
              <p className="text-lg leading-8 text-stone">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: SiteContent }) {
  return (
    <section className="site-shell py-24 sm:py-32">
      <div className="max-w-[760px]">
        <p className="section-label">{t.services.label}</p>
        <h2 className="mt-7 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.services.title}</h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {t.services.cards.map((service) => (
          <article key={service.title} className="journal-card flex min-h-[320px] flex-col p-6 transition hover:-translate-y-1 hover:border-sage/30 hover:bg-white/55 sm:p-7">
            <h3 className="font-serif text-3xl leading-tight text-ink">{service.title}</h3>
            <p className="mt-5 leading-7 text-stone">{service.description}</p>
            <p className="mt-6 border-l border-clay/45 pl-4 text-sm leading-6 text-ink">
              <span className="font-medium text-clay">{t.services.who}: </span>
              {service.bestFor}
            </p>
            <a href="#contact" className="mt-auto pt-8 text-sm font-medium text-sage transition hover:text-ink">
              {t.services.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ t }: { t: SiteContent }) {
  return (
    <section className="bg-parchment/60 py-24 sm:py-32">
      <div className="site-shell">
        <div className="max-w-[760px]">
          <p className="section-label">{t.testimonials.label}</p>
          <h2 className="mt-7 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {t.testimonials.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure key={item.source} className="journal-card p-6 sm:p-7">
              <blockquote className="text-lg leading-8 text-ink">{item.quote}</blockquote>
              <figcaption className="mt-7 text-sm text-stone">- {item.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({
  t,
  openFaq,
  setOpenFaq
}: {
  t: SiteContent;
  openFaq: number;
  setOpenFaq: (index: number) => void;
}) {
  return (
    <section id="faq" className="narrow-shell py-24 sm:py-32">
      <p className="section-label">{t.faq.label}</p>
      <h2 className="mt-7 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.faq.title}</h2>
      <div className="mt-12 divide-y divide-sage/15 border-y border-sage/15">
        {t.faq.items.map((item, index) => {
          const isOpen = openFaq === index;

          return (
            <div key={item.question} className="py-2">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-2xl leading-snug text-ink">{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-sage/20 text-lg text-sage">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              {isOpen ? <p className="max-w-[680px] pb-7 text-base leading-8 text-stone">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact({
  t,
  submitted,
  onSubmit
}: {
  t: SiteContent;
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contact" className="bg-mist/35 py-24 sm:py-32">
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-start">
        <div className="max-w-[640px]">
          <p className="section-label">{t.contact.label}</p>
          <h2 className="mt-7 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-7 text-lg leading-8 text-stone">{t.contact.intro}</p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-stone">{t.contact.emailLabel}</p>
          <a className="mt-2 inline-block text-lg text-ink underline decoration-sage/35 underline-offset-4 transition hover:text-sage" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="journal-card p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              {t.contact.name}
              <input required name="name" placeholder={t.contact.placeholderName} className="field-input" />
            </label>
            <label className="field-label">
              {t.contact.email}
              <input required type="email" name="email" placeholder={t.contact.placeholderEmail} className="field-input" />
            </label>
          </div>
          <label className="field-label mt-5 block">
            {t.contact.message}
            <textarea required name="message" rows={7} placeholder={t.contact.placeholderMessage} className="field-input resize-none" />
          </label>
          <button type="submit" className="button-primary mt-6">
            {t.contact.cta}
          </button>
          {submitted ? (
            <p className="mt-5 rounded-lg border border-sage/20 bg-mist/40 px-4 py-3 text-sm leading-6 text-ink">
              {t.contact.success}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Footer({ t }: { t: SiteContent }) {
  return (
    <footer className="border-t border-sage/10 bg-ivory py-12">
      <div className="site-shell grid gap-8 text-sm text-stone sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-serif text-2xl text-ink">Maia Wang</p>
          <p className="mt-1">{t.meta.coach}</p>
          <p className="mt-6 text-ink">{t.footer.note}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
          <a className="quiet-link" href={`mailto:${email}`}>
            Email
          </a>
          <a className="quiet-link" href={youtubeUrl} target="_blank" rel="noreferrer">
            {t.meta.youtube}
          </a>
          <a className="quiet-link" href={redNoteUrl} target="_blank" rel="noreferrer">
            {t.meta.redNote}
          </a>
          <a className="quiet-link" href={podcastUrl}>
            {t.meta.podcast}
          </a>
          <span>© 2026 Maia Wang</span>
        </div>
      </div>
    </footer>
  );
}

function isEmphasisLine(line: string) {
  return (
    line.includes("?") ||
    line.includes("？") ||
    line.startsWith("\"") ||
    line.startsWith("“") ||
    line === "we can explore it together." ||
    line === "我们可以一起探索它。"
  );
}
