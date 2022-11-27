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
    }, []);

    return (
        <div>
            <Navigation />
            { isDesktop && <DesktopResults results={results} /> }
            { isMobile && <MobileResults results={results}/> }
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
            {props.results.map((result: any, i: any) => {
                return (
                    <DesktopRAccordion name={result.name} result={result.results} estTotal={`$${result.total}`} logo={result.logo} catalog={result.catalog} key={i} />
                )
            })}
        </div>
    )
}


/**
 * @function MobileResults
 * 
 * @return appropriate heading content for mobile devices
 */
function MobileResults(props: any) {
    /**
     * Navigation function for the get started button
     */
    
    return (
        <div className='results_container'>
            <h1>Results</h1>
            <p style={{ color: '#1DA1F2'}}>Click on entries for total breakdown</p>
            <p style={{ color: '#1DA1F2', marginTop: '-15px'}}>Click the store logos for discounts and coupons</p>
            {props.results.map((result: any, i: any) => {
                return (
                    <MobileRAccordion name={result.name} result={result.results} estTotal={`$${result.total}`} logo={result.logo} catalog={result.catalog} key={i} />
                )
            })}
        </div>
    )
}
