import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        Error 404
      </p>
      <h1 className="mt-3 text-3xl font-bold uppercase">
        No encontramos esta página
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm text-ink">
        El enlace pudo cambiar. Revisa el catálogo de guantes de protección
        mecánica o química para encontrar la referencia que buscas.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/guantes-proteccion-mecanica" className="btn-primary">
          Guantes de protección mecánica
        </Link>
        <Link href="/guantes-proteccion-quimica" className="btn-outline">
          Guantes de protección química
        </Link>
      </div>
    </div>
  );
}
