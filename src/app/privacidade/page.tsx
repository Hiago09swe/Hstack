import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = { title: "Política de Privacidade | HStack" };

export default function PrivacidadePage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 leading-relaxed text-neutral-300">
      <Link href="/" className="text-sm text-white hover:underline">← Voltar ao site</Link>
      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-neutral-500">Última atualização: 31 de outubro de 2026</p>

      <h2 className="mt-10 text-xl font-semibold text-white">1. Quem somos</h2>
      <p className="mt-2">
        A HStack é uma empresa de tecnologia, automações e engenharia de software. Esta política explica
        como tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">2. Dados que coletamos</h2>
      <p className="mt-2">
        Coletamos apenas o necessário: dados que você nos envia ao entrar em contato (como nome e telefone via
        WhatsApp) e dados técnicos de navegação, quando você autoriza cookies de análise ou marketing.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">3. Finalidades e bases legais</h2>
      <p className="mt-2">
        Usamos seus dados para responder solicitações, elaborar propostas e melhorar o site. As bases legais
        são o consentimento, a execução de procedimentos preliminares a contrato e o legítimo interesse.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">4. Cookies</h2>
      <p className="mt-2">
        Cookies necessários garantem o funcionamento do site. Cookies de análise e marketing só são usados com
        sua autorização, que pode ser alterada a qualquer momento limpando os dados do site no navegador.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">5. Seus direitos</h2>
      <p className="mt-2">
        Você pode solicitar confirmação de tratamento, acesso, correção, portabilidade, anonimização, eliminação
        dos dados e revogação do consentimento. Para exercer esses direitos, fale conosco pelo{" "}
        <a className="text-white underline" href={whatsappLink("Olá! Quero exercer meus direitos de titular (LGPD).")} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">6. Compartilhamento e segurança</h2>
      <p className="mt-2">
        Não vendemos dados pessoais. Podemos compartilhá-los com provedores que operam o site e o atendimento,
        sempre com medidas técnicas e organizacionais de segurança adequadas.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">7. Retenção</h2>
      <p className="mt-2">
        Mantemos os dados pelo tempo necessário para cumprir as finalidades acima ou obrigações legais, e
        depois os eliminamos ou anonimizamos.
      </p>

      <p className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-400">
        Este texto é um modelo inicial. Recomendamos revisão por um profissional jurídico antes da publicação definitiva.
      </p>
    </article>
  );
}
