import AnimatedSection from "./AnimatedSection";

const logos = ["Tanishq", "Kalyan", "Malabar", "Joyalukkas", "PC Jeweller", "Senco Gold", "TBZ", "Titan"];

const TrustBar = () => (
  <section className="py-10 bg-background border-y border-border">
    <AnimatedSection>
      <p className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-6">
        Trusted by 600+ Jewellery Businesses Across 8 Countries
      </p>
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-16 items-center w-max">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="text-lg font-display font-semibold text-border hover:text-primary transition-colors duration-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default TrustBar;
