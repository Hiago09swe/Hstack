import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Termos de Uso | HStack" };

export default function TermosPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 leading-relaxed text-slate-300">
      <Link href="/" className="text-sm text-sky-300 hover:underline">← Voltar ao site</Link>
      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Termos de Uso</h1>
      <p className="mt-2 text-sm text-slate-500">Última atualização: 31 de outubro de 2026</p>

      <h2 className="mt-10 text-xl font-semibold text-white">1. Aceitação</h2>
      <p className="mt-2">
        Ao acessar este site, você concorda com estes termos. Se não concordar, recomendamos não utilizá-lo.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">2. Finalidade do site</h2>
      <p className="mt-2">
        O site tem caráter informativo e apresenta os serviços da HStack. O conteúdo não constitui proposta
        comercial vinculante; condições, prazos e valores são definidos em contrato específico.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">3. Propriedade intelectual</h2>
      <p className="mt-2">
        Marca, logotipo, textos e demais conteúdos pertencem à HStack e não podem ser copiados ou reutilizados
        sem autorização prévia.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">4. Responsabilidades</h2>
      <p className="mt-2">
        Empregamos esforços para manter o site disponível e correto, mas não garantimos ausência de
        interrupções ou erros. Links para sites de terceiros são de responsabilidade dos respectivos titulares.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">5. Privacidade</h2>
      <p className="mt-2">
        O tratamento de dados pessoais segue nossa{" "}
        <Link href="/privacidade" className="text-sky-300 underline">Política de Privacidade</Link>.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">6. Foro</h2>
      <p className="mt-2">
        Fica eleito o foro da comarca de domicílio da HStack para dirimir controvérsias, conforme a legislação brasileira.
      </p>

      <p className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
        Este texto é um modelo inicial. Recomendamos revisão por um profissional jurídico antes da publicação definitiva.
      </p>
    </article>
  );
}
