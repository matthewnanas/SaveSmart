/**
 * Navigation.tsx
 * -
 * This file will contain constant variables/components to prevent writing the same code over and over
 */

import React from 'react';

// Store list
export const stores = [
    { value: 'aldi', label: 'Aldi' },
    { value: 'costco', label: 'Costco' },
    { value: 'giantfood', label: 'GiantFood' },
    { value: 'lidl', label: 'Lidl' },
    { value: 'publix', label: 'Publix' },
    { value: 'safeway', label: 'Safeway' },
    { value: 'shoppers', label: 'Shoppers' },
    { value: 'wegmans', label: 'Wegmans' },
    { value: 'wholefoodsmarket', label: 'Whole Foods Market' },
]

export const content = [
    { 
        question: "What retailers do you support?",
        content: "At the moment, we currently support: Aldi, Costco, GiantFood, Lidl, Publix, Safeway, Shoppers, Wegmans, and Whole Foods Market."
    },
    { 
        question: "How does this work?",
        content: "The process is fairly simple! Jot down the items you would like to scoop up at your next grocery trip. And like every other search engine, we'd find items that are most relevant to your query at the most popular grocery stores around the DMV. With that said, try to be as specific as possible when it comes to your entries. "
    },
    { 
        question: "What is the catch?",
        content: "There is no catch! We do not collect any identifying information such as emails or phone numbers. Our service is completely anonymous and will remain free until we can no longer run it!"
    },
    { 
        question: "How can I support the project?",
        content: "Just share it around :) Or help other families by supporting a trusthworthy non profit organization!"
    },
    { 
        question: "Would you like to contact us?",
        content: "Email one of our team members at mnanas@umd.edu"
    }
];