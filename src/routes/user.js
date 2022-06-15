const express= require('express');
const router = express.Router();
const userSchema = require('../models/user.js')

// create user

router.post('/users',(req,res)=>{
    //res.send('My API create user');

    const user = userSchema(req.body);
    user.save()
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}));
});

// get all users
router.get('/users',(req,res)=>{
    //res.send('My API create user');

    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}));
});

// get a user

router.get("/users/:phone",(req,res)=>{
    const { phone } = req.params;
    userSchema
        .findOne({phone: phone})
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}));
});


// update a user

router.put('/users/:phone', (req,res)=>{
    const { phone } = req.params;
    const { title, subtitle, email, category  } = req.body;

    userSchema
        .updateOne({ phone: phone}, {$set: {title, subtitle, email, category}})
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}));
});

// delete a user

router.delete('/users/:phone', (req,res)=>{
    const { phone } = req.params;
    

    userSchema
        .deleteOne({ phone: phone})
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}));
});


module.exports = router;