/**
 * 
 * Lidl.js
 * 
 * This file will mimic a module that grabs the relevant items from the list array and return a structured array of the items
 * 
 * Flow:
 * 1. Conduct item search
 * 2. Conduct price search
 * 
 */

const axios = require('axios');
const CookieJar = require('tough-cookie');
const wrapper = require('axios-cookiejar-support');

class Lidl {
    constructor(info) {
        this.items = info.items;
        this.jar = new CookieJar.CookieJar();
        this.client = wrapper.wrapper(axios.create({ jar: this.jar }));
    }

    async compileList() {
        const items = [];

        // Search for item in items list
        for (let x = 0; x < this.items.length; x++) {
            const result = await this.getRelevant(this.items[x]['item']);
            items.push(result);
        }

        console.log(items);
        return items;
    }

    /**
     * Function getRelevant
     * 
     * Use instacart endpoint and filter to find the most relevant item to the search
     */
    async getRelevant(item) {
        try {
            // Get item endpoint
            const response = await this.client.get(`https://mobileapi.lidl.com/v1/search/products?numResults=9&q=${item.replace(' ', '%20')}&storeId=US01053`, {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
                },
            });

            // Check to see if any items exist
            if (response.data['results'].length === 0) {
                console.log('No items found');
                return null;
            } else {
                const relevant = {
                    'product_name': response.data['results'][0]['name'],
                    'product_size': response.data['results'][0]['description'],
                    'brand': response.data['results'][0]['name'],
                    'price': `$${response.data['results'][0]['price']['currentPrice']['value']}`,
                    'unit_price': response.data['results'][0]['price']['basePrice'],
                    'image': response.data['results'][0].images?.[0]['url'],
                    'query': item
                }
                
                return relevant;
            }
        } catch (err) {
            console.log(err);
            console.log('Error sending instacart request');
        }
    }
}

module.exports = Lidl;