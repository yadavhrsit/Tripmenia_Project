const express = require('express');
const jwt = require('jsonwebtoken');
const { LoginUser,RegisterUser} = require('../controller/admin.controller')

const adminRoutes = express.Router();

// Signup

adminRoutes.post('/login',LoginUser);

// DO NOT DEPLOY THE BELOW ROUTE 

// adminRoutes.post("/register", RegisterUser); CAREFUL DON'T DEPLOY THIS 


module.exports = adminRoutes;
