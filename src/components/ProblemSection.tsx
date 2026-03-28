import { AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  "No clear growth strategy or roadmap",
  "Dependence on owner for everything — no systems",
  "Poor staff performance and high attrition",
  "Low repeat customers and weak loyalty",
  "Weak online presence and digital marketing",
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-cream">
    <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          Why Most Jewellery Businesses <span className="text-gradient-gold">Struggle to Grow</span>
        </h2>
        <p className="text-muted-foreground mb-10">Do any of these sound familiar?</p>
      </AnimatedSection>
      <div className="space-y-4 text-left max-w-xl mx-auto">
        {problems.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-start gap-3 bg-background rounded-xl p-4 shadow-card">
              <AlertTriangle size={20} className="text-gold mt-0.5 shrink-0" />
              <span className="text-foreground font-medium">{p}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
