/**
 * GroceryList.tsx
 * -
 * This file will contain the frontend code to handle users creating their grocery list
 */


import React from 'react';
import Navigation from '../Components/Navigation';
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../Static/Styles/GroceryList.css'

/**
 * Function - GroceryList
 * 
 * Will return appropriate grocery list screen
 * 
 */
export default function GroceryList() {
    /**
     * Create two variables that will be used to distinguish whether or not
     * a visitor is on desktop or mobile/tablet by width dimension
     */
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div>
            <Navigation />
            { isDesktop && <DesktopList /> }
            { isMobile && <MobileList /> }
        </div>
    )
}

/**
 * Function - DesktopList
 * 
 * Will return appropriate list content for desktop screens
 * 
 */
function DesktopList() {
    // Search state
    const [search, setSearch] = React.useState("");
    const [items, setItems]: any[] = React.useState([]);
    
    // Handle adding new items to the list
    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setItems([...items, {
            'item': search,
            'size': 'N/A',
            'quantity': 1,
        }]);
    }

    return (
        <div>
            <div className='ListHeading'>
                <h1>My Search List</h1>
                <div className='ListSearch'>
                    <Form onSubmit={(e) => addItem(e)}>
                        <Form.Group className="mb-3" controlId='searchQuery' style={{height: 40}}>
                            <Form.Control type="text" placeholder='Search for...' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Form.Group>
                        <Button className='SubmitButton' variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <br />
            <br />
            <hr style={{margin: '10px 50px 0px 50px'}} />
            <div className='DesktopTable'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((
                                item: {
                                    item: string,
                                    quantity: number,
                                },
                                i: any,
                            ) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>1</td>
                            <td>Bananas</td>
                            <td>put textbox here</td>
                            <td>put buttons</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

/**
 * Function - MobileList
 * 
 * Will return appropriate list content for mobile screens
 * 
 */
function MobileList() {
    // Search state 
    const [search, setSearch] = React.useState("");
    const [items, setItems]: any[] = React.useState([]);
    
    // Handle adding new items to the list
    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setItems([...items, {
            'item': search,
            'quantity': 1,
        }]);
    }

    return (
        <div>
            <div className='ListHeading'>
                <h1>My Search List</h1>
                <div className='ListSearch'>
                    <Form onSubmit={(e) => addItem(e)}>
                        <Form.Group className="mb-3" controlId='searchQuery' style={{height: 40}}>
                            <Form.Control type="text" placeholder='Search for...' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Form.Group>
                        <Button className='SubmitButton' variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <br />
            <br />
            <hr style={{margin: '10px 5px 0px 5px'}} />
            <div className='MobileTable'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((
                                item: {
                                    item: string,
                                    size: string,
                                    quantity: number,
                                },
                                i: any,
                            ) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>1</td>
                            <td>Bananas</td>
                            <td>put entry & dropdown here</td>
                            <td>put buttons</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}