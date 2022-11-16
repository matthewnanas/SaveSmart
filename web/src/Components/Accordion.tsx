import React, { useState } from 'react';
import { MdExpandLess } from 'react-icons/md'

import '../Static/Styles/Accordion.css'

/**
 * Function - DesktopCard
 * 
 * Will return a card component given props suited for desktop displays
 * 
 */
export function DesktopAccordion(props: { 
    question: string,
    answer: string, 
}) {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-30px')
    const [ display, setDisplay ] = useState('none')

    const handleClick = () => {
        if(opacity == '0'){
            setPosition('-20px')
            setDrop('rotate(1turn) translateY(-5px)')
            setOpacity('1')
            setDisplay('block')
        } else {
            setPosition('-30px')
            setDrop('rotate(.5turn) translateY(5px)')
            setOpacity('0')
            setDisplay('none')
        }
    }
    return (
        <div className='accordionContainer'>
            <div className='accordionBody'>
                <button className='accordionButton' onClick={handleClick}>
                    {props.question}<h2 className='accordionTitle' style={{ transform: dropIcon }}><MdExpandLess/></h2>
                </button>
                <p className='accordionAnswer' style={{ opacity: opacity, marginTop: answerPosition, display: display }}>{props.answer}</p>
            </div>
        </div>
    )
}