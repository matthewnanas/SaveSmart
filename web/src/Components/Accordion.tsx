import React, { useState } from 'react';
import { MdExpandLess } from 'react-icons/md'

import '../Static/Styles/Accordion.css'

/**
 * @function DesktopAccordion
 * 
 * @return a accordion component given props suited for desktop displays
 */
export function DesktopAccordion(props: { 
    question: string,
    answer: string, 
}) {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-10px')
    const [ textSize, setTextSize ] = useState('0px');

    const handleClick = () => {
        if(opacity === '0'){
            setPosition('0px')
            setDrop('rotate(1turn) translateY(-5px)')
            setOpacity('1')
            setTextSize('18px')
        } else {
            setPosition('-10px')
            setDrop('rotate(.5turn) translateY(5px)')
            setOpacity('0')
            setTextSize('0px')
        }
    }

    return (
        <div className='accordionContainer'>
            <button className='accordionButton' onClick={handleClick}>
                {props.question}<h2 className='accordionTitle' style={{ transform: dropIcon }}><MdExpandLess/></h2>
            </button>
            <p className='accordionAnswer' style={{ opacity: opacity, marginTop: answerPosition, fontSize: textSize }}>{props.answer}</p>
        </div>
    )
}

/**
 * @function MobileAccordion
 * 
 * @return a accordion component given props suited for mobile displays
 */
export function MobileAccordion(props: {
    question: string,
    answer: string,
}) {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-10px')
    const [ textSize, setTextSize ] = useState('0px');

    const handleClick = () => {
        if(opacity === '0'){
            setPosition('0px')
            setDrop('rotate(1turn) translateY(-5px)')
            setOpacity('1')
            setTextSize('18px')
        } else {
            setPosition('-10px')
            setDrop('rotate(.5turn) translateY(5px)')
            setOpacity('0')
            setTextSize('0px')
        }
    }

    return(
        <div className='accordionContainer'>
            <button className='accordionButtonMobile' onClick={handleClick}>
                {props.question}<h2 className='accordionTitle' style={{ transform: dropIcon }}><MdExpandLess/></h2>
            </button>
            <p className='accordionAnswer' style={{ opacity: opacity, marginTop: answerPosition, fontSize: textSize }}>{props.answer}</p>
        </div>
    )
}