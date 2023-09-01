const express = require('express');
const mongoose = require('mongoose');
const url= `mongodb://127.0.0.1:27017/BookDB`

const app = express();
 
//just to avoid warning
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected..');
})

const bookRouter = require('./routes/books')
app.use('/books',bookRouter)

app.listen(9000,()=>{
    console.log("server started");
})