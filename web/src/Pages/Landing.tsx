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
import { DesktopAccordion, MobileAccordion } from '../Components/Accordion';
import { useNavigate } from 'react-router-dom';

/**
 * @function Landing
 * 
 * @return appropriate landing screen
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
                    <DesktopAbout />
                </div>
            }
            { isMobile && 
                <div>
                    <MobileHeading />
                    <MobileSteps />
                    <MobileAbout />
                </div>
            }
        </div>
    )
}

/**
 * @function DesktopHeading
 * 
 * @return appropriate heading content for desktop devices
 */
function DesktopHeading() {
    /**
     * Navigation function for the get started button
     */
    const navigate = useNavigate();
    const navStart = () => { return navigate('/create') }
    
    return (
        <div>
            <div className='Heading'>
                <h1>Saving on grocery trips<br />has never been <span style={{ color: '#1DA1F2' }}>easier</span></h1>
                <h4>It’s as easy as 1, 2, 3!</h4>
                <button className='GetStarted' onClick={() => navStart()}><span>Start Saving!</span></button>
            </div>
        </div>
    )
}

/**
 * @function DesktopSteps
 * 
 * @return appropriate step content for desktop devices
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
 * @function MobileHeading
 * 
 * @return appropriate heading content for mobile devices 
 */
function MobileHeading() {
    /**
     * Navigation function for the get started button
     */
    const navigate = useNavigate();
    const navStart = () => { return navigate('/create') }

    return (
        <div>
            <div className='Heading'>
                <h1>Saving on grocery trips<br />has never been <span style={{ color: '#1DA1F2' }}>easier</span></h1>
                <h4>It’s as easy as 1, 2, 3!</h4>
                <button className='GetStarted' onClick={() => navStart()}>Get Started</button>
            </div>
        </div>
    )
}

/**
 * @function MobileSteps
 * 
 * @return appropriate step content for mobile devices
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
 * @function DesktopAbout
 * 
 * @return an accordion covering content about the project suitable for desktop devices
 */
function DesktopAbout() {
    const content = [
        { 
            question: "What retailers do you support?",
            content: "At the moment, we currently support: Aldi, Costco, GiantFood, Lidl, Publix, Safeway, Shoppers, Wegmans, and Whole Foods Market."
        },
        { 
            question: "How does this work?",
            content: "TBA"
        },
        { 
            question: "What is the catch?",
            content: "There is no catch! We do not collect any identifying information such as emails or phone numbers. Our service is completely anonymous and will remain free until we can no longer run it!"
        },
        { 
            question: "How can I support the project?",
            content: "Just share it around :) Or help other families by supporting a trusthworthy non profit organization!"
        }
    ];

    return (
        <div className='About'>
            <h1 style={{marginBottom: '35px'}}>About this project</h1>
            {
                content.map((
                    item: {
                        question: string,
                        content: string
                    },
                    i: any,
                ) => {
                    return (
                        <DesktopAccordion question={item.question} answer={item.content} key={i} />
                    )
                })
            }
        </div>
    )
}
/**
 * @function MobileAbout
 * 
 * @return an accordion covering content about the project suited for mobile displays
 */
function MobileAbout() {
    const content = [
        { 
            question: "What retailers do you support?",
            content: "At the moment, we currently support: Aldi, Costco, GiantFood, Lidl, Publix, Safeway, Shoppers, Wegmans, and Whole Foods Market."
        },
        { 
            question: "How does this work?",
            content: "TBA"
        },
        { 
            question: "What is the catch?",
            content: "There is no catch! We do not collect any identifying information such as emails or phone numbers. Our service is completely anonymous and will remain free until we can no longer run it!"
        },
        { 
            question: "How can I support the project?",
            content: "Just share it around :) Or help other families by supporting a trusthworthy non profit organization!"
        }
    ];

    return (
        <div className='AboutMobile'>
            <h1 style={{marginBottom: '35px'}}>About this project</h1>
            {
                content.map((
                    item: {
                        question: string,
                        content: string
                    },
                    i: any,
                ) => {
                    return (
                        <MobileAccordion question={item.question} answer={item.content} key={i} />
                    )
                })
            }
        </div>
    )
}