require("./config/instrument.js");
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const Sentry = require('@sentry/node');

// Initialize Express
const app = express();

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("API is working");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


// Connect to DB and then start server
connectDB().then(() => {
  const PORT = process.env.PORT || 6000;

  Sentry.setupExpressErrorHandler(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
