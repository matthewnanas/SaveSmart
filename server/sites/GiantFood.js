const axios = require('axios');
const CookieJar = require('tough-cookie');
const wrapper = require('axios-cookiejar-support');

/**
 * Conduct item search
 * 
 * Conduct price search
 * 
 * Match prices to items via id
 * 
 * Things needed to query:
 *  1. query
 *  2. retailerInventorySessionToken
 *  3. pageViewId
 *  4. sha256hash
 */

class GiantFood {
    constructor(info) {
        this.zip = info.zipCode;
        this.item = info.item;
        this.jar = new CookieJar.CookieJar();
        this.client = wrapper.wrapper(axios.create({ jar: this.jar }));
    }

    async start() {
        this.getRelevant();
    }

    /**
     * Function getRelevant
     * 
     * Use instacart endpoint and filter to find the most relevant item to the search
     */
    async getRelevant() {
        try {
            // Get item endpoint
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=SearchResultsPlacements&variables={"filters":[],"action":null,"query":"${this.item.replace(' ', '%20')}","pageViewId":"0b1bc757-ca2a-554c-93a1-895bebc7dd82","retailerInventorySessionToken":"v1.d143ebf.2862331018-20902-03904x17703-1-159-3810-0","elevatedProductId":null,"searchSource":"search","disableReformulation":false,"orderBy":"default","clusterId":null,"includeDebugInfo":false,"clusteringStrategy":null,"contentManagementSearchParams":{"itemGridColumnCount":2},"shopId":"4192"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a6a067507df765e653439f50b15e819d665f53ccc9e4bfde78f53fe1f5233f5a"}}`, {
                headers: {
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
                    'cookie': `__Host-instacart_sid=v2.aa7b7b61.OCaW4K00T0BlrtiD1HhERuyZGJD7uWKvAm9QYPvkVww;`
                },
            });

            // Check to see if any items exist
            if (response.data['data']['searchResultsPlacements']['placements'].length < 3) {
                console.log('No items found');
            } else {
                const relevant = response.data['data']['searchResultsPlacements']['placements'][2]['content']['items'][0];
                this.getRelevantPrice(relevant);
            }
        } catch (err) {
            console.log(err);
            console.log('Error sending instacart request');
        }
    }

    /**
     * Function getRelevant
     * 
     * Use instacart endpoint to get the price of the most relevant price
     */
    async getRelevantPrice(relevant) {
        try {
            // Get price endpoint
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=ItemPricesQuery&variables={"ids":["${relevant['id']}"],"shopId":"4192","zoneId":"37","postalCode":"20902"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6bc7919897d4104897f991ab9e6f544aa2157e60781606871bf236f30e50243f"}}`, {
                headers: {
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
                    'cookie': `__Host-instacart_sid=v2.aa7b7b61.OCaW4K00T0BlrtiD1HhERuyZGJD7uWKvAm9QYPvkVww;`
                },
            });

            const item = {
                'product_name': relevant.name,
                'product_size': relevant.size,
                'brand': relevant.brandName,
                'price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['priceString'],
                'unit_price': response.data['data']['itemPrices'][0]['viewSection']['itemDetails']['pricePerUnitString'],
                'image': relevant['viewSection']['itemImage']['url'],
            }

            return item;
        } catch (err) {
            console.log(err);
            console.log('Error sending price request');
        }
    }
}

const test = new GiantFood({
    zip: 20906,
    item: 'milk',
});

test.start();