import Image from "next/image";

const mechanicalTests = [
  {
    label: "Resistencia a la abrasión",
    scale: "Niveles 1 a 4",
    detail: "100, 500, 2.000 u 8.000 ciclos de lijado sobre la palma.",
  },
  {
    label: "Resistencia al corte por cuchilla",
    scale: "Niveles 1 a 5",
    detail: "Índice 1,2 / 2,5 / 5 / 10 / 20 en el ensayo Coup Test.",
  },
  {
    label: "Resistencia al rasgado",
    scale: "Niveles 1 a 4",
    detail: "10, 25, 50 o 75 newton de fuerza necesaria para desgarrar.",
  },
  {
    label: "Resistencia al punzonamiento",
    scale: "Niveles 1 a 4",
    detail: "20, 60, 100 o 150 newton de fuerza de perforación.",
  },
  {
    label: "Corte TDM (ISO 13997)",
    scale: "Niveles A a F",
    detail:
      "2, 5, 10, 15, 22 o 30 newton. Es el ensayo de referencia para guantes anticorte.",
  },
  {
    label: "Protección al impacto",
    scale: "Opcional (P)",
    detail: "La letra P indica que el guante superó el ensayo de impacto.",
  },
];

export function MechanicalRisks({
  id = "riesgos-mecanicos",
}: {
  id?: string;
}) {
  return (
    <section id={id} className="section bg-ink-dark text-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Normativa
          </p>
          <h2 className="section-title mt-3 text-white">
            Riesgos mecánicos: cómo leer la norma EN 388:2016
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            El marcaje EN 388 resume en seis posiciones el desempeño real del
            guante frente a abrasión, corte, rasgado, punzonamiento, corte TDM e
            impacto. Un <strong>4X43D</strong> como el del T-Elite significa
            abrasión nivel 4, corte TDM nivel D y alta resistencia al rasgado: la
            combinación que exige el manejo de láminas metálicas y vidrio.
          </p>
          <dl className="mt-6 space-y-3">
            {mechanicalTests.map((test) => (
              <div
                key={test.label}
                className="rounded-md border border-white/15 bg-white/5 p-3"
              >
                <dt className="text-sm font-semibold text-white">
                  {test.label}{" "}
                  <span className="font-normal text-brand">({test.scale})</span>
                </dt>
                <dd className="mt-1 text-xs text-white/70">{test.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-lg bg-white p-4">
          <Image
            src="/images/home/riesgos-mecanicos-guantes.webp"
            alt="Infografía de la norma EN 388:2016 con los niveles de abrasión, corte, rasgado, punzonamiento, corte TDM e impacto"
            width={1000}
            height={699}
            sizes="(max-width: 1024px) 90vw, 560px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

const chemicalLevels = [
  { level: "1", time: "> 10 min" },
  { level: "2", time: "> 30 min" },
  { level: "3", time: "> 60 min" },
  { level: "4", time: "> 120 min" },
  { level: "5", time: "> 240 min" },
  { level: "6", time: "> 480 min" },
];

const chemicalTypes = [
  {
    type: "Tipo A",
    detail:
      "Al menos 6 químicos de la lista con nivel de permeación ≥ 2. Es el caso del T-Max Nitrilo 18 (AJKLOP).",
  },
  {
    type: "Tipo B",
    detail: "Al menos 3 químicos con nivel de permeación ≥ 2.",
  },
  {
    type: "Tipo C",
    detail: "Al menos 1 químico con nivel de permeación ≥ 1.",
  },
  {
    type: "EN ISO 374-5 VIRUS",
    detail:
      "Barrera comprobada frente a bacterias, hongos y virus (ensayo ISO 16604).",
  },
];

export function ChemicalRisks({ id = "riesgos-quimicos" }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="rounded-lg border border-ink/10 bg-brand-light/40 p-4">
          <Image
            src="/images/home/guante-t-max.webp"
            alt="Técnica con guantes de nitrilo TGloves T-Max trasvasando una solución química en laboratorio"
            width={1200}
            height={670}
            sizes="(max-width: 1024px) 90vw, 560px"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Normativa
          </p>
          <h2 className="section-title mt-3">
            Riesgos químicos: permeación, degradación y tipo de guante
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            En protección química no basta con que el guante “resista”: la norma
            EN ISO 374-1 mide el <strong>tiempo de paso</strong> de cada
            sustancia a través del material y le asigna un nivel del 1 al 6. La
            degradación, en cambio, indica cuánto se deteriora el material tras
            el contacto. Ambos datos definen cuánto tiempo puedes usar el guante
            con seguridad.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-ink/10">
            <table className="w-full text-left text-xs">
              <caption className="sr-only">
                Niveles de permeación EN ISO 374-1 y su tiempo de paso
              </caption>
              <thead className="bg-brand text-white">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Nivel
                  </th>
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Tiempo de paso
                  </th>
                </tr>
              </thead>
              <tbody>
                {chemicalLevels.map((row, index) => (
                  <tr
                    key={row.level}
                    className={index % 2 ? "bg-brand-light/50" : "bg-white"}
                  >
                    <th scope="row" className="px-3 py-2 font-semibold text-ink-dark">
                      {row.level}
                    </th>
                    <td className="px-3 py-2">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className="mt-5 space-y-2 text-xs text-ink">
            {chemicalTypes.map((item) => (
              <div key={item.type} className="flex gap-2">
                <dt className="w-32 shrink-0 font-semibold text-ink-dark">
                  {item.type}
                </dt>
                <dd className="text-ink-light">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
