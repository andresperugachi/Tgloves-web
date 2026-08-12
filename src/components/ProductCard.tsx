import Image from "next/image";
import Link from "next/link";
import { productPath, type Product } from "@/lib/products";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-ink/10 bg-white transition-shadow hover:shadow-lg">
      <Link
        href={productPath(product)}
        className="relative block aspect-square overflow-hidden rounded-t-lg bg-white"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          {product.en388.marking}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold uppercase leading-snug text-ink-dark">
          <Link href={productPath(product)} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-xs text-ink-light">{product.tagline}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {product.properties.slice(0, 3).map((property) => (
            <li
              key={property}
              className="rounded bg-brand-light px-2 py-0.5 text-[10px] font-medium text-ink"
            >
              {property}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-xs">
          <span className="text-ink-light">Ref. {product.code}</span>
          <Link
            href={productPath(product)}
            className="font-semibold text-brand hover:text-brand-dark"
          >
            Ver ficha →
          </Link>
        </div>
      </div>
    </article>
  );
}
