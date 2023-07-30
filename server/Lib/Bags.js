const data = require("../data.json")

function bags (request, response){
    response.json("Bags")
}

function filterDataByCatagory(bag){
    const result = data.filter((bag)=> bag.Catagory == bag)
    return result
}
filterDataByCatagory()
module.exports = bags