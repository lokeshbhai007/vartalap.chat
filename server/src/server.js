import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config()
const app = express()

const port = process.env.PORT || 4000;

app.get("/", (req, res) =>{
    res.send("Hiii")
})

app.use("/api/auth", authRoutes )
app.use("/api/messages", messageRoutes )

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
    
})