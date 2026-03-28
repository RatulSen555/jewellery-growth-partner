import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Award, Users, Globe, TrendingUp, Target, Heart, Zap } from "lucide-react";
import consultantImg from "@/assets/consultant-hero.jpg";

const stats = [
  { icon: Users, value: "600+", label: "Jewellers Guided" },
  { icon: Globe, value: "8", label: "Countries Served" },
  { icon: TrendingUp, value: "20+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Won" },
];

const values = [
  { icon: Target, title: "Clarity-Driven", desc: "Every engagement starts with understanding your unique challenges and goals." },
  { icon: Heart, title: "Partnership Mindset", desc: "We don't just advise — we roll up our sleeves and work alongside you." },
  { icon: Zap, title: "Results-Obsessed", desc: "Every strategy is designed to deliver measurable, sustainable growth." },
];

const About = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">About the Consultant</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Your Jewellery <span className="text-gradient-gold">Growth Partner</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              With <strong className="text-foreground">20+ years of experience</strong> across retail strategy, operations, and digital transformation — including leadership roles at <strong className="text-foreground">eBay India</strong> and <strong className="text-foreground">Capgemini</strong> — I've helped 600+ jewellery businesses increase revenue, streamline operations, and build scalable systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines deep industry expertise with proven business frameworks to deliver transformations that last. Whether you're a single-store owner or managing a chain, I bring the same commitment to your success.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-3 bg-gradient-gold rounded-2xl opacity-15 blur-xl" />
              <img
                src={consultantImg}
                alt="Jewellery Growth Consultant"
                className="relative rounded-2xl shadow-card w-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-cream rounded-2xl p-6 text-center hover:shadow-card-hover transition-shadow">
                <s.icon size={28} className="mx-auto text-gold mb-3" />
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Empowering Jewellery Businesses to <span className="text-gradient-gold">Thrive</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our mission is to transform every jewellery business from owner-dependent to system-driven, creating sustainable growth and lasting brand value.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-2xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default About;
