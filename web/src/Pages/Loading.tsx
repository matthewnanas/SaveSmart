import React from 'react';
import '../Static/Styles/Loading.css'
import HashLoader from 'react-spinners/HashLoader'

export default function Loading() {

    // Access the items list on page load and call the getResults function
    React.useEffect(() => {
        const items = localStorage.getItem("items");
        getResults(items);
    }, []);

    // Use our API to compile a list of results
    const getResults = (items: any) => {
        const itemList: any = JSON.parse(items);
        const results: any = [];
        console.log(itemList);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                list: itemList, 
            })
        };

        fetch(`http://192.168.1.160:7777/grab_aldi`, options).then(response => response.json()).then(data => results.push({
            name: "Target",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_costco`, options).then(response => response.json()).then(data => results.push({
            name: "Costco",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_giant`, options).then(response => response.json()).then(data => results.push({
            name: "Giant",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_lidl`, options).then(response => response.json()).then(data => results.push({
            name: "Lidl",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_publix`, options).then(response => response.json()).then(data => results.push({
            name: "Publix",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_safeway`, options).then(response => response.json()).then(data => results.push({
            name: "Safeway",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_shoppers`, options).then(response => response.json()).then(data => results.push({
            name: "Shoppers",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_wegmans`, options).then(response => response.json()).then(data => results.push({
            name: "Wegmans",
            results: data,
        }));

        fetch(`http://192.168.1.160:7777/grab_wholefoodsmarket`, options).then(response => response.json()).then(data => results.push({
            name: "Whole Foods Market",
            results: data,
        }));

        console.log(results);
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