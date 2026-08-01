import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AA Secured IT Solutions LLC | SDVOSB Cybersecurity Services",
  description: "Service-Disabled Veteran-Owned cybersecurity firm in Fredericksburg, VA. Federal and commercial security services: vulnerability management, threat detection, SOC operations, RMF/compliance.",
  keywords: ["SDVOSB cybersecurity", "veteran owned IT security", "federal cybersecurity contractor", "vulnerability management Virginia", "SOC services"],
  openGraph: {
    title: "AA Secured IT Solutions LLC",
    description: "SDVOSB Cybersecurity Services — Federal & Commercial",
    url: "https://aasecuredit.com",
    siteName: "AA Secured IT Solutions",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
