import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Clock, BarChart3, Store, Users, Megaphone, Diamond, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "1 Hour Clarity Session",
    desc: "Laser-focused session to identify bottlenecks and quick wins for your jewellery business.",
    who: "For owners stuck and needing direction",
    outcome: "Walk away with 3–5 actionable steps you can implement immediately.",
  },
  {
    icon: BarChart3,
    title: "Business Growth Audit",
    desc: "Deep dive into sales, operations, and marketing to create a comprehensive growth roadmap.",
    who: "For businesses doing ₹1–10 Cr wanting to scale",
    outcome: "A detailed 90-day growth plan with clear milestones and KPIs.",
  },
  {
    icon: Store,
    title: "Multi-Store Expansion",
    desc: "Blueprint to go from one store to a profitable chain with SOPs and trained managers.",
    who: "For single-store owners ready to expand",
    outcome: "Complete expansion playbook including location strategy, staffing, and SOPs.",
  },
  {
    icon: Users,
    title: "Team Training & SOPs",
    desc: "Build a high-performing team that sells, serves, and stays — reducing owner dependency.",
    who: "For businesses with staff performance issues",
    outcome: "Trained team with documented processes that run without you.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    desc: "Online presence, social media, and lead generation tailored specifically for jewellery.",
    who: "For businesses with weak online presence",
    outcome: "A digital marketing system generating consistent leads and brand visibility.",
  },
  {
    icon: Diamond,
    title: "Brand Building & Positioning",
    desc: "Transform your shop into a brand customers love, remember, and recommend.",
    who: "For owners wanting to build a premium brand",
    outcome: "A distinctive brand identity that commands trust, loyalty, and premium pricing.",
  },
];

const Services = () => (
  <PageWrapper>
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Consulting Services <span className="text-gradient-gold">That Deliver Results</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service is designed to solve a specific growth challenge in your jewellery business.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="group bg-background border border-border rounded-2xl p-7 h-full flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-colors">
                  <s.icon size={24} className="text-gold group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{s.desc}</p>
                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-gold-dark bg-cream rounded-full px-3 py-1.5 inline-block">
                    {s.who}
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    <span className="text-gold font-bold">→</span> {s.outcome}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedSection className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Your Path to <span className="text-gradient-gold">Growth</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Book a Call", desc: "Schedule a free 15-minute discovery call to discuss your challenges." },
            { step: "02", title: "Get a Strategy", desc: "Receive a customized growth plan tailored to your jewellery business." },
            { step: "03", title: "Execute & Scale", desc: "Implement the strategy with ongoing guidance and watch your business grow." },
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="space-y-4">
                <div className="font-display text-5xl font-bold text-gradient-gold">{s.step}</div>
                <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3} className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-8 py-4 rounded-xl text-base shadow-gold hover:opacity-90 transition-all"
          >
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default Services;
