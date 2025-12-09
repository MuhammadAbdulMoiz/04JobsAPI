const mongoose = require('mongoose')

const connectDB = async (uri) => {
    await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false        
    });
    console.log('Connected to MongoDB!');
}

module.exports = connectDB;