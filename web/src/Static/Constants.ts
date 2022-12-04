/**
 * Navigation.tsx
 * -
 * This file will contain constant variables/components to prevent writing the same code over and over
 */

// Store list
export const stores = [
    { value: 'aldi', label: 'Aldi' },
    { value: 'costco', label: 'Costco' },
    { value: 'giantfood', label: 'Giant Food' },
    { value: 'lidl', label: 'Lidl' },
    { value: 'publix', label: 'Publix' },
    { value: 'safeway', label: 'Safeway' },
    { value: 'shoppers', label: 'Shoppers' },
    { value: 'wegmans', label: 'Wegmans' },
    { value: 'wholefoodsmarket', label: 'Whole Foods Market' },
];

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

// API Endpoints
export const api = [
    {
        endpoint: 'grab_aldi',
        storeName: 'Aldi',
        logo: 'https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png',
        catalog: 'https://www.aldi.us/en/weekly-specials/our-weekly-ads/',
    },
    {
        endpoint: 'grab_costco',
        storeName: 'Costco',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/2560px-Costco_Wholesale_logo_2010-10-26.svg.png',
        catalog: 'https://www.costco.com/CatalogSearch?keyword=OFF&dept=All&sortBy=item_page_views+desc',
    },
    {
        endpoint: 'grab_giant',
        storeName: 'Giant Food',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Giant_Food_logo.svg/1200px-Giant_Food_logo.svg.png',
        catalog: 'https://giantfood.com/savings/weekly-ad/grid-view',
    },
    {
        endpoint: 'grab_lidl',
        storeName: 'Lidl',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png',
        catalog: 'https://www.lidl.com/specials?category=all-current',
    },
    {
        endpoint: 'grab_publix',
        storeName: 'Publix',
        logo: 'https://logos-world.net/wp-content/uploads/2021/10/Publix-Logo.png',
        catalog: 'https://www.publix.com/savings/select-store?redirect=%2Fsavings%2Fweekly-ad%3Fnav%3Dsecondary_nav_weeklyad',
    },
    {
        endpoint: 'grab_safeway',
        storeName: 'Safeway',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/Safeway-Logo.png',
        catalog: 'https://coupons.safeway.com/weeklyad',
    },
    {
        endpoint: 'grab_shoppers',
        storeName: 'Shoppers',
        logo: 'https://www.shoppersfood.com/content/svu-retail-banners/shoppers/en/_jcr_content/header/headerlogo.img.png/1509573214807.png',
        catalog: 'https://www.shoppersfood.com/weekly-ads.html',
    },
    {
        endpoint: 'grab_wegmans',
        storeName: 'Wegmans',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/WegmansLogo.svg/2560px-WegmansLogo.svg.png',
        catalog: 'https://shop.wegmans.com/shop/coupons',
    },
    {
        endpoint: 'grab_wholefoodsmarket',
        storeName: 'Whole Foods Market',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Whole_Foods_Market_logo.svg/2560px-Whole_Foods_Market_logo.svg.png',
        catalog: 'https://www.wholefoodsmarket.com/sales-flyer'
    },
];