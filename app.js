const express = require("express");
const bodyParser = require("body-parser");
const { RSA_NO_PADDING, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
const { name } = require("ejs");
const PORT = 3000;
let items = ["Buy Food","Cook Food","Eat Food"];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    let today = new Date();
    let dayOfTheWeek = today.toLocaleString(
        'default', {weekday: 'long'}
    );

    res.render("list", {kindOfDay: dayOfTheWeek,todoItems : items});
});


app.post("/", function(req, res){
    let todoItem = req.body.nextItem;
    items.push(todoItem);
    console.log(items)

    res.redirect("/")
})




app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})
