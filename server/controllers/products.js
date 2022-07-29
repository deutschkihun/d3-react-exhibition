const { Product } = require('../models/Product')

const getAllProducts = async (req, res) => {
  const d3react = await Product.find({})
  res.status(200).json({ d3react, length: d3react.length })
}

const filteredProduct = async (req, res) => {
  const order = 'asc'
  const sortBy = 'id'
  const term = req.body.searchTerm

  const findArgs = {}

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in req.body.filters) {
    console.log(key)
    if (req.body.filters[key].length > 0) {
      if (req.body.filters[key][0] === 0) {
        findArgs[key] = [0, 1, 2, 3, 4]
      } else {
        findArgs[key] = req.body.filters[key]
      }
    }
  }

  Product.find(findArgs)
    .find(term ? { $text: { $search: term } } : {})
    .populate('writer')
    .sort([[sortBy, order]])
    .exec((err, data) => {
      console.log('sdfwef', data)
      if (err) return res.status(400).json({ success: false, err })
      return res.status(200).json({
        success: true,
        data,
        postSize: data.length,
      })
    })
}

module.exports = {
  filteredProduct,
  getAllProducts,
}
