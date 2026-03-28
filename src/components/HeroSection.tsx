import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import consultantImg from "@/assets/consultant-hero.jpg";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-cream">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Scale Your Jewellery Business to the{" "}
              <span className="text-gradient-gold">Next Level</span>
            </h1>
            <p className="font-display text-lg md:text-xl text-navy-light font-medium">
              From Single Store to Chain &nbsp;|&nbsp; Owner-Driven to System-Driven &nbsp;|&nbsp; Business to Brand
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              Struggling with stagnant sales, untrained staff, or no clear growth strategy? We fix that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-7 py-4 rounded-lg text-base shadow-gold hover:opacity-90 transition-all"
              >
                <Calendar size={18} />
                Book Free Strategy Call
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-4 rounded-lg text-base hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore Consulting Plans
                <ArrowRight size={18} />
              </Link>
            </div>
            <p className="text-sm font-medium text-gold-dark flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
              Limited slots available this month
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-2xl" />
            <img
              src={consultantImg}
              alt="Jewellery Business Consultant"
              className="relative rounded-2xl shadow-card-hover w-full object-cover"
              width={800}
              height={1024}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HeroSection;
