import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import ProductCatalog from "@/components/ProductCatalog";
import { ChemicalRisks, MechanicalRisks } from "@/components/RiskSections";
import SizeGuide from "@/components/SizeGuide";
import { categories, productsByCategory } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const category = categories["guantes-proteccion-quimica"];
const items = productsByCategory(category.slug);

export const metadata: Metadata = {
  title: category.title,
  description: category.description,
  alternates: { canonical: `/${category.slug}` },
  openGraph: {
    title: category.title,
    description: category.description,
    url: `${siteConfig.domain}/${category.slug}`,
    images: [{ url: category.banner }],
  },
};

export default function ChemicalCategoryPage() {
  return (
    <>
      <div className="relative isolate">
        <Image
          src={category.banner}
          alt={category.bannerAlt}
          width={1920}
          height={814}
          priority
          fetchPriority="high"
          sizes="100vw"
          className="h-[220px] w-full object-cover sm:h-[300px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-dark/85 via-ink-dark/50 to-transparent" />
        <div className="container-page absolute inset-x-0 bottom-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
            Línea T-MAX
          </p>
          <p className="mt-2 max-w-xl text-sm text-white/85">
            Nitrilo y PVC con niveles de permeación declarados bajo EN ISO 374.
          </p>
        </div>
      </div>

      <div className="container-page pt-6">
        <Breadcrumbs items={[{ name: category.name }]} />
        <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {category.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">
          {category.intro}
        </p>
      </div>

      <ProductCatalog products={items} mode="quimica" />
      <SizeGuide />
      <ChemicalRisks />
      <MechanicalRisks />
      <CtaSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.h1,
          description: category.description,
          url: `${siteConfig.domain}/${category.slug}`,
          inLanguage: "es-EC",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${siteConfig.domain}/${product.category}/${product.slug}`,
              name: product.name,
            })),
          },
        }}
      />
    </>
  );
}
