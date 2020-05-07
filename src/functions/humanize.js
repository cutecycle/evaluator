const humanize = function (value) {
    let output = value;
    output = (value === "fahrenheit") ? "tempF" : output;
    output = (value === "celsius") ? "tempC" : output;
    output = (value === "kelvin") ? "tempK" : output;
    output = (value === "rankine") ? "tempR" : output;
    return output;

}
module.exports = { humanize }