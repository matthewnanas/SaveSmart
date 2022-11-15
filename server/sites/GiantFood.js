const axios = require("axios");

class GiantFood {
    constructor(info) {
        this.zip = info.zipCode;
        this.item = info.item;
    }

    async start() {
        this.getLocation();
    }

    async getLocation() {
        const response = await axios.post(`https://giantfood.com/api/v5.0/products/1704970509/50000351?elevaateInclude=true&sort=bestMatch+asc&filter=&start=0&flags=true&keywords=milk&nutrition=false&facetExcludeFilter=true&facet=categories,brands,nutrition,sustainability,specials,newArrivals,privateLabel`, {
            /*headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                'X-Forwarded-For': '66.249.79.164',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'max-age=0',
                'Upgrade-Insecure-Requests': '1',
                'Connection': 'keep-alive',
            }*/
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
                'cookie': 'datadome=ZzillVaBL4mbr89XjZytqel8J8SEWMnNY6RP5jqQcZf60QK0S-Vjk-EFQPVYydydO31l5FHvZT7HztWCYcW8ZLdOr~vifDyKSHcutSihiF3rwbx.MB9QF.v8FCIG1Ac'
            },
        });

        console.log(response.data);
        console.log(response.status)
    }
}

const test = new GiantFood({
    zip: 20906,
    item: 'milk',
});

test.start();