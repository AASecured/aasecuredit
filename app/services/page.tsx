import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | AA Secured IT Solutions",
  description: "Vulnerability management, threat detection, incident response, RMF/ATO support and security automation for federal and commercial clients.",
};

export default function Page() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
