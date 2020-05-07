const humanize = function (value) {
    let output = value;
    output = (value === "fahrenheit") ? "tempF" : value;
    output = (value === "celsius") ? "tempC" : value;
    output = (value === "kelvin") ? "tempK" : value;
    output = (value === "rankine") ? "tempR" : value;
    return output;

}
module.exports = { humanize }