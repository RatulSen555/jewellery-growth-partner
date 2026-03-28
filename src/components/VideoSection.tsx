import { Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const VideoSection = () => (
  <section className="py-20 md:py-28 bg-cream">
    <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">Watch & Learn</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-10">
          See the <span className="text-gradient-gold">Transformation</span> in Action
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="relative aspect-video bg-gradient-navy rounded-2xl overflow-hidden shadow-card-hover group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
              <Play size={32} className="text-accent-foreground ml-1" />
            </div>
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-primary-foreground/60 text-sm font-medium">
            Click to watch our consulting approach
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VideoSection;
