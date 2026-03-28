import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const FooterSection = () => (
  <footer className="py-12 bg-navy-dark text-primary-foreground/70">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <Link to="/" className="font-display text-xl font-bold text-primary-foreground mb-3 block">
            Jewel<span className="text-gold">Consult</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Premium consulting for jewellery businesses ready to scale.
          </p>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground text-sm mb-3">Quick Links</p>
          <div className="space-y-2">
            {quickLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground text-sm mb-3">Contact</p>
          <div className="space-y-2 text-sm">
            <a href="mailto:hello@jewelconsult.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> hello@jewelconsult.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={14} /> Mumbai, India
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} JewelConsult. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
