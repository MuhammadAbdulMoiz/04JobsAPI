require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const authUser = require('./middleware/authentication')

const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')

//middleware
const notFoundMW = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const connectDB = require('./db/connect')

app.use(express.json());
app.use('/api/v1/auth/', authRouter);
app.use('/api/v1/jobs/',authUser, jobRouter);

app.use(notFoundMW);
app.use(errorHandler);

port = process.env.PORT;
url = process.env.MONGO_URI

const start = async() => {
    try{
        await connectDB(url);
        app.listen(port, console.log(`Server Listening on port: ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
}

start();