import { DataSource } from 'typeorm';
import { Restaurant, CuisineType } from '../restaurants/restaurant.entity';

export async function seedRestaurants(dataSource: DataSource) {
  const repository = dataSource.getRepository(Restaurant);

  // Check if data already exists
  const count = await repository.count();
  if (count > 0) {
    console.log('Restaurant data already seeded.');
    return;
  }

  const restaurants = [
    {
      name: 'Pizza Palace',
      description: 'Authentic Italian pizzas with fresh ingredients and traditional recipes.',
      cuisineType: CuisineType.PIZZA,
      address: '123 Main Street, New York',
      phone: '+1-555-0101',
      rating: 4.5,
      isActive: true,
    },
    {
      name: 'Dragon Garden',
      description: 'Traditional Chinese cuisine with modern twists. Best dumplings in town!',
      cuisineType: CuisineType.CHINESE,
      address: '456 Chinatown Ave, New York',
      phone: '+1-555-0102',
      rating: 4.3,
      isActive: true,
    },
    {
      name: 'Tokyo Sushi Bar',
      description: 'Fresh sashimi and creative sushi rolls. Experience authentic Japanese cuisine.',
      cuisineType: CuisineType.JAPANESE,
      address: '789 East Side, New York',
      phone: '+1-555-0103',
      rating: 4.7,
      isActive: true,
    },
    {
      name: 'Taco Fiesta',
      description: 'Colorful and flavorful Mexican street food. Burritos, tacos, and more!',
      cuisineType: CuisineType.MEXICAN,
      address: '321 West Boulevard, New York',
      phone: '+1-555-0104',
      rating: 4.4,
      isActive: true,
    },
    {
      name: 'Spice of India',
      description: 'Rich flavors and aromatic spices. Traditional curry dishes and biryanis.',
      cuisineType: CuisineType.INDIAN,
      address: '654 Curry Lane, New York',
      phone: '+1-555-0105',
      rating: 4.6,
      isActive: true,
    },
    {
      name: 'Burger Junction',
      description: 'Juicy burgers made with premium beef and fresh toppings. Classic American.',
      cuisineType: CuisineType.BURGER,
      address: '147 Fast Food St, New York',
      phone: '+1-555-0106',
      rating: 4.2,
      isActive: true,
    },
    {
      name: 'Riverside Thai',
      description: 'Authentic Thai flavors with aromatic herbs and spicy curries.',
      cuisineType: CuisineType.THAI,
      address: '258 River Road, New York',
      phone: '+1-555-0107',
      rating: 4.5,
      isActive: true,
    },
    {
      name: 'Le Bistro Francais',
      description: 'Fine French dining with elegant dishes and exquisite presentation.',
      cuisineType: CuisineType.FRENCH,
      address: '369 Uptown Ave, New York',
      phone: '+1-555-0108',
      rating: 4.8,
      isActive: true,
    },
    {
      name: 'Mediterranean Delight',
      description: 'Fresh Mediterranean flavors with healthy and delicious options.',
      cuisineType: CuisineType.MEDITERRANEAN,
      address: '741 Coastal Drive, New York',
      phone: '+1-555-0109',
      rating: 4.4,
      isActive: true,
    },
    {
      name: 'Ocean Fresh Seafood',
      description: 'Daily catch seafood restaurant. Freshest fish in the city.',
      cuisineType: CuisineType.SEAFOOD,
      address: '852 Harbor View, New York',
      phone: '+1-555-0110',
      rating: 4.6,
      isActive: true,
    },
    {
      name: 'Green Garden',
      description: '100% vegetarian and vegan options. Healthy and delicious plant-based meals.',
      cuisineType: CuisineType.VEGETARIAN,
      address: '963 Health Way, New York',
      phone: '+1-555-0111',
      rating: 4.3,
      isActive: true,
    },
    {
      name: 'Asia Fusion',
      description: 'Modern Asian cuisine blending flavors from across the continent.',
      cuisineType: CuisineType.ASIAN,
      address: '159 Fusion Blvd, New York',
      phone: '+1-555-0112',
      rating: 4.5,
      isActive: true,
    },
  ];

  for (const restaurantData of restaurants) {
    const restaurant = repository.create(restaurantData);
    await repository.save(restaurant);
    console.log(`✓ Seeded restaurant: ${restaurantData.name}`);
  }

  console.log('✓ Restaurant seeding completed!');
}

