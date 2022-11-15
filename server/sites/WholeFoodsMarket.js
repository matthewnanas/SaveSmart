const axios = require("axios");

class WholeFoodsMarket {
    constructor(info) {
        this.zip = info.zipCode;
        this.item = info.item;
    }

    async start() {
        this.getLocation();
    }

    async getLocation() {
        const response = await axios.post(`https://www.wholefoodsmarket.com/stores/search`, {
            headers: {
                'Host': 'www.wholefoodsmarket.com',
                'Pragma': 'no-cache',
                'Referer': 'https://www.wholefoodsmarket.com/stores',
                'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
            },
            data: {
                query: ['AYAAFCST2vIcrxe9ghpO1BZXQNoALgACABFvcmlnaW5hbEZpZWxkTmFtZQAFcXVlcnkADWZyYWdtZW50SW5kZXgAATAAAQAGc2k6bWQ1ACBjNjEyNzMwZmM4NzA0NjYyMThkZjRiMjc1YWFlYTJiNQEABgosy8Qp9d']
            }
        });

        console.log(response.data);
    }
}

const test = new WholeFoodsMarket({
    zip: 20906,
    item: 'milk',
});

test.start();