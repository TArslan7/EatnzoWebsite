export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to <span className="text-primary-600">Eatnzo</span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Modern food delivery web app built with Next.js + NestJS
        </p>
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
  )
}

