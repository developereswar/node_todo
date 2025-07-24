const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_CLUSTER,
  DB_NAME,
  DB_OPTIONS
} = process.env;

const mongoURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?${DB_OPTIONS}`;
mongoose.connect(mongoURI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/todos', todoRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
