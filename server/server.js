import express from "express";
import route from "./router/route.js"
import DB from "./utils/db.utils.js"
import { errorMiddleware } from "./middleware/ApiError.middleware.js";
import {contactRouter} from "./router/Contact.router.js";
const app = express();
const PORT = 8000;

app.use(express.json())

app.use('',route);
app.use('/api',contactRouter)

app.use(errorMiddleware)


DB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Your port is running on port: http://localhost:${PORT}/`)
    })
})