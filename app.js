const express = require("express");
const bodyParser = require("body-parser");
const { RSA_NO_PADDING } = require("constants");
const PORT = 3000;


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    var today = new Date();
    var day = "";

    if(today.getDay() === 6 || today.getDay() === 0){
        day = "Weekend";
        res.render("list", {kindOfDay: day})

    } else {
        day = "Weekday";
        res.render("list", {kindOfDay: day})
    }
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})
