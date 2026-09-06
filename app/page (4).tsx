import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SmallBusiness from "@/components/SmallBusiness";

export const metadata: Metadata = {
  title: "Small Business Services | AA Secured IT Solutions",
  description: "Secure websites, web applications, database hardening, security assessments and monthly care plans for local businesses in Fredericksburg and Northern Virginia.",
};

export default function Page() {
  return (
    <PageShell>
      <SmallBusiness />
    </PageShell>
  );
}
