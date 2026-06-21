const APPS_SCRIPT_URL = process.env.MAILING_LIST_APPS_SCRIPT_URL;

const sendJson = (res, statusCode, payload) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
};

const readBody = async (req) => {
    if (req.body && typeof req.body === 'object') return req.body;
    const chunks = [];
    for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    if (!chunks.length) return {};
    try {
        return JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch (_) {
        return {};
    }
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());

const parseJsonResponse = async (response) => {
    const text = await response.text();
    try {
        return text ? JSON.parse(text) : {};
    } catch (_) {
        return { message: text || 'Unexpected upstream response.' };
    }
};

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (!APPS_SCRIPT_URL) {
        sendJson(res, 503, {
            message: 'Mailing list backend is not configured yet. Add MAILING_LIST_APPS_SCRIPT_URL in Vercel and deploy the Google Apps Script endpoint.'
        });
        return;
    }

    try {
        if (req.method === 'GET') {
            const target = new URL(APPS_SCRIPT_URL);
            target.searchParams.set('action', 'subscribers');
            target.searchParams.set('format', String(req.query?.format || 'json'));

            const response = await fetch(target.toString(), { method: 'GET' });
            if (target.searchParams.get('format') === 'csv') {
                const csv = await response.text();
                res.statusCode = response.status;
                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                res.end(csv);
                return;
            }

            const data = await parseJsonResponse(response);
            sendJson(res, response.status, data);
            return;
        }

        if (req.method !== 'POST') {
            sendJson(res, 405, { message: 'Method not allowed.' });
            return;
        }

        const body = await readBody(req);
        const email = String(body?.email || '').trim().toLowerCase();
        if (!isValidEmail(email)) {
            sendJson(res, 422, { message: 'Please enter a valid email address.' });
            return;
        }

        const payload = {
            action: 'subscribe',
            email,
            source: String(body?.source || 'website'),
            pageUrl: String(body?.pageUrl || ''),
            destinationEmail: String(body?.destinationEmail || ''),
            submittedAt: new Date().toISOString(),
            userAgent: req.headers['user-agent'] || ''
        };

        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await parseJsonResponse(response);
        sendJson(res, response.status, data);
    } catch (error) {
        sendJson(res, 500, {
            message: error instanceof Error ? error.message : 'Mailing list request failed.'
        });
    }
};
