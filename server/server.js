import express from "express";
const app = express();
const PORT = 8000;


app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/register',(req,res)=>{
    res.send("this is register page")
})

app.listen(PORT,()=>{
    console.log(`Your port is running on port: http://localhost:${PORT}/`)
})