"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { content, Language } from "@/lib/content";

const email = "maiaworld@163.com";
const redNoteUrl = "https://www.xiaohongshu.com/user/profile/5f8f21aa0000000001002ad6";
const youtubeUrl = "https://www.youtube.com/channel/UCnZMoERieFqMkHyRs7iBykA";

const navIds = {
  about: "about",
  services: "services",
  approach: "approach",
  contact: "contact"
} as const;

export default function LifeCoachSite() {
  const [language, setLanguage] = useState<Language>("en");
  const [submitted, setSubmitted] = useState(false);
  const t = useMemo(() => content[language], [language]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main lang={language === "zh" ? "zh-CN" : "en"} className={language === "zh" ? "font-zh" : undefined}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-ivory/82 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-5">
          <a href="/" className="group flex items-center gap-3" aria-label="Maia Wang home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/20 text-sm font-semibold text-ink ring-1 ring-sage/25 transition group-hover:bg-sage/28">
              MW
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl text-ink">Maia Wang</span>
              <span className="block text-xs uppercase tracking-[0.24em] text-stone">Life Coach</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-stone lg:flex">
            <a className="transition hover:text-ink" href={`#${navIds.about}`}>
              {t.nav.about}
            </a>
            <a className="transition hover:text-ink" href={`#${navIds.services}`}>
              {t.nav.services}
            </a>
            <a className="transition hover:text-ink" href={`#${navIds.approach}`}>
              {t.nav.approach}
            </a>
            <a className="transition hover:text-ink" href={`#${navIds.contact}`}>
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 text-xs text-stone sm:flex">
              <a
                className="rounded-full px-3 py-2 transition hover:bg-white/65 hover:text-ink"
                href={redNoteUrl}
                aria-label="Red Note link"
                target="_blank"
                rel="noreferrer"
              >
                {t.nav.redNote}
              </a>
              <a
                className="rounded-full px-3 py-2 transition hover:bg-white/65 hover:text-ink"
                href={youtubeUrl}
                aria-label="YouTube link"
                target="_blank"
                rel="noreferrer"
              >
                {t.nav.youtube}
              </a>
            </div>
            <div className="flex rounded-full border border-sage/25 bg-white/55 p-1 text-xs shadow-sm">
              <button
                className={`rounded-full px-3 py-2 transition ${language === "en" ? "bg-ink text-white" : "text-stone hover:text-ink"}`}
                onClick={() => setLanguage("en")}
                type="button"
              >
                English
              </button>
              <button
                className={`rounded-full px-3 py-2 transition ${language === "zh" ? "bg-ink text-white" : "text-stone hover:text-ink"}`}
                onClick={() => setLanguage("zh")}
                type="button"
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[92vh] overflow-hidden pt-20">
        <Image
          src="/images/hero-wellness.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ivory via-ivory/88 to-ivory/22" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-ivory to-transparent" />

        <div className="section-shell grid min-h-[calc(92vh-5rem)] items-center pb-20 pt-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-clay">{t.hero.eyebrow}</p>
            <h1 className="font-serif text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sage"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-full border border-sage/35 bg-white/62 px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-white"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-clay">{t.about.label}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {t.about.title}
            </h2>
          </div>
          <div className="soft-focus rounded-lg border border-white/65 p-6 shadow-soft sm:p-8">
            <div className="space-y-5 text-base leading-8 text-stone">
              {t.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {t.about.highlights.length > 0 ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.about.highlights.map((item) => (
                  <div key={item} className="rounded-lg border border-sage/20 bg-white/48 px-4 py-3 text-sm text-ink">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/35 py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-clay">{t.services.label}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.services.cards.map((service) => (
              <article
                key={service.title}
                className="flex min-h-[390px] flex-col rounded-lg border border-white/70 bg-ivory/72 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="font-serif text-3xl leading-tight text-ink">{service.title}</h3>
                <p className="mt-5 leading-7 text-stone">{service.description}</p>
                <p className="mt-5 text-sm leading-6 text-ink">{service.bestFor}</p>
                <p className="mt-4 rounded-lg bg-mist/50 px-4 py-3 text-sm leading-6 text-ink">
                  {service.format}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-sage/35 px-5 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
                >
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-clay">{t.approach.label}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {t.approach.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone">{t.approach.intro}</p>
          </div>
          <div className="grid gap-4">
            {t.approach.items.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-4 rounded-lg border border-sage/18 bg-white/48 p-5 transition hover:bg-white/70 sm:grid-cols-[72px_1fr]"
              >
                <span className="font-serif text-4xl text-sage">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-stone">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mist/45 py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-clay">{t.contact.label}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone">{t.contact.intro}</p>
            <p className="mt-7 text-sm text-stone">
              {t.contact.direct}{" "}
              <a className="font-medium text-ink underline decoration-sage/45 underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-white/70 bg-ivory/80 p-5 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink">
                {t.contact.name}
                <input
                  required
                  name="name"
                  placeholder={t.contact.placeholderName}
                  className="mt-2 w-full rounded-lg border border-sage/22 bg-white/72 px-4 py-3 text-ink outline-none transition placeholder:text-stone/60 focus:border-sage focus:ring-4 focus:ring-sage/15"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                {t.contact.email}
                <input
                  required
                  type="email"
                  name="email"
                  placeholder={t.contact.placeholderEmail}
                  className="mt-2 w-full rounded-lg border border-sage/22 bg-white/72 px-4 py-3 text-ink outline-none transition placeholder:text-stone/60 focus:border-sage focus:ring-4 focus:ring-sage/15"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-ink">
              {t.contact.topic}
              <input
                name="topic"
                placeholder={t.contact.placeholderTopic}
                className="mt-2 w-full rounded-lg border border-sage/22 bg-white/72 px-4 py-3 text-ink outline-none transition placeholder:text-stone/60 focus:border-sage focus:ring-4 focus:ring-sage/15"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-ink">
              {t.contact.message}
              <textarea
                required
                name="message"
                rows={6}
                placeholder={t.contact.placeholderMessage}
                className="mt-2 w-full resize-none rounded-lg border border-sage/22 bg-white/72 px-4 py-3 text-ink outline-none transition placeholder:text-stone/60 focus:border-sage focus:ring-4 focus:ring-sage/15"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sage sm:w-auto"
            >
              {t.contact.submit}
            </button>
            {submitted ? (
              <p className="mt-5 rounded-lg border border-sage/25 bg-mist/42 px-4 py-3 text-sm leading-6 text-ink">
                {t.contact.success}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/60 bg-ivory py-8">
        <div className="section-shell flex flex-col gap-4 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Maia Wang. {t.footer.copyright}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-ink" href={`mailto:${email}`}>
              {t.footer.email}
            </a>
            <a className="transition hover:text-ink" href={redNoteUrl} target="_blank" rel="noreferrer">
              {t.nav.redNote}
            </a>
            <a className="transition hover:text-ink" href={youtubeUrl} target="_blank" rel="noreferrer">
              {t.nav.youtube}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
