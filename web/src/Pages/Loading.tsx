import React from 'react';
import '../Static/Styles/Loading.css'
import HashLoader from 'react-spinners/HashLoader'
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const [status, setStatus] = React.useState("Helping your wallet");

    // Access the items list on page load and call the getResults function
    const navigate = useNavigate();
    React.useEffect(() => {
        const items = localStorage.getItem("items");
        getResults(items);
    }, []);

    // Use our API to compile a list of results
    const getResults = (items: any) => {
        const itemList: any = JSON.parse(items);
        let results: any = [];

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                list: itemList, 
            })
        };

        setStatus("Fetching Aldi Prices");
        fetch(`http://192.168.1.163:7777/grab_aldi`, options).then(response => response.json()).then(data => results.push({
            name: "Aldi",
            results: data,
        })).then(() => {
            setStatus("Fetching Costco Prices");
            fetch(`http://192.168.1.163:7777/grab_costco`, options).then(response => response.json()).then(data => results.push({
                name: "Costco",
                results: data,
        })).then(() => {
            setStatus("Fetching Giant Prices");
            fetch(`http://192.168.1.163:7777/grab_giant`, options).then(response => response.json()).then(data => results.push({
                name: "Giant",
                results: data,
        })).then(() => {
            setStatus("Fetching Lidl Prices");
            fetch(`http://192.168.1.163:7777/grab_lidl`, options).then(response => response.json()).then(data => results.push({
                name: "Lidl",
                results: data,
        })).then(() => {
            setStatus("Fetching Publix Prices");
            fetch(`http://192.168.1.163:7777/grab_publix`, options).then(response => response.json()).then(data => results.push({
                name: "Publix",
                results: data,
        })).then(() => {
            setStatus("Fetching Safeway Prices");
            fetch(`http://192.168.1.163:7777/grab_safeway`, options).then(response => response.json()).then(data => results.push({
                name: "Safeway",
                results: data,
        })).then(() => {
            setStatus("Fetching Shoppers Prices");
            fetch(`http://192.168.1.163:7777/grab_shoppers`, options).then(response => response.json()).then(data => results.push({
                name: "Shoppers",
                results: data,
        })).then(() => {
            setStatus("Fetching Wegmans Prices");
            fetch(`http://192.168.1.163:7777/grab_wegmans`, options).then(response => response.json()).then(data => results.push({
                name: "Wegmans",
                results: data,
        })).then (() => {
            setStatus("Fetching Whole Foods Market Prices");
            fetch(`http://192.168.1.163:7777/grab_wholefoodsmarket`, options).then(response => response.json()).then(data => results.push({
                name: "Whole Foods Market",
                results: data,
            })).then(() => {
                console.log(results);
                localStorage.setItem("results", JSON.stringify(results)); 
                return navigate('/results');
            });
           
        })}

      /* 
        setStatus("Fetching Giant Prices");
        fetch(`http://192.168.1.163:7777/grab_giant`, options).then(response => response.json()).then(data => results.push({
            name: "Giant",
            results: data,
        }));

        setStatus("Fetching Lidl Prices");
        fetch(`http://192.168.1.163:7777/grab_lidl`, options).then(response => response.json()).then(data => results.push({
            name: "Lidl",
            results: data,
        }));
       
        setStatus("Fetching Publix Prices");
        fetch(`http://192.168.1.163:7777/grab_publix`, options).then(response => response.json()).then(data => results.push({
            name: "Publix",
            results: data,
        }));

        setStatus("Fetching Safeway Prices");
        fetch(`http://192.168.1.163:7777/grab_safeway`, options).then(response => response.json()).then(data => results.push({
            name: "Safeway",
            results: data,
        }));

        setStatus("Fetching Shoppers Prices");
        fetch(`http://192.168.1.163:7777/grab_shoppers`, options).then(response => response.json()).then(data => results.push({
            name: "Shoppers",
            results: data,
        }));

        setStatus("Fetching Wegmans Prices");
        fetch(`http://192.168.1.163:7777/grab_wegmans`, options).then(response => response.json()).then(data => results.push({
            name: "Wegmans",
            results: data,
        })); */
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
                <h1 style={{marginTop: 55}}>{status}</h1>
            </div>
        </div>
    ) 
}