# ⚡ GenWeb.ai — AI-Powered Website Builder

A full-stack AI-powered website builder where you describe your website in plain English and the AI generates a fully functional, responsive website in seconds.

🔗 **Live Demo:** [https://ai-powered-website-builder-peach.vercel.app](https://ai-powered-website-builder-peach.vercel.app)
📂 **GitHub:** [https://github.com/Shambhu-coder/ai-powered-website-builder](https://github.com/Shambhu-coder/ai-powered-website-builder)

---

## ✨ Features

- 🤖 **AI Website Generation** — Describe your website in plain English and get a complete responsive HTML/CSS/JS website instantly
- ✏️ **Live Editor** — Refine and update your generated website with follow-up AI prompts
- 🚀 **One-Click Deploy** — Deploy your website and get a shareable public URL instantly
- 📊 **Dashboard** — View and manage all your generated websites in one place
- 🔐 **Google Authentication** — Secure sign-in with Firebase + JWT (Bearer token)
- 💳 **Stripe Payments** *(coming soon)* — Credit-based billing system powered by Stripe
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework & build tool |
| Tailwind CSS v4 | Styling |
| Redux Toolkit | Global state management |
| React Router v7 | Client-side routing |
| Axios | HTTP requests |
| Firebase | Google OAuth |
| Framer Motion | Animations |
| Monaco Editor | In-browser code editor |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express v5 | REST API server |
| MongoDB + Mongoose | Database |
| JWT | Authentication tokens |
| OpenRouter API | AI website generation |
| Stripe | Payments (coming soon) |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Render | Backend hosting |

---

## 📁 Project Structure

```
ai-website-builder/
├── client/                  # React frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js         # Axios instance with auth interceptor
│   │   ├── components/
│   │   │   └── LoginModal.jsx   # Google sign-in modal
│   │   ├── hooks/
│   │   │   └── useGetCurrentUser.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Dashboard.jsx    # User's websites
│   │   │   ├── Generate.jsx     # AI generation page
│   │   │   └── Editor.jsx       # Live editor
│   │   ├── redux/
│   │   │   └── userSlice.js
│   │   └── firebase.js
│   └── package.json
│
└── server/                  # Express backend
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── website.controllers.js
    │   └── user.controllers.js
    ├── middlewares/
    │   └── isAuth.js            # JWT Bearer token middleware
    ├── models/
    ├── routes/
    │   ├── auth.routes.js
    │   ├── website.routes.js
    │   └── user.routes.js
    ├── utils/
    └── index.js
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/google` | Google OAuth login, returns JWT token |
| GET | `/api/auth/logout` | Logout |

### User
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/user/me` | ✅ | Get current user |

### Website
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/website/generate` | ✅ | Generate new website with AI |
| POST | `/api/website/update/:id` | ✅ | Update website with AI prompt |
| GET | `/api/website/get-all` | ✅ | Get all websites for user |
| GET | `/api/website/get-by-id/:id` | ✅ | Get single website |
| GET | `/api/website/deploy/:id` | ✅ | Deploy website |
| GET | `/api/website/get-by-slug/:slug` | ❌ | Public website view |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB database (MongoDB Atlas recommended)
- Firebase project with Google Auth enabled
- OpenRouter API key

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Setup the Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173
OPENROUTER_API_KEY=your_openrouter_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the server:
```bash
npm run dev
```

### 3. Setup the Frontend
```bash
cd client
npm install
```

Create a `.env` file in the `client/` folder:
```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

Start the frontend:
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🌐 Deployment

### Backend (Render)
Set these environment variables in Render dashboard:
```
PORT=5000
MONGODB_URI=...
JWT_SECRET=...
CLIENT_URL=https://your-app.vercel.app
FRONTEND_URL=https://your-app.vercel.app
OPENROUTER_API_KEY=...
```

### Frontend (Vercel)
Set these environment variables in Vercel dashboard:
```
VITE_API_URL=https://your-backend.onrender.com
VITE_FIREBASE_API_KEY=...
```

---

## 🔑 Auth Flow

1. User clicks **Continue with Google**
2. Firebase handles Google OAuth popup
3. Frontend sends user details to `POST /api/auth/google`
4. Backend creates/finds user in MongoDB and returns a **JWT token**
5. Token is stored in `localStorage`
6. Every subsequent API request sends the token as `Authorization: Bearer <token>`
7. `isAuth` middleware verifies the token on all protected routes

---

## 🙏 Credits

Built by following YouTube tutorials and extended with real-world debugging and deployment experience.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).