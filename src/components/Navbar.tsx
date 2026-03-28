import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Jewel<span className="text-gold">Consult</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="bg-gradient-gold text-accent-foreground font-semibold px-5 py-2.5 rounded-lg text-sm shadow-gold hover:opacity-90 transition-opacity">
            Book Free Call
          </a>
        </div>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="block mt-2 text-center bg-gradient-gold text-accent-foreground font-semibold px-5 py-3 rounded-lg text-sm">
            Book Free Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
