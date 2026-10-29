const express = require("express");
const app = express();
app.disable("x-powered-by");
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/home",(req,res)=>{
    res.send("home page of the website")
})
app.get("/about",(req,res)=>{
    res.send("about page of the website")
})
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})