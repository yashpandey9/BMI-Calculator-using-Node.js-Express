const express = require("express");         //incorperating Express in our package.

const app = express();

// Now we have to use body-parser through app
app.use(express.urlencoded({extended: true}));   //body-parser have different other methods we're using urlendcoded as it is used for parsing data comes from a html form.
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator.html", function(req, res){
    var h = parseFloat(req.body.Height);
    var w = parseFloat(req.body.Weight);
    var result = w/(h*h);
    var bmi = Math.floor(result);
    res.send("Your BMI is : "+bmi);
});



app.post("/index.html", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("Result: "+result);
});

app.listen(3000, function(){
    console.log("server is running on port no. 3000");
});