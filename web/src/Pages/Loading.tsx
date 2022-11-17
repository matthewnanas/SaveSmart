import React from 'react';
import '../Static/Styles/Loading.css'
import HashLoader from 'react-spinners/HashLoader'

export default function Loading() {

    // Access the items list on page load and call the getResults function
    React.useEffect(() => {
        getResults(localStorage.getItem("items"));
    }, []);

    // Use our API to compile a list of results
    const getResults = (items: any) => {
        const itemList = JSON.parse(items);
    }

    return (
        <div className='LoadingContent'>
            <div>
                <HashLoader 
                    color="#1DA1F2"
                    loading={true}
                    size={50}
                    aria-label="Processing"
                    style={{
                        justifySelf: 'center'
                    }}
                />
                <br />
                <br />
                <h1 style={{marginTop: 55}}>Processing</h1>
            </div>
        </div>
    )
}