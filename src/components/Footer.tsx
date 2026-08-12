import Image from "next/image";
import Link from "next/link";
import { categories, products, productsByCategory } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo-tgloves.svg"
            alt="TGloves"
            width={160}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm text-white/70">
            {siteConfig.description}
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            <WhatsappIcon className="h-4 w-4" />
            {siteConfig.whatsapp.display}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
            Protección mecánica
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {productsByCategory("guantes-proteccion-mecanica").map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/${product.category}/${product.slug}`}
                  className="hover:text-brand"
                >
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/guantes-proteccion-mecanica"
                className="font-semibold hover:text-brand"
              >
                Ver categoría
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
            Protección química
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {productsByCategory("guantes-proteccion-quimica").map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/${product.category}/${product.slug}`}
                  className="hover:text-brand"
                >
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/guantes-proteccion-quimica"
                className="font-semibold hover:text-brand"
              >
                Ver categoría
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
            Contacta con TGloves
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            {siteConfig.locations.map((location) => (
              <li key={location.city}>
                <p className="font-semibold text-white">{location.city}</p>
                <p>{location.address}</p>
                {location.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-brand"
                  >
                    {phone}
                  </a>
                ))}
              </li>
            ))}
            <li>
              <Link href="/contacto" className="font-semibold hover:text-brand">
                Página de contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>
            {products.length} referencias ·{" "}
            {Object.values(categories)
              .map((category) => category.name)
              .join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
