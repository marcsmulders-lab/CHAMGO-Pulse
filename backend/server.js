const express = require('express');
const cors = require('cors');
const dashboardRoute = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/dashboard', dashboardRoute);

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
