import React from 'react'
import Btn from './button'

import './calculator.css'

export default props => {
    return (
        <div id="calculator">
            <Btn label="AC"/>
            <Btn label="/"/>
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