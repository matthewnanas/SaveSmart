/**
 * Landing.tsx
 * -
 * This file will contain the frontend code for the page of the root directory (insert domain here once you get it)
 * The code will contain both the landing screen and the about page (below landing)
 */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from '../Components/Card';
import Navigation from '../Components/Navigation';
import '../Static/Styles/Landing.css';

/**
 * Function - Landing
 * 
 * Will return appropriate landing screen
 * 
 */
export default function Landing() {
    /**
     * Create two variables that will be used to distinguish whether or not
     * a visitor is on desktop or mobile/tablet by width dimension
     */
    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div>
            <Navigation />
            { isDesktop && 
                <div>
                    <DesktopHeading /> 
                    <DesktopSteps />
                </div>
            }
            { isMobile && <MobileHeading /> }
        </div>
    )
}

/**
 * Function - DesktopHeading
 * 
 * Will return appropriate heading content for desktop devices
 * 
 */
function DesktopHeading() {
    return (
        <div>
            <div className='Heading'>
                <h1>Saving on grocery trips<br />has never been <span style={{ color: '#1DA1F2' }}>easier</span></h1>
                <h4>It’s as easy as 123!</h4>
            </div>
        </div>
    )
}

function DesktopSteps() {
    return (
        <div>
            <h1>How we work</h1>
            <div className='DesktopCards'>
                <Card color='#335C81' step='1' description='Plan your grocery trip by creating your shopping list with us' emoji='🔎' />
                <Card color='#5899E2' step='2' description='Our programs work some magic (just sit back and relax)' emoji='✨' />
                <Card color='#65AFFF' step='3' description='Browse the most affordable options catered to your list' emoji='✅' />
            </div>
        </div>
    )
}

/**
 * Function - MobileHeading
 * 
 * Will return appropriate heading content for mobile devices
 * 
 */
function MobileHeading() {
    return (
        <div>
            <div className='Heading'>
                <h1>Saving on grocery trips<br />has never been <span style={{ color: '#1DA1F2' }}>easier</span></h1>
                <h4>It’s as easy as 123!</h4>
            </div>
        </div>
    )
}