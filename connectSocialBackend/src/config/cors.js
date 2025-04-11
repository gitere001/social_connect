// config/cors.config.js
const cors = require('cors');

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // For legacy browser support
};

// Export both the options and pre-configured middleware
module.exports = {
  corsOptions,
  corsMiddleware: cors(corsOptions)
};