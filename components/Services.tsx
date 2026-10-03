"use client";

import SolutionPage from "@/components/SolutionPage";
import { ShieldAlert, Search, Network, Lock, FileCheck, Cpu } from "lucide-react";

export default function Services() {
  return (
    <SolutionPage
      eyebrow="Cybersecurity Solutions"
      title="Security Operations & Engineering"
      tagline="Detection, response, and compliance built by practitioners who run these systems in production every day — for federal agencies, prime contractors, and mission-critical environments."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
      intro={{
        id: "overview",
        label: "Overview",
        heading: "Enterprise security, engineered — not resold",
        body: [
          "AA Secured IT Solutions is a Service-Disabled Veteran-Owned cybersecurity firm delivering security operations, detection engineering, vulnerability management, and compliance support to organizations that cannot afford to get security wrong.",
          "Our work is grounded in real SOC experience across transit and homeland security environments: tuning detection content, commanding incident response, and owning the vulnerability lifecycle at enterprise scale. We map every engagement to a concrete threat or compliance requirement — no shelfware, no solutions looking for problems.",
        ],
        highlights: [
          "Owner holds an active DoD Secret clearance",
          "CompTIA CySA+, Security+, and SecurityAI+ certified",
          "Aligned to NIST 800-53, NIST CSF, RMF, and DISA STIGs",
          "SDVOSB — eligible for set-aside and sole-source awards",
        ],
      }}
      capabilitiesLabel="Capabilities"
      capabilitiesHeading="Full-spectrum security services"
      capabilities={[
        {
          title: "Threat Detection & Hunting",
          icon: Search,
          columns: [
            [
              "SIEM detection engineering (Splunk ES)",
              "Microsoft Sentinel content development",
              "MITRE ATT&CK-mapped detection coverage",
              "Detection tuning & false-positive reduction",
            ],
            [
              "Proactive threat hunting",
              "Cyber Kill Chain analysis",
              "Threat intelligence enrichment (Recorded Future)",
              "SOC playbook development & maturation",
            ],
            [
              "24/7 monitoring support",
              "Behavioral & anomaly detection",
              "Adversary TTP identification",
              "Detection-as-code pipelines",
            ],
          ],
        },
        {
          title: "Incident Response & Forensics",
          icon: Lock,
          columns: [
            [
              "Incident response planning",
              "Incident command for high-severity events",
              "Containment & eradication",
              "Endpoint response (Defender, CrowdStrike)",
            ],
            [
              "Root cause analysis",
              "Digital forensics support",
              "ServiceNow ITSM response workflows",
              "Mean-time-to-respond (MTTR) reduction",
            ],
            [
              "Post-incident reporting",
              "Tabletop exercises",
              "Recovery & remediation validation",
              "Executive & stakeholder briefings",
            ],
          ],
        },
        {
          title: "Vulnerability Management",
          icon: ShieldAlert,
          columns: [
            [
              "Tenable.sc / Nessus deployment & tuning",
              "Risk-based vulnerability prioritization",
              "Authenticated & unauthenticated scanning",
              "Remediation ownership & tracking",
            ],
            [
              "NIST 800-53 & DISA STIG mapping",
              "Patch management program support",
              "Configuration & compliance scanning",
              "Remediation validation via SIEM correlation",
            ],
            [
              "Attack-surface reduction",
              "Continuous monitoring (ConMon)",
              "Vulnerability metrics & dashboards",
              "Third-party & supply-chain risk review",
            ],
          ],
        },
        {
          title: "Network & Cloud Security",
          icon: Network,
          columns: [
            [
              "Network security monitoring (NSM)",
              "Endpoint detection & response (EDR)",
              "Network detection & response (NDR)",
              "On-prem & hybrid visibility",
            ],
            [
              "Microsoft Azure & Azure AD security",
              "AWS security posture review",
              "Identity & access management (IAM)",
              "Zero-trust architecture support",
            ],
            [
              "Active Directory hardening",
              "VPN & remote-access security",
              "Cloud logging & telemetry pipelines",
              "Segmentation & least-privilege design",
            ],
          ],
        },
        {
          title: "Risk Management & Compliance",
          icon: FileCheck,
          columns: [
            [
              "Risk Management Framework (RMF)",
              "Authority to Operate (ATO) support",
              "System Security Plans (SSP)",
              "POA&M development & tracking",
            ],
            [
              "Security control assessments",
              "NIST CSF gap assessments",
              "FISMA & FedRAMP support",
              "PCI-DSS & ISO 27001 readiness",
            ],
            [
              "Continuous monitoring programs",
              "Audit-ready documentation",
              "Control-gap remediation planning",
              "eMASS / Xacta support",
            ],
          ],
        },
        {
          title: "Security Automation & Engineering",
          icon: Cpu,
          columns: [
            [
              "SOAR playbook development",
              "Python security automation",
              "PowerShell & Bash tooling",
              "Detection-to-response automation",
            ],
            [
              "Infrastructure-as-code (Terraform)",
              "Compliance-evidence automation",
              "API & data-pipeline integration",
              "Splunk macro & app development",
            ],
            [
              "Alert-triage automation",
              "Custom security tooling",
              "CI/CD security guardrails",
              "Toil reduction & workflow optimization",
            ],
          ],
        },
      ]}
      secondary={{
        id: "engagement",
        label: "How We Engage",
        heading: "Flexible engagement, direct access to engineers",
        body: [
          "Whether you need a one-time assessment, project-based delivery, or ongoing SOC support, you work directly with the engineers doing the work — not a layer of account managers.",
          "As an SDVOSB, we help prime contractors meet small business subcontracting goals while delivering the technical depth the mission requires.",
        ],
        highlights: [
          "Federal subcontracting & teaming partnerships",
          "SDVOSB set-aside & sole-source engagements",
          "Fixed-scope projects with clear deliverables",
          "Time & materials or firm-fixed-price",
        ],
      }}
      downloads={{
        heading: "Capabilities & documentation",
        items: [
          {
            title: "Capability Statement",
            desc: "One-page overview of core competencies, NAICS codes, and company data for contracting officers.",
            href: "/contact",
          },
          {
            title: "Request a Capability Briefing",
            desc: "Schedule a walkthrough of our detection, response, and compliance capabilities.",
            href: "/contact",
          },
          {
            title: "Teaming & Subcontracting",
            desc: "Discuss SDVOSB teaming arrangements and small business subcontracting support.",
            href: "/contact",
          },
        ],
      }}
      ctaHeading="Ready to strengthen your security posture?"
      ctaBody="Let's talk about your detection gaps, compliance deadlines, or subcontracting needs. You'll get a straight technical assessment and a written quote within one business day."
    />
  );
}
