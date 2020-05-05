
import React from 'react';
import { Button, Paper, TextField, Card, InputAdornment } from '@material-ui/core';
// const anime = require('animejs');
import anime from 'animejs/lib/anime.es.js';

const fToC = 5;
const fToK = 5;
const xtox = function(fromUnit, toUnit, value) {
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
    
    
    // return entry;

}

class ResultField extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <Button>{this.props.value}</Button>
    }
}

class AnswerField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.answerAnimator = anime({
            targets: 'ResultField',
            rotate: 360,
            autoplay: false
        });
        console.log(this.answerAnimator)

    }

    handleChange(event) {
        this.setState({ value: event.target.value });

        // this.answerAnimator.restart();
        this.answerAnimator.play();
        xtox("fahrenheit","celsius",3)

    }


    render() {
        return <div>
            <TextField variant="outlined" name="value" helperText="Numerical Value"></TextField>
            <TextField variant="outlined" name="inputUnit" helperText="Unit of Measurement"></TextField>
            <TextField variant="outlined" name="targetUnit" helperText="Unit to Convert To"></TextField>
            <TextField variant="outlined" name="studentResponse" helperText="Student Response"></TextField>

            <TextField multiline onChange={this.handleChange} >

                <InputAdornment></InputAdornment></TextField>
            <ResultField value={this.state.value}>asdfasdfasdf</ResultField>
        </div>
    }

}

export { AnswerField }