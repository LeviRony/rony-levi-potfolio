const express = require('express');
const router = express.Router();
const reviewRoutes = require('./reviewRoutes.js');



router.use('/reviews', reviewRoutes);




module.exports = router;