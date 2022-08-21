const express = require("express");
const bodyParser = require("body-parser");
const { RSA_NO_PADDING, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
const { name } = require("ejs");
const PORT = 3000;
let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = ["Plan the day"];


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let today = new Date();
    let dayOfTheWeek = today.toLocaleString(
        'default', {weekday: 'long'}
    );

    res.render("list", {listTitle: dayOfTheWeek,todoItems : items});
});


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", todoItems: workItems});
});


app.post("/", function(req, res){
    let todoItem = req.body.nextItem;

    if(req.body.list === "Work"){
        workItems.push(todoItem); 
        res.redirect("/work"); 
    } else {
        items.push(todoItem);
        res.redirect("/");

    }
    console.log(workItems, items)
    
})



app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})
