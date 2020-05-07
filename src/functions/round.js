
const round = function (decimals) {
    return function (scalar, units) {

        return `${Math.round((scalar + Number.EPSILON) * Math.pow(10,decimals)) / Math.pow(10} ${units}`
    }
}
module.exports = { round }