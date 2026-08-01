import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-electric rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">AA SECURED IT</div>
                <div className="text-electric text-[10px] font-mono tracking-widest uppercase">Solutions LLC</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              Service-Disabled Veteran-Owned cybersecurity firm serving federal agencies
              and commercial clients from Fredericksburg, Virginia.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-3">Company</div>
              <div className="space-y-2">
                {["#about", "#services", "#certifications", "#contact"].map(href => (
                  <div key={href}>
                    <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors capitalize">
                      {href.replace("#", "")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-3">Credentials</div>
              <div className="space-y-2 text-white/50 text-sm">
                <div>SDVOSB — SBA VetCert</div>
                <div>NAICS 541512</div>
                <div>CySA+ · Security+</div>
                <div>Secret Clearance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} AA Secured IT Solutions LLC. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Fredericksburg, VA · aasecuredit.com
          </p>
        </div>
      </div>
    </footer>
  );
}
