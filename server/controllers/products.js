const {Product} = require('../models/Product')

const getAllProducts = async (req,res) => {
    const d3react = await Product.find({})
    res.status(200).json({d3react, length: d3react.length})    
}

const filteredProduct = async (req,res) => {
   
    let order = "asc";
    let sortBy = "_id";
    let term = req.body.searchTerm

    let findArgs = {};

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if(req.body.filters[key][0] === 0) {
                findArgs[key] = [1,2,3,4]
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
    
    Product.find(findArgs)
        .find(term ? { $text: { $search: term } }: {})
        .populate("writer")
        .sort([[sortBy, order]])
        .exec((err, data) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true, data,
                postSize: data.length
            })
        })
}



module.exports = {
    filteredProduct,
    getAllProducts
}