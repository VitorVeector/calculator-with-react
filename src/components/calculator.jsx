import React, { Component } from 'react'
import Btn from './button'
import Display from './Display'

import './calculator.css'

export default class Calculator extends Component{

    constructor(props){
        super(props)
        this.clsMemory = this.clsMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.setDigit = this.setDigit.bind(this)
    }

    clsMemory(){
        console.log("Clear Memory")
    }

    setOperation(operation){
        console.log(operation)
    }

    setDigit(number){
        console.log(number)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100}/>
                <Btn label="AC" click={this.clsMemory}/>
                <Btn label="/" click={this.setOperation}/>
                <Btn label="7"/>
                <Btn label="8"/>
                <Btn label="9"/>
                <Btn label="*"/>
                <Btn label="4"/>
                <Btn label="5"/>
                <Btn label="6"/>
                <Btn label="-"/>
                <Btn label="1"/>
                <Btn label="2"/>
                <Btn label="3"/>
                <Btn label="+"/>
                <Btn label="."/>
                <Btn label="="/>
                <Btn label="0"/>
            </div>
        )
    }
    
}