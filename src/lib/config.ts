export const SITE = {
  name: "HStack",
  description:
    "Tecnologia, automações e engenharia de software para empresas que querem vender mais.",
  whatsappNumber: "5562984769468",
  logoUrl: "https://i.ibb.co/wNsr8McH/Whats-App-Image-2026-10-30-at-20-34-10.jpg",
} as const;

/** Gera o link direto para o WhatsApp, com mensagem pré-preenchida opcional. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
