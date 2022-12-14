//importing
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require('express')
const mongoose = require('mongoose')


const postRoutes= require('./routes/postRoutes')

//constructor
const app = express();

//Port that will be used
const PORT = 3000
//db path
const mongoURL = process.env.mongoURL



// read/send JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//routes

app.use('/post',postRoutes)

app.get('*', (req, res) => {
    res.status(404).json({msg: 'No routes found. Try /post'})
})

//conect w db
//remove deprecation warning
mongoose.set('strictQuery',false)
mongoose.connect(mongoURL).then(
    //if conected, listen
    app.listen(PORT, ()=>{
        console.log(`MongoDB connected! listening on port: ${PORT}`)
    })
).catch((err)=>console.log(err))


