const humanize = function (value) {
    let output = value;
    output = (value === "fahrenheit") ? "tempF" : output;
    output = (value === "celsius") ? "tempC" : output;
    output = (value === "kelvin") ? "tempK" : output;
    output = (value === "rankine") ? "tempR" : output;
    output = powerify(output);

    return output;

}

const powerify = function (value) {
    try {
        let powers = {
            "cubic-": "3",
            "square-": "2"
        }
        let unit = value.replace(/[a-zA-Z]*-/, "");
        let power = powers[value.match(/[a-zA-Z]*-/)];
        if (typeof power === 'undefined') {
            return unit;
        }
        return `${unit}^${power}`
    } catch (e) {
        throw "error converting exponential unit"
    }

}
module.exports = { humanize }