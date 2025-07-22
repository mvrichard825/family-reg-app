const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const memberRoutes = require('./routes/members');
app.use('/api/members', memberRoutes);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ Family Registration API is running...');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
  })
  .catch(err => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1); // optional: stop the server if DB fails
  });
