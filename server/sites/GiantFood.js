const axios = require("axios");

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
            const response = await axios.get(`https://www.instacart.com/graphql?operationName=SearchWithClustering&variables={%22filters%22:[],%22disableReformulation%22:false,%22retailerInventorySessionToken%22:%22v1.bab5661.2860219233-20906-03908x17705-1-159-5229-0%22,%22orderBy%22:%22default%22,%22query%22:%22${this.item.replace(' ', '%20')}%22,%22pageViewId%22:%2202390ea6-023a-5b3c-9f2c-bd5c9b04e306%22,%22includeDebugInfo%22:false,%22elevatedProductId%22:null}&extensions={%22persistedQuery%22:{%22version%22:1,%22sha256Hash%22:%223a191ccb71dba998291ee4452457cbba4655dcc15c2f440d0bad7f80d540d548%22}}`, {
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
            if (response.data['data']['searchResults']['primaryItemResultList']['items'].length == 0) {
                console.log('No items found');
            } else {
                const firstTen = response.data['data']['searchResults']['primaryItemResultList']['itemIds'].slice(0, 10);
                const relevant = response.data['data']['searchResults']['primaryItemResultList']['items'][0];
                this.getRelevantPrice(firstTen, relevant);
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
    async getRelevantPrice(firstTen, relevant) {
        try {
            // Get price endpoint
            const response = await axios.get(`https://www.instacart.com/graphql?operationName=ItemPricesQuery&variables=${encodeURIComponent(JSON.stringify({"ids":firstTen,"shopId":"4192","zoneId":"37","postalCode":"20902"}))}&extensions=${encodeURIComponent(JSON.stringify({"persistedQuery":{"version":1,"sha256Hash":"6bc7919897d4104897f991ab9e6f544aa2157e60781606871bf236f30e50243f"}}))}`, {
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
            if (response.data['data']['itemPrices'].length == 0) {
                console.log('No prices found');
            } else {
                console.log(response.data['data']);
            }
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