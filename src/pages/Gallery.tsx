import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

const images = [
  { src: "https://images.unsplash.com/photo-1515562141589-67f0d727b3a5?w=600&h=600&fit=crop", alt: "Jewellery consultation session" },
  { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop", alt: "Premium jewellery display" },
  { src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", alt: "Store transformation" },
  { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop", alt: "Jewellery craftsmanship" },
  { src: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop", alt: "Business strategy meeting" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=600&fit=crop", alt: "Team training workshop" },
  { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop", alt: "Jewellery collection" },
  { src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop", alt: "Brand building" },
];

const Gallery = () => (
  <PageWrapper>
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Gallery</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Work in <span className="text-gradient-gold">Action</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our consulting sessions, workshops, and the businesses we've helped transform.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="break-inside-avoid group overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default Gallery;
