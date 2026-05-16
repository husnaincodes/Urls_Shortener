# 🔗 URL Shortener

A full-stack URL Shortener web application built with React, Node.js, Express, and MongoDB.

---

## 🌐 Live Demo

- **Frontend:** https://urls-shortener-five.vercel.app
- **Backend API:** https://urlsshortener-production.up.railway.app

---

## ✨ Features

- 🔗 Shorten any long URL instantly
- 📊 Analytics dashboard to track clicks
- 🔄 Redirect short URLs to original URLs
- 🗑️ Clear all URL history
- 📱 Responsive design

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway |

---

## 📁 Project Structure

```
Urls_Shortener/
├── Backend/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/
│   │   └── urlController.js  # Route logic
│   ├── models/
│   │   └── Url.js         # MongoDB schema
│   ├── routes/
│   │   └── urlRoutes.js   # API routes
│   ├── .env               # Environment variables (not committed)
│   ├── .gitignore
│   ├── package.json
│   └── server.js          # Express server entry point
│
└── Frontend/frontend/
    ├── public/
    ├── src/
    │   ├── Analytics.jsx  # Analytics page
    │   ├── Shortener.jsx  # URL shortener page
    │   ├── styles.css     # Global styles
    │   └── App.js         # Main app component
    ├── .env               # Environment variables (not committed)
    ├── .gitignore
    └── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js v20+
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/husnaincodes/Urls_Shortener.git
cd Urls_Shortener
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create `.env` file in the `Backend` folder:

```env
MONGO_URI=mongodb+srv://your_user:your_password@cluster0.xxxxx.mongodb.net/urlshortener?retryWrites=true&w=majority
PORT=5000
BASE_URL=http://localhost:5000
```

Run the backend:

```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../Frontend/frontend
npm install
```

Create `.env` file in the `Frontend/frontend` folder:

```env
REACT_APP_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/shorten` | Create a short URL |
| GET | `/api/analytics` | Get all URLs and click counts |
| DELETE | `/api/clear` | Clear all URL history |
| GET | `/:code` | Redirect to original URL |

### Example Request

**POST** `/api/shorten`

```json
{
  "originalUrl": "https://www.example.com/very/long/url"
}
```

**Response:**

```json
{
  "shortUrl": "https://urlsshortener-production.up.railway.app/GoWEdr5Mt"
}
```

---

## ☁️ Deployment

### Frontend — Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Set Root Directory to `Frontend/frontend`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://urlsshortener-production.up.railway.app
   ```
5. Deploy

### Backend — Railway

1. Connect repo to Railway
2. Set Root Directory to `Backend`
3. Add environment variables:
   ```
   MONGO_URI=your_mongodb_atlas_uri
   PORT=5000
   BASE_URL=https://urlsshortener-production.up.railway.app
   ```
4. Deploy

### Database — MongoDB Atlas

1. Create a free M0 cluster
2. Add database user
3. Allow access from anywhere (`0.0.0.0/0`)
4. Copy connection string to `MONGO_URI`

---

## 📝 Environment Variables

### Backend `.env`

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default: 5000) |
| `BASE_URL` | Backend base URL for short links |

### Frontend `.env`

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Backend API base URL |

---

## 👨‍💻 Author

**Husnain** — [@husnaincodes](https://github.com/husnaincodes)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
