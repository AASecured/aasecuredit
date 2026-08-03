"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { href: "#home",    label: "Home" },
  { href: "#services",label: "Services" },
  { href: "#about",   label: "About" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-electric rounded-lg flex items-center justify-center group-hover:bg-electric-light transition-colors">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-sm tracking-tight">AA SECURED IT</span>
            <span className="text-electric text-[10px] font-mono tracking-widest uppercase">Solutions LLC</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary text-sm py-2 px-5">Get a Quote</Link>
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
            <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
