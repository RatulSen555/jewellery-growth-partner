import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@jewelconsult.com", href: "mailto:hello@jewelconsult.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Location", value: "Mumbai, India", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 10am–7pm IST", href: undefined },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's <span className="text-gradient-gold">Talk Growth</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your jewellery business? Book a free strategy call or send us a message.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-primary mb-6">Send a Message</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Business Details</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your jewellery business and what challenges you're facing..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-gold text-accent-foreground font-bold py-4 rounded-xl text-base shadow-gold hover:opacity-90 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-2">Book a Free Strategy Call</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Schedule a complimentary 15-minute discovery call to discuss your challenges and explore how we can help your jewellery business grow.
                  </p>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((c, i) => (
                    <div key={i} className="flex items-start gap-4 bg-cream rounded-xl p-4">
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0">
                        <c.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-foreground font-semibold hover:text-gold-dark transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Urgency */}
                <div className="bg-gradient-navy rounded-2xl p-6 text-center">
                  <p className="text-primary-foreground font-display text-lg font-bold mb-2">
                    Limited Availability
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Only a few consulting slots open each month. Don't wait — secure yours today.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
