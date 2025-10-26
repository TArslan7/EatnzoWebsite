'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/store/useAuthStore';

export default function Home() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">🍽️ Eatnzo</h1>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-700">Hello, {user?.name}</span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-x-2">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded hover:bg-primary-700"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
          <h2 className="text-4xl font-bold text-center mb-4">
            Welcome to <span className="text-primary-600">Eatnzo</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Modern food delivery web app built with Next.js + NestJS
          </p>

          {isAuthenticated ? (
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700">
                You're logged in as <span className="font-semibold">{user?.name}</span>
              </p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">Get started by creating an account</p>
              <Link
                href="/register"
                className="inline-block px-6 py-3 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
              >
                Create Account
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">🍽️ Order Food</h2>
              <p className="text-gray-600">Browse from thousands of restaurants near you</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h2>
              <p className="text-gray-600">Track your orders in real-time and get quick deliveries</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">🎯 Easy to Use</h2>
              <p className="text-gray-600">Simple and intuitive interface for the best experience</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

