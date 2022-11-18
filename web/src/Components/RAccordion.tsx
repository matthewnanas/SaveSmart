import React, { useState, useEffect } from 'react';
import { MdExpandLess } from 'react-icons/md'

import '../Static/Styles/RAccordion.css'

/**
 * @function DesktopRAccordion
 * 
 * @return a accordion component given props suited for desktop displays
 */
export function DesktopRAccordion(props: { 
    store: string,
    storeName: string, 
    estTotal: string
}) {
    const [ opacity, setOpacity ] = useState('0')
    const [ display, setDisplay ] = useState('none')
    const [ line, setLine ] = useState('#ffff')

    const handleClick = () => {
        if(opacity === '0'){
            setOpacity('1')
            setDisplay('block')
            setLine('gray')
        } else {
            setOpacity('0')
            setDisplay('none')
            setLine('#ffff')
        }
    }

    const data = [
        {
            "product_name":"Banana",
            "product_size":"per lb",
            "brand":null,
            "price":"$0.28 each (est.)",
            "unit_price":"About $0.28 each",
            "image":"https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_660f23f5-11f9-4e5d-9b64-7e69348ade1a.jpg"
        },
        {
            "product_name":"Banana",
            "product_size":"per lb",
            "brand":null,
            "price":"$0.28 each (est.)",
            "unit_price":"About $0.28 each",
            "image":"https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_660f23f5-11f9-4e5d-9b64-7e69348ade1a.jpg"
        },
    ]

    return (
        <div className='accordionContainer'>
            <div className='accordionHeader' onClick={handleClick}>
                <div className='accordionStore'>
                    <p>Store</p>
                    <img src='/logo192.png' alt='store logo' />
                </div>
                <div className='accordionName'>
                    <p>Store Name</p>
                    <h3>Costco</h3>
                </div>
                <div className='accordionTotal'>
                    <p>Estimated Total</p>
                    <h3>$124</h3>
                </div>
            </div><hr style={{ color: line }}/>
            <div className='accordionBody' style={{ display: display }}>
            {
                data.map((
                    item: {
                        product_name: string,
                        product_size: string,
                        brand: string | null,
                        price: string,
                        unit_price: string,
                        image: string
                    }, i: any
                ) => (
                <div className='accordionHeader'>
                    <div className='accordionStore'>
                        <img src={item.image} alt='image' />
                    </div>
                    <div className='accordionName'>
                        <h5>{item.product_name}</h5>
                    </div>
                    <div className='accordionTotal'>
                        <h5>{item.price}</h5>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    )
}

/**
 * @function MobileRAccordion
 * 
 * @return a accordion component given props suited for mobile displays
 */
export function MobileRAccordion(props: {
    question: string,
    answer: string,
}) {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-10px')

    const handleClick = () => {
        if(opacity === '0'){
            setPosition('0px')
            setDrop('rotate(1turn) translateY(-5px)')
            setOpacity('1')
        } else {
            setPosition('-10px')
            setDrop('rotate(.5turn) translateY(5px)')
            setOpacity('0')
        }
    }

    return(
        <div className='accordionContainer'>
            <button className='accordionButtonMobile' onClick={handleClick}>
                {props.question}<h2 className='accordionTitle' style={{ transform: dropIcon }}><MdExpandLess/></h2>
            </button>
            <p className='accordionAnswer' style={{ opacity: opacity, marginTop: answerPosition }}>{props.answer}</p>
        </div>
    )
}