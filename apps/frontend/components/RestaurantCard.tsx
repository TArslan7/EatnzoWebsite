import Link from 'next/link';
import { Restaurant } from '@/lib/api/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
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
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        {/* Image placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
          <span className="text-6xl">{getCuisineEmoji(restaurant.cuisineType)}</span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {restaurant.cuisineType}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {restaurant.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <span className="text-yellow-500 font-semibold">★</span>
              <span className="ml-1 text-gray-700 font-medium">{restaurant.rating}</span>
            </div>
            {restaurant.address && (
              <p className="text-sm text-gray-500 truncate max-w-[150px]">
                📍 {restaurant.address}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

