const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000, () =>{
    console.log("Server is running at port 3000")
})

var dataFromFile = "loading";
var dataArray = [];
var loading = true;


fs.readFile('extra.txt', (err, data) =>{
    if(err) {
        console.log("Error:", err)        
    }else{
        setTimeout(()=>{
            loading = false
        }, 5000) 
        dataFromFile = data.toString()     
    }
});
    

app.get('/',(req, res) => {
    if(loading){
        res.send("loading...");
    }
    else{
        return res.redirect('home');
    }
})

app.get('/home',(req, res) => {
    res.send(dataFromFile); 
})





