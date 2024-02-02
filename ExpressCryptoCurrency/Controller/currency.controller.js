


function handleAllCurrencies(req, res){
    console.log("hello all currencies");
    res.end("hello to all currencies");
}

function getIndividualCurrency(req, res){
res.end("Individual coins");
}

module.exports = {handleAllCurrencies, getIndividualCurrency}