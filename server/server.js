require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const connectDB = require('./utils/db');
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // adjust if needed
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api', jobRoutes);
app.use('/api', authRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Connect to DB and start server
connectDB(); // This connects to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
