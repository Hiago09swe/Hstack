import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware de borda:
 * 1) Rate limiting simples por IP (em memória, por instância).
 *    Em produção com várias instâncias, troque por Upstash Redis / Vercel KV.
 * 2) Proteção de rotas privadas (/dashboard, /admin) — exige cookie de sessão.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 120;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

const PROTECTED_PREFIXES = ["/dashboard", "/admin"];

export function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return new NextResponse("Muitas requisições. Tente novamente em instantes.", {
      status: 429,
      headers: { "Retry-After": "60" },
    });
  }

  const { pathname } = req.nextUrl;
  const needsAuth = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));

  if (needsAuth && !req.cookies.get("hstack_session")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
