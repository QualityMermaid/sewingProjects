const data = require("../data.json")

function clothes (request, response){
    response.json("Clothes")
}
function filterDataByCatagory(clothes){
    const result = data.filter((clothes)=> clothes.Catagory == clothes)
    return result
}
filterDataByCatagory()

module.exports = clothes