import { Calendar } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
    <a
      href="#cta"
      className="flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-bold py-3.5 rounded-xl text-sm shadow-gold w-full"
    >
      <Calendar size={16} />
      Book Free Strategy Call
    </a>
  </div>
);

export default StickyMobileCTA;
