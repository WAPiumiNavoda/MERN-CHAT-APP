const express = require("express");
const chats = require('./data/data.js')
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/', (req,res)=>{
    res.send("API is Running")
})

app.get('/api/chat', (req,res)=>{
    res.send(chats)
})


const PORT = process.env.PORT || 8000

app.listen(PORT,console.log(`Server running on PORT ${PORT}...`));