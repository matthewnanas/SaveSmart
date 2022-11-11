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
import Accordion from 'react-bootstrap/Accordion';

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
                    <About />
                </div>
            }
            { isMobile && 
                <div>
                    <MobileHeading />
                    <MobileSteps />
                    <About />
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
                <button className='GetStarted'>Get Started</button>
            </div>
        </div>
    )
}

/**
 * Function - DesktopSteps
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
                <button className='GetStarted'>Get Started</button>
            </div>
        </div>
    )
}

/**
 * Function - MobileSteps
 * 
 * Will return appropriate step content for mobile devices
 * 
 */
function MobileSteps() {
    return (
        <div>
            <div className='StepContainer'>
                <h1>How <span style={{ color: '#1DA1F2' }}>we</span> work</h1>
                <img src={GreenBlob} className='MobileGreenBlob' alt='Green Blob' width='350' />
                <MobileCard color='#335C81' step='1' description='Plan your grocery trip by creating your shopping list with us' emoji='🔎' />
                <MobileCard color='#5899E2' step='2' description='Our programs work some magic (just sit back and relax)' emoji='✨' />
                <MobileCard color='#65AFFF' step='3' description='Browse the most affordable options catered to your list' emoji='✅' />
            </div>
            <img src={BlueBlob} className='MobileBlueBlob' alt='Blue Blob' />
        </div>
    )
}

/**
 * Function - About
 * 
 * Returns an accordion covering content about the project
 * 
 */
function About() {
    const content = [
        { 
            question: "What retailers do you support?",
            content: "At the moment we current support: Aldi, Costco, Giant, Kroger, Whole Foods Market, Trader Joes, Target, Walmart"
        },
        { 
            question: "How does this work?",
            content: "TBA"
        },
        { 
            question: "What is the catch?",
            content: "There's no catch, we don't sell you data, a broke college student made this and is operating the website at a loss T_T"
        },
        { 
            question: "How can I support the project?",
            content: "Just share it around :)"
        }
    ];

    return (
        <div className='About'>
            <h1>About this project</h1>
            <Accordion>
                {
                    content.map((
                        item: {
                            question: string,
                            content: string
                        },
                        i: any,
                    ) => {
                        return (
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>{item.content}</Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}