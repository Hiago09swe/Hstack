# HStack — Site institucional

Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, escolha o repositório e clique em **Deploy**.
   (Framework detectado automaticamente: Next.js. Nenhuma variável de ambiente é necessária.)

## Onde mexer

- `src/lib/config.ts` — nome, logo, número do WhatsApp e gerador do link `wa.me`.
- `src/app/page.tsx` — textos de todas as seções (serviços, processo, planos).
- `src/app/privacidade` e `src/app/termos` — textos legais (revise com um advogado).
- `src/types/index.ts` — tipos User, License, AuditLog, LGPDRequest para a futura área de cliente/admin.
- `next.config.mjs` — cabeçalhos de segurança (CSP, HSTS etc.). Se trocar a hospedagem da logo, ajuste `img-src`.
- `src/middleware.ts` — rate limiting e proteção de rotas `/dashboard` e `/admin`.

Link direto do WhatsApp: https://wa.me/5562984769468
