
import React from 'react';
import { TextField } from '@material-ui/core';

import { motion } from 'framer-motion';
const Qty = require('js-quantities');
const { humanize } = require('../functions/humanize.js');
const { round, truncate } = require('../functions/round.js');

const checkAnswer = function (studentAnswer, correctAnswer) {
    try {
        
        let studentRounded = Qty(
            Qty(studentAnswer).format(round(1))
        )
        let correctRounded = Qty(
            Qty(correctAnswer).format(round(1))
        )
        debugger;
        return studentRounded.eq(correctRounded);
    } catch (e) {

        return 0;
    }
}

const xtox = function (fromUnit, toUnit, value) {
    try {
        const quantity = new Qty(`${value} ${humanize(fromUnit)}`);
        return quantity.to(humanize(toUnit)).format(truncate(4));
    } catch (e) {

        return "invalid"
    }
}

class AnswerField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'correctAnswer': ''
        };
        this.handleChange = this.handleChange.bind(this);
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
    }

    render() {
        return <motion.div animate >


            <TextField value={this.inputValue} onChange={this.handleChange} variant="outlined" name="inputValue" helperText="Numerical Value"></TextField>

            <TextField onChange={this.handleChange} variant="outlined" name="inputUnit" helperText="Unit of Measurement"></TextField>

            <TextField onChange={this.handleChange} variant="outlined" name="targetUnit" helperText="Unit to Convert To"></TextField>

            <motion.div style={{ display: 'inline-block' }} animate={{ rotate: 360 * !this.state.answerStatus }}>
                <TextField error={!this.state.answerStatus} onChange={this.handleChange} variant="outlined" id="studentResponse" name="studentResponse" helperText="Student Response"></TextField>
            </motion.div>


            <TextField variant="outlined" helperText="Authoritative Answer" value={this.state.correctAnswer} />

            {/* <InputAdornment></InputAdornment></TextField> */}
        </motion.div>
    }

}

export { AnswerField }