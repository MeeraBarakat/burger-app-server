const express = require('express');
const app=express();
const burger=require('./data/burger.json');
const menu=require('./data/menu.json');

app.get('/menu',(req,res)=>{
    res.json(menu);
});

app.get('/ingredients',(req,res)=>{
    res.json(burger);
});

app.listen(4000,(error)=> {
    if(!error)
        console.log('listening on 4000...');
    else
        console.log("Error Occurred");
});