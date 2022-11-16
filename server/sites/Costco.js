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

class Costco {
    constructor(info) {
        this.items = info.items;
        this.jar = new CookieJar.CookieJar();
        this.client = wrapper.wrapper(axios.create({ jar: this.jar }));
    }

    /**
     * Function getRelevant
     * 
     * Use instacart endpoint and filter to find the most relevant item to the search
     */
    async getRelevant(item) {
        try {
            // Get item endpoint
            const response = await this.client.get(`https://www.instacart.com/graphql?operationName=SearchResultsPlacements&variables={"filters":[],"action":null,"query":"${item.replace(' ', '%20')}","pageViewId":"4cf8432c-9885-52b5-995b-ccad7d4ba41d","retailerInventorySessionToken":"v1.87a0cfb.2862939251-20902-03904x17703-1-12-23148-0","elevatedProductId":null,"searchSource":"search","disableReformulation":false,"orderBy":"default","autosuggestImpressionId":"31b5cbeb-dba0-4e1d-976b-07100f8a2f55","clusterId":null,"includeDebugInfo":false,"clusteringStrategy":null,"contentManagementSearchParams":{"itemGridColumnCount":2},"shopId":"30781"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"a6a067507df765e653439f50b15e819d665f53ccc9e4bfde78f53fe1f5233f5a"}}`, {
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
                    'cookie': `__Host-instacart_sid=v2.aaa4fc73.aFOZ3Ri3z-Hlhfl_7r3graqk80DCtKcdSKhkkVE1Yew;`
                },
            });

            // Check to see if any items exist
            if (response.data['data']['searchResultsPlacements']['placements'].length < 3) {
                console.log('No items found');
                return null;
            } else {
                const relevant = response.data['data']['searchResultsPlacements']['placements'][2]['content']['items'][0];
                return this.getRelevantPrice(relevant);
            }
        } catch (err) {
            console.log(err);
            console.log('Error sending instacart request');
        }
    }
}