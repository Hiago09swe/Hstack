"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CookieConsent } from "@/types";

const STORAGE_KEY = "hstack_cookie_consent";

function readConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    marketing,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* navegação privada: segue sem persistir */
  }
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!readConsent()) setShow(true);
  }, []);

  const finish = (a: boolean, m: boolean) => {
    saveConsent(a, m);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-white/10 bg-panel/95 p-5 shadow-2xl backdrop-blur-xl sm:left-5 sm:right-auto"
    >
      <h2 id="cookie-title" className="text-base font-semibold text-white">
        Sua privacidade importa
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
        Usamos cookies essenciais para o site funcionar e, com sua permissão, cookies de análise e
        marketing. Saiba mais na{" "}
        <Link href="/privacidade" className="text-sky-300 underline underline-offset-2">
          Política de Privacidade
        </Link>
        .
      </p>

      {custom && (
        <fieldset className="mt-4 space-y-3">
          <legend className="sr-only">Preferências de cookies</legend>
          <label className="flex items-center justify-between gap-3 text-sm text-slate-200">
            <span>Necessários (sempre ativos)</span>
            <input type="checkbox" checked disabled className="h-4 w-4 accent-sky-400" />
          </label>
          <label className="flex items-center justify-between gap-3 text-sm text-slate-200">
            <span>Análise e desempenho</span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="h-4 w-4 accent-sky-400"
            />
          </label>
          <label className="flex items-center justify-between gap-3 text-sm text-slate-200">
            <span>Marketing</span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="h-4 w-4 accent-sky-400"
            />
          </label>
        </fieldset>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => finish(true, true)}
          className="rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-ink"
        >
          Aceitar todos
        </button>
        {custom ? (
          <button
            type="button"
            onClick={() => finish(analytics, marketing)}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5"
          >
            Salvar escolhas
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCustom(true)}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5"
          >
            Personalizar
          </button>
        )}
        <button
          type="button"
          onClick={() => finish(false, false)}
          className="rounded-full px-4 py-2 text-sm text-slate-300 hover:text-white"
        >
          Somente necessários
        </button>
      </div>
    </div>
  );
}
