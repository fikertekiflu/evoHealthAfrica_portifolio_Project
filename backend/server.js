const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS package
const { sequelize } = require('./config/db');
const authRoutes = require('./routes/AuthRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());  // Enable CORS
app.use(bodyParser.json());

// Register routes
app.use('/api/auth', authRoutes);

// Sync the database and start the server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
