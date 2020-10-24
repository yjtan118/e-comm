const express = require('express');
const {requireSignin, isAuth, isAdmin} = require('../controllers/auth');
const { userById, addOrderToUserHistory } = require('../controllers/user');
const { create, listOrders, getStatusValues, orderById, updateOrderStatus} = require('../controllers/order');
const { decreaseQuantity } = require('../controllers/product');

const router = express.Router();

router.post('/order/create/:userId', requireSignin, isAuth, addOrderToUserHistory, decreaseQuantity, create);
router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrders);
router.get('/order/status-values/:userId', requireSignin, isAuth, isAdmin, getStatusValues);
router.put('/order/:orderId/status/:userId', requireSignin, isAuth, isAdmin, updateOrderStatus);

router.param('userId', userById);
router.param('orderId', orderById);

module.exports = router;
