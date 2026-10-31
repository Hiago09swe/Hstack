import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { whatsappLink } from "@/lib/config";

const SERVICES = [
  {
    title: "Automação de processos",
    text: "Eliminamos tarefas manuais do seu time: propostas, cobranças, follow-ups e relatórios rodando sozinhos.",
    icon: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  },
  {
    title: "Software sob medida",
    text: "Sistemas, dashboards e plataformas web feitos para o jeito que a sua empresa vende e opera.",
    icon: "M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14",
  },
  {
    title: "Funil de vendas e CRM",
    text: "Captura de leads, qualificação automática e integração com WhatsApp para nenhuma oportunidade se perder.",
    icon: "M3 4h18l-7 8v6l-4 2v-8L3 4z",
  },
  {
    title: "Integrações e IA",
    text: "Conectamos suas ferramentas e aplicamos inteligência artificial no atendimento e na tomada de decisão.",
    icon: "M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v3a2 2 0 002 2h2v1a4 4 0 008 0v-1h2a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z",
  },
];

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Mapeamos seu processo comercial e operacional e achamos onde você perde tempo e dinheiro." },
  { n: "02", title: "Desenho da solução", text: "Definimos o que automatizar ou construir, com escopo, prazo e impacto esperado claros." },
  { n: "03", title: "Implementação", text: "Entregamos em ciclos curtos, com você vendo o resultado funcionando desde as primeiras semanas." },
  { n: "04", title: "Evolução contínua", text: "Medimos, ajustamos e escalamos a tecnologia conforme sua empresa cresce." },
];

const PLANS = [
  {
    name: "Diagnóstico",
    tag: "Para começar",
    items: ["Mapeamento do processo comercial", "Plano de automações priorizado", "Estimativa de retorno", "Conversa direta com o fundador"],
    featured: false,
  },
  {
    name: "Automação & Software",
    tag: "Mais escolhido",
    items: ["Automações e integrações sob medida", "Sistema ou painel personalizado", "Integração com WhatsApp e CRM", "Entrega em ciclos curtos", "Suporte pós-entrega"],
    featured: true,
  },
  {
    name: "Parceria contínua",
    tag: "Para escalar",
    items: ["Time de tecnologia sob demanda", "Evolução e melhorias mensais", "Monitoramento e manutenção", "Prioridade no atendimento"],
    featured: false,
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function Home() {
  const cta = whatsappLink("Olá! Vim pelo site da HStack e quero aumentar minhas vendas com tecnologia.");

  return (
    <>
      {/* HERO */}
      <section id="topo" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-36">
        <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
        <Parallax speed={0.18} className="absolute left-1/2 top-0 -z-10 -tranneutral-x-1/2">
          <div className="h-[460px] w-[760px] rounded-full bg-gradient-to-br from-white/20 via-neutral-400/10 to-neutral-600/10 blur-3xl" />
        </Parallax>

        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white">
              Tecnologia · Automação · Engenharia de Software
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
              Tecnologia dentro da sua empresa para <span className="text-gradient">vender mais</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
              A HStack automatiza processos e constrói software sob medida para empresários que querem
              mais vendas, menos trabalho manual e uma operação que escala.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white hover:bg-neutral-200 px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
              >
                Quero falar no WhatsApp
              </a>
              <a href="#servicos" className="rounded-full border border-white/15 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/5">
                Ver o que fazemos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">O que a HStack constrói para você</h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Soluções pensadas para um objetivo: colocar a tecnologia a serviço do seu faturamento.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="card h-full rounded-2xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon d={s.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-400">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="relative border-y border-white/10 bg-panel/60 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Como funciona</h2>
            <p className="mt-3 max-w-2xl text-neutral-400">Um caminho simples, do primeiro contato ao resultado.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="card h-full rounded-2xl p-6">
                  <span className="text-gradient text-3xl font-bold">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Formas de trabalhar juntos</h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Cada empresa é diferente. Os valores são definidos após uma conversa sobre o seu cenário.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article
                className={`card relative flex h-full flex-col rounded-2xl p-8 ${
                  p.featured ? "!border-white/40 bg-white/[0.04]" : ""
                }`}
              >
                <span className={`text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-white" : "text-neutral-500"}`}>
                  {p.tag}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-400">Sob consulta</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-300">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-0.5 text-white" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Olá! Tenho interesse no plano "${p.name}" da HStack.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition-transform hover:scale-[1.03] ${
                    p.featured
                      ? "bg-white hover:bg-neutral-200 text-ink"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Pedir proposta
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-5 pb-24">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] p-10 text-center sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vamos colocar a tecnologia para vender por você?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Fale direto com o Hiago no WhatsApp. Sem formulário, sem burocracia: uma conversa para entender
              seu negócio e mostrar o que dá para automatizar.
            </p>
            <a
              href={cta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white hover:bg-neutral-200 px-9 py-4 font-semibold text-ink transition-transform hover:scale-105"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
