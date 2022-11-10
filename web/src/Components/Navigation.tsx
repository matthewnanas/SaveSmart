/**
 * Navigation.tsx
 * -
 * This file will contain the frontend code that creates the "navigation bar" of the app
 */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

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
    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
        <>
        
        </>
    )
}

/**
 * Function - navigateDesktop
 * 
 * Will return navigation bar component designed for desktop displays
 * 
 */
function navigateDesktop() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <h1>SmartSave</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}