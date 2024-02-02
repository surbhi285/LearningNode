// so by using export whatever function or property we are giving in export it will be available to other part of js


// high
exports.bigGain = function toTheMoon(x){
    return x*100;
}

//Loss

exports.deListed = function loss(x){
    return x*0;
}

//Gain

exports.gains = function gains(x, percentage){
    return x*percentage;
}