require('dotenv').config()

const {connectDB} = require('./db/connect');
const {Product}  = require('./models/Product');
const d3json = require('./d3-react.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany() // option
        await Product.create(d3json)
        process.exit(0) // 0 = everything fine 
    } catch (error) {
        console.log(error)
        process.exit(1) // 1 = error
    }
}

start()