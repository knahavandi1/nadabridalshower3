const twilio = require('twilio');

const GIFT_URL = 'https://www.vcdelivery.com/vcert/2157f63e-cd74-48ec-b0dd-6d644c4188eb';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, BRIDE_PHONE } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !BRIDE_PHONE) {
    return res.status(500).json({ error: 'Missing Twilio environment variables' });
  }

  try {
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: `Nada!! It's Kareema & Amina 💛 We are so excited to celebrate you and welcome you as our sister. Here's your bridal shower gift from us: ${GIFT_URL} We love you already 🐪✨`,
      from: TWILIO_FROM_NUMBER,
      to: BRIDE_PHONE,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
