import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "HStack | Tecnologia e automação para empresas que querem vender mais",
  description: SITE.description,
  icons: { icon: SITE.logoUrl },
  openGraph: {
    title: "HStack | Tecnologia e automação para vender mais",
    description: SITE.description,
    images: [SITE.logoUrl],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
