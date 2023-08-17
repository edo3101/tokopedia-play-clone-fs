const express = require('express');
const connectDB = require('./config/db.js');
const videoRoutes = require('./routes/videoRoutes.js');
const commentRoutes = require('./routes/commentRoutes.js');
const productsRoutes = require('./routes/productRoutes.js');
const cors = require('cors')

const app = express();
const PORT = 4000;

app.use(cors())

app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use('/', videoRoutes)
app.use('/', commentRoutes)
app.use('/', productsRoutes)

connectDB

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});