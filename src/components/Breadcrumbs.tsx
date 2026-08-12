import Link from "next/link";
import { siteConfig } from "@/lib/site";
import JsonLd from "./JsonLd";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Inicio", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Ruta de navegación" className="text-xs text-ink-light">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((item, index) => (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && index < trail.length - 1 ? (
                <Link href={item.href} className="hover:text-brand">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              )}
              {index < trail.length - 1 && (
                <span aria-hidden="true" className="text-ink-light/60">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.href ? { item: `${siteConfig.domain}${item.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
