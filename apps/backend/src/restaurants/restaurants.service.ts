import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantsRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Restaurant | null> {
    return await this.restaurantsRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
  }

  async create(restaurantData: Partial<Restaurant>): Promise<Restaurant> {
    const restaurant = this.restaurantsRepository.create(restaurantData);
    return await this.restaurantsRepository.save(restaurant);
  }

  async update(id: string, updateData: Partial<Restaurant>): Promise<Restaurant> {
    await this.restaurantsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.restaurantsRepository.delete(id);
  }
}

