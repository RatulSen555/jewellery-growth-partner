import { ArrowUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    business: "Heritage Jewellers, Mumbai",
    before: "₹2 Cr annual revenue, no online presence",
    after: "₹7.5 Cr revenue with 35% from online",
    growth: "275%",
    metric: "Revenue Growth",
  },
  {
    business: "Sai Gold, Hyderabad",
    before: "1 store, owner handles everything",
    after: "4 stores with trained managers and SOPs",
    growth: "4x",
    metric: "Store Expansion",
  },
  {
    business: "Lakshmi Jewels, Chennai",
    before: "15% repeat customer rate",
    after: "62% repeat rate with loyalty program",
    growth: "313%",
    metric: "Customer Retention",
  },
];

const CaseStudySection = () => (
  <section id="results" className="py-20 md:py-28 bg-cream">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">Proven Results</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
          Real Results from <span className="text-gradient-gold">Real Jewellers</span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <ArrowUp size={20} className="text-gold" />
                <span className="font-display text-3xl font-bold text-gradient-gold">{c.growth}</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase">{c.metric}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-3">{c.business}</h3>
              <div className="space-y-2 flex-1">
                <div className="text-sm">
                  <span className="font-semibold text-destructive">Before: </span>
                  <span className="text-muted-foreground">{c.before}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gold-dark">After: </span>
                  <span className="text-foreground">{c.after}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudySection;
