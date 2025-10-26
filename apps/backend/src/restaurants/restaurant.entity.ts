import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { MenuItem } from '../menu/menu.entity';
import { Order } from '../orders/order.entity';

export enum CuisineType {
  ITALIAN = 'italian',
  CHINESE = 'chinese',
  JAPANESE = 'japanese',
  MEXICAN = 'mexican',
  INDIAN = 'indian',
  AMERICAN = 'american',
  THAI = 'thai',
  FRENCH = 'french',
  MEDITERRANEAN = 'mediterranean',
  SEAFOOD = 'seafood',
  VEGETARIAN = 'vegetarian',
  PIZZA = 'pizza',
  BURGER = 'burger',
  ASIAN = 'asian',
  FAST_FOOD = 'fast_food',
}

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: CuisineType,
  })
  cuisineType: CuisineType;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  rating: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  ownerId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.restaurant)
  menuItems: MenuItem[];

  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

