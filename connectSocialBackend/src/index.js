const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/auth.route.js');
const postRoutes = require('./routes/posts.route.js')
const {corsMiddleware} = require('./config/cors.js')
// const userRoutes = require('./routes/user.routes.js');

dotenv.config();
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(corsMiddleware)

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// Routes
app.use('/api/auth', authRoutes);  // Register, login, logout
app.use('/api/posts', postRoutes);
// app.use('/api/user', userRoutes);  // User profile (protected)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
