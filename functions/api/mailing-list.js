const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());

const json = (payload, status = 200, extraHeaders = {}) => new Response(
  JSON.stringify(payload),
  { status, headers: { ...JSON_HEADERS, ...extraHeaders } },
);

const parseJsonResponse = async (response) => {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch (_) {
    return { message: text || 'Unexpected upstream response.' };
  }
};

const readJsonBody = async (request) => {
  try {
    const body = await request.json();
    return body && typeof body === 'object' ? body : {};
  } catch (_) {
    return {};
  }
};

export async function onRequest(context) {
  const { request, env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': request.headers.get('Origin') || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const appsScriptUrl = env.MAILING_LIST_APPS_SCRIPT_URL;
  if (!appsScriptUrl) {
    return json({
      message: 'Mailing list backend is not configured yet. Add MAILING_LIST_APPS_SCRIPT_URL to the Cloudflare Pages environment variables and deploy the Google Apps Script endpoint.',
    }, 503, corsHeaders);
  }

  try {
    if (request.method === 'GET') {
      const target = new URL(appsScriptUrl);
      target.searchParams.set('action', 'subscribers');
      target.searchParams.set('format', new URL(request.url).searchParams.get('format') || 'json');
      const upstream = await fetch(target.toString());

      if (target.searchParams.get('format') === 'csv') {
        return new Response(await upstream.text(), {
          status: upstream.status,
          headers: { 'Content-Type': 'text/csv; charset=utf-8', ...corsHeaders },
        });
      }

      return json(await parseJsonResponse(upstream), upstream.status, corsHeaders);
    }

    if (request.method !== 'POST') {
      return json({ message: 'Method not allowed.' }, 405, {
        ...corsHeaders,
        Allow: 'GET, POST, OPTIONS',
      });
    }

    const body = await readJsonBody(request);
    const email = String(body.email || '').trim().toLowerCase();
    if (!isValidEmail(email)) {
      return json({ message: 'Please enter a valid email address.' }, 422, corsHeaders);
    }

    const upstream = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'subscribe',
        email,
        source: String(body.source || 'website'),
        pageUrl: String(body.pageUrl || ''),
        destinationEmail: String(body.destinationEmail || ''),
        submittedAt: new Date().toISOString(),
        userAgent: request.headers.get('User-Agent') || '',
      }),
    });

    return json(await parseJsonResponse(upstream), upstream.status, corsHeaders);
  } catch (error) {
    return json({
      message: error instanceof Error ? error.message : 'Mailing list request failed.',
    }, 500, corsHeaders);
  }
}
