import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaModalButton, CtaSection } from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import { ChemicalRisks, MechanicalRisks } from "@/components/RiskSections";
import SizeGuide from "@/components/SizeGuide";
import { DownloadIcon, DropletIcon, ShieldIcon } from "@/components/icons";
import {
  categories,
  productsByCategory,
  type Product,
} from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/site";

function en388Rows(product: Product) {
  return [
    { label: "Resistencia a la abrasión", value: product.en388.abrasion },
    { label: "Resistencia al corte (cuchilla)", value: product.en388.cut },
    { label: "Resistencia al rasgado", value: product.en388.tear },
    { label: "Resistencia al punzonamiento", value: product.en388.puncture },
    { label: "Resistencia al corte (TDM)", value: product.en388.tdm },
  ];
}

export default function ProductDetail({ product }: { product: Product }) {
  const category = categories[product.category];
  const related = productsByCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { name: category.name, href: `/${category.slug}` },
            { name: product.name },
          ]}
        />
      </div>

      <section className="container-page mt-4 rounded-lg border border-ink/10 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-ink/10 bg-white">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-contain p-6"
              />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded bg-ink px-3 py-1.5 text-xs font-bold uppercase text-white">
                <ShieldIcon className="h-4 w-4 text-brand" />
                {product.en388.marking}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {category.name}
            </p>
            <h1 className="mt-3 text-2xl font-bold uppercase leading-tight sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-xs text-ink-light">Ref. {product.code}</p>
            <p className="mt-4 text-sm font-medium text-ink-dark">
              {product.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {product.intro}
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded border border-ink/10 p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-light">
                  Recubrimiento
                </dt>
                <dd className="text-sm text-ink-dark">{product.coating}</dd>
              </div>
              <div className="rounded border border-ink/10 p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-light">
                  Tejido / forro
                </dt>
                <dd className="text-sm text-ink-dark">{product.liner}</dd>
              </div>
              <div className="rounded border border-ink/10 p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-light">
                  Color
                </dt>
                <dd className="text-sm text-ink-dark">{product.colors}</dd>
              </div>
              <div className="rounded border border-ink/10 p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-light">
                  Procedencia
                </dt>
                <dd className="text-sm text-ink-dark">{product.origin}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-dark">
                Tallas disponibles
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <li
                    key={size}
                    className="rounded border border-ink/20 px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <Link
                href="#talla-de-guantes"
                className="mt-2 inline-block text-xs font-semibold text-brand hover:underline"
              >
                Guía de tallas →
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <CtaModalButton product={product.name} />
              <a
                href={product.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <DownloadIcon className="h-4 w-4" />
                Ficha técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="section-title">Detalles del producto</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-ink-dark">
              Propiedades
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.properties.map((property) => (
                <li
                  key={property}
                  className="rounded bg-brand-light px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {property}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-ink-dark">
              Casos de uso
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink">
              {product.uses.map((use) => (
                <li key={use}>· {use}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded border border-brand/40 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-ink/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                Normativa {product.en388.standard}
              </h2>
              <p className="mt-3 inline-block rounded bg-ink px-3 py-1.5 text-sm font-bold text-white">
                {product.en388.marking}
              </p>
              <table className="mt-4 w-full text-left text-xs">
                <caption className="sr-only">
                  Prestaciones mecánicas del {product.name} según EN 388
                </caption>
                <tbody>
                  {en388Rows(product).map((row, index) => (
                    <tr
                      key={row.label}
                      className={index % 2 ? "bg-brand-light/50" : ""}
                    >
                      <th scope="row" className="px-2 py-2 font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="px-2 py-2 text-right font-bold text-ink-dark">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {product.chemical && (
              <div className="rounded-lg border border-ink/10 p-5">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-dark">
                  <DropletIcon className="h-5 w-5 text-brand" />
                  Prestaciones químicas
                </h2>
                <p className="mt-2 text-xs text-ink-light">
                  {product.chemical.standard}
                </p>
                <p className="mt-3 inline-block rounded bg-brand px-3 py-1.5 text-sm font-bold text-white">
                  {product.chemical.marking}
                  {product.chemical.virus ? " · VIRUS" : ""}
                </p>
                <table className="mt-4 w-full text-left text-xs">
                  <caption className="sr-only">
                    Niveles de permeación y degradación del {product.name}
                  </caption>
                  <thead>
                    <tr className="border-b border-ink/15">
                      <th scope="col" className="px-2 py-2">
                        Químico
                      </th>
                      <th scope="col" className="px-2 py-2">
                        Código
                      </th>
                      <th scope="col" className="px-2 py-2 text-right">
                        Nivel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.chemical.performances.map((item, index) => (
                      <tr
                        key={item.chemical}
                        className={index % 2 ? "bg-brand-light/50" : ""}
                      >
                        <th
                          scope="row"
                          className="px-2 py-2 font-medium text-ink"
                        >
                          {item.chemical}
                          {item.degradation && (
                            <span className="block text-[10px] font-normal text-ink-light">
                              Degradación {item.degradation}
                            </span>
                          )}
                        </th>
                        <td className="px-2 py-2">{item.code}</td>
                        <td className="px-2 py-2 text-right font-bold text-ink-dark">
                          {item.level}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="rounded-lg border border-ink/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                Certificaciones
              </h2>
              <ul className="mt-3 space-y-1.5 text-xs text-ink">
                {product.certifications.map((certification) => (
                  <li key={certification}>· {certification}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-ink/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                Embalaje
              </h2>
              <ul className="mt-3 space-y-1.5 text-xs text-ink">
                {product.packaging.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-ink/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                Descargas
              </h2>
              <a
                href={product.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-3 w-full"
              >
                <DownloadIcon className="h-4 w-4" />
                Ficha técnica PDF
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-12 text-center text-white">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Asesoramiento
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">¿Tienes dudas?</h2>
          <p className="mt-2 text-sm text-white/80">
            Nuestros expertos te ayudan a seleccionar la protección adecuada
            para {product.name.toLowerCase()}.
          </p>
          <div className="mt-5 flex justify-center">
            <CtaModalButton product={product.name} />
          </div>
        </div>
      </section>

      <SizeGuide />
      {product.chemical ? <ChemicalRisks /> : <MechanicalRisks />}

      {related.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="section-title">Productos relacionados</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection product={product.name} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          sku: product.code,
          description: product.intro,
          image: [`${siteConfig.domain}${product.image}`],
          brand: { "@type": "Brand", name: siteConfig.name },
          category: category.name,
          url: `${siteConfig.domain}/${product.category}/${product.slug}`,
          material: product.coating,
          color: product.colors,
          countryOfOrigin: product.origin,
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Marcaje EN 388",
              value: product.en388.marking,
            },
            ...(product.chemical
              ? [
                  {
                    "@type": "PropertyValue",
                    name: "Marcaje EN ISO 374",
                    value: product.chemical.marking,
                  },
                ]
              : []),
            ...product.properties.map((property) => ({
              "@type": "PropertyValue",
              name: "Propiedad",
              value: property,
            })),
          ],
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            url: whatsappLink(
              `Hola, me interesa cotizar el ${product.name} de TGloves.`,
            ),
            seller: { "@type": "Organization", name: siteConfig.name },
          },
        }}
      />
    </>
  );
}
