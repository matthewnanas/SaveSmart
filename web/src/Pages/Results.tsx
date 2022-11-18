import React from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * @function Results
 * 
 * @returns appropriate table for search results
 */
export default function Results() {
    const [results, setResults]: any = React.useState("");

    /**
     * Create two variables that will be used to distinguish whether or not
     * a visitor is on desktop or mobile/tablet by width dimension
     */
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    // Access search results and update state
    React.useEffect(() => {
        const results = localStorage.getItem("results");
        console.log(results);
        setResults(results);
    }, []);

    return (
        <div>
            <h1>{results}</h1>
        </div>
    )
}