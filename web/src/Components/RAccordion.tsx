/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

    const showInfo = () => {
        if (props.name === 'Costco') {
            alert('Do note that prices are only an estimate and may vary depending on store and location.\n\nCOSTCO REQUIRES A MEMBERSHIP TO SHOP');
        } else {
            alert('Do note that prices are only an estimate and may vary depending on store and location.');
        }
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
                    <div className='UtilButton' onClick={showInfo}>
                        <BsInfoLg />
                    </div>
                </Col>
            </Row>
            
            <div className='raccordionBody' style={{ display: display }}>
                <Row className='ItemSlide' style={{fontWeight: 'bold'}}>
                    <Col style={{textAlign: 'right'}}>
                        <span>Search</span>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <span>Image</span>
                    </Col>
                    <Col xs={5}>
                        <span>Item</span>
                    </Col>
                    <Col>
                        <span>Unit Price</span>
                    </Col>
                    <Col>
                        <span>Price</span>
                    </Col>
                    <Col>
                        <span>Quantity</span>
                    </Col>
                    <Col />
                    <hr />
                </Row>

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
                                                    <Col xs={5}>
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
                                                            product?.unit_price? 
                                                                <p>{product.unit_price}</p>
                                                            : <p>N/A</p>
                                                        }
                                                    </Col>
                                                    <Col>
                                                        {
                                                            product?.price? 
                                                                <p>{product?.price}</p>
                                                            : <>$0.00</>
                                                        }
                                                    </Col>
                                                    <Col>
                                                        {
                                                            item?.quantity? 
                                                                <p>{item.quantity}</p>
                                                            : <p>1</p>
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

    const showInfo = () => {
        if (props.name === 'Costco') {
            alert('Do note that prices are only an estimate and may vary depending on store and location.\n\nCOSTCO REQUIRES A MEMBERSHIP TO SHOP');
        } else {
            alert('Do note that prices are only an estimate and may vary depending on store and location.');
        }
    }

    return (
        <Container className='raccordionContainerMobile'>
            <div>
                <Row style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <Col style={{display: 'flex', marginLeft: '10px'}}>
                        <img src={props.logo} alt='Store' className='MobileStoreLogo' />
                        <div style={{marginLeft: '15px'}}>
                            <h6>Store</h6>
                            <a href={props.catalog} target="_blank" rel="noreferrer">
                                <h3>{props.name}</h3>
                            </a>
                        </div>
                    </Col>
                    <Col />
                    <Col>
                        <div className='UtilButtonMobile' onClick={showInfo}>
                            <BsInfoLg />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} style={{textAlign: 'left', whiteSpace: 'nowrap'}}>
                        <button className='ViewMobile' onClick={handleClick}>
                            <span>View More</span>
                        </button>
                    </Col>
                    <Col>
                        <div className='TotalPrice'>
                            <span>${Math.trunc(total*100)/100}</span>
                        </div>
                    </Col>
                </Row>
            </div>
            
            <div className='raccordionBody' style={{ display: display }}>
                {
                    (props.result || []).map((
                        item: {
                            items: any[],
                            query: string,
                            quantity: number,
                        }, i: any
                    ) => {
                        return (
                            <div>
                                <span>Query: {item.query}</span>
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
                                                    <Card>
                                                        
                                                        <Card.Body>
                                                            {
                                                                product?.link? 
                                                                    <a href={product.link} target="_blank" rel="noreferrer">
                                                                        <Card.Title>{product.product_name}</Card.Title>
                                                                    </a>
                                                                : <Card.Title>Not Found</Card.Title>
                                                            }
                                                            {
                                                                product?.price? 
                                                                    <Card.Subtitle>{product?.price}</Card.Subtitle>
                                                                : <Card.Subtitle>$0.00</Card.Subtitle>
                                                            }
                                                            {
                                                                product?.unit_price? 
                                                                    <Card.Text>
                                                                        Unit Price: {product.unit_price}
                                                                        <br />
                                                                        {
                                                                            item?.quantity? 
                                                                                <span>Quantity: {item.quantity}</span>
                                                                            : <span>1</span>
                                                                        }
                                                                    </Card.Text>
                                                                : <p>N/A</p>
                                                            }
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}