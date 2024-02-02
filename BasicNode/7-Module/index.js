// by using ./cryptoCurrency we are importing cryptocurrency module

const cryptoModel = require("./cryptoCurrency")


const gain = cryptoModel.gains(50, 50);
const zero = cryptoModel.deListed(1000);
const toTheMoon = cryptoModel.bigGain(100);

console.log("debug answer", gain, zero, toTheMoon);