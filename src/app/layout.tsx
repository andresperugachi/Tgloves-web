import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import WhatsappFab from "@/components/WhatsappFab";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "TGloves | Guantes de protección industrial certificados en Ecuador",
    template: "%s | TGloves",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "guantes de seguridad",
    "guantes anticorte",
    "guantes de nitrilo",
    "guantes de protección química",
    "EN 388",
    "EN ISO 374",
    "TGloves Ecuador",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "TGloves | Guantes de protección industrial certificados",
    description: siteConfig.description,
    images: [
      {
        url: "/images/home/hero-personajes.webp",
        width: 1400,
        height: 782,
        alt: "Operarios con guantes de protección mecánica y química TGloves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TGloves | Guantes de protección industrial certificados",
    description: siteConfig.description,
    images: ["/images/home/hero-personajes.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7931d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC" className={poppins.variable}>
      <body className="font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsappFab />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}/logo-tgloves.svg`,
            description: siteConfig.description,
            areaServed: "EC",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: `+${siteConfig.whatsapp.phone}`,
                contactType: "sales",
                availableLanguage: ["es"],
              },
            ],
            address: siteConfig.locations.map((location) => ({
              "@type": "PostalAddress",
              addressLocality: location.city,
              streetAddress: location.address,
              addressCountry: "EC",
              telephone: location.phones[0],
            })),
          }}
        />
      </body>
    </html>
  );
}
