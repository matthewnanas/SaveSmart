/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../Static/Styles/Loading.css'
import HashLoader from 'react-spinners/HashLoader'
import { useNavigate } from 'react-router-dom';
import { api } from '../Static/Constants';

export default function Loading() {
    const [status, setStatus]: any = React.useState('Starting...');

    // Access the items list on page load and call the getResults function
    const navigate = useNavigate();
    React.useEffect(() => {
        const items: any = localStorage.getItem("items");
        const stores: any = localStorage.getItem("stores");
        let compiled: any = [];

        console.log(stores);

        async function getLists() {
            for (var x = 0; x < JSON.parse(stores).length; x++) {
                for (var y = 0; y < api.length; y++) {
                    //console.log(JSON.parse(stores)[x]['label'] == api[y]['storeName']);
                    if (JSON.parse(stores)[x]['label'] === api[y]['storeName']) {
                        setStatus(`${api[y].storeName}`)
                        //let response = await fetch(`https://us-central1-savesmart-369519.cloudfunctions.net/api/${api[x].endpoint}`, options);
                        let response = await fetch(`http://localhost:7777/${api[y].endpoint}`, options);
                        let parsed = await response.json();
    
                        let total = 0.0;
                        for (let n = 0; n < parsed.length; n++) {
                            try {
                                for (let z = 0; z < items.length; z++) {
                                    if (JSON.parse(items)[z]['item'] === parsed[n]['query']) {
                                        total += parseFloat(parsed[n].price.split("$")[1].split(" ")[0]) * JSON.parse(items)[z]['quantity'];
                                    }
                                }
                            } catch {}
                        }
    
                        compiled.push({
                            'name': api[y].storeName,
                            'results': parsed,
                            'logo': api[y].logo,
                            'total': Math.trunc(total*100)/100,
                            'catalog': api[y].catalog,
                        })
                    }
                }
            }

            localStorage.setItem("results", JSON.stringify(compiled)); 
            return navigate('/results');
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                list: JSON.parse(items), 
            })
        };

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
                />
                <h1 style={{marginTop: 55}}>Grabbing price from <span style={{ color: '#1DA1F2' }}>{status}</span></h1>
            </div>
        </div>
    )
}