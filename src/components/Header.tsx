"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories, products } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./icons";

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: categories["guantes-proteccion-mecanica"].name,
    href: "/guantes-proteccion-mecanica",
  },
  {
    name: categories["guantes-proteccion-quimica"].name,
    href: "/guantes-proteccion-quimica",
  },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="bg-ink text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-1.5 text-xs">
          <p>Guantes de protección industrial certificados · Ecuador</p>
          <p className="hidden sm:block">
            Quito {siteConfig.locations[0].phones[0]} · Guayaquil{" "}
            {siteConfig.locations[1].phones[1]}
          </p>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="TGloves, ir al inicio">
          <Image
            src="/logo-tgloves.svg"
            alt="TGloves"
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-brand ${
                      active ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-4 py-2.5 sm:inline-flex"
          >
            <WhatsappIcon className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
          <button
            type="button"
            className="rounded border border-ink/20 p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label="Abrir menú"
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-ink/10 lg:hidden">
          <nav aria-label="Principal móvil" className="container-page py-4">
            <ul className="space-y-3 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-light">
              Productos
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/${product.category}/${product.slug}`}
                    className="block py-0.5 text-ink hover:text-brand"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full"
            >
              <WhatsappIcon className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
