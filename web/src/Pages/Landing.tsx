/**
 * Landing.tsx
 * -
 * This file will contain the frontend code for the page of the root directory (insert domain here once you get it)
 * The code will contain both the landing screen and the about page (below landing)
 */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Components/Navigation';
import '../Static/Styles/Landing.css';
import GreenBlob from '../Static/Assets/GreenBlob.svg';
import BlueBlob from '../Static/Assets/BlueBlob.svg';
import { DesktopCard, MobileCard } from '../Components/Card';

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
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div>
            <Navigation />
            { isDesktop && 
                <div>
                    <DesktopHeading /> 
                    <DesktopSteps />
                </div>
            }
            { isMobile && 
                <div>
                    <MobileHeading />
                    <MobileSteps />
                </div>
            }
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

/**
 * Function - Desktop Steps
 * 
 * Will return appropriate step content for desktop devices
 * 
 */
function DesktopSteps() {
    return (
        <div>
            <div className='StepContainer'>
                <h1>How <span style={{ color: '#1DA1F2' }}>we</span> work</h1>
                <div className='DesktopCards'>
                    <DesktopCard color='#335C81' step='1' description='Plan your grocery trip by creating your shopping list with us' emoji='🔎' />
                    <DesktopCard color='#5899E2' step='2' description='Our programs work some magic (just sit back and relax)' emoji='✨' />
                    <DesktopCard color='#65AFFF' step='3' description='Browse the most affordable options catered to your list' emoji='✅' />
                </div>
            </div>
            <img src={GreenBlob} className='GreenBlob' alt='Green Blob' />
            <img src={BlueBlob} className='BlueBlob' alt='Blue Blob' />
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

/**
 * Function - Desktop Steps
 * 
 * Will return appropriate step content for desktop devices
 * 
 */
function MobileSteps() {
    return (
        <div>
            <div className='StepContainer'>
                <h1>How <span style={{ color: '#1DA1F2' }}>we</span> work</h1>
                <MobileCard color='#335C81' step='1' description='Plan your grocery trip by creating your shopping list with us' emoji='🔎' />
                <MobileCard color='#5899E2' step='2' description='Our programs work some magic (just sit back and relax)' emoji='✨' />
                <MobileCard color='#65AFFF' step='3' description='Browse the most affordable options catered to your list' emoji='✅' />
            </div>
            <img src={GreenBlob} className='GreenBlob' alt='Green Blob' />
            <img src={BlueBlob} className='BlueBlob' alt='Blue Blob' />
        </div>
    )
}
