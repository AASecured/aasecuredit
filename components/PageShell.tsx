import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
}
