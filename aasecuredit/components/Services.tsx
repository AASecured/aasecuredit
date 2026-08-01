import { ShieldAlert, Search, Network, Lock, FileCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: ShieldAlert,
    title: "Vulnerability Management",
    description: "Continuous scanning, prioritization, and remediation tracking using Tenable/Nessus aligned to NIST and DISA STIG frameworks.",
    tags: ["Tenable", "NIST 800-53", "DISA STIG"],
  },
  {
    icon: Search,
    title: "Threat Detection & Hunting",
    description: "Proactive threat hunting and SOC operations powered by Splunk ES/SOAR and MITRE ATT&CK-mapped detection engineering.",
    tags: ["Splunk ES", "MITRE ATT&CK", "SOAR"],
  },
  {
    icon: Network,
    title: "Network Security Monitoring",
    description: "24/7 network visibility, anomaly detection, and incident triage across on-prem and cloud environments.",
    tags: ["EDR", "NDR", "CrowdStrike"],
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "Rapid containment, forensic analysis, and structured recovery plans to minimize dwell time and business impact.",
    tags: ["IR Planning", "Forensics", "Recovery"],
  },
  {
    icon: FileCheck,
    title: "RMF & Compliance Support",
    description: "Risk Management Framework documentation, ATO support, and continuous monitoring for federal agencies and contractors.",
    tags: ["RMF", "ATO", "FISMA"],
  },
  {
    icon: BarChart3,
    title: "Security Automation",
    description: "Custom Python, PowerShell, and Terraform automation to eliminate manual toil and accelerate detection-to-response cycles.",
    tags: ["Python", "Terraform", "Power Automate"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-4">
            Security Services.<br/>
            <span className="text-electric">No Fluff.</span>
          </h2>
          <p className="text-steel text-lg max-w-xl">
            Every service we offer maps directly to a real threat or compliance requirement.
            We don't sell solutions looking for problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div key={title} className="card group">
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-electric/10 transition-colors">
                <Icon className="w-6 h-6 text-navy group-hover:text-electric transition-colors" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{title}</h3>
              <p className="text-steel text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="font-mono text-[11px] bg-slate px-2.5 py-1 rounded-full text-steel border border-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
