export const siteConfig = {
  name: "TGloves",
  domain: "https://t-gloves.com",
  legalName: "TGloves Ecuador",
  description:
    "Guantes de protección industrial TGloves: línea mecánica (anticorte, antivibración, precisión) y línea química (nitrilo y PVC) certificados EN 388 y EN ISO 374 para la industria ecuatoriana.",
  whatsapp: {
    phone: "593980661638",
    display: "+593 98 066 1638",
  },
  locations: [
    {
      city: "Quito",
      address: "Calle Medicinwow Lote 14 y El Vergel (Carapungo)",
      phones: ["+593 2 282 1866"],
    },
    {
      city: "Guayaquil",
      address:
        "Plaza comercial San Jorge, Km 10,5 vía Daule, Solar 3 Mz 28 bodega 1 – Frente a Estación de la metrovía",
      phones: ["+593 98 841 5115", "+593 4 388 3008", "+593 4 462 7976"],
    },
  ],
} as const;

export type AudienceKey = "distribuidor" | "empresa" | "particular";

const messages: Record<AudienceKey, string> = {
  distribuidor:
    "Hola, soy distribuidor y estoy interesado en los guantes TGloves.",
  empresa:
    "Hola, soy empresa y estoy interesado en los guantes TGloves para mi operación.",
  particular:
    "Hola, soy particular y estoy interesado en los guantes TGloves.",
};

export function whatsappLink(text?: string) {
  const message =
    text ?? "Hola, me interesa conocer más sobre los guantes TGloves.";
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

export function audienceWhatsappLink(audience: AudienceKey, product?: string) {
  const suffix = product ? ` Consulto por el ${product}.` : "";
  return whatsappLink(`${messages[audience]}${suffix}`);
}
