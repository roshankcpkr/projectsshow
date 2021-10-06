//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");


const app = express();


const items = [];
const workItems = [];





app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))



app.get("/", function(req, res) {

    let day = date.getDate();
    res.render("list", { lt: day, newListItems: items })
})



app.post("/", function(req, res) {


    let item = req.body.newItem;

    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }


})

app.get("/work", function(req, res) {
    res.render("list", { lt: "work List", newListItems: workItems })
});

app.get("/about", function(req, res) {
    res.render("about");
})





app.listen(process.env.PORT || 3000, function() {
    console.log("server active");
})