import { DataSource } from 'typeorm';
import { seedRestaurants } from './seed-restaurants';

export async function runSeeders(dataSource: DataSource) {
  console.log('🌱 Starting database seeding...\n');
  
  try {
    await seedRestaurants(dataSource);
    console.log('\n✅ Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

