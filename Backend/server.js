const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/', urlRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));