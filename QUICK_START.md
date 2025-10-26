# 🚀 Eatnzo Quick Start Guide

## What's Built Currently?

✅ **Monorepo Setup**
- Next.js 14 frontend with TypeScript
- NestJS backend with PostgreSQL
- Turborepo for monorepo management

✅ **Basic Structure**
- Homepage with welcome message
- Backend API with health check endpoint
- Database connection configured

✅ **PostgreSQL Running**
- Database: `eatnzo_db`
- Service: Running via Homebrew

## 🎯 Next Immediate Steps

### 1. Start Development Servers
```bash
# Install dependencies (first time only)
npm install

# Start both frontend and backend
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001/health

### 2. First Feature: User Authentication
This is the foundation for everything else.

**Backend:**
```bash
cd apps/backend

# Create user module
nest generate module users
nest generate service users
nest generate controller users

# Create auth module
nest generate module auth
nest generate service auth
nest generate controller auth
nest generate guard auth
```

**What you'll need:**
- User entity with email, password (hashed), role
- JWT authentication
- Register/Login endpoints
- Password hashing with bcrypt

**Frontend:**
- Create `/app/login/page.tsx`
- Create `/app/register/page.tsx`
- Add Zustand store for auth state
- Protected routes

### 3. Second Feature: Restaurant Management
After auth works, add restaurants.

**Backend:**
```bash
cd apps/backend

# Create restaurant module
nest generate module restaurants
nest generate service restaurants
nest generate controller restaurants
```

**What you'll need:**
- Restaurant entity (name, description, cuisine, location, image)
- CRUD endpoints
- Restaurant listing API

**Frontend:**
- Restaurant listings page
- Restaurant detail pages
- Add restaurant form (for owners)

## 📝 Creating GitHub Issues

1. Go to: https://github.com/TArslan7/EatnzoWebsite/issues
2. Click "New Issue"
3. Use template: "Feature Request"
4. Or manually create from `NEXT_FEATURES.md`

## 🔥 Suggested First Issues to Create

1. **Issue #1**: User Authentication System
   - Implement JWT auth
   - Create user registration/login
   - Frontend forms

2. **Issue #2**: Database Setup & User Entity
   - Create User entity
   - First migration
   - Seed sample data

3. **Issue #3**: Restaurant CRUD
   - Create Restaurant entity
   - API endpoints
   - Frontend pages

## 📖 Useful Commands

```bash
# Development
npm run dev              # Start all apps
cd apps/frontend && npm run dev    # Frontend only
cd apps/backend && npm run dev    # Backend only

# Database
brew services list       # Check PostgreSQL status
psql eatnzo_db          # Connect to database

# Git
git status               # Check changes
git add .               # Stage changes
git commit -m "message"  # Commit
git push                 # Push to GitHub

# Backend (when in apps/backend)
nest generate resource restaurants --crud  # Generate CRUD
npm run start:dev       # Start in watch mode
npm run build           # Build for production

# Frontend
cd apps/frontend
npm run build           # Build for production
npm run lint            # Lint code
```

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **NestJS**: https://docs.nestjs.com
- **TypeORM**: https://typeorm.io
- **Tailwind CSS**: https://tailwindcss.com/docs
- **PostgreSQL**: https://www.postgresql.org/docs

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
lsof -ti:3000 | xargs kill -9
```

**Port 3001 already in use?**
```bash
lsof -ti:3001 | xargs kill -9
```

**PostgreSQL not running?**
```bash
brew services start postgresql@15
```

**Database connection error?**
- Check PostgreSQL is running: `brew services list`
- Verify credentials in `apps/backend/.env`
- Try connecting: `psql eatnzo_db`

## 📞 Need Help?

Check the full roadmap in `NEXT_FEATURES.md`

