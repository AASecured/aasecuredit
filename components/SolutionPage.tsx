"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Download, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ---------- shared types ---------- */
export type CapabilityGroup = {
  title: string;
  icon?: LucideIcon;
  columns: string[][]; // one array per column
};

export type NarrativeBlock = {
  id: string;
  label: string;
  heading: string;
  body: string[];
  highlights?: string[];
};

export type DownloadItem = {
  title: string;
  desc: string;
  href: string;
};

export type SolutionPageProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  breadcrumb: { label: string; href: string }[];
  intro: NarrativeBlock;
  capabilitiesLabel: string;
  capabilitiesHeading: string;
  capabilities: CapabilityGroup[];
  secondary?: NarrativeBlock;
  downloads?: { heading: string; items: DownloadItem[] };
  ctaHeading: string;
  ctaBody: string;
};

/* ---------- sticky sub-nav ---------- */
function SubNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const handler = () => {
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <div className="sticky top-16 z-30 bg-navy-dark/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex gap-1 overflow-x-auto scrollbar-none">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                active === s.id
                  ? "text-white border-electric"
                  : "text-white/50 border-transparent hover:text-white/80"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------- narrative block ---------- */
function Narrative({ block, imageSide = "right" }: { block: NarrativeBlock; imageSide?: "left" | "right" }) {
  const graphic = (
    <div className="relative flex items-center justify-center">
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-dark overflow-hidden border border-white/10">
        {/* grid lines */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* glow */}
        <div className="absolute -inset-1/4 bg-electric/20 blur-3xl rounded-full" style={{ top: "20%", left: "25%" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/logo-mark.png" alt="" width={150} height={158} className="opacity-90 drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className={imageSide === "left" ? "lg:order-2" : ""}>
        <p className="section-label mb-3">{block.label}</p>
        <h3 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-5">{block.heading}</h3>
        {block.body.map((p, i) => (
          <p key={i} className="text-steel text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}
        {block.highlights && (
          <ul className="mt-6 space-y-2.5">
            {block.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-navy/80 text-sm">
                <Check className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={imageSide === "left" ? "lg:order-1" : ""}>{graphic}</div>
    </div>
  );
}

/* ---------- main shell ---------- */
export default function SolutionPage(props: SolutionPageProps) {
  const sections = [
    { id: props.intro.id, label: "Overview" },
    { id: "capabilities", label: props.capabilitiesLabel },
    ...(props.secondary ? [{ id: props.secondary.id, label: props.secondary.label }] : []),
    ...(props.downloads ? [{ id: "downloads", label: "Resources" }] : []),
    { id: "engage", label: "Get Started" },
  ];

  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="relative bg-navy-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(75,142,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(75,142,240,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-electric/15 to-transparent" />
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-electric/20 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            {props.breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={b.href} className="hover:text-white/70 transition-colors">
                  {b.label}
                </Link>
              </span>
            ))}
            <span>/</span>
            <span className="text-white/70">{props.title}</span>
          </nav>

          <p className="section-label mb-4">{props.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] max-w-3xl mb-6">
            {props.title}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">{props.tagline}</p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#capabilities" className="btn-outline text-base px-7 py-3.5">
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      <SubNav sections={sections} />

      {/* ---- INTRO ---- */}
      <section id={props.intro.id} className="py-20 md:py-24 bg-white scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Narrative block={props.intro} imageSide="right" />
        </div>
      </section>

      {/* ---- CAPABILITIES (dense multi-column) ---- */}
      <section id="capabilities" className="py-20 md:py-24 bg-slate scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="section-label mb-3">{props.capabilitiesLabel}</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">{props.capabilitiesHeading}</h2>
          </div>

          <div className="space-y-10">
            {props.capabilities.map(({ title, icon: Icon, columns }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate p-7 md:p-9">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate">
                  {Icon && (
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-navy">{title}</h3>
                </div>
                <div className={`grid gap-x-8 gap-y-3 ${columns.length === 1 ? "md:grid-cols-1" : columns.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {columns.map((col, ci) => (
                    <ul key={ci} className="space-y-3">
                      {col.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-navy/75 text-sm leading-snug">
                          <span className="text-electric mt-1 shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECONDARY NARRATIVE ---- */}
      {props.secondary && (
        <section id={props.secondary.id} className="py-20 md:py-24 bg-navy scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">{props.secondary.label}</p>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">{props.secondary.heading}</h3>
                {props.secondary.body.map((p, i) => (
                  <p key={i} className="text-white/60 text-base leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
              <div>
                {props.secondary.highlights && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {props.secondary.highlights.map((h) => (
                      <div key={h} className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <Check className="w-5 h-5 text-electric mb-3" />
                        <p className="text-white/80 text-sm leading-snug">{h}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---- DOWNLOADS ---- */}
      {props.downloads && (
        <section id="downloads" className="py-20 md:py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 max-w-2xl">
              <p className="section-label mb-3">Resources</p>
              <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">{props.downloads.heading}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {props.downloads.items.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  className="group flex items-start gap-4 bg-slate rounded-xl p-6 border border-slate hover:border-electric/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center shrink-0 group-hover:bg-electric transition-colors">
                    <Download className="w-5 h-5 text-electric group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-sm leading-snug mb-1">{d.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- CTA ---- */}
      <section id="engage" className="py-20 md:py-24 bg-slate scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-5">{props.ctaHeading}</h2>
          <p className="text-steel text-lg leading-relaxed mb-9 max-w-2xl mx-auto">{props.ctaBody}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/certifications" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg border-2 border-navy/15 text-navy hover:border-electric hover:text-electric transition-colors">
              View Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
