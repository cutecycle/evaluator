
import React from 'react';
import { Button, Paper, TextField, Card, InputAdornment } from '@material-ui/core';
// const anime = require('animejs');
import anime from 'animejs/lib/anime.es.js';
// import Qty from 'js-quantities';
const Qty = require('js-quantities');

const fToC = 5;
const fToK = 5;
const checkAnswer = function (studentAnswer, correctAnswer) {
    try {
        return Qty(studentAnswer).eq(Qty(correctAnswer));
    } catch (e) {
        return 0;
    }
}
const humanize = function (value) {
    let output = value;
    output = (value == "fahrenheit") ? "tempF" : value;
    output = (value == "celsius") ? "tempC" : value;
    output = (value == "kelvin") ? "tempK" : value;
    return value;

}
const round = function (decimals) {
    return function (scalar, units) {
        var pow = Math.pow(10, decimals);
        return `${scalar.toFixed(2)} ${units}`
    }
}
const xtox = function (fromUnit, toUnit, value) {
    try {
        const quantity = new Qty(`${value} ${humanize(fromUnit)}`);
        return quantity.to(humanize(toUnit)).format(round(2));
    } catch (e) {
        return "invalid"
    }
}

class ResultField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>{this.props.value}</div>
    }
}

class AnswerField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'correctAnswer': ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.answerAnimator = anime({
            targets: '#studentResponse',
            rotate: 360,
            autoplay: false
        });
        console.log(this.answerAnimator)

    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        },
            function () {
                this.setState({
                    ...this.state,
                    correctAnswer: xtox(this.state.inputUnit, this.state.targetUnit, this.state.inputValue),
                    answerStatus: checkAnswer(this.state.studentResponse, xtox(this.state.inputUnit, this.state.targetUnit, this.state.inputValue))
                })
                console.log(`answer: ${xtox(this.state.inputUnit, this.state.targetUnit, this.state.inputValue)}`)

            }
        );
        console.log(event.target.name)
        console.log(event.target.value)

        anime({
            targets: document.querySelector("#studentResponse"),
            rotate: 360
        });

    }

    render() {
        return <div>
            <TextField value={this.inputValue} onChange={this.handleChange} variant="outlined" name="inputValue" helperText="Numerical Value"></TextField>
            <TextField onChange={this.handleChange} variant="outlined" name="inputUnit" helperText="Unit of Measurement"></TextField>
            <TextField onChange={this.handleChange} variant="outlined" name="targetUnit" helperText="Unit to Convert To"></TextField>
            <TextField error={!this.state.answerStatus} onChange={this.handleChange} variant="outlined" id="studentResponse" name="studentResponse" helperText="Student Response"></TextField>

            <TextField variant="outlined" helperText="Correct Answer" value={this.state.correctAnswer} />

            {/* <InputAdornment></InputAdornment></TextField> */}
        </div>
    }

}

export { AnswerField }