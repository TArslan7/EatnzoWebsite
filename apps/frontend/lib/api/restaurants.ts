import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisineType: string;
  address?: string;
  phone?: string;
  imageUrl?: string;
  rating: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

class RestaurantsAPI {
  async getAll(): Promise<Restaurant[]> {
    const response = await axios.get<Restaurant[]>(`${API_URL}/restaurants`);
    return response.data;
  }

  async getById(id: string): Promise<Restaurant> {
    const response = await axios.get<Restaurant>(`${API_URL}/restaurants/${id}`);
    return response.data;
  }
}

export const restaurantsAPI = new RestaurantsAPI();

