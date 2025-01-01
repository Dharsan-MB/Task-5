# Add to Cart Task Using Modal

## Overview  
This is a ReactJS application that allows users to browse products fetched from the Fake Store API and manage their shopping cart through a modal interface. The application is designed with responsiveness and user-friendly interactions in mind.

---

## Features  
- Fetches product data from the **Fake Store API**.  
- Displays products in a user-friendly, responsive grid layout.  
- Includes key product details: **image**, **title**, **price**, and an **"Add to Cart"** button.  
- Handles adding items to the cart while preventing duplicate additions with an alert message.  
- Displays the cart item count in the Navbar.  
- Provides a modal to view all items in the cart.  
- Allows users to remove items from the cart directly from the modal.  
- Uses **props** to manage state and data flow between components.  
- Fully responsive for both desktop and mobile devices.  

---

## Installation  

1. Clone this repository:  
   ```bash  
   git clone https://github.com/Dharsan-MB/Task-5.git 
   ```  

2. Navigate to the project folder:  
   ```bash  
   cd add-to-cart-task  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Start the development server:  
   ```bash  
   npm start  
   ```  

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Usage  

1. **View Products:**  
   Browse the products displayed on the main page, fetched from the Fake Store API.  

2. **Add to Cart:**  
   Click the **"Add to Cart"** button on a product card to add it to the cart. If the item is already in the cart, an alert will notify you: **"Item already added to the cart."**  

3. **View Cart:**  
   Click the **"Cart"** button in the Navbar to open the modal. The modal displays all products in the cart with a count of total items.  

4. **Remove from Cart:**  
   In the modal, click the **"Remove from Cart"** button to remove a product. The cart updates automatically.  

---

## File Structure  

```
src/  
│  
├── components/  
│   ├── Navbar.js           // Displays the cart count.  
│   ├── ProductList.js      // Fetches and displays products.  
│   ├── ProductCard.js      // Displays individual product details.  
│   ├── CartModal.js        // Modal to view and manage cart items.  
│   └── Alert.js            // Displays alerts for duplicate cart additions.  
│  
├── hooks/  
│   └── useCart.js          // Manages cart state (optional, if using hooks).  
│  
├── App.js                  // Main application component.  
└── index.js                // Application entry point.  
```  

---

## Technologies Used  

- **ReactJS**: Frontend framework.  
- **React Modal**: For the modal interface.  
- **Fake Store API**: To fetch product data.  
- **CSS**: For responsive styling.  

---

## Future Enhancements  

- Add pagination or lazy loading for the product list.  
- Include a search or filter feature for easier product browsing.  
- Add a confirmation dialog before removing an item from the cart.  

---

## Author  
Dharsan MB  

Feel free to contribute or suggest improvements by creating issues or pull requests!  

---  
