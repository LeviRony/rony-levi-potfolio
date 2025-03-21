const express = require('express');
const router = express.Router();
const itemRoutes = require('./itemRoutes');
const customerRoutes = require('./customerRoutes');
const productRoutes = require('./productRoutes');
const reviewRoutes = require('./reviewRoutes.js');
const orderRoutes = require('./orderRoutes');

router.use('/items', itemRoutes);
router.use('/customers', customerRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reviewRoutes);
router.use('/orders', orderRoutes);



module.exports = router;