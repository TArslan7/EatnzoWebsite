# 📧 Email Verification Setup Guide

## Quick Setup (3 Options)

### Option 1: Mailtrap (Recommended for Development) ⭐

**Best for:** Local development and testing  
**Cost:** Free tier available  
**Setup time:** 2 minutes

#### Steps:

1. **Sign up for free:** https://mailtrap.io/
2. **Get your credentials:**
   - Go to Inboxes → Demo inbox
   - Copy SMTP credentials

3. **Create `apps/backend/.env` file:**
   ```bash
   cd apps/backend
   touch .env
   ```

4. **Add this to `.env`:**
   ```bash
   # Mailtrap Configuration
   SMTP_HOST=sandbox.smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_SECURE=false
   SMTP_USER=your-mailtrap-username
   SMTP_PASSWORD=your-mailtrap-password
   SMTP_FROM=noreply@eatnzo.com
   FRONTEND_URL=http://localhost:3001
   
   # Database (already set up)
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=eatnzo_db
   ```

5. **Replace the SMTP credentials** with your Mailtrap credentials

6. **Test it:**
   ```bash
   # Restart backend
   cd apps/backend
   npm run dev
   ```

**How to test:**
- Register a new user at http://localhost:3001/register
- Check your Mailtrap inbox
- See the verification email there
- Click the verification link

---

### Option 2: Gmail (Quickest Setup)

**Best for:** Quick testing  
**Cost:** Free (personal Gmail account)  
**Limitations:** 500 emails/day, requires "App Password"

#### Steps:

1. **Enable App Password in Gmail:**
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in to your Google account
   - Click "Select app" → Choose "Mail"
   - Click "Select device" → Choose "Other" → Type "Eatnzo"
   - Click "Generate"
   - Copy the 16-character password

2. **Create `apps/backend/.env`:**
   ```bash
   cd apps/backend
   touch .env
   ```

3. **Add this to `.env`:**
   ```bash
   # Gmail Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_FROM=your-email@gmail.com
   FRONTEND_URL=http://localhost:3001
   
   # Database
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=eatnzo_db
   ```

4. **Replace:**
   - `your-email@gmail.com` → Your Gmail address
   - `your-16-char-app-password` → The password from step 1

5. **Test it:**
   - Restart backend
   - Register a user
   - Check your Gmail inbox

---

### Option 3: SendGrid (For Production)

**Best for:** Production deployment  
**Cost:** Free tier (100 emails/day), then paid  
**Best practices:** Use for actual production

#### Steps:

1. **Sign up:** https://signup.sendgrid.com/
2. **Verify your domain** (or use single sender)
3. **Create API key** (Settings → API Keys)
4. **Create `apps/backend/.env`:**
   ```bash
   # SendGrid Configuration
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   SMTP_FROM=verified-email@yourdomain.com
   FRONTEND_URL=https://yourapp.com
   
   # Database (production)
   DB_HOST=your-db-host
   DB_PORT=5432
   DB_USERNAME=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=eatnzo_db
   ```

---

## Testing Email Without Real Email Service

### For Development Only (No Real Emails):

If you just want to test without email:

1. **Create `apps/backend/.env`:**
   ```bash
   cd apps/backend
   touch .env
   ```

2. **Add this (development mode):**
   ```bash
   NODE_ENV=development
   # Fake email config (logs to console instead)
   SMTP_USER=test
   SMTP_PASSWORD=test
   
   FRONTEND_URL=http://localhost:3001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=eatnzo_db
   ```

3. **Modify EmailService** to log instead of send:
   - The email will be logged to console
   - You can copy the verification link from console
   - Paste it in browser to test

---

## Step-by-Step: Complete Setup

### 1. Install Dependencies
```bash
cd apps/backend
npm install  # Already done
```

### 2. Create .env File
```bash
cd apps/backend
touch .env
nano .env  # or use your favorite editor
```

### 3. Add Configuration

**For Mailtrap (recommended):**
```bash
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=abc123  # Replace with your Mailtrap username
SMTP_PASSWORD=xyz789  # Replace with your Mailtrap password
SMTP_FROM=noreply@eatnzo.com
FRONTEND_URL=http://localhost:3001

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=eatnzo_db
```

### 4. Restart Backend
```bash
cd apps/backend
npm run dev
```

### 5. Test It
1. Open http://localhost:3001/register
2. Register with a real email
3. Check your Mailtrap inbox (or Gmail/SendGrid inbox)
4. Click the verification link
5. Should redirect to login page ✅

---

## Troubleshooting

### Backend won't start
**Error:** "Unable to connect to database"
**Fix:**
```bash
brew services start postgresql@15
psql -U postgres -d eatnzo_db
# Should connect successfully
```

### Frontend on wrong port
**Issue:** Frontend runs on 3001 instead of 3000
**Fix:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart frontend
cd apps/frontend && npm run dev
```

### Email not sending
**Error:** Connection timeout or auth failed
**Fix:**
1. Check `.env` file exists in `apps/backend/`
2. Verify SMTP credentials are correct
3. For Gmail: Make sure you're using App Password, not regular password
4. For Mailtrap: Make sure you copied username/password from inbox settings

### Can't register
**Error:** 404 on /auth/register
**Fix:**
- Backend must be running on port 3001
- Check terminal for backend errors
- Verify database connection works

---

## Quick Test Without Email

If you want to skip email setup for now:

1. Register a user at http://localhost:3001/register
2. Check backend console logs
3. Find the verification URL in the logs
4. Copy and paste it in your browser
5. Should verify successfully ✅

---

## Next Steps After Setup

Once email is configured:

1. ✅ Restart backend: `npm run dev` in `apps/backend`
2. ✅ Go to http://localhost:3001/register
3. ✅ Register a new user
4. ✅ Check email inbox (Mailtrap/Gmail/SendGrid)
5. ✅ Click verification link
6. ✅ Should see "Email Verified!" message
7. ✅ Redirected to login page

**Email verification is now working!** 🎉

