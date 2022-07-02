const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const { connectDB } = require('./db/connect')
const products = require('./routes/products')
require('dotenv').config()

const buildPath = path.join(__dirname, '..', 'build')
const clientBuildPath = path.join(__dirname, '..', '/build/index.html')
app.use(express.static(buildPath))
app.use(bodyParser.json())

app.use('/api/v1/products', products)

app.route('/*').get(async (req, res) => {
  res.sendFile(path.resolve(clientBuildPath))
})

const port = process.env.PORT || 5001
const start = async (req, res, err, next) => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening on port ${port}!`))
  } catch (error) {
    next(error)
  }
}

start()
