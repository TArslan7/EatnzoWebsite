# 🚨 Top Priority Issues for Production

## Critical Path to MVP (Minimum Viable Product)

### Week 1: Core Ordering System

#### Issue #18: Shopping Cart Implementation
**Priority: CRITICAL**  
**Time Estimate: 3-4 days**

**Problem:** Users cannot add items to cart or checkout.

**Tasks:**
- [ ] Create cart Zustand store (`lib/store/useCartStore.ts`)
- [ ] Create CartContext for cart state
- [ ] Implement add to cart functionality
- [ ] Create cart page (`/app/cart/page.tsx`)
- [ ] Add cart icon with badge to navigation
- [ ] Persist cart to localStorage
- [ ] Calculate totals (subtotal, tax, delivery fee, total)
- [ ] Update quantity/remove items
- [ ] Empty cart after checkout

**Dependencies:** None

---

#### Issue #19: Menu API & Display
**Priority: CRITICAL**  
**Time Estimate: 2-3 days**

**Problem:** Restaurants have no menus visible to users.

**Backend Tasks:**
- [ ] Create Menu module, service, controller
- [ ] Implement CRUD endpoints for menu items
- [ ] GET /restaurants/:id/menu
- [ ] Seed sample menu data

**Frontend Tasks:**
- [ ] Display menu on restaurant detail page
- [ ] Show menu categories
- [ ] Add "Add to Cart" buttons
- [ ] Display prices and descriptions
- [ ] Show availability status

**Dependencies:** Menu entity exists ✅

---

#### Issue #20: Checkout Process
**Priority: CRITICAL**  
**Time Estimate: 3-4 days**

**Problem:** Users cannot complete orders.

**Frontend Tasks:**
- [ ] Create checkout page (`/app/checkout/page.tsx`)
- [ ] Add delivery address form
- [ ] Add payment method selection (stripe form)
- [ ] Show order summary
- [ ] Create order confirmation page
- [ ] Add loading states
- [ ] Add error handling

**Backend Tasks:**
- [ ] Create Order module, service, controller
- [ ] POST /orders endpoint
- [ ] Validate order data
- [ ] Save order to database
- [ ] Return order confirmation

**Dependencies:** Order entity exists ✅, Shopping Cart

---

#### Issue #21: Order History
**Priority: HIGH**  
**Time Estimate: 2 days**

**Problem:** Users cannot see their past orders.

**Tasks:**
- [ ] Create orders page (`/app/orders/page.tsx`)
- [ ] GET /users/me/orders endpoint
- [ ] Display order list with status
- [ ] Show order details
- [ ] Add order status badges
- [ ] Add reorder functionality

**Dependencies:** Order processing working

---

### Week 2: Security & Payment

#### Issue #22: Payment Integration
**Priority: CRITICAL**  
**Time Estimate: 4-5 days**

**Problem:** No payment processing.

**Tasks:**
- [ ] Set up Stripe account
- [ ] Install Stripe packages
- [ ] Create payment intent endpoint
- [ ] Add Stripe Elements to frontend
- [ ] Handle payment success/failure
- [ ] Add webhook for payment confirmation
- [ ] Test payment flow
- [ ] Handle errors gracefully

**Dependencies:** Checkout process

---

#### Issue #23: Email Verification
**Priority: HIGH**  
**Time Estimate: 2-3 days**

**Problem:** Anyone can register with fake emails.

**Tasks:**
- [ ] Add isEmailVerified flag to User
- [ ] Add emailVerificationToken field
- [ ] Create send verification email function
- [ ] Add verification endpoint
- [ ] Block unverified users from ordering
- [ ] Add verification reminder email
- [ ] Add verified badge in UI

**Dependencies:** Email service (SendGrid/SES)

---

#### Issue #24: Rate Limiting
**Priority: HIGH**  
**Time Estimate: 1 day**

**Problem:** API vulnerable to brute force attacks.

**Tasks:**
- [ ] Install @nestjs/throttler
- [ ] Configure rate limits (5 req/min for auth)
- [ ] Add rate limit to auth endpoints
- [ ] Add rate limit to order endpoints
- [ ] Add appropriate limits
- [ ] Return 429 on limit exceeded

**Dependencies:** None

---

#### Issue #25: Input Validation & Error Handling
**Priority: HIGH**  
**Time Estimate: 2-3 days**

**Problem:** No protection against malformed data.

**Tasks:**
- [ ] Add class-validator to all DTOs
- [ ] Add transform decorators
- [ ] Add validation pipes globally
- [ ] Create custom exception filters
- [ ] Add consistent error responses
- [ ] Add error logging
- [ ] Frontend error handling

**Dependencies:** None

---

### Week 3: User Features

#### Issue #26: Restaurant Menu Display
**Priority: MEDIUM**  
**Time Estimate: 2 days**

**Problem:** Menu not displayed on restaurant pages.

**Tasks:**
- [ ] Fetch menu items for restaurant
- [ ] Display menu by category
- [ ] Add menu section to restaurant detail page
- [ ] Style menu items
- [ ] Add quantity selector
- [ ] Connect to add to cart

**Dependencies:** Menu API implemented

---

#### Issue #27: Search & Filter
**Priority: MEDIUM**  
**Time Estimate: 2-3 days**

**Problem:** Users cannot search for restaurants.

**Tasks:**
- [ ] Add search bar to restaurants page
- [ ] Add filter by cuisine type
- [ ] Add filter by rating
- [ ] Add sort options (rating, name)
- [ ] Update backend API with filters
- [ ] Add loading states

**Dependencies:** Restaurant listings page

---

#### Issue #28: User Profile
**Priority: MEDIUM**  
**Time Estimate: 2 days**

**Problem:** Users cannot manage their profile.

**Tasks:**
- [ ] Create profile page (`/app/profile/page.tsx`)
- [ ] Add edit name/email form
- [ ] Add change password functionality
- [ ] Add saved addresses section
- [ ] Add delete account option
- [ ] Add profile picture upload

**Dependencies:** Backend endpoints

---

### Week 4: Business Features

#### Issue #29: Order Management
**Priority: HIGH**  
**Time Estimate: 3-4 days**

**Problem:** Restaurant owners cannot manage orders.

**Tasks:**
- [ ] Create order dashboard
- [ ] GET /restaurants/:id/orders
- [ ] Display new orders
- [ ] Add accept/reject buttons
- [ ] Add update status buttons
- [ ] Add mark as ready functionality
- [ ] Add order queue UI

**Dependencies:** Order system working

---

#### Issue #30: Admin Dashboard
**Priority: MEDIUM**  
**Time Estimate: 3-4 days**

**Problem:** No admin interface.

**Tasks:**
- [ ] Create admin dashboard
- [ ] Add user management
- [ ] Add restaurant approval
- [ ] Add view all orders
- [ ] Add analytics/reports
- [ ] Add role checking

**Dependencies:** None

---

## Implementation Order

### Sprint 1 (Week 1)
1. Issue #18: Shopping Cart
2. Issue #19: Menu API & Display
3. Issue #20: Checkout Process

### Sprint 2 (Week 2)
4. Issue #21: Order History
5. Issue #22: Payment Integration
6. Issue #23: Email Verification
7. Issue #24: Rate Limiting

### Sprint 3 (Week 3)
8. Issue #25: Input Validation
9. Issue #26: Restaurant Menu Display
10. Issue #27: Search & Filter
11. Issue #28: User Profile

### Sprint 4 (Week 4)
12. Issue #29: Order Management
13. Issue #30: Admin Dashboard

---

## Quick Wins (Can Do Now)

1. **Add loading skeletons** (1 day)
2. **Add error boundaries** (1 day)
3. **Add form validation** (1 day)
4. **Add toast notifications** (1 day)
5. **Add responsive improvements** (1 day)

---

## After MVP: Enhancements

- Issue #31: Real-time order tracking (WebSocket)
- Issue #32: Reviews & ratings
- Issue #33: Push notifications
- Issue #34: Restaurant registration flow
- Issue #35: Advanced analytics
- Issue #36: Mobile app

---

## Success Criteria for MVP

✅ Users can browse restaurants  
✅ Users can view menus  
✅ Users can add items to cart  
✅ Users can checkout  
✅ Users can pay  
✅ Orders are saved  
✅ Orders are visible to restaurants  
✅ Email verification works  
✅ Rate limiting active  
✅ Error handling in place  

**Then:** Ready for beta testing

