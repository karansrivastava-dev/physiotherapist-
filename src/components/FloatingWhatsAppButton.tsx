import Link from "next/link";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </Link>
  );
};
