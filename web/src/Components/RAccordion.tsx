/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import { BsFillEyeFill, BsWallet, BsCaretDownFill, BsInfoLg } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css"
import "swiper/css/navigation"

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
    const [total, setTotal] = React.useState(0.0);

    const handleClick = () => {
        if(opacity === '0'){
            setOpacity('1')
            setDisplay('block')
        } else {
            setOpacity('0')
            setDisplay('none')
        }
    };

    // Calculate the total
    useEffect(() => {
        let sum = 0.0
        for (var x = 0; x < props.result.length; x++) {
            try {
                sum += parseFloat(props.result[x].items[0].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
            } catch {}
        }
        setTotal(sum);
    }, []);

    // Calculate new total on item change
    const editTotal = (query: string, previousIndex: number, newIndex: number) => {
        let sum = total;
        for (var x = 0; x < props.result.length; x++) {
            if (props.result[x].query === query) {
                sum -= parseFloat(props.result[x].items[previousIndex].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
                sum += parseFloat(props.result[x].items[newIndex].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
            }
        }
        setTotal(sum);
    }

    return (
        <Container className='raccordionContainer'>
            <Row>
                <Col style={{whiteSpace: 'nowrap'}}>
                    <button className='ViewCatalog' onClick={() => window.open(props.catalog)}>
                        <BsFillEyeFill />
                        <span> &nbsp;View Catalog</span>
                    </button>
                </Col>
                <Col xs={5} style={{textAlign: 'left', whiteSpace: 'nowrap'}}>
                    <Row>
                        <div className='StoreColumn'>
                            <h6>Store</h6>
                            <h3>{props.name}</h3>
                        </div>
                    </Row>
                </Col>
                <Col style={{whiteSpace: 'nowrap'}}>
                    <div className='TotalPrice'>
                        <BsWallet />
                        <span> &nbsp;Total Price: ${Math.trunc(total*100)/100}</span>
                    </div>
                </Col>
                <Col>
                    <button className='UtilButton' onClick={handleClick}>
                        <BsCaretDownFill />
                    </button>
                    <div className='UtilButton'>
                        <BsInfoLg />
                    </div>
                </Col>
            </Row>
            
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
                </Table>

                {
                    (props.result || []).map((
                        item: {
                            items: any[],
                            query: string,
                            quantity: number,
                        }, i: any
                    ) => {
                        return (
                            <Swiper
                                navigation
                                modules={[Navigation]}
                                onSlideChange={index => editTotal(item.query, index.previousIndex, index.activeIndex)}
                                key={i}
                            >
                                {
                                    (item.items || []).map((
                                        product: {
                                            brand: string | null,
                                            image: string | null,
                                            link: string | null,
                                            price: string | null,
                                            product_name: string | null,
                                            product_size: string | null,
                                            query: string | null,
                                            unit_price: string | null,
                                        }, z: any
                                    ) => {
                                        return (
                                            <SwiperSlide key={z}>
                                                <Row className='ItemSlide'>
                                                    <Col style={{textAlign: 'right'}}>
                                                        {
                                                            product?.query?
                                                                <p>{product.query}</p>
                                                            : <>N/A</>
                                                        }
                                                    </Col>
                                                    <Col style={{textAlign: 'right'}}>
                                                        {
                                                            product?.image?
                                                                <img src={product.image} width={50} alt='product'/>
                                                            : <>N/A</>
                                                        }
                                                    </Col>
                                                    <Col xs={6}>
                                                        {
                                                            product?.link? 
                                                                <a href={product.link} target="_blank" rel="noreferrer">
                                                                    <p>{product.product_name}</p>
                                                                </a>
                                                            : <>Not found</>
                                                        }
                                                    </Col>
                                                    <Col>
                                                        {
                                                            item?.quantity? 
                                                                <p>{item.quantity}</p>
                                                            : <p>1</p>
                                                        }
                                                    </Col>
                                                    <Col>
                                                        {
                                                            product?.price? 
                                                                <p>{product?.price}</p>
                                                            : <>$0.00</>
                                                        }
                                                    </Col>
                                                    <Col />
                                                </Row>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        )
                    })
                }
            </div>
        </Container>
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
    const [total, setTotal] = React.useState(0.0);

    const handleClick = () => {
        if(opacity === '0'){
            setOpacity('1')
            setDisplay('block')
        } else {
            setOpacity('0')
            setDisplay('none')
        }
    };
    
    // Calculate the total
    useEffect(() => {
        let sum = 0.0
        for (var x = 0; x < props.result.length; x++) {
            try {
                sum += parseFloat(props.result[x].items[0].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
            } catch {}
        }
        setTotal(sum);
    }, []);

    // Calculate new total on item change
    const editTotal = (query: string, previousIndex: number, newIndex: number) => {
        let sum = total;
        for (var x = 0; x < props.result.length; x++) {
            if (props.result[x].query === query) {
                sum -= parseFloat(props.result[x].items[previousIndex].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
                sum += parseFloat(props.result[x].items[newIndex].price.split("$")[1].split(" ")[0]) * props.result[x]['quantity'];
            }
        }
        setTotal(sum);
    }

    return (
        <div className='raccordionContainerMobile'>
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
            <hr />
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
                            (props.result || []).map((
                                item: {
                                    product_name: string | null,
                                    product_size: string | null,
                                    brand: string | null,
                                    price: string | null,
                                    unit_price: string | null,
                                    image: string | undefined,
                                    query: string,
                                    link: string | undefined,
                                    quantity: number,
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
                                            {
                                                item?.quantity? 
                                                    <p>{item.quantity}</p>
                                                : <p>1</p>
                                            }
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