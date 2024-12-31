const express = require('express');
const cartRouter = express.Router();
const authMiddleware = require('../middleware/auth');

const {addToCart, getCart, removeFromCart} = require('../controllers/cartController');

cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/get',authMiddleware,getCart)
cartRouter.post('/remove',authMiddleware,removeFromCart)

module.exports = cartRouter;