import { Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Floating WhatsApp button on every page, plus a Call / WhatsApp bar on small screens.
export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-20 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 md:right-6 md:bottom-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate/10 bg-white/95 p-2 backdrop-blur md:hidden">
        <a href={`tel:${siteConfig.phone.tel}`} className="btn btn-primary py-3">
          <Phone className="h-4 w-4" aria-hidden /> Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#25D366] py-3 text-white"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
