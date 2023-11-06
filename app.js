const express = require("express");
const app= express();
const port= 3000;

app.get("/", (req, res)=> {
    res.send("welcome to my home page");
});


app.get("/about", (req, res)=> {
res.status(280).send("welcome to my about page");
});


app.get("/contact", (req, res)=> { 
    res.send("welcome to my contact page");
});



app.listen(port, () => {
console.log('listening to the port no 3000');

});