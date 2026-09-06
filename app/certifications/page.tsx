import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Certifications & Registrations | AA Secured IT Solutions",
  description: "SDVOSB (VetCert in progress), CySA+, Security+, Secret clearance, SAM.gov registration and NAICS codes.",
};

export default function Page() {
  return (
    <PageShell>
      <Certifications />
    </PageShell>
  );
}
