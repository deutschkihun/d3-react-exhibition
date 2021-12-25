const express = require('express');
const router = express.Router();
const { filteredProduct,
        getAllProducts
        } = require('../controllers/products')


router.route('/filter').post(filteredProduct)
router.route('/').get(getAllProducts)
module.exports = router