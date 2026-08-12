import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, productsByCategory } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const category = "guantes-proteccion-quimica" as const;

export function generateStaticParams() {
  return productsByCategory(category).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};

  const title = `${product.name} | EN ISO 374 ${product.chemical?.marking ?? ""}`.trim();
  const description = `${product.tagline}. Recubrimiento de ${product.coating.toLowerCase()} con marcaje químico ${product.chemical?.marking ?? "EN ISO 374"} y EN 388 ${product.en388.marking}. Cotiza el ${product.name} TGloves en Ecuador.`;

  return {
    title,
    description,
    alternates: { canonical: `/${category}/${product.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteConfig.domain}/${category}/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ChemicalProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
