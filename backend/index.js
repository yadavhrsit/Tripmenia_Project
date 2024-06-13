const express = require('express')
const path =require('path')
const app = express();
require('dotenv').config();
const morgan = require('morgan')

const HomeBanner = require('./models/bannersModel');

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

// const buildpath = path.join(__dirname,'../tripmenia_client/build')
// app.use(express.static(buildpath))


const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
// Use the routers
app.use('/api/admin',adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/banners", bannerrouter);
app.use("/api/bookings", bookingRoutes);



app.use("/api/test", (req, res) => {
  return res.send("Server is running");
});

morgan.token("body", (req) => {
    return JSON.stringify(req.body);
  });
  
  app.use(morgan(":method :url :body"));

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT);
})
