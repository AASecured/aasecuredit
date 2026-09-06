import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | AA Secured IT Solutions",
  description: "A Service-Disabled Veteran-Owned cybersecurity firm based in Fredericksburg, Virginia.",
};

export default function Page() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
