"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

type Facet = {
  id: string;
  label: string;
  values: (product: Product) => string[];
};

const propertiesFacet: Facet = {
  id: "propiedades",
  label: "Propiedades",
  values: (product) => product.properties,
};

const coatingFacet: Facet = {
  id: "recubrimiento",
  label: "Tipo de recubrimiento",
  values: (product) => [product.coating],
};

const linerFacet: Facet = {
  id: "tejido",
  label: "Material del tejido",
  values: (product) => [product.liner],
};

const cutFacet: Facet = {
  id: "corte",
  label: "Nivel de corte (TDM EN 388)",
  values: (product) =>
    product.en388.tdm === "X"
      ? ["Sin ensayo TDM"]
      : [`Nivel ${product.en388.tdm}`],
};

const chemicalFacet: Facet = {
  id: "quimicos",
  label: "Químicos ensayados (EN ISO 374)",
  values: (product) =>
    product.chemical
      ? product.chemical.performances.map((item) => item.chemical)
      : [],
};

const industryFacet: Facet = {
  id: "industria",
  label: "Industria",
  values: (product) => product.industries,
};

const facetsByMode: Record<"mecanica" | "quimica" | "todos", Facet[]> = {
  mecanica: [propertiesFacet, coatingFacet, linerFacet, cutFacet, industryFacet],
  quimica: [coatingFacet, propertiesFacet, chemicalFacet, industryFacet],
  todos: [propertiesFacet, coatingFacet, industryFacet],
};

export default function ProductCatalog({
  products,
  mode,
  title,
}: {
  products: Product[];
  mode: "mecanica" | "quimica" | "todos";
  title?: string;
}) {
  const facets = facetsByMode[mode];
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [panelOpen, setPanelOpen] = useState(false);

  const options = useMemo(
    () =>
      facets.map((facet) => ({
        facet,
        options: Array.from(
          new Set(products.flatMap((product) => facet.values(product))),
        ).sort((a, b) => a.localeCompare(b, "es")),
      })),
    [facets, products],
  );

  const filtered = useMemo(
    () =>
      products.filter((product) =>
        facets.every((facet) => {
          const active = selected[facet.id];
          if (!active?.length) return true;
          const values = facet.values(product);
          return active.every((value) => values.includes(value));
        }),
      ),
    [facets, products, selected],
  );

  const activeCount = Object.values(selected).flat().length;

  const toggle = (facetId: string, value: string) => {
    setSelected((current) => {
      const active = current[facetId] ?? [];
      const next = active.includes(value)
        ? active.filter((item) => item !== value)
        : [...active, value];
      return { ...current, [facetId]: next };
    });
  };

  return (
    <section className="section" id="productos">
      <div className="container-page">
        {title && <h2 className="section-title text-center">{title}</h2>}

        <div className="mt-8 lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
          <div className="mb-4 lg:mb-0">
            <button
              type="button"
              className="btn-outline w-full lg:hidden"
              aria-expanded={panelOpen}
              onClick={() => setPanelOpen((value) => !value)}
            >
              Filtros{activeCount ? ` (${activeCount})` : ""}
            </button>

            <aside
              className={`${panelOpen ? "block" : "hidden"} mt-3 rounded-lg border border-ink/10 p-4 lg:mt-0 lg:block`}
              aria-label="Filtros de producto"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink-dark">
                  Filtros
                </h3>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelected({})}
                    className="text-xs font-semibold text-brand hover:underline"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {options.map(({ facet, options: values }) => (
                <fieldset key={facet.id} className="mt-5">
                  <legend className="mb-2 w-full border-b border-ink/10 pb-1 text-xs font-semibold uppercase tracking-wide text-ink">
                    {facet.label}
                  </legend>
                  <div className="space-y-1.5">
                    {values.map((value) => {
                      const checked =
                        selected[facet.id]?.includes(value) ?? false;
                      return (
                        <label
                          key={value}
                          className="flex cursor-pointer items-start gap-2 text-xs text-ink"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(facet.id, value)}
                            className="mt-0.5 h-3.5 w-3.5 accent-brand"
                          />
                          <span>{value}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </aside>
          </div>

          <div>
            <p className="mb-4 text-xs text-ink-light" aria-live="polite">
              {filtered.length} de {products.length} productos
            </p>
            {filtered.length === 0 ? (
              <p className="rounded-lg border border-dashed border-ink/20 p-8 text-center text-sm text-ink">
                No hay guantes que cumplan con esa combinación de propiedades.
                Ajusta los filtros o escríbenos por WhatsApp y te recomendamos
                el modelo adecuado.
              </p>
            ) : (
              <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product, index) => (
                  <li key={product.slug}>
                    <ProductCard product={product} priority={index < 3} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
