import { type NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'outsourcingsmallbusinesses.com';
const PUBLIC_HOSTS = new Set([CANONICAL_HOST, `www.${CANONICAL_HOST}`]);

function firstHeaderValue(value: string | null) {
  return value?.split(',')[0]?.trim().toLowerCase() || '';
}

function normalizedHost(value: string) {
  return value.replace(/^https?:\/\//, '').split('/')[0].replace(/:\d+$/, '');
}

function forwardedScheme(request: NextRequest) {
  const cfVisitor = request.headers.get('cf-visitor');
  if (cfVisitor) {
    try {
      const value = JSON.parse(cfVisitor) as { scheme?: unknown };
      if (value.scheme === 'http' || value.scheme === 'https') return value.scheme;
    } catch {}
  }
  const forwarded = firstHeaderValue(request.headers.get('x-forwarded-proto'));
  if (forwarded === 'http' || forwarded === 'https') return forwarded;
  return request.nextUrl.protocol.replace(':', '');
}

export function proxy(request: NextRequest) {
  const forwardedHost = normalizedHost(firstHeaderValue(request.headers.get('x-forwarded-host')));
  const directHost = normalizedHost(firstHeaderValue(request.headers.get('host')));
  const publicHost = PUBLIC_HOSTS.has(forwardedHost) ? forwardedHost : directHost;
  if (!PUBLIC_HOSTS.has(publicHost)) return NextResponse.next();

  if (publicHost !== CANONICAL_HOST || forwardedScheme(request) !== 'https') {
    const target = request.nextUrl.clone();
    target.protocol = 'https:';
    target.hostname = CANONICAL_HOST;
    target.port = '';
    return NextResponse.redirect(target, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/:path*' };
