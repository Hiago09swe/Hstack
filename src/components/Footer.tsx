import Link from "next/link";
import { Logo } from "@/components/Navbar";
import { SITE, whatsappLink } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{SITE.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navegação</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a className="hover:text-white" href="#servicos">Serviços</a></li>
            <li><a className="hover:text-white" href="#processo">Como funciona</a></li>
            <li><a className="hover:text-white" href="#planos">Planos</a></li>
            <li><a className="hover:text-white" href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contato e legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>
              <a
                className="hover:text-white"
                href={whatsappLink("Olá! Vim pelo site da HStack.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (62) 98476-9468
              </a>
            </li>
            <li><Link className="hover:text-white" href="/privacidade">Política de Privacidade</Link></li>
            <li><Link className="hover:text-white" href="/termos">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} HStack. Todos os direitos reservados.
      </div>
    </footer>
  );
}
