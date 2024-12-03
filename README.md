# IT3133-ICAE1

# Flower Shop Application

This is a simple React application for a Flower Shop, consisting of three main components: `Product`, `Cart`, and `Products`. The application allows users to view a list of flowers, add them to the shopping cart, and see the total cost of items in the cart.

---

## Components Overview

### 1. **`Product` Component**
This component represents a single flower product and allows users to specify a quantity and add the item to the cart.

#### Props:
- **`flower`** (Object): Contains information about the flower, including:
  - `id` (number): Unique identifier for the flower.
  - `name` (string): Name of the flower.
  - `price` (number): Price per unit of the flower.
  - `img` (string): Image filename of the flower.
- **`addToCart`** (Function): A function to add the product to the cart.

#### Features:
- Displays product details (image, name, price).
- Allows users to specify the quantity of flowers.
- Adds the selected quantity to the cart.

---

### 2. **`Cart` Component**
This component displays the items added to the cart and calculates the total price.

#### Props:
- **`cartItems`** (Array): A list of items in the cart, each with:
  - `id` (number): Unique identifier for the flower.
  - `name` (string): Name of the flower.
  - `price` (number): Price per unit of the flower.
  - `qty` (number): Quantity of the flower added to the cart.

#### Features:
- Displays a table with product name, quantity, and total price per product.
- Calculates and displays the grand total for all items in the cart.

---

### 3. **`Products` Component**
This is the main component that integrates the `Product` and `Cart` components. It manages the state of the cart and provides functionality to add items to it.

#### Features:
- Displays a list of flowers for purchase using the `Product` component.
- Manages the cart state and updates it when items are added.
- Displays the cart using the `Cart` component.

---

## Installation and Setup

### Prerequisites:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

### Steps:
1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/flower-shop.git
   cd flower-shop
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and visit:
   ```bash
   (http://localhost:3000)
   ```
## File Structure
```
src/
├── assets/
│   ├── CSS/
│   │   └── layout.css    # Application styles
│   └── image/            # Images for the flowers
├── components/
│   ├── Product.js        # Product component
│   ├── Cart.js           # Cart component
│   ├── Products.js       # Main component
│   └── FlowerDB.js       # Mock data for flowers
└── App.js                # Main app entry point
```
# Mock Data - FlowerDB.js

```javascript
export const flowers = [
    { id: 1, name: 'Rose', price: 2, img: 'rose.jpg' },
    { id: 2, name: 'Tulip', price: 3, img: 'tulip.jpg' },
    { id: 3, name: 'Daisy', price: 1.5, img: 'daisy.jpg' },
];
```

## Styling

All CSS styles are defined in `layout.css` located in the `assets/CSS/` directory. You can customize the styles in this file to match your design preferences. This file controls the layout and visual design of the entire app.

## How It Works

1. **Products Component**:
   - The `Products.js` component fetches the list of flowers from `FlowerDB.js` (which contains mock data).
   - It renders a `Product` component for each flower in the list.
   - Users can select the quantity of each flower and click the "Add to Cart" button to add the item to the cart.

2. **Add to Cart**:
   - The `addToCart` function in the `Products.js` component updates the state with new or updated cart items whenever a user adds an item.
   - This function ensures that the cart reflects the correct quantities and prices.

3. **Cart Component**:
   - The `Cart.js` component displays the current items in the shopping cart.
   - It calculates the total price of the items in the cart based on their quantity and price.

## OutPut
![Screenshot (423)](https://github.com/user-attachments/assets/cd7eae5a-b84b-429b-aae2-48ad8ffb2bca)

