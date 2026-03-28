import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  "Customized growth roadmap for your business",
  "Systemize operations so you're not doing everything",
  "Train staff to sell and serve like premium brands",
  "Build a brand identity that commands trust and loyalty",
  "Leverage digital channels for steady lead generation",
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          A Proven System to <span className="text-gradient-gold">Scale Your Jewellery Business</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          We don't just advise — we partner with you to build systems that drive real, sustainable growth.
        </p>
      </AnimatedSection>
      <div className="space-y-4 text-left max-w-xl mx-auto">
        {points.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-start gap-3 p-4">
              <CheckCircle2 size={22} className="text-gold mt-0.5 shrink-0" />
              <span className="text-foreground font-medium">{p}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
