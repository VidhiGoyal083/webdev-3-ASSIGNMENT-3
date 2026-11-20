# Inventory and Data Management System

A RESTful backend API built with **Node.js**, **Express**, **Mongoose**, and **dotenv** to manage inventory products, stock updates, low-stock alerts, and category-wise summaries.

## Project Structure

```text
inventory-management-system/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── package.json
├── package-lock.json
└── server.js
```

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### Server & Database Connection
![MongoDB Connected](./mongodb%20connected%20.jpg)

## API Endpoints & Postman Testing

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/products` | Create a new product |
| `GET` | `/api/products` | Fetch all products (filtering, sorting & pagination) |
| `GET` | `/api/products/:id` | Fetch a single product by ID |
| `PUT` | `/api/products/:id` | Update product details |
| `PATCH` | `/api/products/:id/stock` | Adjust stock quantity |
| `GET` | `/api/products/low-stock` | Low-stock alert report |
| `GET` | `/api/products/summary` | Category-wise inventory summary |
| `DELETE` | `/api/products/:id` | Delete a product by ID |

### 1. Create Product (`POST /api/products`)
![POST](./POST.jpg)

### 2. Get All Products (`GET /api/products`)
![GET](./GET.jpg)

### 3. Get Product by ID (`GET /api/products/:id`)
![GET by ID](./GET_id.jpg)

### 4. Update Product (`PUT /api/products/:id`)
![PUT](./PUT.jpg)

### 5. Stock Adjustment (`PATCH /api/products/:id/stock`)
![PATCH](./PATCH.jpg)

### 6. Low-Stock Report (`GET /api/products/low-stock`)
![Low-Stock Report](<./GET (low-stock report).jpg>)

### 7. Category Summary (`GET /api/products/summary`)
![Summary](./GET_summary.jpg)

### 8. Delete Product (`DELETE /api/products/:id`)
![DELETE](./DELETE.jpg)