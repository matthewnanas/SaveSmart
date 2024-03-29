import React from 'react';
import '../Static/Styles/Card.css'

/**
 * @function DesktopCard
 * 
 * @return a card component given props suited for desktop displays
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
                {props.step}
            </div>
            <p>{props.description}</p>
            <span>{props.emoji}</span>
        </div>
    )
}

/**
 * @function MobileCard
 * 
 * @return a card component given props for mobile displays
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
                width: 75,
                height: 75,
            }}>
                {props.step}
            </div>
            <p>{props.description}</p>
            <span>{props.emoji}</span>
        </div>
    )
}