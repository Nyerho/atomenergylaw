const SHEET_ID = '14Uuia7k-fgZ0fk0t_i8qy-C7dkM7O-WGvYqlqT-l9WQ';
const SHEET_NAME = 'Subscribers';
const SITE_URL = 'https://www.atom-energylaw.com';
const LOGO_URL = 'https://www.atom-energylaw.com/assets/Atom%20logo%20final-I7OGcKSj.png';
const FROM_NAME = 'Atom Energy Law Advisory';
const WELCOME_SUBJECT = 'Welcome to the Atom Energy Law Advisory mailing list';

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (payload.action !== 'subscribe') {
      return jsonResponse({ message: 'Unsupported action.' }, 400);
    }

    const email = String(payload.email || '').trim().toLowerCase();
    if (!email || !/@/.test(email)) {
      return jsonResponse({ message: 'Please provide a valid email address.' }, 422);
    }

    const sheet = getSheet_();
    const existing = getSubscribers_(sheet);
    const duplicate = existing.find((item) => item.email === email);
    if (duplicate) {
      return jsonResponse({
        success: true,
        alreadySubscribed: true,
        message: 'This email is already on the mailing list.'
      });
    }

    const joinedAt = new Date();
    sheet.appendRow([
      joinedAt.toISOString(),
      email,
      String(payload.source || 'website'),
      String(payload.pageUrl || ''),
      String(payload.userAgent || '')
    ]);

    sendWelcomeEmail_(email);

    return jsonResponse({
      success: true,
      message: 'Thanks for joining the mailing list. A welcome email has been sent.',
      joinedAt: joinedAt.toISOString()
    });
  } catch (error) {
    return jsonResponse({ message: error.message || 'Subscription failed.' }, 500);
  }
}

function doGet(e) {
  try {
    const action = String((e && e.parameter && e.parameter.action) || '');
    const format = String((e && e.parameter && e.parameter.format) || 'json');
    if (action !== 'subscribers') {
      return jsonResponse({ message: 'Unsupported action.' }, 400);
    }

    const sheet = getSheet_();
    const subscribers = getSubscribers_(sheet);

    if (format === 'csv') {
      const rows = [['Email', 'Source', 'Page URL', 'Joined At']]
        .concat(subscribers.map((item) => [item.email, item.source, item.pageUrl, item.joinedAt]));
      const csv = rows.map((row) => row.map(csvCell_).join(',')).join('\n');
      return ContentService
        .createTextOutput(csv)
        .setMimeType(ContentService.MimeType.CSV);
    }

    return jsonResponse({
      success: true,
      subscribers: subscribers,
      sheetUrl: 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit'
    });
  } catch (error) {
    return jsonResponse({ message: error.message || 'Could not load subscribers.' }, 500);
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['joinedAt', 'email', 'source', 'pageUrl', 'userAgent']);
  }
  return sheet;
}

function getSubscribers_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];
  return values.slice(1)
    .filter((row) => row[1])
    .map((row) => ({
      joinedAt: String(row[0] || ''),
      email: String(row[1] || ''),
      source: String(row[2] || ''),
      pageUrl: String(row[3] || '')
    }));
}

function sendWelcomeEmail_(email) {
  const htmlBody = [
    '<div style="margin:0;padding:0;background:#f4f8fb;font-family:Arial,sans-serif;color:#0f172a;">',
    '<div style="max-width:680px;margin:0 auto;padding:32px 20px;">',
    '<div style="background:#06294f;border-radius:18px 18px 0 0;padding:24px 28px;text-align:center;">',
    '<img src="' + LOGO_URL + '" alt="Atom Energy Law Advisory" style="max-width:140px;height:auto;">',
    '</div>',
    '<div style="background:#ffffff;border:1px solid #dbe7f0;border-top:none;border-radius:0 0 18px 18px;padding:32px 28px;">',
    '<h1 style="margin:0 0 16px;font-size:28px;font-weight:700;color:#06294f;">Welcome to Atom Energy Law Advisory</h1>',
    '<p style="margin:0 0 14px;line-height:1.8;color:#334155;">Thank you for joining our mailing list. You will receive firm updates, sector intelligence, and selected legal insights relevant to energy, natural resources, and infrastructure.</p>',
    '<p style="margin:0 0 14px;line-height:1.8;color:#334155;">We are pleased to keep you informed with focused commentary, practical updates, and commercially relevant developments.</p>',
    '<p style="margin:24px 0 0;line-height:1.8;color:#334155;">Regards,<br><strong>Atom Energy Law Advisory</strong></p>',
    '</div>',
    '<div style="padding:18px 4px 0;text-align:center;font-size:12px;line-height:1.7;color:#64748b;">',
    'Atom Energy Law Advisory | <a href="' + SITE_URL + '" style="color:#1593d1;text-decoration:none;">Visit website</a><br>',
    'Plot C104, Peachvile Platinum, Jabi-Airport Road, Abuja.',
    '</div>',
    '</div>',
    '</div>'
  ].join('');

  GmailApp.sendEmail(email, WELCOME_SUBJECT, 'Welcome to Atom Energy Law Advisory.', {
    name: FROM_NAME,
    htmlBody: htmlBody
  });
}

function csvCell_(value) {
  const text = String(value == null ? '' : value);
  return /[",\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
