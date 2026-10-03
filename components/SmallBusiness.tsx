"use client";

import SolutionPage from "@/components/SolutionPage";
import { Globe, ShieldCheck, Database, AppWindow, ClipboardCheck, LifeBuoy } from "lucide-react";

export default function SmallBusiness() {
  return (
    <SolutionPage
      eyebrow="For Local Businesses"
      title="Small Business Security & Web Services"
      tagline="The same team that builds detection pipelines for enterprise environments also secures the website your customers see and the data your staff rely on. Fixed-scope packages, written quotes, no surprise invoices."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Small Business", href: "/small-business" },
      ]}
      intro={{
        id: "overview",
        label: "Why Us",
        heading: "Serious security, sized for your business",
        body: [
          "Most small businesses can't justify a full-time security team — but they still hold customer data, run a public website, and depend on systems that attackers target every day.",
          "We bring enterprise-grade practices down to a right-sized package: clear scope, a fixed price, and a plain-English report you can actually act on. No 90-page binders, no jargon, no runaway invoices.",
        ],
        highlights: [
          "Written quote within one business day",
          "Fixed price for fixed scope; hourly only when you ask",
          "Serving Fredericksburg, Stafford & Northern Virginia",
          "Remote delivery available anywhere in the U.S.",
        ],
      }}
      capabilitiesLabel="Services"
      capabilitiesHeading="Packaged services for local businesses"
      capabilities={[
        {
          title: "Website Security Checkup",
          icon: ShieldCheck,
          columns: [
            [
              "External vulnerability scan",
              "SSL/TLS & security-header review",
              "CMS & plugin audit",
            ],
            [
              "Admin-access & account review",
              "Plain-English findings report",
              "Prioritized fix list",
            ],
            [
              "30-minute walkthrough call",
              "Good fit: any business with a public website",
              "Turnaround: ~3 business days",
            ],
          ],
        },
        {
          title: "Secure Website Build",
          icon: Globe,
          columns: [
            [
              "Fast, modern site (Next.js / hardened hosting)",
              "Working contact & quote forms",
              "Mobile-responsive design",
            ],
            [
              "Basic SEO & analytics setup",
              "Security-first configuration",
              "Content-handoff training",
            ],
            [
              "Good fit: new, slow, or dated sites",
              "Turnaround: 2–4 weeks",
              "Deposit starts the project",
            ],
          ],
        },
        {
          title: "Custom Web Application",
          icon: AppWindow,
          columns: [
            [
              "Client portals & internal tools",
              "Booking & intake systems",
              "Authentication & role-based access",
            ],
            [
              "Secure database design",
              "Pre-launch security review",
              "30 days post-launch support",
            ],
            [
              "Good fit: work running on spreadsheets & email",
              "Scoped per project after discovery",
              "Built security-first from day one",
            ],
          ],
        },
        {
          title: "Database Hardening & Backup",
          icon: Database,
          columns: [
            [
              "Access & privilege review",
              "Encryption at rest & in transit",
              "Least-privilege accounts",
            ],
            [
              "Automated backups",
              "Documented & tested restore",
              "Vendor & staff access controls",
            ],
            [
              "Good fit: customer, patient, or financial records",
              "Turnaround: ~1 week",
              "Recovery you can rely on",
            ],
          ],
        },
        {
          title: "Small Business Security Assessment",
          icon: ClipboardCheck,
          columns: [
            [
              "NIST CSF-aligned review",
              "Multi-factor authentication (MFA)",
              "Email security (SPF/DKIM/DMARC)",
            ],
            [
              "Endpoint protection review",
              "Backup & recovery posture",
              "Staff security awareness",
            ],
            [
              "Scored roadmap & executive summary",
              "Good fit: insurance/customer/contract requirements",
              "Turnaround: ~2 weeks",
            ],
          ],
        },
        {
          title: "Monthly Care Plan",
          icon: LifeBuoy,
          columns: [
            [
              "Updates & security patching",
              "Uptime & security monitoring",
              "Monthly backups",
            ],
            [
              "Block of support hours",
              "Priority response",
              "Quarterly check-in & report",
            ],
            [
              "Good fit: every client after launch",
              "Ongoing, month-to-month",
              "Cancel anytime with notice",
            ],
          ],
        },
      ]}
      secondary={{
        id: "approach",
        label: "How We Work",
        heading: "No surprises, start to finish",
        body: [
          "You get a written quote before any work begins, a fixed price for the agreed scope, and direct access to the person doing the work.",
          "Need something beyond the packages? We scope it, quote it, and only proceed with your written approval.",
        ],
        highlights: [
          "Same-day response during business hours",
          "Fixed-scope, fixed-price engagements",
          "Net 15 invoicing via bank transfer",
          "You own everything we build, on full payment",
        ],
      }}
      downloads={{
        heading: "Get started",
        items: [
          {
            title: "Request a Free Security Checkup",
            desc: "We'll run a quick external review of your website and show you what we find — no obligation.",
            href: "/contact",
          },
          {
            title: "Request a Quote",
            desc: "Tell us what you need and get a written, fixed-scope quote within one business day.",
            href: "/contact",
          },
          {
            title: "Ask a Question",
            desc: "Not sure which service fits? Reach out and we'll point you in the right direction.",
            href: "/contact",
          },
        ],
      }}
      ctaHeading="Let's secure your business"
      ctaBody="Whether it's your website, your data, or a compliance requirement from a customer or insurer, we'll give you a straight answer and a fixed-price quote within one business day."
    />
  );
}
