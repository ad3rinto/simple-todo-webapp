const express = require("express");
const bodyParser = require("body-parser");
const { RSA_NO_PADDING } = require("constants");
const PORT = 3000;


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    var today = new Date();
    var dayOfTheWeek = today.toLocaleString(
        'default', {weekday: 'long'}
    );
    console.log(dayOfTheWeek)

    
    res.render("list", {kindOfDay: dayOfTheWeek});
});

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})
