const express = require('express');
const app = express();
// Middleware - xử lý request trước khi đến route
app.use(express.json());  // Parse JSON request body

// Import userRoutes và sử dụng nó trong ứng dụng
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);



module.exports = app;