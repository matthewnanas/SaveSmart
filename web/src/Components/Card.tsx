import React from 'react';
import '../Static/Styles/Card.css'

/**
 * Function - DesktopCard
 * 
 * Will return a card component given props suited for desktop displays
 * 
 */
export function DesktopCard(props: { 
    color: string, 
    step: string,
    description: string, 
    emoji: string
}) {
    return (
        <div className='CardContainer'>
            <div className='StepDot' style={{
                backgroundColor: props.color,
                width: 100,
                height: 100,
            }}>
                <h1>{props.step}</h1>
            </div>
            <p>{props.description}</p>
            <span>{props.emoji}</span>
        </div>
    )
}

/**
 * Function - MobileCard
 * 
 * Will return a card component given props for mobile displays
 * 
 */
export function MobileCard(props: { 
    color: string, 
    step: string,
    description: string, 
    emoji: string
}) {
    return (
        <div className='MobileCardContainer'>
            <div className='StepDot' style={{
                backgroundColor: props.color,
                width: 100,
                height: 100,
            }}>
                <h1>{props.step}</h1>
            </div>
            <p>{props.description}</p>
            <span>{props.emoji}</span>
        </div>
    )
}