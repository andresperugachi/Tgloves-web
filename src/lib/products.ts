export type CategorySlug =
  | "guantes-proteccion-mecanica"
  | "guantes-proteccion-quimica";

export type ChemicalPerformance = {
  chemical: string;
  code: string;
  level: number;
  degradation?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: CategorySlug;
  code: string;
  image: string;
  imageAlt: string;
  datasheet: string;
  tagline: string;
  intro: string;
  details: string[];
  properties: string[];
  coating: string;
  liner: string;
  colors: string;
  sizes: string[];
  packaging: string[];
  origin: string;
  en388: {
    marking: string;
    abrasion: string;
    cut: string;
    tear: string;
    puncture: string;
    tdm: string;
    standard: string;
  };
  chemical?: {
    marking: string;
    standard: string;
    virus: boolean;
    performances: ChemicalPerformance[];
  };
  certifications: string[];
  uses: string[];
  industries: string[];
};

export const categories: Record<
  CategorySlug,
  {
    slug: CategorySlug;
    name: string;
    h1: string;
    title: string;
    description: string;
    banner: string;
    bannerAlt: string;
    intro: string;
  }
> = {
  "guantes-proteccion-mecanica": {
    slug: "guantes-proteccion-mecanica",
    name: "Guantes de protección mecánica",
    h1: "Guantes de Protección Mecánica",
    title: "Guantes de Protección Mecánica certificados EN 388",
    description:
      "Guantes anticorte, antivibración y de precisión certificados EN 388:2016. Recubrimientos de nitrilo, látex y poliuretano para metalmecánica, automotriz, construcción y logística.",
    banner: "/images/categorias/banner-guantes-proteccion-mecanica.webp",
    bannerAlt:
      "Operario con guantes de protección mecánica TGloves trabajando en un torno industrial",
    intro:
      "La línea mecánica TGloves protege las manos frente a cortes, abrasión, rasgado y punzonamiento sin sacrificar destreza. Cada modelo está ensayado bajo EN 388:2016 e identificado con su marcaje de prestaciones, para que elijas el nivel de protección exacto que exige la tarea.",
  },
  "guantes-proteccion-quimica": {
    slug: "guantes-proteccion-quimica",
    name: "Guantes de protección química",
    h1: "Guantes de Protección Química",
    title: "Guantes de Protección Química certificados EN ISO 374",
    description:
      "Guantes de nitrilo y PVC de 13\" y 18\" certificados EN ISO 374-1 y EN ISO 374-5 (VIRUS) para manipulación de ácidos, solventes y agentes químicos en industria petroquímica, alimentaria y agrícola.",
    banner: "/images/categorias/banner-guantes-proteccion-quimica.webp",
    bannerAlt:
      "Técnica de laboratorio con guantes de nitrilo TGloves T-MAX trasvasando un reactivo químico",
    intro:
      "La línea T-MAX está formulada para el contacto prolongado con químicos: nitrilo y PVC de alto espesor, longitudes de 13\" y 18\" y niveles de permeación declarados bajo EN ISO 374-1. Filtra por tipo de recubrimiento y verifica el desempeño frente a cada sustancia antes de decidir.",
  },
};

export const products: Product[] = [
  {
    slug: "guante-anticorte-t-elite",
    name: "Guante Anticorte T-Elite",
    shortName: "T-Elite",
    category: "guantes-proteccion-mecanica",
    code: "135300",
    image: "/images/productos/guante-anticorte-t-elite.webp",
    imageAlt:
      "Guante anticorte TGloves T-Elite de tejido HPPE gris con recubrimiento de espuma de nitrilo negro",
    datasheet: "/fichas/ficha-tecnica-guante-anticorte-t-elite.pdf",
    tagline: "Máxima resistencia al corte nivel D con tacto de precisión",
    intro:
      "El T-Elite es el guante anticorte de mayor desempeño de la línea TGloves: tejido de HPPE con fibra de vidrio y recubrimiento de espuma de nitrilo que alcanza nivel D de resistencia al corte TDM. Combina protección superior frente a filos con un ajuste ceñido que permite trabajar sin perder sensibilidad.",
    details: [
      "Guante tejido de polietileno de alto rendimiento (HPPE) y fibra de vidrio.",
      "La fibra HPPE es muy liviana, produce poca pelusa y no absorbe líquidos con facilidad; su densidad superior aporta más resistencia a la tensión, al rasgado y a la exposición a agentes químicos.",
      "La fibra de vidrio en forma de tejido ofrece una combinación excelente de elevada resistencia al corte y buena estabilidad dimensional.",
      "Recubrimiento de espuma de nitrilo con nivel superior de agarre y resistencia a la abrasión.",
      "El grosor y la tecnología del recubrimiento permiten la circulación de aire, impidiendo la acumulación de sudor y calor.",
      "Excelente adecuación del tejido a la mano del usuario y alto nivel de flexibilidad.",
      "Impide el paso de aceites y sus derivados.",
    ],
    properties: [
      "Anticorte",
      "Resistente a la abrasión",
      "Repelente a aceites",
      "Transpirable",
      "Agarre en seco",
      "Sin costuras",
    ],
    coating: "Espuma de nitrilo",
    liner: "75% HPPE / 25% fibra de vidrio",
    colors: "Tejido gris, recubrimiento negro",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa", "10 bolsas / caja", "120 pares / caja"],
    origin: "China",
    en388: {
      marking: "4X43D",
      abrasion: "4",
      cut: "X",
      tear: "4",
      puncture: "3",
      tdm: "D",
      standard: "EN 388:2016",
    },
    certifications: [
      "EN 388:2016",
      "EN 420:2003+A1:2009",
      "Certificado CE #2777/11450-02/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
      "OEKO-TEX Standard 100",
    ],
    uses: [
      "Operación mecánica y manejo de materiales pesados",
      "Manipulación de vidrio y láminas metálicas",
      "Ingeniería automotriz y mecánica",
      "Cerrajería y carpintería",
    ],
    industries: ["Metalmecánica", "Automotriz", "Vidrio", "Construcción"],
  },
  {
    slug: "guante-t-flex",
    name: "Guante T-Flex",
    shortName: "T-Flex",
    category: "guantes-proteccion-mecanica",
    code: "111801",
    image: "/images/productos/guante-t-flex.webp",
    imageAlt:
      "Guante TGloves T-Flex de nylon y spandex azul con recubrimiento de espuma de nitrilo negro",
    datasheet: "/fichas/ficha-tecnica-guante-t-flex.pdf",
    tagline: "Destreza y ajuste de segunda piel para ensamblaje delicado",
    intro:
      "Tejido en nylon con spandex y recubierto con espuma de nitrilo ultra fina, el T-Flex ofrece el ajuste más flexible de la línea mecánica. Es la elección para tareas que exigen sensibilidad táctil sostenida durante toda la jornada.",
    details: [
      "Guante tejido en nylon + spandex de alta elasticidad.",
      "Recubrimiento de espuma de nitrilo ultra fina con acabado uniforme en la palma.",
      "El grosor y la tecnología del recubrimiento permiten la circulación de aire, impidiendo la acumulación de sudor y calor.",
      "Excelente adecuación del tejido a la forma de la mano y alto nivel de flexibilidad.",
      "Impide el paso de aceites y sus derivados.",
    ],
    properties: [
      "Alta destreza",
      "Transpirable",
      "Repelente a aceites",
      "Agarre en seco",
      "Sin costuras",
    ],
    coating: "Espuma de nitrilo",
    liner: "95% nylon / 5% spandex",
    colors: "Tejido azul, recubrimiento negro",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa", "10 bolsas / caja", "120 pares / caja"],
    origin: "China",
    en388: {
      marking: "4121X",
      abrasion: "4",
      cut: "1",
      tear: "2",
      puncture: "1",
      tdm: "X",
      standard: "EN 388:2016",
    },
    certifications: [
      "EN 388:2016",
      "EN 420:2003+A1:2009",
      "Certificado CE #2777/12378-01/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
    ],
    uses: [
      "Ensamblaje preciso y delicado",
      "Trabajo en campo e inspecciones",
      "Operaciones de cableado",
      "Manipulación de objetos pequeños y cargas medianas",
    ],
    industries: ["Manufactura", "Eléctrico", "Automotriz", "Logística"],
  },
  {
    slug: "guante-t-performance",
    name: "Guante T-Performance",
    shortName: "T-Performance",
    category: "guantes-proteccion-mecanica",
    code: "134320",
    image: "/images/productos/guante-t-performance.webp",
    imageAlt:
      "Guante anticorte TGloves T-Performance de HPPE con puntos de nitrilo en la palma",
    datasheet: "/fichas/ficha-tecnica-guante-t-performance.pdf",
    tagline: "Anticorte con puntos de nitrilo para agarre reforzado",
    intro:
      "100% HPPE con recubrimiento de espuma de nitrilo y puntos de nitrilo en la palma: el T-Performance suma protección anticorte nivel B y una superficie de agarre que no cede con piezas lisas, aceitadas o de gran peso.",
    details: [
      "Guante tejido de polietileno de alto rendimiento (HPPE) 100%.",
      "La fibra HPPE es muy liviana, produce poca pelusa y no absorbe líquidos con facilidad; su mayor densidad aporta resistencia a la tensión, al rasgado y a la exposición a agentes químicos.",
      "Recubrimiento de espuma de nitrilo ultra fina con puntos de nitrilo para un nivel superior de agarre y resistencia a la abrasión.",
      "El grosor y la tecnología del recubrimiento permiten la circulación de aire, impidiendo la acumulación de sudor y calor.",
      "Excelente adecuación del tejido a la mano y alto nivel de flexibilidad.",
      "Impide el paso de aceites y sus derivados.",
    ],
    properties: [
      "Anticorte",
      "Agarre reforzado",
      "Resistente a la abrasión",
      "Repelente a aceites",
      "Transpirable",
      "Sin costuras",
    ],
    coating: "Espuma de nitrilo con puntos de nitrilo",
    liner: "100% HPPE",
    colors: "Tejido gris, recubrimiento negro",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa", "10 bolsas / caja", "120 pares / caja"],
    origin: "China",
    en388: {
      marking: "4X42B",
      abrasion: "4",
      cut: "X",
      tear: "4",
      puncture: "2",
      tdm: "B",
      standard: "EN 388:2016",
    },
    certifications: [
      "EN 388:2016",
      "EN 420:2003+A1:2009",
      "Certificado CE #2777/12761-02/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
      "OEKO-TEX Standard 100",
    ],
    uses: [
      "Operación mecánica y manejo de materiales pesados",
      "Manipulación de vidrio y metales",
      "Ingeniería automotriz y mecánica",
      "Cerrajería y carpintería",
    ],
    industries: ["Metalmecánica", "Automotriz", "Construcción", "Vidrio"],
  },
  {
    slug: "guante-latex-t-grip-plus",
    name: "Guante Látex T-Grip Plus",
    shortName: "T-Grip Plus",
    category: "guantes-proteccion-mecanica",
    code: "122210",
    image: "/images/productos/guante-latex-t-grip-plus.webp",
    imageAlt:
      "Guante TGloves T-Grip Plus de poliéster y algodón con recubrimiento de látex corrugado gris",
    datasheet: "/fichas/ficha-tecnica-guante-latex-t-grip-plus.pdf",
    tagline: "Látex corrugado para agarre firme en cargas pesadas",
    intro:
      "El T-Grip Plus combina un tejido de poliéster y algodón con recubrimiento de látex corrugado en la palma. Es el guante de trabajo general por excelencia: agarre agresivo, mayor durabilidad y dorso ventilado para jornadas largas.",
    details: [
      "Guante tejido de poliéster y algodón con agradable adecuación a la mano.",
      "Recubrimiento en la palma de látex corrugado con mayor adherencia.",
      "El recubrimiento parcial dota de circulación de aire en el dorso de la mano, evitando la sensación de disconfort térmico.",
      "Alto grado de protección para trabajos que implican esfuerzo y roce continuo.",
      "Mejor desempeño y mayor durabilidad frente a un guante de trabajo convencional.",
    ],
    properties: [
      "Agarre reforzado",
      "Resistente al rasgado",
      "Transpirable",
      "Uso general",
    ],
    coating: "Látex corrugado",
    liner: "70% poliéster / 30% algodón",
    colors: "Tejido negro, recubrimiento gris",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa", "10 bolsas / caja", "120 pares / caja"],
    origin: "China",
    en388: {
      marking: "3141X",
      abrasion: "3",
      cut: "1",
      tear: "4",
      puncture: "1",
      tdm: "X",
      standard: "EN 388:2016",
    },
    certifications: [
      "EN 388:2016",
      "EN 420:2003+A1:2009",
      "Certificado CE #2777/10017-02/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
    ],
    uses: [
      "Mantenimiento en general",
      "Ensamblaje de piezas que no requieren alta precisión",
      "Manejo manual de cargas medianas y pesadas",
      "Distribución de productos en cadena",
    ],
    industries: ["Mantenimiento", "Logística", "Construcción", "Agroindustria"],
  },
  {
    slug: "guante-t-sense",
    name: "Guante T-Sense",
    shortName: "T-Sense",
    category: "guantes-proteccion-mecanica",
    code: "140813",
    image: "/images/productos/guante-t-sense.webp",
    imageAlt:
      "Guante TGloves T-Sense de nylon negro con recubrimiento de poliuretano en la palma",
    datasheet: "/fichas/ficha-tecnica-guante-t-sense.pdf",
    tagline: "Poliuretano ultra delgado para manipulación de precisión",
    intro:
      "Tejido en nylon 100% y recubierto en poliuretano, el T-Sense mantiene la sensibilidad de los dedos casi intacta. Es el guante indicado para electrónica, control de calidad y montaje fino donde el tacto define el resultado.",
    details: [
      "Guante tejido en nylon con recubrimiento de poliuretano.",
      "Buen agarre en seco y húmedo.",
      "Buena resistencia al rasgado y a la abrasión.",
      "La capa de poliuretano es muy delgada, lo que otorga mayor flexibilidad y facilidad de movimiento.",
      "Excelente adecuación del tejido a la forma de la mano.",
      "No es un guante diseñado para trabajar con alta exposición a elementos de corte o agentes corrosivos.",
    ],
    properties: [
      "Alta destreza",
      "Agarre en seco",
      "Agarre en húmedo",
      "Transpirable",
      "Sin costuras",
    ],
    coating: "Poliuretano",
    liner: "100% nylon",
    colors: "Tejido negro, recubrimiento negro",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa", "10 bolsas / caja", "120 pares / caja"],
    origin: "China",
    en388: {
      marking: "4131X",
      abrasion: "4",
      cut: "1",
      tear: "3",
      puncture: "1",
      tdm: "X",
      standard: "EN 388:2016",
    },
    certifications: [
      "EN 388:2016",
      "EN 420:2003+A1:2009",
      "Certificado CE #2777/10324-02/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
    ],
    uses: [
      "Ensamblaje preciso de piezas electrónicas",
      "Operaciones de bajo impacto y procesos de control",
      "Embalaje de cargas livianas",
      "Manipulación de herramientas de precisión",
    ],
    industries: ["Electrónica", "Manufactura", "Control de calidad", "Logística"],
  },
  {
    slug: "guante-t-vibe",
    name: "Guante T-Vibe",
    shortName: "T-Vibe",
    category: "guantes-proteccion-mecanica",
    code: "125415",
    image: "/images/productos/guante-t-vibe.webp",
    imageAlt:
      "Guante antivibración TGloves T-Vibe de poliéster negro con recubrimiento de espuma de látex",
    datasheet: "/fichas/ficha-tecnica-guante-t-vibe.pdf",
    tagline: "Antivibración certificado EN ISO 10819 para herramienta de impacto",
    intro:
      "El T-Vibe está diseñado para amortiguar las vibraciones mano-brazo que generan sierras, martillos rompedores y taladros percutores. Su palma con espuma de látex distribuye y absorbe el impacto, reduciendo la fatiga y el riesgo de lesión por exposición prolongada.",
    details: [
      "Guante tejido en poliéster con recubrimiento de espuma de látex.",
      "El diseño de la palma y los dedos permite la distribución y absorción de las vibraciones que reciben las manos durante el manejo de herramientas de impacto.",
      "Puño tejido y elástico para la estabilidad del guante.",
      "El tipo de tejido permite la circulación de aire dentro del guante, evitando la acumulación de sudor.",
      "Protege al usuario de las vibraciones mecánicas directas mano-brazo.",
      "Guante de uso obligatorio para la utilización de herramientas a motor portátiles.",
    ],
    properties: [
      "Antivibración",
      "Agarre reforzado",
      "Transpirable",
      "Resistente al rasgado",
    ],
    coating: "Espuma de látex",
    liner: "100% poliéster",
    colors: "Tejido negro, recubrimiento negro",
    sizes: ["9 (L) – talla única"],
    packaging: ["6 pares / bolsa", "10 bolsas / caja", "60 pares / caja"],
    origin: "China",
    en388: {
      marking: "EN 388 / EN ISO 10819",
      abrasion: "4",
      cut: "3",
      tear: "4",
      puncture: "4",
      tdm: "X",
      standard: "EN 388:2003 · EN ISO 10819:1997",
    },
    certifications: [
      "EN 388:2003",
      "EN 420:2003",
      "EN ISO 10819:1997 (vibraciones mano-brazo)",
      "Directiva 89/686/EEC",
      "Organismo Notificado No. 0321 – SATRA Technology Centre",
    ],
    uses: [
      "Manejo de sierras eléctricas, martillos rompedores y taladros percutores",
      "Operación de maquinaria pesada para movimiento de tierras y grúas",
      "Trabajos forestales, agrícolas y mineros",
      "Obras públicas y explotación de canteras",
    ],
    industries: ["Construcción", "Minería", "Forestal", "Obra pública"],
  },
  {
    slug: "guante-t-max-pvc-18",
    name: "Guante T-Max PVC 18",
    shortName: "T-Max PVC 18",
    category: "guantes-proteccion-quimica",
    code: "B-G45-G",
    image: "/images/productos/guante-t-max-pvc-18.webp",
    imageAlt:
      "Guante de protección química TGloves T-Max PVC de 18 pulgadas color verde con forro de algodón",
    datasheet: "/fichas/ficha-tecnica-guante-t-max-pvc-18.pdf",
    tagline: "Doble revestimiento de PVC de 450 mm con agarre granular",
    intro:
      "El T-Max PVC 18 protege mano y antebrazo con un doble revestimiento de PVC de 450 mm y un revestimiento granular adicional que sostiene el agarre incluso en aplicaciones húmedas. Su forro de jersey cepillado y el tratamiento antiolor lo hacen apto para turnos completos de manipulación general y química.",
    details: [
      "Doble revestimiento de PVC resistente y flexible, con revestimiento granular adicional en la mano para un excelente agarre en aplicaciones húmedas y secas.",
      "El aumento del grosor proporciona resistencia adicional al desgaste y la abrasión.",
      "Forro de jersey cepillado 100% algodón para confort en uso prolongado.",
      "Modelo de 450 mm (18\") para dar la protección requerida del antebrazo.",
      "Guantelete de modelo acampanado para facilitar su extracción.",
      "Tratamiento Actifresh / Sanitized que aporta protección contra organismos que producen mal olor e infecciones por contaminación cruzada.",
      "No se recomienda su uso con productos químicos corrosivos concentrados.",
    ],
    properties: [
      "Protección química",
      "Protección de antebrazo 18\"",
      "Agarre en húmedo",
      "Forro de algodón",
      "Tratamiento antiolor",
      "Protección VIRUS",
    ],
    coating: "PVC",
    liner: "100% algodón (jersey cepillado)",
    colors: "Verde",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa"],
    origin: "Bangladesh",
    en388: {
      marking: "4121X",
      abrasion: "4",
      cut: "1",
      tear: "2",
      puncture: "1",
      tdm: "X",
      standard: "EN 388:2016",
    },
    chemical: {
      marking: "JKLMPST",
      standard: "EN ISO 374-1:2016 · EN ISO 374-5:2016",
      virus: true,
      performances: [
        { chemical: "n-Heptano", code: "J", level: 2 },
        { chemical: "Hidróxido de sodio 40%", code: "K", level: 6 },
        { chemical: "Ácido sulfúrico 96%", code: "L", level: 3 },
        { chemical: "Ácido nítrico 65%", code: "M", level: 3 },
        { chemical: "Peróxido de hidrógeno 30%", code: "P", level: 6 },
        { chemical: "Ácido fluorhídrico 40%", code: "S", level: 5 },
        { chemical: "Formaldehído 37%", code: "T", level: 6 },
      ],
    },
    certifications: [
      "EN 420:2003+A1:2009",
      "EN 388:2016",
      "EN ISO 374-1:2016",
      "EN ISO 374-5:2016 (VIRUS)",
      "Certificado CE #2777/10153-03/E00-00",
      "Organismo Notificado No. 2777 – SATRA Technology",
    ],
    uses: [
      "Manipulación general en planta y bodega",
      "Trasvase y limpieza con soluciones químicas",
      "Procesos húmedos con necesidad de agarre",
      "Tareas con exposición del antebrazo",
    ],
    industries: ["Industria general", "Petroquímica", "Alimentos", "Saneamiento"],
  },
  {
    slug: "guante-t-max-nitrilo-13",
    name: "Guante T-Max Nitrilo 13",
    shortName: "T-Max Nitrilo 13",
    category: "guantes-proteccion-quimica",
    code: "RNF15-13",
    image: "/images/productos/guante-t-max-nitrilo-13.webp",
    imageAlt:
      "Guante de nitrilo TGloves T-Max de 13 pulgadas color verde con palma de diamante invertido",
    datasheet: "/fichas/ficha-tecnica-guante-t-max-nitrilo-13.pdf",
    tagline: "Nitrilo flocado de 13\" sin proteínas de látex",
    intro:
      "Guante de nitrilo de 13 pulgadas con flocado interno y palma con acabado de diamante invertido. Libre de proteínas de látex y de silicona, resiste solventes, aceites, grasas y lejías, y protege frente a bacterias, virus y hongos bajo EN ISO 374-5.",
    details: [
      "Guante de nitrilo de 13\" de longitud para riesgos químicos por manejo de sustancias.",
      "No contiene proteínas de látex: apto para personas alérgicas al látex.",
      "Palma con acabado de diamante invertido y puntas texturizadas para un agarre fácil.",
      "Flocado interno de algodón que absorbe el sudor y facilita el calce.",
      "Resistencia a solventes, aceites, grasas y lejías. Sin silicona.",
      "Protección contra bacterias, virus y microorganismos según EN ISO 374-5:2016.",
      "Espesor de palma 0,40 mm y longitud mínima 330 mm en todas las tallas.",
    ],
    properties: [
      "Protección química",
      "Protección VIRUS",
      "Sin proteínas de látex",
      "Sin silicona",
      "Flocado interno",
      "Agarre en húmedo",
    ],
    coating: "Nitrilo",
    liner: "Flocado de algodón",
    colors: "Verde",
    sizes: ["S", "M", "L", "XL", "XXL"],
    packaging: ["12 pares / bolsa"],
    origin: "Importado",
    en388: {
      marking: "EN 388:2016+A1:2018",
      abrasion: "4",
      cut: "1",
      tear: "0",
      puncture: "2",
      tdm: "X",
      standard: "EN 388:2016+A1:2018",
    },
    chemical: {
      marking: "JKLNOPT",
      standard: "EN ISO 374-1:2016+A1:2018 · EN ISO 374-5:2016",
      virus: true,
      performances: [
        { chemical: "Metanol", code: "A", level: 2 },
        { chemical: "n-Heptano", code: "J", level: 6, degradation: "5,1%" },
        {
          chemical: "Hidróxido de sodio 40%",
          code: "K",
          level: 6,
          degradation: "-13,3%",
        },
        { chemical: "Ácido sulfúrico 96%", code: "L", level: 3 },
        { chemical: "Ácido acético 99%", code: "N", level: 3 },
        { chemical: "Hidróxido de amonio 25%", code: "O", level: 5 },
        {
          chemical: "Peróxido de hidrógeno 30%",
          code: "P",
          level: 6,
          degradation: "-5,2%",
        },
        {
          chemical: "Formaldehído 37%",
          code: "T",
          level: 6,
          degradation: "-3,0%",
        },
      ],
    },
    certifications: [
      "Reglamento (UE) 2016/425",
      "EN ISO 21420:2020",
      "EN 388:2016+A1:2018",
      "EN ISO 374-1:2016+A1:2018",
      "EN ISO 374-5:2016 (VIRUS)",
      "EN ISO 18889:2020",
    ],
    uses: [
      "Manejo de sustancias en industria petroquímica y automotriz",
      "Imprentas y procesos con solventes",
      "Procesamiento de alimentos",
      "Sector agrícola, acuícola y ganadero",
    ],
    industries: ["Petroquímica", "Alimentos", "Agrícola", "Acuícola"],
  },
  {
    slug: "guante-t-max-nitrilo-18",
    name: "Guante T-Max Nitrilo 18",
    shortName: "T-Max Nitrilo 18",
    category: "guantes-proteccion-quimica",
    code: "TON-TMAX-18",
    image: "/images/productos/guante-t-max-nitrilo-18.webp",
    imageAlt:
      "Guante de nitrilo TGloves T-Max de 18 pulgadas color verde para protección química",
    datasheet: "/fichas/ficha-tecnica-guante-t-max-nitrilo-18.pdf",
    tagline: "Nitrilo Tipo A de 18\" con aprobación para contacto con alimentos",
    intro:
      "Con 18 pulgadas de longitud y 22,8 mil de espesor, el T-Max Nitrilo 18 es la barrera química más completa de la línea: clasificación Tipo A bajo EN ISO 374-1 (AJKLOP), protección VIRUS y aprobación para contacto con alimentos.",
    details: [
      "Guante de nitrilo de 18\" de longitud que protege mano y antebrazo del contacto con sustancias químicas.",
      "Espesor de 22,8346 mil para una barrera reforzada frente a permeación.",
      "Clasificación Tipo A según EN ISO 374-1:2016+A1:2018 con marcaje AJKLOP (seis químicos ensayados).",
      "Certificado bajo EN 388, EN 374 y EN 420, con aprobación para contacto con alimentos.",
      "Protección contra microorganismos según EN ISO 374-5:2016 (VIRUS).",
      "Indicado para industrias con exposición continua a sustancias químicas.",
    ],
    properties: [
      "Protección química",
      "Protección VIRUS",
      "Tipo A",
      "Protección de antebrazo 18\"",
      "Contacto con alimentos",
      "Sin proteínas de látex",
    ],
    coating: "Nitrilo",
    liner: "Sin forro",
    colors: "Verde",
    sizes: ["8 (M)", "9 (L)"],
    packaging: ["12 pares / bolsa"],
    origin: "Importado",
    en388: {
      marking: "4102X",
      abrasion: "4",
      cut: "1",
      tear: "0",
      puncture: "2",
      tdm: "X",
      standard: "EN 388:2016+A1:2018",
    },
    chemical: {
      marking: "AJKLOP",
      standard: "EN ISO 374-1:2016+A1:2018 Tipo A · EN ISO 374-5:2016",
      virus: true,
      performances: [
        { chemical: "Metanol", code: "A", level: 4, degradation: "56,1%" },
        { chemical: "n-Heptano", code: "J", level: 6, degradation: "16,3%" },
        {
          chemical: "Hidróxido de sodio 40%",
          code: "K",
          level: 6,
          degradation: "-3,4%",
        },
        { chemical: "Ácido sulfúrico 96%", code: "L", level: 4, degradation: "65,3%" },
        {
          chemical: "Hidróxido de amonio 25%",
          code: "O",
          level: 6,
          degradation: "9,6%",
        },
        {
          chemical: "Peróxido de hidrógeno 30%",
          code: "P",
          level: 6,
          degradation: "13,0%",
        },
      ],
    },
    certifications: [
      "EN 388:2016+A1:2018",
      "EN ISO 374-1:2016+A1:2018 Tipo A",
      "EN ISO 374-5:2016 (VIRUS)",
      "EN 420",
      "Aprobación para contacto con alimentos",
    ],
    uses: [
      "Manejo de sustancias en industria petroquímica y automotriz",
      "Imprentas y áreas con solventes",
      "Procesamiento de alimentos",
      "Sector agrícola, acuícola y ganadero",
    ],
    industries: ["Petroquímica", "Alimentos", "Agrícola", "Automotriz"],
  },
];

export function getProduct(category: CategorySlug, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function productsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function productPath(product: Product) {
  return `/${product.category}/${product.slug}`;
}

export const cutLevelLabel: Record<string, string> = {
  A: "Corte A",
  B: "Corte B",
  C: "Corte C",
  D: "Corte D",
  E: "Corte E",
  F: "Corte F",
};
