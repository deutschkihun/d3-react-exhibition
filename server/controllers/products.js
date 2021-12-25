const {Product} = require('../models/Product')

const getAllProducts = async (req,res) => {
    const d3react = await Product.find({})
    res.status(200).json({d3react, length: d3react.length})    
}

const filteredProduct = async (req,res) => {
   
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    // product collection에 들어 있는 모든 상품 정보를 가져오기 
    let term = req.body.searchTerm

    let findArgs = {};

    for (let key in req.body.filters) {
        console.log(key)
        if (req.body.filters[key].length > 0) {
            findArgs[key] = req.body.filters[key];
        }
    }

    console.log("123123",findArgs)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .exec((err, productInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({
                    success: true, productInfo,
                    postSize: productInfo.length
                })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .exec((err, productInfo) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({
                    success: true, productInfo,
                    postSize: productInfo.length
                })
            })
    }
}



module.exports = {
    filteredProduct,
    getAllProducts
}