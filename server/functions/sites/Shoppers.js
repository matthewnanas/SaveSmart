/**
 * 
 * Shoppers.js
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

class Shoppers {
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
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=SearchResultsPlacements&variables={"filters":[],"action":null,"query":"${item.replace(' ', '%20')}","pageViewId":"6ef22e5d-df36-54fd-91d0-fe156e130f8d","retailerInventorySessionToken":"v1.942fa0a.2865107139-20740-03898x17693-1-213-5772-0","elevatedProductId":null,"searchSource":"search","disableReformulation":false,"orderBy":"default","clusterId":null,"includeDebugInfo":false,"clusteringStrategy":null,"contentManagementSearchParams":{"itemGridColumnCount":2},"shopId":"2913"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a6a067507df765e653439f50b15e819d665f53ccc9e4bfde78f53fe1f5233f5a"}}`, {
                headers: {
                    "accept-encoding": 'none',
                    'sec-ch-device-memory': '8',
                    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                    'sec-ch-ua-arch': '"arm"',
                    'sec-ch-ua-full-version-list': '"Google Chrome";v="107.0.5304.110", "Chromium";v="107.0.5304.110", "Not=A?Brand";v="24.0.0.0"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                    'cookie': `__Host-instacart_sid=v2.aac610c3.mxJCid2UWOOjNrNrEu0e3A3cf6tGi6rQePpFcNSWnK0;`
                },
            });

            // Check to see if any items exist
            if (response.data['data']['searchResultsPlacements']['placements'].length < 3) {
                console.log('No items found');
                return {
                    'query': item,
                };
            } else {
                const relevant = response.data['data']['searchResultsPlacements']['placements'][1]['content']['items'][0];
                return this.getRelevantPrice(relevant, item);
            }
        } catch (err) {
            console.log(err);
            console.log('Error sending instacart request');
            return {
                'query': item,
            };
        }
    }

    /**
     * Function getRelevantPrice
     * 
     * Use instacart endpoint to get the price of the most relevant price
     */
    async getRelevantPrice(relevant, itemName) {
        try {
            // Get price endpoint
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=ItemPricesQuery&variables={"ids":["${relevant['id']}"],"shopId":"2913","zoneId":"272","postalCode":"20740"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6bc7919897d4104897f991ab9e6f544aa2157e60781606871bf236f30e50243f"}}`, {
                headers: {
                    "accept-encoding": 'none',
                    'sec-ch-device-memory': '8',
                    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                    'sec-ch-ua-arch': '"arm"',
                    'sec-ch-ua-full-version-list': '"Google Chrome";v="107.0.5304.110", "Chromium";v="107.0.5304.110", "Not=A?Brand";v="24.0.0.0"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                    'cookie': `__Host-instacart_sid=v2.aac610c3.mxJCid2UWOOjNrNrEu0e3A3cf6tGi6rQePpFcNSWnK0;`
                },
            });

            const item = {
                'product_name': relevant.name,
                'product_size': relevant.size,
                'brand': relevant.brandName,
                'price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['priceString'],
                'unit_price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['pricePerUnitString'],
                'image': relevant['viewSection']['itemImage']['url'],
                'query': itemName,
                'link': `https://www.instacart.com/store/shoppersfood/products/${relevant['id'].split('-')[1]}`
            }

            return item;
        } catch (err) {
            console.log(err);
            console.log('Error sending price request');
            return {
                'query': item,
            };
        }
    }
}

module.exports = Shoppers;