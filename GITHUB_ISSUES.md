# 📝 GitHub Issues Content (Copy & Paste)

## Issue #1: User Authentication System ⭐ (START HERE)

**Title:**
```
[FEATURE] Implement User Authentication System with JWT
```

**Description:**
```markdown
## Summary
Implement a complete user authentication system allowing users to register, login, and access protected routes.

## User Stories
- As a visitor, I want to create an account so I can place orders
- As a user, I want to login to access my account and order history
- As a user, I want my password to be securely encrypted
- As a user, I want to stay logged in across sessions

## Backend Tasks
- [ ] Create User entity (email, password hash, name, role, createdAt)
- [ ] Install and configure JWT authentication
- [ ] Create Auth module with register/login endpoints
- [ ] Add password hashing with bcrypt
- [ ] Create JWT strategy and guards
- [ ] Add validation for register/login DTOs
- [ ] Create /auth/register endpoint
- [ ] Create /auth/login endpoint
- [ ] Create /auth/me endpoint (get current user)
- [ ] Add middleware for protected routes

## Frontend Tasks
- [ ] Create /app/login/page.tsx
- [ ] Create /app/register/page.tsx
- [ ] Create login form component
- [ ] Create register form component
- [ ] Add form validation
- [ ] Create Zustand auth store
- [ ] Create API functions for auth
- [ ] Add token storage to localStorage
- [ ] Add protected route logic
- [ ] Add logout functionality
- [ ] Show user info in UI

## Acceptance Criteria
- [ ] Users can register with email/password
- [ ] Users can login with credentials
- [ ] Passwords are securely hashed
- [ ] JWT tokens are generated on login
- [ ] Protected routes require authentication
- [ ] Users can logout
- [ ] Session persists across page refreshes
- [ ] Error handling for invalid credentials
- [ ] Input validation on forms

## Technical Stack
- Backend: JWT, bcrypt, class-validator
- Frontend: Zustand for state, localStorage for tokens

## Priority
HIGH - Foundation for all user features

## Estimated Time
3-5 days
```

---

## Issue #2: Database Setup with TypeORM Entities

**Title:**
```
[SETUP] Configure TypeORM and Create Base Entities
```

**Description:**
```markdown
## Summary
Set up TypeORM configuration and create initial database entities for the application.

## Tasks
- [ ] Install TypeORM dependencies (if not already installed)
- [ ] Create database connection configuration
- [ ] Create User entity
  - id (PrimaryGeneratedColumn)
  - email (unique)
  - password (hashed)
  - name
  - role (enum: customer, restaurant_owner, admin)
  - createdAt
  - updatedAt
- [ ] Create Restaurant entity
  - id
  - name
  - description
  - cuisineType
  - address
  - phone
  - imageUrl
  - isActive
  - ownerId (foreign key to User)
  - createdAt
  - updatedAt
- [ ] Create Menu entity
  - id
  - restaurantId (foreign key)
  - name
  - description
  - price
  - category
  - imageUrl
  - isAvailable
  - createdAt
  - updatedAt
- [ ] Create database migration
- [ ] Configure automatic migrations
- [ ] Seed database with sample data
- [ ] Test database connection

## Acceptance Criteria
- [ ] TypeORM is properly configured
- [ ] All entities are created with relationships
- [ ] Migrations run successfully
- [ ] Sample data is seeded
- [ ] Database connection works in dev/prod

## Priority
HIGH - Foundation for data layer

## Estimated Time
2-3 days
```

---

## Issue #3: Restaurant Listings Page

**Title:**
```
[FEATURE] Restaurant Listings Page
```

**Description:**
```markdown
## Summary
Create a page to display all available restaurants in a grid/list view.

## User Story
As a customer, I want to browse restaurants so I can find food to order.

## Tasks
- [ ] Create /app/restaurants/page.tsx
- [ ] Create restaurant card component
- [ ] Fetch restaurants from API endpoint
- [ ] Display restaurants in responsive grid
- [ ] Add loading state
- [ ] Add error handling
- [ ] Add search functionality
- [ ] Add filter by cuisine type
- [ ] Add restaurant image display
- [ ] Add link to restaurant detail page
- [ ] Add restaurant name, description, rating

## Design Requirements
- Responsive grid (1 col mobile, 2-3 cols tablet, 3-4 cols desktop)
- Card-based layout with hover effects
- Restaurant image (with fallback)
- Restaurant name and cuisine type
- Rating display
- Link to details page

## Acceptance Criteria
- [ ] Page displays list of restaurants
- [ ] Restaurants load from API
- [ ] Responsive design works on all devices
- [ ] Clicking restaurant navigates to detail page
- [ ] Loading states are shown
- [ ] Error messages are displayed on failure
- [ ] Search functionality works

## Priority
MEDIUM

## Estimated Time
2-3 days

## Dependencies
- Issue #2 (Database Setup)
```

---

## Issue #4: Restaurant Detail Page

**Title:**
```
[FEATURE] Restaurant Detail Page with Menu
```

**Description:**
```markdown
## Summary
Create a detailed restaurant page showing restaurant info and menu items.

## User Story
As a customer, I want to view restaurant details and menu so I can choose what to order.

## Tasks
- [ ] Create /app/restaurants/[id]/page.tsx
- [ ] Fetch restaurant data from API
- [ ] Display restaurant information
- [ ] Display menu categories
- [ ] Display menu items
- [ ] Add menu item to cart functionality
- [ ] Add quantity selector
- [ ] Add image gallery
- [ ] Add rating and reviews section
- [ ] Add back to listings button

## Components Needed
- RestaurantHeader component
- MenuCategory component
- MenuItem component
- AddToCartButton component
- ImageGallery component

## Acceptance Criteria
- [ ] Page displays restaurant details
- [ ] Menu items are properly categorized
- [ ] Users can add items to cart
- [ ] Quantity can be adjusted
- [ ] Images display correctly
- [ ] Responsive design
- [ ] Error handling for invalid restaurant ID

## Priority
MEDIUM

## Estimated Time
2-3 days

## Dependencies
- Issue #3 (Restaurant Listings)
```

---

## Issue #5: Shopping Cart Functionality

**Title:**
```
[FEATURE] Shopping Cart with State Management
```

**Description:**
```markdown
## Summary
Implement a shopping cart using Zustand for state management.

## User Story
As a customer, I want to add items to cart and review my order before checkout.

## Tasks
- [ ] Create cart Zustand store
- [ ] Add items to cart
- [ ] Remove items from cart
- [ ] Update item quantities
- [ ] Calculate cart totals
- [ ] Persist cart to localStorage
- [ ] Create cart icon with badge
- [ ] Create cart dropdown component
- [ ] Create cart page (/app/cart/page.tsx)
- [ ] Display cart items with images
- [ ] Show quantity controls
- [ ] Display subtotal, tax, delivery fee, total
- [ ] Add "Clear Cart" functionality
- [ ] Handle cart state across navigation

## Components Needed
- CartStore (Zustand)
- CartIcon component
- CartDropdown component
- CartPage component
- CartItem component

## Acceptance Criteria
- [ ] Users can add items to cart from menu
- [ ] Cart shows total items count
- [ ] Cart persists across page refreshes
- [ ] Users can modify quantities
- [ ] Cart calculates totals correctly
- [ ] Users can view full cart page
- [ ] Users can remove items
- [ ] Cart is empty after checkout

## Priority
HIGH

## Estimated Time
3-4 days

## Dependencies
- Issue #4 (Restaurant Detail Page)
```

---

## Issue #6: Order Processing System

**Title:**
```
[FEATURE] Order Processing and Checkout Flow
```

**Description:**
```markdown
## Summary
Implement the complete checkout flow from cart to order confirmation.

## User Story
As a customer, I want to checkout my cart and place an order.

## Backend Tasks
- [ ] Create Order entity
- [ ] Create OrderItem entity
- [ ] Create checkout endpoint
- [ ] Create order history endpoint
- [ ] Validate order data
- [ ] Save order to database
- [ ] Update order status
- [ ] Send confirmation email (optional)

## Frontend Tasks
- [ ] Create checkout page (/app/checkout/page.tsx)
- [ ] Add delivery address form
- [ ] Add payment method selection
- [ ] Add delivery time selection
- [ ] Add order review section
- [ ] Show order total breakdown
- [ ] Create order confirmation page
- [ ] Show order number and tracking
- [ ] Redirect to order details after checkout

## Acceptance Criteria
- [ ] Users can proceed to checkout from cart
- [ ] Delivery address form is validated
- [ ] Users can select delivery time
- [ ] Order is saved to database
- [ ] User sees confirmation page
- [ ] Order appears in order history
- [ ] Cart is cleared after successful order

## Priority
HIGH

## Estimated Time
4-5 days

## Dependencies
- Issue #5 (Shopping Cart)
```

---

## How to Use These Issues

1. Go to: https://github.com/TArslan7/EatnzoWebsite/issues
2. Click "New Issue"
3. Copy the title and description for each issue
4. Paste into GitHub
5. Set appropriate labels (enhancement, feature, etc.)
6. Add to milestones as needed

## Recommended Issue Order

1. **User Authentication** (Issue #1) - DO THIS FIRST
2. **Database Setup** (Issue #2) - Critical foundation
3. **Restaurant Listings** (Issue #3) - First user-facing feature
4. **Restaurant Details** (Issue #4) - Next step
5. **Shopping Cart** (Issue #5) - Core functionality
6. **Order Processing** (Issue #6) - Complete the flow

## Labels to Add

- `enhancement` - New feature
- `feature` - Feature request
- `bug` - Bug fix
- `documentation` - Documentation updates
- `priority:high` - High priority
- `priority:medium` - Medium priority
- `priority:low` - Low priority
- `good first issue` - Good for new contributors
- `backend` - Backend work
- `frontend` - Frontend work
- `database` - Database work

