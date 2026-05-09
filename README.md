Nada Bridal Shower App - Vercel Deploy Fix

Root files must be deployed exactly like this:
- index.html
- package.json
- assets/celebrating-nada.png
- assets/avatar-nada.png
- assets/avatar-kareema.png
- assets/avatar-amina.png
- assets/avatar-rayyan.png
- api/send-gift.js

Important: there is intentionally no vercel.json. Vercel will auto-detect api/send-gift.js.

In Vercel, add Environment Variables:
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_FROM_NUMBER
BRIDE_PHONE

Then redeploy.
