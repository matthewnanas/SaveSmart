/**
 * GroceryList.tsx
 * -
 * This file will contain the frontend code to handle users creating their grocery list
 */


import React from 'react';
import Navigation from '../Components/Navigation';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { BsTrashFill } from 'react-icons/bs';
import '../Static/Styles/GroceryList.css'

/**
 * @function GroceryList
 * 
 * @return appropriate grocery list screen
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
 * @function DesktopList
 * 
 * @return appropriate list content for desktop screens
 */
function DesktopList() {
    // Search state
    const [search, setSearch] = React.useState("");
    const [items, setItems]: any[] = React.useState([]);
    
    // Handle adding new items to the list
    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        if (search === '') {
            alert('Please enter a valid item name!');
            setSearch("");
        } else {
            e.preventDefault()
            setItems([...items, {
                'item': search,
                'quantity': 1,
            }]);
            setSearch("");
        }
    }

    // Handle editing a quantity in the table
    const editQuantity = (newValue: string, element: number) => {
        let temp = items;
        temp[element]['quantity'] = newValue;
        setItems(temp);
    }

    // Handle deleting an element from the table
    const deleteItem = (element: number) => {
        let temp = items;
        temp.splice(element, 1);
        console.log(temp);
        setItems([...temp]);
    }

    // Begin comparing prices and navigate to loading screen
    const navigate = useNavigate();
    const navLoad = () => { 
        localStorage.setItem("items", JSON.stringify(items));
        return navigate('/loading'); 
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
                            Add Item
                        </Button>
                        <Button className='SubmitButton' variant='primary' style={{marginLeft: 5}} onClick={() => navLoad()}>
                            Compare Stores
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
                                        <td>
                                            <input type='text' name='quantity' defaultValue={item.quantity} onChange={(e) => {
                                                editQuantity(e.target.value, i)
                                            }} />
                                        </td>
                                        <td>
                                            <Button className='EditButton' onClick={() => deleteItem(i)}>
                                                <h5 style={{marginTop: 2}}>
                                                    <BsTrashFill />
                                                </h5>
                                            </Button>
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

/**
 * @function MobileList
 * 
 * @return appropriate list content for mobile screens
 */
function MobileList() {
    // Search state 
    const [search, setSearch] = React.useState("");
    const [items, setItems]: any[] = React.useState([]);
    
    // Handle adding new items to the list
    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        if (search === '') {
            alert('Please enter a valid item name!');
            setSearch("");
        } else {
            e.preventDefault()
            setItems([...items, {
                'item': search,
                'quantity': 1,
            }]);
            setSearch("");
        }
    }

    // Handle editing a quantity in the table
    const editQuantity = (newValue: string, element: number) => {
        let temp = items;
        temp[element]['quantity'] = newValue;
        setItems(temp);
    }

    // Handle deleting an element from the table
    const deleteItem = (element: number) => {
        let temp = items;
        temp.splice(element, 1);
        console.log(temp);
        setItems([...temp]);
    }

    // Begin comparing prices and navigate to loading screen
    const navigate = useNavigate();
    const navLoad = () => { 
        localStorage.setItem("items", JSON.stringify(items));
        return navigate('/loading'); 
    }

    return (
        <div>
            <div className='ListHeading'>
                <h1>My Search List</h1>
                <div className='ListSearch'>
                    <Form onSubmit={(e) => addItem(e)}>
                        <Form.Group className="mb-3" controlId='searchQuery'>
                            <Form.Control type="text" placeholder='Search for...' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Form.Group>
                        <Button className='SubmitButton' variant='primary' type='submit'>
                            Add Item
                        </Button>
                        <Button className='SubmitButton' variant='primary' style={{marginLeft: 5}} onClick={() => navLoad()}>
                            Compare Stores
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
                                        <td>
                                            <input type='text' className='w-25' name='quantity' defaultValue={item.quantity} width={10} onChange={(e) => {
                                                editQuantity(e.target.value, i)
                                            }} />
                                        </td>
                                        <td>
                                            <Button className='EditButton' onClick={() => deleteItem(i)}>
                                                <h5 style={{marginTop: 2}}>
                                                    <BsTrashFill />
                                                </h5>
                                            </Button>
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