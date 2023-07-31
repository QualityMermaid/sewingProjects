const express = require("express")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT||8084
const app = express()
app.use(cors())

const bags = require("./Lib/Bags")
const clothes = require("./Lib/Clothes")

app.get("/", function(request, response){
    response.status(200).json("This is the main root")
})

app.get("/bags", bags)
app.get("/clothes", clothes)

app.listen(PORT, ()=> console.log(`app is listening on PORT ${PORT}`))
