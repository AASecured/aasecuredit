import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Shield watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 200 240" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 4L8 40v72c0 52.8 39.2 102.3 92 116 52.8-13.7 92-63.2 92-116V40L100 4z"/>
          <path d="M100 20L24 52v60c0 44 32.6 85.2 76 97.4C143.4 197.2 176 156 176 112V52L100 20z" fill="#0B2748"/>
          <text x="100" y="135" textAnchor="middle" fontSize="56" fontWeight="900" fontFamily="Inter,sans-serif" fill="white">AA</text>
        </svg>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-electric font-semibold tracking-wider uppercase">
              SDVOSB Certified · Fredericksburg, VA
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Cybersecurity<br/>
            <span className="text-electric">Built for</span><br/>
            Mission-Critical<br/>Work.
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Federal and commercial cybersecurity services from a Service-Disabled
            Veteran-Owned firm. We protect the networks that matter most.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="#contact" className="btn-primary text-base px-8 py-4">
              Get a Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#services" className="btn-outline text-base px-8 py-4">
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {[
              { icon: ShieldCheck, value: "SDVOSB", label: "SBA Certified" },
              { icon: Award,       value: "Secret", label: "Clearance Eligible" },
              { icon: Users,       value: "Gov + Commercial", label: "Client Focus" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-white/40 text-xs font-mono">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
