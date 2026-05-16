# 🍔 QuickBite - Food Delivery Web App

QuickBite is a full-stack food ordering and delivery web application built using the MERN Stack. Users can browse food items, add products to cart, place orders, and track order status. 
The application also includes a complete admin dashboard to manage food items and customer orders.

---

# 🚀 Features

## 👤 User Features

* User Authentication (Login/Register)
* Browse Food Items
* Explore Food Categories
* Add to Cart
* Remove from Cart
* Dynamic Cart Total
* Place Orders
* View My Orders
* Track Order Status
* Responsive UI Design

---

## 🛠 Admin Features

* Add New Food Items
* Upload Food Images
* View Food Item List
* Delete Food Items
* View All Orders
* Update Order Status

  * Food Processing
  * Out for Delivery
  * Delivered

---

# 🧰 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Context API
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer (Image Upload)

---

# 📂 Project Structure


QuickBite/
│
├── frontend/
├── backend/
├── admin/

---

# ⚙️ Installation

## 1️⃣ Clone Repository

git clone https://github.com/peddintinandini/quickbite.git

---
## 2️⃣ Install Dependencies

### Frontend

cd frontend
npm install
npm run dev

### Backend

cd backend
npm install
npm start


### Admin Panel
cd admin
npm install
npm run dev

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:
env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
---

# 📡 API Endpoints

## 👤 User Routes
POST /api/user/register
POST /api/user/login

## 🍔 Food Routes
POST /api/food/add
GET  /api/food/list
POST /api/food/remove

## 🛒 Cart Routes
POST /api/cart/add
POST /api/cart/remove
POST /api/cart/get

## 📦 Order Routes
POST /api/order/place
POST /api/order/userorder
GET  /api/order/list
POST /api/order/status

# 🔐 Authentication

JWT Authentication is used to protect user cart and order APIs.

# 🎯 Future Improvements

* Online Payment Integration
* Live Order Tracking
* Email Notifications
* Cloud Deployment
* Search & Filter Feature
* Mobile Responsive Improvements

# 👨‍💻 Author

Developed by Nandini P
---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
