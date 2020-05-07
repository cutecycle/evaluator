
const round = function (decimals) {
    return function (scalar, units) {
        return `${scalar.toFixed(2)} ${units}`
    }
}
module.exports = { round }