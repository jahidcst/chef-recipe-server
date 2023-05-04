const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const allData = require("./data/chef.json");
const cors = require("cors");

app.use(cors());


app.listen(port, () =>{
    console.log(`chef is running on port: ${port}`)
})

app.get('/', (req, res)=>{
    res.send("hello world");
})


app.get('/allData', (req, res) =>{
    res.send(allData);
});





