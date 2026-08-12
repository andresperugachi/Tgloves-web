import { whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./icons";

export default function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
}
