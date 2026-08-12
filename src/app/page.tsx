import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import ProductCatalog from "@/components/ProductCatalog";
import { ChemicalRisks, MechanicalRisks } from "@/components/RiskSections";
import SizeGuide from "@/components/SizeGuide";
import { categories, products } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guantes de seguridad industrial certificados EN 388 y EN ISO 374",
  description:
    "TGloves fabrica y distribuye guantes de protección mecánica y química en Ecuador: anticorte HPPE, antivibración, nitrilo y PVC certificados EN 388 y EN ISO 374. Cotiza por WhatsApp.",
  alternates: { canonical: "/" },
};

const highlights = [
  {
    title: "Protección verificada",
    text: "Cada referencia declara su marcaje EN 388 y EN ISO 374 con certificado CE emitido por organismo notificado.",
  },
  {
    title: "Ergonomía real",
    text: "Tejidos sin costuras y recubrimientos transpirables que sostienen la destreza durante toda la jornada.",
  },
  {
    title: "Stock e importación directa",
    text: "Abastecimiento continuo desde Quito y Guayaquil para operaciones de cualquier volumen.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-dark">
        <Image
          src="/images/home/hero-fondo.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 -z-10 object-cover opacity-40"
        />
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Guantes de protección industrial
            </p>
            <h1 className="mt-4 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Suministro resistente,
              <br />
              seguridad fiable
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Guantes TGloves para riesgo mecánico y químico: tejidos HPPE
              anticorte, recubrimientos de nitrilo, látex y poliuretano, y la
              línea T-MAX de nitrilo y PVC para manipulación de sustancias.
              Certificación EN 388 y EN ISO 374 en cada referencia, con
              asesoría técnica para elegir el nivel de protección que exige tu
              operación.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/guantes-proteccion-mecanica"
                className="btn-primary"
              >
                Ver línea mecánica
              </Link>
              <Link
                href="/guantes-proteccion-quimica"
                className="btn bg-white/10 text-white ring-1 ring-inset ring-white/40 hover:bg-white/20"
              >
                Ver línea química
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/home/hero-personajes.webp"
              alt="Operario con guantes anticorte TGloves y operaria con guantes de nitrilo T-Max para protección química"
              width={1400}
              height={782}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 92vw, 600px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-brand-light/50 py-8">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-ink">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProductCatalog
        products={products}
        mode="todos"
        title="Guantes de seguridad"
      />

      <section className="section bg-brand-light/40">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/home/guante-t-elite.webp"
            alt="Guante anticorte TGloves T-Elite de tejido HPPE con recubrimiento de nitrilo"
            width={1200}
            height={613}
            sizes="(max-width: 1024px) 90vw, 560px"
            className="h-auto w-full"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Línea mecánica
            </p>
            <h2 className="section-title mt-3">
              Eleva el nivel de corte sin sacrificar la destreza de tus manos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              El tejido de HPPE con fibra de vidrio del T-Elite alcanza{" "}
              <strong>nivel D de corte TDM</strong> y abrasión nivel 4, mientras
              el recubrimiento de espuma de nitrilo mantiene la ventilación y el
              agarre. Es la respuesta para manipular láminas metálicas, vidrio y
              piezas con filo sin renunciar al tacto.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li>· Fibra liviana que no absorbe líquidos ni deja pelusa.</li>
              <li>· Recubrimiento transpirable que evita sudor y calor.</li>
              <li>· Impide el paso de aceites y sus derivados.</li>
            </ul>
            <Link
              href="/guantes-proteccion-mecanica/guante-anticorte-t-elite"
              className="btn-primary mt-6"
            >
              Ver el Guante Anticorte T-Elite
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Línea química
            </p>
            <h2 className="section-title mt-3">
              T-MAX: barrera química con niveles de permeación declarados
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              La familia T-MAX cubre desde el nitrilo flocado de 13 pulgadas
              hasta el PVC de 18 pulgadas con doble revestimiento. El T-Max Nitrilo 18 alcanza
              clasificación <strong>Tipo A (AJKLOP)</strong> bajo EN ISO 374-1 y
              cuenta con aprobación para contacto con alimentos; todos incorporan
              protección VIRUS según EN ISO 374-5.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li>· Sin proteínas de látex ni silicona en la línea de nitrilo.</li>
              <li>· Palma texturizada para agarre en aplicaciones húmedas.</li>
              <li>· Protección de antebrazo en los modelos de 18 pulgadas.</li>
            </ul>
            <Link
              href="/guantes-proteccion-quimica"
              className="btn-primary mt-6"
            >
              Ver la línea T-MAX
            </Link>
          </div>
          <Image
            src="/images/home/guante-t-max.webp"
            alt="Operaria con guantes de nitrilo TGloves T-Max manipulando reactivos químicos"
            width={1200}
            height={670}
            sizes="(max-width: 1024px) 90vw, 560px"
            className="order-1 h-auto w-full lg:order-2"
          />
        </div>
      </section>

      <SizeGuide />
      <MechanicalRisks />
      <ChemicalRisks />
      <CtaSection />

      <section className="bg-ink py-10 text-center text-white">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Asesoramiento
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">¿Tienes dudas?</h2>
          <p className="mt-2 text-sm text-white/80">
            Nuestros expertos te ayudan a seleccionar la protección adecuada.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            Escribir a {siteConfig.whatsapp.display}
          </a>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.domain,
          inLanguage: "es-EC",
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Catálogo de guantes TGloves",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: `${siteConfig.domain}/${product.category}/${product.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Categorías de guantes",
          itemListElement: Object.values(categories).map((category, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: category.name,
            url: `${siteConfig.domain}/${category.slug}`,
          })),
        }}
      />
    </>
  );
}
