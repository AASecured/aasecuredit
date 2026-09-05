import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Database, AppWindow, ClipboardCheck, LifeBuoy } from "lucide-react";

// Flip to false to hide "starting at" prices on the public site.
// Prices mirror the Service Catalog & Price Sheet (QuickBooks import).
const SHOW_PRICES = true;

const packages = [
  {
    icon: ShieldCheck,
    name: "Website Security Checkup",
    price: "from $499",
    turnaround: "3 business days",
    what: "We scan your site for known vulnerabilities, check SSL/TLS and security headers, review plugins and admin access, then hand you a plain-English report with a prioritized fix list.",
    fit: "Any business with a public website.",
  },
  {
    icon: Globe,
    name: "Secure Website Build",
    price: "from $2,500",
    turnaround: "2–4 weeks",
    what: "A fast, modern site built security-first: hardened hosting, working contact forms, basic SEO, analytics, and a handoff so your team can update content without calling us.",
    fit: "New businesses, or sites that are slow, dated, or on a platform nobody trusts anymore.",
  },
  {
    icon: AppWindow,
    name: "Custom Web Application",
    price: "from $7,500",
    turnaround: "scoped per project",
    what: "Client portals, internal tools, booking or intake systems. Designed with authentication, role-based access, and a security review before launch.",
    fit: "Businesses running critical work on spreadsheets and email.",
  },
  {
    icon: Database,
    name: "Database Hardening & Backup",
    price: "from $900",
    turnaround: "1 week",
    what: "Access review, encryption at rest and in transit, automated backups with a tested restore, and least-privilege accounts for your staff and vendors.",
    fit: "Anyone storing customer, patient, or financial records.",
  },
  {
    icon: ClipboardCheck,
    name: "Small Business Security Assessment",
    price: "from $1,500",
    turnaround: "2 weeks",
    what: "A right-sized review against the NIST Cybersecurity Framework: MFA, email security, endpoint protection, backups, and staff awareness. You get a scored roadmap, not a 90-page binder.",
    fit: "Businesses that need to satisfy a customer, insurer, or contract requirement.",
  },
  {
    icon: LifeBuoy,
    name: "Monthly Care Plan",
    price: "from $150/mo",
    turnaround: "ongoing",
    what: "Updates, uptime and security monitoring, monthly backups, and a block of support hours so small problems never become expensive ones.",
    fit: "Every client who wants us on call after launch.",
  },
];

export default function SmallBusiness() {
  return (
    <section id="small-business" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 items-start">
          {/* Left: the pitch */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-3">For Local Businesses</p>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-5">
              Serious security,<br />
              <span className="text-electric">sized for your business.</span>
            </h2>
            <p className="text-steel text-lg leading-relaxed mb-6">
              The same team that builds detection pipelines for enterprise environments
              also fixes the website your customers see and the database your staff
              rely on. Fixed-scope packages, written quotes, no surprise invoices.
            </p>
            <ul className="space-y-2 text-navy/80 text-sm mb-8">
              <li className="flex gap-2"><span className="text-electric font-bold">—</span> Written quote within one business day</li>
              <li className="flex gap-2"><span className="text-electric font-bold">—</span> Fixed price for fixed scope; hourly only when you ask for it</li>
              <li className="flex gap-2"><span className="text-electric font-bold">—</span> Serving Fredericksburg, Stafford, and the Northern Virginia corridor — remote anywhere</li>
            </ul>
            <Link href="#contact" className="btn-primary text-base px-7 py-3.5">
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: the packages, as a ruled list rather than cards */}
          <div className="divide-y divide-slate border-y border-slate">
            {packages.map(({ icon: Icon, name, price, turnaround, what, fit }) => (
              <div key={name} className="py-7 grid sm:grid-cols-[48px_1fr_auto] gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-slate flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-lg leading-snug">{name}</h3>
                  <p className="text-steel text-sm leading-relaxed mt-1.5">{what}</p>
                  <p className="text-navy/60 text-xs mt-2">Good fit: {fit}</p>
                </div>
                <div className="sm:text-right sm:pl-4 shrink-0">
                  {SHOW_PRICES && <div className="text-navy font-bold whitespace-nowrap">{price}</div>}
                  <div className="text-steel text-xs mt-0.5 whitespace-nowrap">{turnaround}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
