"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to Resend or Formspree later
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
              Let's Secure<br/>
              <span className="text-electric">Your Mission.</span>
            </h2>
            <p className="text-steel leading-relaxed mb-10">
              Whether you're a federal agency looking for an SDVOSB cybersecurity partner,
              a prime contractor seeking a qualified sub, or a commercial organization
              that needs a security assessment — reach out and let's talk.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail,    label: "Email",    value: "contact@aasecuredit.com", href: "mailto:contact@aasecuredit.com" },
                { icon: Phone,   label: "Phone",    value: "(571) 206-9260",           href: "tel:+15712069260" },
                { icon: MapPin,  label: "Location", value: "Fredericksburg, Virginia", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-steel uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} className="text-navy font-semibold text-sm hover:text-electric transition-colors">{value}</a>
                    ) : (
                      <div className="text-navy font-semibold text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-slate rounded-3xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">Message Received</h3>
                <p className="text-steel text-sm">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-navy font-bold text-lg mb-1">Send Us a Message</h3>
                <p className="text-steel text-sm mb-5">We respond within one business day.</p>

                {[
                  { id: "name",    label: "Full Name",         type: "text",  required: true  },
                  { id: "email",   label: "Business Email",    type: "email", required: true  },
                  { id: "org",     label: "Organization",      type: "text",  required: false },
                ].map(({ id, label, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-mono text-xs text-steel uppercase tracking-wider mb-1.5">
                      {label}{required && <span className="text-electric ml-0.5">*</span>}
                    </label>
                    <input
                      id={id} type={type} required={required}
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm({ ...form, [id]: e.target.value })}
                      className="w-full bg-white border border-white rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-steel uppercase tracking-wider mb-1.5">
                    How Can We Help?<span className="text-electric ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message" required rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-white rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
