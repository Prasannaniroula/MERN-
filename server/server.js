import express from "express";
import router from "./router/route.js"
const app = express();
const PORT = 8000;


app.use('',router);


app.listen(PORT,()=>{
    console.log(`Your port is running on port: http://localhost:${PORT}/`)
})