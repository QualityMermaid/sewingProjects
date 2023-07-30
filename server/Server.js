const express = require("express")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT||8084
const app = express()
app.use(cors)
app.listen(PORT, ()=> console.log(`app is listening on PORT ${PORT}`))

app.get("/", (request, response)=>{
    response.status(200).json("This is the main root")
})

app.get("/bags")