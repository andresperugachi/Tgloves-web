import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, productsByCategory } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const category = "guantes-proteccion-mecanica" as const;

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

  const title = `${product.name} | EN 388 ${product.en388.marking}`;
  const description = `${product.tagline}. ${product.coating} sobre ${product.liner}. Marcaje EN 388 ${product.en388.marking}. Cotiza el ${product.name} TGloves en Ecuador.`;

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

export default async function MechanicalProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
