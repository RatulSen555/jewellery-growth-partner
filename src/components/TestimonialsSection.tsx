import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Kumar Jewellers",
    quote: "In just 6 months, our revenue jumped by **40%**. The systems and staff training completely transformed how we operate.",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Founder, Mehta Gold",
    quote: "We went from **1 store to 3** in under a year. The expansion blueprint was incredibly detailed and actionable.",
    stars: 5,
  },
  {
    name: "Suresh Reddy",
    role: "MD, Sri Balaji Jewellers",
    quote: "Our **repeat customer rate doubled** after implementing the loyalty strategy. Best investment we've made.",
    stars: 5,
  },
];

const renderQuote = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
  );
};

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
          What Our <span className="text-gradient-gold">Clients Say</span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-cream rounded-2xl p-6 h-full flex flex-col">
              <Quote size={28} className="text-gold/30 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                "{renderQuote(t.quote)}"
              </p>
              <div>
                <p className="font-display font-bold text-primary text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
