import React from 'react';
import '../Static/Styles/Card.css'

export function DesktopCard(props: any) {
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

export function MobileCard(props: any) {
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