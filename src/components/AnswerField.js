
import React from 'react';
import { Button, Paper, TextField, Card, InputAdornment } from '@material-ui/core';
// const anime = require('animejs');
import anime from 'animejs/lib/anime.es.js';
import Qty from 'js-quantities';
const quantities = require('js-quantities');

const fToC = 5;
const fToK = 5;
const xtox = function (fromUnit, toUnit, value) {
    //TODO: i know there's a more efficient way of doing this...
    // const values = {
    //     fahrenheitcelsius: function (value) { 
    //         return 3 + 3;
    //     },
    //     celsiusfahrenheit: cToF,

    //     fahrenheitkelvin: f,
    //     kelvinfahrenheit: f,

    //     celsiuskelvin,
    //     kelvincelsius,

    // } 
    try {
    const quantity = new Qty(value + ` ${fromUnit}`);
    return Qty.to(toUnit);
    

    } catch(e) { 
        return e
    }

    // return entry;

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
            this.setState({
                ...this.state,
                correctAnswer: xtox(this.state.inputUnit, this.state.targetUnit, this.state.inputValue

                )
            })
        );
        console.log(event.target.name)
        console.log(event.target.value)

        // this.answerAnimator.restart();
        // this.answerAnimator.play();
        anime({
            targets: document.querySelector("#studentResponse"),
            rotate: 360
        });

        // xtox("fahrenheit","celsius",3)
        // result = xtox()
    }

    render() {
        return <div>
            <TextField value={this.inputValue} onChange={this.handleChange} variant="outlined" name="inputValue" helperText="Numerical Value"></TextField>
            <TextField onChange={this.handleChange} variant="outlined" name="inputUnit" helperText="Unit of Measurement"></TextField>
            <TextField onChange={this.handleChange} variant="outlined" name="targetUnit" helperText="Unit to Convert To"></TextField>
            <TextField onChange={this.handleChange} variant="outlined" id="studentResponse" name="studentResponse" helperText="Student Response"></TextField>

            {/* <TextField multiline onChange={this.handleChange} > */}

            {/* <InputAdornment></InputAdornment></TextField> */}
            <div>{this.props.value}</div>
        </div>
    }

}

export { AnswerField }