"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services",       label: "Services" },
  { href: "/small-business", label: "Small Business" },
  { href: "/about",          label: "About" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact",        label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      solid ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="AA Secured IT Solutions — home">
          <Image src="/logo-nav.png" alt="AA Secured IT Solutions" width={190} height={40} priority className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors ${pathname === l.href ? "text-white" : "text-white/70 hover:text-white"}`}
              aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">Get a Quote</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
