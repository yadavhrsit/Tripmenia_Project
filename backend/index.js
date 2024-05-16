const express = require('express')
const app = express();
require('dotenv').config();
const morgan = require('morgan')
const path = require('path');

// Import the router files
const adminRoutes = require('./routes/adminRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const packageRoutes = require('./routes/packageRoutes');
const connectDb = require('./utils/connection')
const cors =require('cors')

const bannerrouter = require('./routes/bannerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
app.use(express.json()); // req.body
app.use(express.urlencoded({extended:true}))

connectDb();
const PORT = process.env.Port || 3000;
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
// Use the routers
app.use('/admin',adminRoutes);
app.use('/categories', categoryRoutes);
app.use('/packages', packageRoutes);
app.use('/banners',bannerrouter);
app.use('/bookings', bookingRoutes);



morgan.token("body", (req) => {
    return JSON.stringify(req.body);
  });
  
  app.use(morgan(":method :url :body"));

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT);
})
