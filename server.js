const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const [swaggerServe, swaggerSetup] = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

console.log('🔍 MongoDB URI:', process.env.MONGODB_URI);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

// Test route
app.get('/', (req, res) => {
    res.send('🚀 Contacts API is running');
});

// Swagger route
app.use('/api-docs', swaggerServe, swaggerSetup);

// Start server
app.listen(port, () => {
    console.log(`🌐 Server running on port ${port}`);
});