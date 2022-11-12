/**
 * index.js
 * 
 * This is the main entry point to the server-sided component of this project
 */

// Import dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

/**
 * Create an express app and disable CORS
 * -
 * If the latter does not happen, requests will not be able to be handled
 * as there are security measures in place to block interactions between domains
 */
const app = express();
app.use(cors({ origin: '*' }));

/**
 * Create a rate limit - prevents spamming of this API from one IP.
 * 
 * In our case we will limit usage to 15 API calls per ip per minute
 */
const receiveLimit = rateLimit({
    windowMs: 60 * 1000,
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * compare_list endpoint
 * 
 * Will handle receiving lists created by users and compile a list of all stores and their respective subtotals
 */
app.post('compare_list', receiveLimit, async (req, res) => {
    try {
        console.log(`${new Date().toISOString()} - NEW LIST`);
        
    } catch (err) {
        // In the case something goes totally wrong, log it to the cloud console and respond with a status code of 500
        console.log(`${new Date().toISOString()} - FATAL ERROR - ${err}`);
        res.sendStatus(500);
    }
});