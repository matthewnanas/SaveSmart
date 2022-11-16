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
}