import PageWrapper from "@/components/PageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "5 Proven Strategies to Double Your Jewellery Sales",
    excerpt: "Discover the exact tactics top jewellers use to boost revenue without spending more on advertising.",
    category: "Growth",
    date: "Mar 15, 2026",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d727b3a5?w=600&h=400&fit=crop",
  },
  {
    title: "How to Build a Jewellery Brand That Customers Love",
    excerpt: "Branding isn't just a logo. Learn how to create an emotional connection that drives loyalty and referrals.",
    category: "Branding",
    date: "Mar 8, 2026",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop",
  },
  {
    title: "The Complete Guide to Multi-Store Expansion",
    excerpt: "From finding the right location to hiring managers — everything you need to know about scaling.",
    category: "Expansion",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Marketing for Jewellers: What Actually Works",
    excerpt: "Cut through the noise with strategies specifically designed for jewellery businesses.",
    category: "Marketing",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
  },
  {
    title: "Staff Training: The Hidden Revenue Multiplier",
    excerpt: "Why investing in your team's skills is the fastest path to higher sales and better retention.",
    category: "Operations",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
  {
    title: "From ₹2 Cr to ₹10 Cr: A Jeweller's Growth Story",
    excerpt: "A real case study of how a single-store jeweller transformed their business in 18 months.",
    category: "Case Study",
    date: "Feb 5, 2026",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=400&fit=crop",
  },
];

const Blog = () => (
  <PageWrapper>
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Blog & Insights</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Strategies for <span className="text-gradient-gold">Jewellery Growth</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Actionable insights, case studies, and expert advice to help your jewellery business thrive.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <article className="group bg-background border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gold-dark bg-cream rounded-full px-3 py-1">{p.category}</span>
                    <span className="text-xs text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-gold-dark transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </PageWrapper>
);

export default Blog;
