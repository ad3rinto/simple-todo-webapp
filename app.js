const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Working")
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})

