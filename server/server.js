import express from "express";
import router from "./router/route.js"
import DB from "./utils/db.utils.js"
const app = express();
const PORT = 8000;

app.use(express.json())

app.use('',router);


DB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Your port is running on port: http://localhost:${PORT}/`)
    })
})