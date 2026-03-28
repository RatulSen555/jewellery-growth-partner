import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Star, Quote } from "lucide-react";

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
  {
    name: "Anita Sharma",
    role: "Director, Sharma & Sons Jewellers",
    quote: "The digital marketing strategy brought in **200+ new leads** in the first quarter. Our online presence went from zero to hero.",
    stars: 5,
  },
  {
    name: "Vikram Patel",
    role: "Owner, VP Gold House",
    quote: "Staff productivity improved by **60%** after the training program. My team now runs the store without me being there daily.",
    stars: 5,
  },
  {
    name: "Meera Krishnan",
    role: "CEO, South Star Jewels",
    quote: "The brand positioning work helped us **increase average ticket size by 35%**. Customers now see us as a premium destination.",
    stars: 5,
  },
];

const renderQuote = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
  );
};

const Testimonials = () => (
  <PageWrapper>
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Testimonials</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real jewellery business owners across India and beyond.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-cream rounded-2xl p-7 h-full flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <Quote size={32} className="text-gold/25 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-5">
                  "{renderQuote(t.quote)}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-display font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default Testimonials;
