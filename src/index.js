
const express =  require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app= express();
const port = 9000;

const userRoutes = require('./routes/user');

// middlewares
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use('/api', userRoutes);



// routes
app.get('/', (req,res)=>{
    res.send('welcome to my API REST ROR2022');
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conected to MongoDB'))
    .catch((err)=> console.log(err));

app.listen(port, ()=> console.log('server listening on port:',port));