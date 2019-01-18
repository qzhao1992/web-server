const fs = require('fs');

fs.readFile('data.txt', (err, data) =>{
    if(err) {
        console.log("Error:", err)
    }else{
        console.log(data.toString())
    }
});