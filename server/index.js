const express = require("express");
const app = express();
const cors = require('cors')
const {connectDB} = require('./db/connect');
const bodyParser = require("body-parser");
const products = require('./routes/products');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors())


app.use('/api/v1/products',products)

const port = process.env.PORT || 5000

const start = async(req,res,err,next) => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => console.log(`Server is listening on port ${port}!`))
    } catch (error) {
      next(error)
    }
  }
  
start();