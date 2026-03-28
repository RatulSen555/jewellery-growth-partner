import { Calendar, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section id="cta" className="py-20 md:py-28 bg-gradient-navy text-primary-foreground">
    <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Transform Your Jewellery Business?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-2">
          Only a few consulting slots open each month.
        </p>
        <p className="text-gold-light text-sm font-semibold mb-8">
          Don't let another quarter pass without a growth plan.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-8 py-4 rounded-xl text-lg shadow-gold hover:opacity-90 transition-all"
        >
          <Calendar size={20} />
          Book Your Strategy Call Now
          <ArrowRight size={20} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
