'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Link from 'next/link';
import { restaurantsAPI, Restaurant } from '@/lib/api/restaurants';

export default function RestaurantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  const fetchRestaurant = async () => {
    try {
      setLoading(true);
      const data = await restaurantsAPI.getById(id);
      setRestaurant(data);
      setError('');
    } catch (err: any) {
      setError('Restaurant not found or failed to load details.');
      console.error('Error fetching restaurant:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCuisineEmoji = (cuisineType: string) => {
    const emojis: { [key: string]: string } = {
      italian: '🍝',
      chinese: '🥢',
      japanese: '🍣',
      mexican: '🌮',
      indian: '🍛',
      american: '🍔',
      thai: '🍜',
      french: '🥐',
      mediterranean: '🥗',
      seafood: '🦐',
      vegetarian: '🥦',
      pizza: '🍕',
      burger: '🍔',
      asian: '🥡',
      fast_food: '🍟',
    };
    return emojis[cuisineType.toLowerCase()] || '🍽️';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              🍽️ Eatnzo
            </Link>
            <Link
              href="/restaurants"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              ← Back to Restaurants
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && restaurant && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-300 h-64 flex items-center justify-center">
              <span className="text-9xl">{getCuisineEmoji(restaurant.cuisineType)}</span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                  <div className="flex items-center space-x-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {restaurant.cuisineType}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-xl">★</span>
                      <span className="ml-2 text-xl font-semibold text-gray-900">
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">{restaurant.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {restaurant.address && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                    <p className="text-gray-600">{restaurant.address}</p>
                  </div>
                )}

                {restaurant.phone && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                    <p className="text-gray-600">{restaurant.phone}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

