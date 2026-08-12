import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AudienceOptions } from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import { WhatsappIcon } from "@/components/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Guantes de seguridad en Quito y Guayaquil",
  description:
    "Contacta a TGloves en Quito y Guayaquil para cotizar guantes de protección mecánica y química. Atención inmediata por WhatsApp al +593 98 066 1638.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <>
      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: "Contacto" }]} />
        <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">
          Cuéntanos qué riesgo necesitas cubrir, el volumen estimado y la ciudad
          de entrega: nuestro equipo técnico te recomienda la referencia
          adecuada y te envía la cotización. La vía más rápida es WhatsApp.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          <WhatsappIcon className="h-4 w-4" />
          Escribir al {siteConfig.whatsapp.display}
        </a>
      </div>

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {siteConfig.locations.map((location) => (
            <article
              key={location.city}
              className="rounded-lg border border-ink/10 p-6"
            >
              <h2 className="text-lg font-bold uppercase tracking-tight text-ink-dark">
                {location.city}
              </h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-ink">
                {location.address}
              </address>
              <ul className="mt-4 space-y-1.5 text-sm">
                {location.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="font-semibold text-brand hover:underline"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-brand-light/60">
        <div className="container-page">
          <h2 className="section-title text-center">Solicitud de información</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink">
            Selecciona tu perfil y abrimos WhatsApp con el mensaje listo para
            que te atendamos según tu tipo de compra.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <AudienceOptions />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contacto TGloves",
          url: `${siteConfig.domain}/contacto`,
          inLanguage: "es-EC",
          mainEntity: siteConfig.locations.map((location) => ({
            "@type": "LocalBusiness",
            name: `${siteConfig.name} ${location.city}`,
            telephone: location.phones[0],
            address: {
              "@type": "PostalAddress",
              streetAddress: location.address,
              addressLocality: location.city,
              addressCountry: "EC",
            },
          })),
        }}
      />
    </>
  );
}
