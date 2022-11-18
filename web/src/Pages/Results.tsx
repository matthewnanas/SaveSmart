import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Components/Navigation';
import { MobileRAccordion, DesktopRAccordion } from '../Components/RAccordion';
import '../Static/Styles/Results.css';

/**
 * @function Results
 * 
 * @returns appropriate table for search results
 */
export default function Results() {
    const [results, setResults]: any = React.useState([]);

    /**
     * Create two variables that will be used to distinguish whether or not
     * a visitor is on desktop or mobile/tablet by width dimension
     */
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    // Access search results and update state
    React.useEffect(() => {
        const list: any = localStorage.getItem("results");
        setResults(JSON.parse(list));
        console.log(list);
        console.log(results);
    }, []);

    return (
        <div>
            <Navigation />
            { isDesktop && <DesktopResults results={results} /> }
            { isMobile && <MobileResults /> }
        </div>
    )
}

/**
 * @function DesktopResults
 * 
 * @return appropriate heading content for desktop devices
 */
function DesktopResults(props: any) {
    /**
     * Navigation function for the get started button
     */
    
    return (
        <div className='results_container'>
            <h1>Results</h1>
            <p style={{ color: '#1DA1F2'}}>Click on entries for total breakdown</p>
            {props.results.map((result: any) => {
                return (
                    <DesktopRAccordion name={result.name} result={result.results} estTotal="string" logo={result.logo} />
                )
            })}
        </div>
    )
}

/**
 * @function MobileResults
 * 
 * @return appropriate heading content for desktop devices
 */
function MobileResults() {
    /**
     * Navigation function for the get started button
     */
    
    return (
        <div>
            <div className='Heading'>
                <h1>Saving on grocery trips<br />has never been <span style={{ color: '#1DA1F2' }}>easier</span></h1>
                <h4>It’s as easy as 1, 2, 3!</h4>
            </div>
        </div>
    )
}