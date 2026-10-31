"use client";

import { useEffect, useState } from "react";
import { SITE, whatsappLink } from "@/lib/config";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SITE.logoUrl}
        alt=""
        width={size}
        height={size}
        className="rounded-lg object-cover"
        style={{ width: size, height: size }}
      />
      <span className="text-lg font-semibold tracking-tight text-white">{SITE.name}</span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#topo" aria-label="HStack — início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Olá! Vim pelo site da HStack e quero saber mais.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white hover:bg-neutral-200 px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105 sm:inline-block"
          >
            Falar no WhatsApp
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-neutral-200 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-white/10 px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-neutral-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink("Olá! Vim pelo site da HStack e quero saber mais.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-white hover:bg-neutral-200 px-5 py-3 text-center font-semibold text-ink"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
