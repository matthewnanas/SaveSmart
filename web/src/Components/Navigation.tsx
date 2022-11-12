/**
 * Navigation.tsx
 * -
 * This file will contain the frontend code that creates the "navigation bar" of the app
 */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../Static/Styles/Navigation.css';

/**
 * Function - Navigation
 * 
 * Will return appropriate navigation bar component
 * 
 */
export default function Navigation() {
    /**
     * Create two variables that will be used to distinguish whether or not
     * a visitor is on desktop or mobile/tablet by width dimension
     */
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    /**
     * Navigation handling
     * -
     * useNavigate() will allow us to redirect the browser to various routes
     * of our app as defined in index.tsx
     */
    const navigate = useNavigate();
    const navHome = () => { return navigate('/') }
    const navAbout = () => { return navigate('/') }
    const navStart = () => { return navigate('/create') }

    return (
        <div>
            { isDesktop && <NavigateDesktop navHome={navHome} navAbout={navAbout} navStart={navStart} /> }
            { isMobile && <NavigateMobile navHome={navHome} navAbout={navAbout} /> }
        </div>
    )
}

/**
 * Function - NavigateDesktop
 * 
 * Will return navigation bar component designed for desktop displays
 * 
 */
function NavigateDesktop(props: { 
    navHome: () => void; 
    navAbout: () => void; 
    navStart: () => void;
}) {
    return (
        <div className='NavContainer'>
            <Navbar>
                <Navbar.Brand>
                    <h1 className='SmartSave'>Smart<span style={{ color: '#1DA1F2' }}>Save</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => props.navHome() }>Home</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link className='StartButton' onClick={() => props.navStart() }>Get Started</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

/**
 * Function - NavigateMobile
 * 
 * Will return navigation bar component designed for mobile/tablet displays
 * 
 */
function NavigateMobile(props: { 
    navHome: () => void; 
    navAbout: () => void; 
}) {
    return (
        <div className='NavContainerMobile'>
            <Navbar>
                <Navbar.Brand>
                    <h1 className='SmartSave'>Smart<span style={{ color: '#1DA1F2' }}>Save</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => props.navHome() }>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}