import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Quotes | AA Secured IT Solutions",
  description: "Request a quote or a free assessment. Written quotes within one business day.",
};

export default function Page() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
