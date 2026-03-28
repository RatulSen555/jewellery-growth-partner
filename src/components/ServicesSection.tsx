import { Clock, BarChart3, Store, Users, Megaphone, Diamond } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Clock,
    title: "1 Hour Clarity Session",
    desc: "Laser-focused session to identify bottlenecks and quick wins.",
    who: "For owners stuck and needing direction",
  },
  {
    icon: BarChart3,
    title: "Business Growth Audit",
    desc: "Deep dive into sales, operations, and marketing to create a growth roadmap.",
    who: "For businesses doing ₹1–10 Cr wanting to scale",
  },
  {
    icon: Store,
    title: "Multi-Store Expansion",
    desc: "Blueprint to go from one store to a profitable chain with SOPs.",
    who: "For single-store owners ready to expand",
  },
  {
    icon: Users,
    title: "Team Training & SOPs",
    desc: "Build a high-performing team that sells, serves, and stays.",
    who: "For businesses with staff performance issues",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    desc: "Online presence, social media, and lead generation tailored for jewellery.",
    who: "For businesses with weak online presence",
  },
  {
    icon: Diamond,
    title: "Brand Building & Positioning",
    desc: "Transform your shop into a brand customers love and remember.",
    who: "For owners wanting to build a premium brand",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
          Consulting Services <span className="text-gradient-gold">That Deliver Results</span>
        </h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="group bg-background border border-border rounded-2xl p-6 h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4 group-hover:bg-gradient-gold transition-colors">
                <s.icon size={22} className="text-gold group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
              <p className="text-xs font-semibold text-gold-dark bg-cream rounded-full px-3 py-1 inline-block">
                {s.who}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
