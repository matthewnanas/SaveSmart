import React from 'react';
import '../Static/Styles/Loading.css'
import HashLoader from 'react-spinners/HashLoader'
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const [status, setStatus]: any = React.useState('Starting...');

    // Access the items list on page load and call the getResults function
    const navigate = useNavigate();
    React.useEffect(() => {
        const items: any = localStorage.getItem("items");
        let compiled: any = [];

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                list: JSON.parse(items), 
            })
        };

        const api = [
            {
                endpoint: 'grab_aldi',
                storeName: 'Aldi'
            },
            {
                endpoint: 'grab_aldi',
                storeName: 'Costco'
            },
            {
                endpoint: 'grab_giant',
                storeName: 'Giant'
            },
            {
                endpoint: 'grab_lidl',
                storeName: 'Lidl'
            },
            {
                endpoint: 'grab_publix',
                storeName: 'Publix'
            },
            {
                endpoint: 'grab_safeway',
                storeName: 'Safeway'
            },
            {
                endpoint: 'grab_shoppers',
                storeName: 'Shoppers'
            },
            {
                endpoint: 'grab_wegmans',
                storeName: 'Wegmans'
            },
            {
                endpoint: 'grab_wholefoodsmarket',
                storeName: 'Whole Foods Market'
            },
        ]

        async function getLists() {
            for (var x = 0; x < api.length; x++) {
                setStatus(`${api[x].storeName}`)
                let response = await fetch(`http://localhost:7777/${api[x].endpoint}`, options);
                let parsed = await response.json();
                compiled.push({
                    'name': api[x].storeName,
                    'results': parsed,
                })
            }

            localStorage.setItem("results", JSON.stringify(compiled)); 
            return navigate('/results');
        }

        if (compiled.length === 0) {
            getLists();
        }
    }, []);

    return (
        <div className='LoadingContent'>
            <div style={{ textAlign: 'center' }}>
                <HashLoader 
                    color="#1DA1F2"
                    loading={true}
                    size={50}
                    aria-label="Processing"
                    className='loadingIcon'
                    // style={{ }}
                />
                <h1 style={{marginTop: 55}}>Grabbing price from <span style={{ color: '#1DA1F2' }}>{status}</span></h1>
            </div>
        </div>
    )
}