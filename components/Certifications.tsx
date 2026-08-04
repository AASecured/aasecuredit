import { ShieldCheck, Award, BookOpen, Cpu } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "SDVOSB",
    subtitle: "Service-Disabled Veteran-Owned Small Business",
    issuer: "U.S. Small Business Administration — VetCert",
    description: "Certified under 13 CFR Part 128. Eligible for federal set-aside and sole-source contracts reserved for service-disabled veteran-owned firms.",
    color: "bg-success/10 text-success border-success/20",
    iconColor: "text-success",
  },
  {
    icon: Award,
    title: "CySA+",
    subtitle: "CompTIA Cybersecurity Analyst",
    issuer: "CompTIA",
    description: "Validates ability to perform threat detection, data analysis, and interpretation of results to identify vulnerabilities and ensure organizational security.",
    color: "bg-electric/10 text-electric border-electric/20",
    iconColor: "text-electric",
  },
  {
    icon: BookOpen,
    title: "Security+",
    subtitle: "CompTIA Security+",
    issuer: "CompTIA — DoD 8570 Approved",
    description: "DoD 8570/8140-compliant certification covering core security concepts, threat management, and risk mitigation.",
    color: "bg-electric/10 text-electric border-electric/20",
    iconColor: "text-electric",
  },
  {
    icon: Cpu,
    title: "Secret Clearance",
    subtitle: "DoD Security Clearance",
    issuer: "U.S. Department of Defense",
    description: "Personnel cleared at the Secret level — enabling work on sensitive government programs and classified environments with appropriate facility clearance.",
    color: "bg-navy/5 text-navy border-navy/20",
    iconColor: "text-navy",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-3">Trust & Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-4">
            Verified.<br/>
            <span className="text-electric">Certified. Cleared.</span>
          </h2>
          <p className="text-steel text-lg max-w-xl">
            Our certifications aren&apos;t wall decorations — each one represents a real
            qualification that directly benefits your security program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certs.map(({ icon: Icon, title, subtitle, issuer, description, color, iconColor }) => (
            <div key={title} className="card flex gap-5">
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${color}`}>
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3 className="text-navy font-black text-lg">{title}</h3>
                  <span className="text-steel text-xs font-mono">— {subtitle}</span>
                </div>
                <div className="text-electric text-xs font-mono mb-3">{issuer}</div>
                <p className="text-steel text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SAM.gov info bar */}
        <div className="bg-navy rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-electric uppercase tracking-widest mb-1">Federal Registration</div>
            <div className="text-white font-bold">Registered on SAM.gov</div>
            <div className="text-white/50 text-sm mt-0.5">Active UEI · CAGE Code · NAICS 541512</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["541512", "541519", "541690"].map(code => (
              <div key={code} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-center">
                <div className="font-mono text-white font-bold text-sm">{code}</div>
                <div className="text-white/30 text-[10px] mt-0.5">NAICS</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
