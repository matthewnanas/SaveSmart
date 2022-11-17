import React from 'react';

export default function Results() {
    const [results, setResults]: any = React.useState("");

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