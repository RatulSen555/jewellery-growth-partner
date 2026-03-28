import { Award, Users, Globe, TrendingUp } from "lucide-react";
import consultantImg from "@/assets/consultant-hero.jpg";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Users, value: "600+", label: "Jewellers Guided" },
  { icon: Globe, value: "8", label: "Countries Served" },
  { icon: TrendingUp, value: "20+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Won" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-cream">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="relative max-w-sm mx-auto md:mx-0">
            <div className="absolute -inset-3 bg-gradient-gold rounded-2xl opacity-15 blur-xl" />
            <img
              src={consultantImg}
              alt="Jewellery Growth Consultant"
              className="relative rounded-2xl shadow-card w-full object-cover"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">About the Consultant</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Meet Your Jewellery <span className="text-gradient-gold">Growth Consultant</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With <strong className="text-foreground">20+ years of experience</strong> across retail strategy, operations, and digital transformation — including leadership roles at <strong className="text-foreground">eBay India</strong> and <strong className="text-foreground">Capgemini</strong> — I've helped 600+ jewellery businesses increase revenue, streamline operations, and build scalable systems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-background rounded-xl p-4 shadow-card text-center">
                  <s.icon size={24} className="mx-auto text-gold mb-2" />
                  <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
