/**
 * 
 * Costco.js
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

class Costco {
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
            items.push({
                'query': this.items[x]['item'],
                'quantity': this.items[x]['quantity'],
                'items': result,
            })
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
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=SearchResultsPlacements&variables={"filters":[],"action":null,"query":"${item.replace(' ', '%20')}","pageViewId":"93424984-ca3e-5826-a673-cd67a83178cf","retailerInventorySessionToken":"v1.1389584.2864694512-20740-03898x17693-1-5-1157-0","elevatedProductId":null,"searchSource":"search","disableReformulation":false,"orderBy":"default","clusterId":null,"includeDebugInfo":false,"clusteringStrategy":null,"contentManagementSearchParams":{"itemGridColumnCount":10},"shopId":"8251"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a6a067507df765e653439f50b15e819d665f53ccc9e4bfde78f53fe1f5233f5a"}}`, {
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
                    'cookie': `__Host-instacart_sid=v2.aaa4fc73.aFOZ3Ri3z-Hlhfl_7r3graqk80DCtKcdSKhkkVE1Yew;`
                },
            });

            let itemBodys = []
            for (var x = 0; x < response.data['data']['searchResultsPlacements']['placements'].length; x++) {
                if (response.data['data']['searchResultsPlacements']['placements'][x].content?.hasOwnProperty('itemIds')) {
                    const itemIds = response.data['data']['searchResultsPlacements']['placements'][x]['content']['itemIds'];
                    for (var n = 0; n < itemIds.length; n++) {
                        itemBodys.push(response.data['data']['searchResultsPlacements']['placements'][x]['content']['items'][n]);
                    }
                    break;
                }
            }

            return this.getRelevantPrice(itemBodys, item);
        } catch (err) {
            console.log(err);
            console.log('Error sending instacart request');
            return {
                'query': item,
            };
        }
    }

    async getRelevantPrice(itemBodies, itemName) {
        let itemResult = [];
        try {
            for (var x = 0; itemBodies.length; x++) {
                // Get price endpoint
                const response = await this.client.get(`https://www.instacart.com/graphql?operationName=ItemPricesQuery&variables={"ids":["${itemBodies[x]['id']}"],"shopId":"8251","zoneId":"272","postalCode":"20740"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6bc7919897d4104897f991ab9e6f544aa2157e60781606871bf236f30e50243f"}}`, {
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
                        'cookie': `__Host-instacart_sid=v2.aaa4fc73.aFOZ3Ri3z-Hlhfl_7r3graqk80DCtKcdSKhkkVE1Yew;`
                    },
                });

                itemResult.push({
                    'product_name': itemBodies[x].name,
                    'product_size': itemBodies[x].size,
                    'brand': itemBodies[x].brandName,
                    'price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['priceString'],
                    'unit_price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['pricePerUnitString'],
                    'image': itemBodies[x]['viewSection']['itemImage']['url'],
                    'query': itemName,
                    'link': `https://www.instacart.com/store/costco/products/${itemBodies[x]['id'].split('-')[1]}`
                })
            }
        } catch (err) {
            console.log(err);
            console.log('Error sending price request');
        }
        return itemResult;
    }
}

module.exports = Costco;