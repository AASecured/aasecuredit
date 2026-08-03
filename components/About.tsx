import { Shield, Star, CheckCircle2 } from "lucide-react";

const values = [
  "Mission-first mindset — military discipline applied to cybersecurity",
  "Transparency in scope, timeline, and findings — no vendor lock-in",
  "Hands-on senior expertise on every engagement, not junior staff",
  "Built for government compliance requirements from day one",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              {/* Background shield */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10">
                <svg viewBox="0 0 200 240" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 4L8 40v72c0 52.8 39.2 102.3 92 116 52.8-13.7 92-63.2 92-116V40L100 4z"/>
                </svg>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-electric rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">AA Secured IT Solutions LLC</div>
                    <div className="text-white/40 font-mono text-xs">Fredericksburg, Virginia</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Entity Type",       value: "LLC — Virginia" },
                    { label: "Certification",     value: "SDVOSB (SBA VetCert)" },
                    { label: "Clearance",         value: "Secret Eligible" },
                    { label: "Primary NAICS",     value: "541512" },
                    { label: "Founded",           value: "2026" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                      <span className="text-white/40 font-mono text-xs uppercase tracking-wider">{label}</span>
                      <span className="text-white font-semibold text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-success text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                <div>
                  <div className="font-bold text-sm">Service-Disabled Veteran</div>
                  <div className="font-mono text-xs opacity-80">Owner Operated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
              Veteran Precision.<br/>
              <span className="text-electric">Civilian Impact.</span>
            </h2>
            <p className="text-steel leading-relaxed mb-5">
              AA Secured IT Solutions was founded by a service-disabled veteran with deep roots
              in SOC operations, detection engineering, and federal security compliance. After years
              protecting critical infrastructure in the military and as a civilian security professional,
              we built a firm that brings that same rigor to government agencies and commercial clients.
            </p>
            <p className="text-steel leading-relaxed mb-8">
              We're based in Fredericksburg, Virginia — at the heart of the federal contracting
              corridor — and we operate with the discipline, accountability, and mission focus
              that only comes from military service.
            </p>
            <div className="space-y-3">
              {values.map(v => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                  <span className="text-steel text-sm leading-relaxed">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
