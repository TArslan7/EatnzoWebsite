# 📊 Database Entity Relationships

## Entity Overview

### 1. User Entity
**File:** `src/users/user.entity.ts`
- Email, password, name, role
- Can own restaurants (restaurant_owner role)
- Can place orders (customer role)

### 2. Restaurant Entity
**File:** `src/restaurants/restaurant.entity.ts`
- Name, description, cuisine type, address, phone
- Owned by a User (optional)
- Has many MenuItems
- Has many Orders

### 3. MenuItem Entity
**File:** `src/menu/menu.entity.ts`
- Name, description, price, category
- Belongs to a Restaurant
- Referenced in OrderItems

### 4. Order Entity
**File:** `src/orders/order.entity.ts`
- User ID, Restaurant ID, total amount, status
- Belongs to a User
- Belongs to a Restaurant
- Has many OrderItems

### 5. OrderItem Entity
**File:** `src/orders/order-item.entity.ts`
- Order ID, MenuItem ID, quantity, price
- Belongs to an Order
- References a MenuItem

## Relationship Diagram

```
┌─────────────┐
│    User     │
│             │
│ - id        │
│ - email     │──┐
│ - name      │  │
│ - password  │  │
│ - role      │  │
└─────────────┘  │
      │          │
      │ 1:N      │ 1:N
      │          │
      ↓          ↓
┌─────────────┐  │   ┌──────────────┐
│ Restaurant  │──┼───│    Order     │
│             │  │   │              │
│ - id        │  │   │ - id         │
│ - name      │──┘   │ - userId     │──┐
│ - cuisine   │      │ - restaurantId│ │
│ - rating    │      │ - total      │  │
└─────────────┘      │ - status     │  │
      │              └──────────────┘  │
      │ 1:N                   │ 1:N   │
      ↓                       ↓       │
┌─────────────┐      ┌──────────────┐│
│  MenuItem   │      │  OrderItem   │←┘
│             │      │              │
│ - id        │      │ - id         │
│ - name      │      │ - orderId   │
│ - price     │      │ - menuItemId│
│ - category  │      │ - quantity   │
│ - restaurant│      │ - price      │
└─────────────┘      └──────────────┘
       ▲                     │
       │                     │
       └─────────────────────┘
            References

```

## TypeORM Configuration

**File:** `src/app.module.ts`

```typescript
entities: [User, Restaurant, MenuItem, Order, OrderItem]
```

## Relationships

### User ↔ Restaurant (One-to-Many)
- **User** `1:N` **Restaurant**
- A user can own multiple restaurants
- `@OneToMany` in User entity
- `@ManyToOne` in Restaurant entity

### User ↔ Order (One-to-Many)
- **User** `1:N` **Order**
- A user can place multiple orders
- `@OneToMany` in User entity
- `@ManyToOne` in Order entity

### Restaurant ↔ MenuItem (One-to-Many)
- **Restaurant** `1:N` **MenuItem**
- A restaurant has many menu items
- `@OneToMany` in Restaurant entity
- `@ManyToOne` in MenuItem entity

### Restaurant ↔ Order (One-to-Many)
- **Restaurant** `1:N` **Order**
- A restaurant receives multiple orders
- `@OneToMany` in Restaurant entity
- `@ManyToOne` in Order entity

### Order ↔ OrderItem (One-to-Many)
- **Order** `1:N` **OrderItem**
- An order has multiple items
- `@OneToMany` in Order entity (with cascade)
- `@ManyToOne` in OrderItem entity

### OrderItem ↔ MenuItem (Many-to-One)
- **OrderItem** `N:1` **MenuItem**
- Multiple order items can reference the same menu item
- `@ManyToOne` in OrderItem entity
- References MenuItem (read-only snapshot)

## Database Tables

1. **users** - User accounts
2. **restaurants** - Restaurant information
3. **menu_items** - Menu items per restaurant
4. **orders** - Order headers
5. **order_items** - Order line items

## Auto-Migration

In development mode (`synchronize: true`):
- Tables are automatically created
- Relationships are automatically set up with foreign keys
- No manual migration files needed

## Example Queries

### Get user with restaurants
```typescript
const user = await userRepository.findOne({
  where: { id: userId },
  relations: ['restaurants']
});
```

### Get restaurant with menu
```typescript
const restaurant = await restaurantRepository.findOne({
  where: { id: restaurantId },
  relations: ['menuItems']
});
```

### Get order with items and menu details
```typescript
const order = await orderRepository.findOne({
  where: { id: orderId },
  relations: ['orderItems', 'orderItems.menuItem']
});
```

