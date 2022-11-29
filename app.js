const express = require('express');
const app=express();
const burger=require('./burger.json');
const menu=require('./menu.json');

app.get('/menu',(req,res)=>{
    res.json(menu);
});

app.get('/ingredients',(req,res)=>{
    res.json(burger);
});

app.listen(4000,()=> console.log('listening on 4000...'))

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });
// server.listen(4000);

// console.log('listening on 4000');