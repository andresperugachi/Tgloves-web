"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { audienceWhatsappLink, type AudienceKey } from "@/lib/site";
import {
  DistribuidorIcon,
  EmpresaIcon,
  ParticularIcon,
  WhatsappIcon,
} from "./icons";

const audiences: {
  key: AudienceKey;
  label: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
}[] = [
  { key: "distribuidor", label: "Distribuidor", Icon: DistribuidorIcon },
  { key: "empresa", label: "Empresa", Icon: EmpresaIcon },
  { key: "particular", label: "Particular", Icon: ParticularIcon },
];

export function AudienceOptions({
  product,
  variant = "light",
}: {
  product?: string;
  variant?: "light" | "dark";
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {audiences.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={audienceWhatsappLink(key, product)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-full flex-col items-center justify-center gap-3 rounded-lg border px-4 py-6 text-center transition-colors ${
              variant === "dark"
                ? "border-white/25 bg-white/5 text-white hover:border-brand hover:bg-brand"
                : "border-ink/15 bg-white text-ink hover:border-brand hover:bg-brand-light"
            }`}
          >
            <Icon className="h-12 w-12 text-brand group-hover:text-current" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CtaSection({
  product,
  id = "solicitud-de-informacion",
}: {
  product?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section bg-brand-light/60">
      <div className="container-page">
        <h2 className="section-title text-center">Solicitud de información</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink">
          Si todavía no eres cliente de TGloves, selecciona el tipo de usuario
          que se ajusta a tu perfil para recibir una atención más personalizada
          por WhatsApp.
        </p>
        <div className="mx-auto mt-8 max-w-3xl">
          <AudienceOptions product={product} />
        </div>
      </div>
    </section>
  );
}

export function CtaModalButton({
  product,
  label = "Solicitud de información",
  className = "btn-primary",
}: {
  product?: string;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <WhatsappIcon className="h-4 w-4" />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-dark/60 p-4"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative w-full max-w-xl rounded-lg border-t-4 border-brand bg-white p-6 shadow-xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-2xl leading-none text-ink-light hover:text-ink"
            >
              ×
            </button>
            <h2
              id={titleId}
              className="text-lg font-bold uppercase tracking-tight text-ink-dark"
            >
              Solicitud de información
            </h2>
            <hr className="my-4 border-ink/10" />
            <p className="text-sm text-ink">
              Si todavía no eres cliente de TGloves, selecciona el tipo de
              usuario que se ajusta a tu perfil para recibir una atención más
              personalizada.
            </p>
            <div className="mt-6">
              <AudienceOptions product={product} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
