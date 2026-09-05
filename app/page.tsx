import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SmallBusiness from "@/components/SmallBusiness";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <SmallBusiness />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
