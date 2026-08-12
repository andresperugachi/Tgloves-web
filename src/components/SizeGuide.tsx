import Image from "next/image";

const sizes = [
  { size: "7 (S)", palm: "178 mm", length: "220 mm" },
  { size: "8 (M)", palm: "203 mm", length: "230 mm" },
  { size: "9 (L)", palm: "229 mm", length: "240 mm" },
  { size: "10 (XL)", palm: "254 mm", length: "250 mm" },
  { size: "11 (XXL)", palm: "279 mm", length: "260 mm" },
];

export default function SizeGuide({ id = "talla-de-guantes" }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="section-title">¿Cómo seleccionar la talla de mi guante?</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            Una talla incorrecta es la principal causa de que un guante deje de
            proteger: si queda holgado pierdes destreza y aumenta el riesgo de
            atrapamiento; si queda ajustado se acelera la fatiga y el guante se
            rompe antes. Toma dos medidas sobre tu mano dominante y compáralas
            con la tabla.
          </p>
          <ol className="mt-5 space-y-3 text-sm text-ink">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                A
              </span>
              <span>
                <strong>Longitud:</strong> mide desde la punta del dedo medio
                hasta la base de la palma (línea de la muñeca).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                B
              </span>
              <span>
                <strong>Perímetro de palma:</strong> rodea la palma con la cinta
                a la altura de los nudillos, sin incluir el pulgar.
              </span>
            </li>
          </ol>
          <div className="mt-6 overflow-hidden rounded-lg border border-ink/10">
            <table className="w-full text-left text-xs">
              <caption className="sr-only">
                Tabla de tallas de guantes TGloves según perímetro y longitud de
                palma
              </caption>
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Talla
                  </th>
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Perímetro de palma (B)
                  </th>
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Longitud de mano (A)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, index) => (
                  <tr
                    key={row.size}
                    className={index % 2 ? "bg-brand-light/50" : "bg-white"}
                  >
                    <th scope="row" className="px-3 py-2 font-semibold text-ink-dark">
                      {row.size}
                    </th>
                    <td className="px-3 py-2">{row.palm}</td>
                    <td className="px-3 py-2">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-light">
            Referencia EN ISO 21420. Si tu medida está entre dos tallas, elige la
            mayor en guantes químicos y la menor en guantes de precisión.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/images/home/talla-de-guantes.webp"
            alt="Esquema de medición de la mano: longitud A y perímetro de palma B para elegir la talla del guante"
            width={719}
            height={699}
            sizes="(max-width: 1024px) 90vw, 520px"
            className="mx-auto h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
