import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import '../Static/Styles/RAccordion.css'

/**
 * @function DesktopRAccordion
 * 
 * @return a accordion component given props suited for desktop displays
 */
export function DesktopRAccordion(props: { 
    name: string,
    result: any, 
    estTotal: string,
    logo: string,
    catalog: string,
}) {
    const [opacity, setOpacity] = React.useState('0');
    const [display, setDisplay] = React.useState('none');
    const [line, setLine] = React.useState('#ffff');

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
    };

    useEffect(() => {
        console.log(props.result)
    }, [])

    return (
        <div className='raccordionContainer'>
            <div className='raccordionHeader' onClick={handleClick}>
                <div className='raccordionStore'>
                    <p>Store</p>
                    <img src={props.logo} alt={`${props.name} Logo`} />
                </div>
                <div className='raccordionName'>
                    <p>Store Coupon Catalog</p>
                    <a href={props.catalog} target="_blank" rel="noreferrer">
                        <h3>Visit {props.name}</h3>
                    </a>
                </div>
                <div className='raccordionTotal'>
                    <p>Estimated Total</p>
                    <h3>{props.estTotal}</h3>
                </div>
            </div>
            <hr style={{ color: line }}/>
            <div className='raccordionBody' style={{ display: display }}>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Search Term</th>
                            <th>Image</th>
                            <th>Store Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.result.map((
                                item: {
                                    product_name: string | null,
                                    product_size: string | null,
                                    brand: string | null,
                                    price: string | null,
                                    unit_price: string | null,
                                    image: string | undefined,
                                    query: string,
                                    link: string | undefined,
                                }, i: any
                            ) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            {
                                                item?.query?
                                                    <p>{item.query}</p>
                                                : <>N/A</>
                                            }
                                        </td>
                                        <td>
                                            <div className='accordionStore'>
                                                {
                                                    item?.image?
                                                        <img src={item.image} width={50} alt='product'/>
                                                    : <>N/A</>
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                item?.product_name? 
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <p>{item.product_name}</p>
                                                    </a>
                                                : <>Not found</>
                                            }
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            {
                                                item?.price? 
                                                    <p>{item?.price}</p>
                                                : <>$0.00</>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                {/*
                    props.result.map((
                        item: {
                            product_name: string | null,
                            product_size: string | null,
                            brand: string | null,
                            price: string | null,
                            unit_price: string | null,
                            image: string | undefined
                        }, i: any
                    ) => (
                        <div>
                            <div className='accordionHeader' key={i}>
                                <div className='accordionStore'>
                                    {
                                        item?.image?
                                        <img src={item.image} alt='product'/>
                                        : <></>
                                    }
                                </div>
                                <div className='accordionProductName'>
                                    <p>{item?.product_name}</p>
                                </div>
                                <div className='accordionTotal'>
                                    <p>{item?.price}</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                */}
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
    name: string,
    result: any, 
    estTotal: string,
    logo: string,
    catalog: string,
}) {
    const [opacity, setOpacity] = React.useState('0');
    const [display, setDisplay] = React.useState('none');
    const [line, setLine] = React.useState('#ffff');

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
    };

    useEffect(() => {
        console.log(props.result)
    }, [])

    return (
        <div className='raccordionContainer'>
            <div className='raccordionHeader' onClick={handleClick}>
                <div className='raccordionStore'>
                    <p>Store</p>
                    <a href={props.catalog} target="_blank" rel="noreferrer">
                        <img src={props.logo} alt={`${props.name} Logo`} />
                    </a>
                </div>
                <div className='raccordionTotal'>
                    <p>Estimated Total</p>
                    <h3>{props.estTotal}</h3>
                </div>
            </div>
            <hr style={{ color: line }}/>
            <div className='raccordionBody' style={{ display: display }}>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='accordionQuery'>Search Term</th>
                            <th>Image</th>
                            <th>Store Item</th>
                            <th className='accordionQuery'>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.result.map((
                                item: {
                                    product_name: string | null,
                                    product_size: string | null,
                                    brand: string | null,
                                    price: string | null,
                                    unit_price: string | null,
                                    image: string | undefined,
                                    query: string,
                                    link: string | undefined,
                                }, i: any
                            ) => {
                                return (
                                    <tr key={i}>
                                        <td className='accordionQuery'>
                                            {
                                                item?.query?
                                                    <p>{item.query}</p>
                                                : <>N/A</>
                                            }
                                        </td>
                                        <td>
                                            <div className='accordionStore'>
                                                {
                                                    item?.image?
                                                        <img src={item.image} width={50} alt='product'/>
                                                    : <>N/A</>
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                item?.product_name? 
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <p>{item.product_name}</p>
                                                    </a>
                                                : <>Not found</>
                                            }
                                        </td>
                                        <td className='accordionQuery'>
                                            1
                                        </td>
                                        <td>
                                            {
                                                item?.price? 
                                                    <p>{item?.price}</p>
                                                : <>$0.00</>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}