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
                storeName: 'Aldi',
                logo: 'https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png',
            },
            {
                endpoint: 'grab_costco',
                storeName: 'Costco',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/2560px-Costco_Wholesale_logo_2010-10-26.svg.png',
            },
            {
                endpoint: 'grab_giant',
                storeName: 'Giant',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Giant_Food_logo.svg/1200px-Giant_Food_logo.svg.png',
            },
            {
                endpoint: 'grab_lidl',
                storeName: 'Lidl',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png',
            },
            {
                endpoint: 'grab_publix',
                storeName: 'Publix',
                logo: 'https://logos-world.net/wp-content/uploads/2021/10/Publix-Logo.png',
            },
            {
                endpoint: 'grab_safeway',
                storeName: 'Safeway',
                logo: 'https://logos-world.net/wp-content/uploads/2022/01/Safeway-Logo.png',
            },
            {
                endpoint: 'grab_shoppers',
                storeName: 'Shoppers',
                logo: 'https://www.shoppersfood.com/content/svu-retail-banners/shoppers/en/_jcr_content/header/headerlogo.img.png/1509573214807.png',
            },
            {
                endpoint: 'grab_wegmans',
                storeName: 'Wegmans',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/WegmansLogo.svg/2560px-WegmansLogo.svg.png',
            },
            {
                endpoint: 'grab_wholefoodsmarket',
                storeName: 'Whole Foods Market',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Whole_Foods_Market_logo.svg/2560px-Whole_Foods_Market_logo.svg.png'
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
                    'logo': api[x].logo,
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