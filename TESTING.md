# 🧪 Testing Guide - User Authentication

## Quick Start

### 1. Start Backend
```bash
cd apps/backend
npm run dev  # Runs on http://localhost:3001
```

### 2. Start Frontend (in another terminal)
```bash
cd apps/frontend
npm run dev  # Runs on http://localhost:3000
```

### 3. Test Registration

Visit: http://localhost:3000/register

**Try registering with:**
- Name: John Doe
- Email: john@example.com
- Password: password123

**Expected Result:**
- ✅ Registration successful
- ✅ Automatically logged in
- ✅ Redirected to homepage
- ✅ Your name shown in navigation

### 4. Test Login

Visit: http://localhost:3000/login

**Try logging in with:**
- Email: john@example.com
- Password: password123

**Expected Result:**
- ✅ Login successful
- ✅ Redirected to homepage
- ✅ Name displayed in navigation

### 5. Test Logout

Click "Logout" button in navigation

**Expected Result:**
- ✅ Logged out
- ✅ Redirected to homepage
- ✅ Login/Register buttons shown

## Troubleshooting

### Issue: Cannot register

**Check if backend is running:**
```bash
curl http://localhost:3001/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "...",
  "service": "eatnzo-backend",
  "version": "2.0.0"
}
```

**Check backend logs for errors:**
```bash
cd apps/backend
npm run dev
```

**Check if PostgreSQL is running:**
```bash
brew services list
# Should show postgresql@15 started
```

**Create database if needed:**
```bash
psql postgres
CREATE DATABASE eatnzo_db;
\q
```

### Issue: "User already exists"

This means registration worked! The user is already in database. Try:
1. Use a different email
2. Or login instead of register

### Issue: Frontend shows errors

**Check browser console (F12):**
- Look for network errors
- Check if API URL is correct
- Verify backend is running on port 3001

**Clear browser cache:**
```bash
# In browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

### Issue: Database connection error

**Backend error: "Unable to connect to database"**

1. Check PostgreSQL is running:
   ```bash
   brew services start postgresql@15
   ```

2. Test connection:
   ```bash
   psql eatnzo_db
   ```

3. Check database exists:
   ```bash
   psql -l | grep eatnzo
   ```

## API Endpoints

### Register
```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "access_token": "eyJhbG...",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "customer"
  }
}
```

### Login
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Current User (Protected)
```bash
curl http://localhost:3001/users/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Manual Database Check

**Connect to database:**
```bash
psql eatnzo_db
```

**List users:**
```sql
SELECT id, email, name, role, "createdAt" FROM users;
```

**Delete test user:**
```sql
DELETE FROM users WHERE email = 'john@example.com';
```

## Next Steps

After testing authentication:

1. ✅ Create Pull Request
2. Merge to main
3. Start Issue #2: Database Setup with TypeORM Entities
4. Continue with restaurant features

