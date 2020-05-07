
const round = function (decimals) {
    return function (scalar, units) {
        return `${Math.round(scalar*(10*decimals)) / (10*decimals)} ${units}`
    }
}

const truncate = function (decimals) { 

    return function(scalar, units) { 
        console.log(scalar)
        return `${scalar.toFixed(decimals)} ${units}`;
        // return `${scalar} ${units}`
    }
}
module.exports = { round , truncate }