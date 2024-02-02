
const express = require('express');

const{handleAllCurrencies, getIndividualCurrency} = require('../Controller/currency.controller')

const router = express.Router();


// where .get is method and res, req is handler
router.get("/allCurrencies", handleAllCurrencies);

router.get("/:id", getIndividualCurrency)


module.exports = router;