import { Phone, Lightbulb, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: Phone, title: "Book a Call", desc: "Schedule a free 15-minute discovery call to discuss your challenges." },
  { icon: Lightbulb, title: "Get a Strategy", desc: "Receive a customized growth plan tailored to your jewellery business." },
  { icon: Rocket, title: "Execute & Scale", desc: "Implement the strategy with ongoing guidance and watch your business grow." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-gradient-navy text-primary-foreground">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold-light mb-2">Simple Process</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          How It <span className="text-gradient-gold">Works</span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <s.icon size={28} className="text-accent-foreground" />
              </div>
              <div className="text-sm font-bold text-gold-light">Step {i + 1}</div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
