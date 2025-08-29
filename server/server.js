require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const Sentry = require('@sentry/node');
const path = require('path');
// Initialize Express
const app = express();
const authRoutes = require('./routes/authRoutes');
const requestRoutes = require('./routes/requestRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

Sentry.setupExpressErrorHandler(app); 
// move this above route usage if needed

// Middleware
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['*'],
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/dashboard', dashboardRoutes);


app.get('/', (req, res) => {
  res.send("API is working");
});


connectDB().then(() => {
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
