/**
 * index.js
 * 
 * This is the main entry point to the server-sided component of this project
 */

// Add firebase
const functions = require('firebase-functions');

// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import modules
const Aldi = require('./sites/Aldi');
const Costco = require('./sites/Costco');
const GiantFood = require('./sites/GiantFood');
const Lidl = require('./sites/Lidl');
const Publix = require('./sites/Publix');
const Safeway = require('./sites/Safeway');
const Shoppers = require('./sites/Shoppers');
const Wegmans = require('./sites/Wegmans');
const WholeFoodsMarket = require('./sites/WholeFoodsMarket');
const Target = require('./sites/Target');
const HMart = require('./sites/HMart');

/**
 * Create an express app configure, and disable CORS
 * -
 * If the latter does not happen, requests will not be able to be handled
 * as there are security measures in place to block interactions between domains
 */
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

/**
 * grab_aldi endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Aldi 
 */
app.post('/grab_aldi', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling ALDI`);

        // Create a new Aldi thread and compile item list
        const thread = new Aldi({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_costco endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Costco 
 */
app.post('/grab_costco', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling COSTCO`);

        // Create a new Costco thread and compile item list
        const thread = new Costco({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_giant endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Giant 
 */
app.post('/grab_giant', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling GIANT`);

        // Create a new Giant thread and compile item list
        const thread = new GiantFood({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_lidl endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Lidl 
 */
app.post('/grab_lidl', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling LIDL`);

        // Create a new Lidl thread and compile item list
        const thread = new Lidl({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_publix endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Publix 
 */
app.post('/grab_publix', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling PUBLIX`);

        // Create a new Publix thread and compile item list
        const thread = new Publix({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_safeway endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Safeway 
 */
app.post('/grab_safeway', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling SAFEWAY`);

        // Create a new Safeway thread and compile item list
        const thread = new Safeway({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_shoppers endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Shoppers 
 */
app.post('/grab_shoppers', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling SHOPPERS`);

        // Create a new Shoppers thread and compile item list
        const thread = new Shoppers({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_wegmans endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Wegmans 
 */
app.post('/grab_wegmans', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling WEGMANS`);

        // Create a new Wegmans thread and compile item list
        const thread = new Wegmans({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_wholefoodsmarket endpoint
 * 
 * Will handle receiving lists created by users and compile a list from WholeFoodsMarket 
 */
app.post('/grab_wholefoodsmarket', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling WHOLEFOODSMARKET`);

        // Create a new WholeFoodsMarket thread and compile item list
        const thread = new WholeFoodsMarket({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_target endpoint
 * 
 * Will handle receiving lists created by users and compile a list from Target 
 */
app.post('/grab_target', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling TARGET`);

        // Create a new TARGET thread and compile item list
        const thread = new Target({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});

/**
 * /grab_hmart endpoint
 * 
 * Will handle receiving lists created by users and compile a list from HMart 
 */
app.post('/grab_hmart', async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - Handling HMART`);

        // Create a new HMART thread and compile item list
        const thread = new HMart({ items: req.body.list });
        const result = await thread.compileList();

        res.send(result);
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});


app.get('/', async (req, res) => {
    res.send('Cannot get "/"');
});

/*app.listen(7777, () => {
    console.log(`${new Date().toISOString()} - Server deployed!`);
});*/

const api = functions.https.onRequest((request, response) => {
    if (!request.path) {
        request.url = `/${request.url}`;
    }

    return app(request, response);
});

module.exports = { api };