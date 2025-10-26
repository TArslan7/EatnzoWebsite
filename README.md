# 🍽️ Eatnzo

> Modern food delivery web app built with Next.js + NestJS

## 🎯 What is Eatnzo?

Eatnzo is a **full-stack web application** for food delivery, similar to Thuisbezorgd and Uber Eats. Unlike a static website, it's a dynamic web app that enables users to log in, place orders, track deliveries in real-time, and interact with the system.

### 🌐 Web App vs Website

| Aspect | Website | Web App |
|--------|---------|---------|
| Purpose | Displays information | Enables interaction |
| Technology | Static HTML/CSS | Next.js (React) + NestJS |
| Data | None or minimal | Real-time PostgreSQL database |
| Users | Visitors | Logged-in customers, restaurants, admins |
| Example | Restaurant promo site | Eatnzo, Thuisbezorgd, Uber Eats |

## 🏗️ Architecture

This is a **monorepo** containing:

### Frontend (Next.js)
- **Location**: `apps/frontend`
- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Port**: 3000

### Backend (NestJS)
- **Location**: `apps/backend`
- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL 15
- **ORM**: TypeORM
- **Port**: 3001

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL 15 (via Docker or Homebrew)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TArslan7/EatnzoWebsite.git
   cd EatnzoWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL Database**

   **Option A: Using Docker (Recommended)**
   ```bash
   # Install Docker Desktop from https://www.docker.com/products/docker-desktop
   docker-compose up -d
   ```

   **Option B: Using Homebrew (macOS)**
   ```bash
   # Install PostgreSQL
   brew install postgresql@15
   
   # Add to PATH
   echo 'export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   
   # Start PostgreSQL service
   brew services start postgresql@15
   
   # Create database
   createdb eatnzo_db
   ```

4. **Run the development servers**
   ```bash
   # Run both frontend and backend
   npm run dev
   
   # Or run individually:
   cd apps/frontend && npm run dev
   cd apps/backend && npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Health Check: http://localhost:3001/health

## 📁 Project Structure

```
eatnzo/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   │   ├── app/           # Next.js 14 app router
│   │   ├── components/    # React components
│   │   ├── lib/          # Utilities and helpers
│   │   └── public/       # Static assets
│   │
│   └── backend/          # NestJS backend application
│       └── src/
│           ├── main.ts   # Application entry point
│           └── app.module.ts
│
├── docker-compose.yml    # PostgreSQL container
├── package.json          # Monorepo root
├── turbo.json           # Turborepo configuration
└── README.md            # This file
```

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps for production
- `npm run start` - Start all apps in production mode
- `npm run lint` - Lint all apps

### Frontend (`apps/frontend`)
- `npm run dev` - Start Next.js dev server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Backend (`apps/backend`)
- `npm run dev` - Start NestJS in watch mode
- `npm run build` - Build for production
- `npm run start:prod` - Start production server

## 🗄️ Database

The application uses PostgreSQL 15 managed via Docker Compose.

### Connection Details
- **Host**: localhost
- **Port**: 5432
- **Database**: eatnzo_db
- **Username**: postgres
- **Password**: postgres

### Environment Variables

Create `.env` files in respective directories:

**`apps/backend/.env`**
```
PORT=3001
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=eatnzo_db
FRONTEND_URL=http://localhost:3000
```

**`apps/frontend/.env`**
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🎨 Features

### Current (MVP)
- ✅ Modern UI with Tailwind CSS
- ✅ Responsive design
- ✅ API backend with health check
- ✅ PostgreSQL database integration
- ✅ CORS configuration
- ✅ TypeScript for type safety

### Planned
- 🔐 User authentication (JWT)
- 🍔 Restaurant management
- 🛒 Shopping cart & checkout
- 📦 Order tracking in real-time
- 💳 Payment integration
- 📊 Admin dashboard
- 🔔 Push notifications
- ⭐ Reviews and ratings

## 🧪 Testing

```bash
# Frontend tests (to be added)
cd apps/frontend && npm run test

# Backend tests
cd apps/backend && npm run test
```

## 📦 Deployment

### Frontend (Vercel)
```bash
vercel --prod
```

### Backend (Railway, Render, or similar)
```bash
cd apps/backend
npm run build
npm run start:prod
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Maintainer

[@TArslan7](https://github.com/TArslan7)

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/)

---

**Version**: 2.0.0  
**Status**: Development 🚧
