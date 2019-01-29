const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'))
app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`);
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/html/home.html');
})