/**
 * Constants.ts
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

// Home page accordion content
export const content = [
    { 
        question: "What retailers do you support?",
        content: "At the moment, we currently support popular grocery stores in the DMV such as: Aldi, Costco, GiantFood, Lidl, Publix, Safeway, Shoppers, Wegmans, and Whole Foods Market."
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

// Suggestion list (credit: open ai)
export const foodlist = ["Milk","Bread","Cheese","Apples","Carrots","Bananas","Onions","Potatoes","Tomatoes","Rice","Cereal","Butter","Yogurt","Honey","Lettuce","Spinach","Oranges","Cucumbers","Strawberries","Ground beef","Chicken","Salmon","Flour","Sugar","Garlic","Pepper","Olive oil","Baking soda","Nuts","Pasta","Crackers","Tortillas","Frozen vegetables","Soy sauce","Marmalade","Canned beans","Maple syrup","Chocolate chips","Marshmallows","Tea","Coffee","Spices","Vinegar","Mustard","Jams","Juice","Canned soup","Cookies","Salad dressing","Ketchup","Salad mix","Tuna","Buns","Sliced bread","Biscuits","Waffles","Bagels","Ravioli","Olive tapenade","Hummus","Salsa","Olives","BBQ sauce","Pickles","Croutons","Sunflower seeds","Chili powder","Curry powder","Ginger","Paprika","Oregano","Cilantro","Parsley","Basil","Cream cheese","Ice cream","Popsicles","Graham crackers","Chocolate sauce","Worcestershire sauce","Broth","Sausage","Bacon","Ground turkey","Almond butter","Fruit preserves","Popcorn","Cornmeal","Macaroni","Noodles","Quinoa","Couscous","Bouillon cubes","Soy milk","Tofu","Granola bars","Peanut butter","Raisins","Shrimp","Clams","Scallops","Pretzels","Canned fruit","Canned corn","Baking powder","Muffin mix","Gelatin","Brownie mix","Doughnuts","Pie crust","Apple sauce","Cake mix","Pudding mix","Cranberries","Pecans","Walnuts","Dried apricots","Dried cherries","Dried figs","Dried cranberries","Dried mangoes","Dried dates","Coconut flakes","Marshmallow fluff","Pancake mix","Granola","Jam","Hot sauce","Kale","Brussel sprouts","Avocado","Coconut oil","Vegetable oil","Shortening","Flaxseed","Oatmeal","Steel cut oats","Jello","Rice cakes","Muesli","White rice","Brown rice","Barley","Bulgur","Sun-dried tomatoes","Bacon bits","White vinegar","Balsamic vinegar","Fish sauce","Worcestershire sauce","Soy sauce","Tonic water","Lemon juice","Orange juice","Cranberry juice","Apple cider vinegar","Red wine vinegar","White wine vinegar","Sweetened condensed milk","Evaporated milk","Canned tuna","Canned salmon","Canned tomatoes","Canned green beans","Canned mushrooms","Canned olives","Frozen corn","Frozen peas","Frozen spinach","Frozen fruit","Frozen french fries","Frozen waffles","Frozen pizza","Frozen burritos","Frozen fish sticks","Frozen chicken nuggets","Mayonnaise","Mustard","Horseradish","Worcestershire sauce","Mustard powder","Salad greens","Kale","Collard greens","Cabbage","Broccoli","Asparagus","Zucchini","Artichoke hearts","Mushrooms","Seaweed","Granola","Dried fruit","Trail mix","Dried herbs","Baking soda","Baking powder","Cornstarch","Tomato paste","Tomato sauce","Tomato puree","Coconut milk","Canned coconut milk","Almond milk","Cashews","Walnuts","Pecans","Almonds","Peanuts","Lentils","Beans","Lentil soup","Split peas","Sausage","Ham","Bacon","Beef","Ground beef","Lamb","Turkey","Deli meats","Cold cuts","Salami","Pepperoni","Anchovies","Capers","Pickles","Olives","Artichoke hearts","Sun-dried tomatoes","Pesto","Mustard","Mayonnaise","Ketchup","Hot sauce","Barbecue sauce","Worcestershire sauce","Soy sauce","Oyster sauce","Fish sauce","Teriyaki sauce","Dijon mustard","Relish","Salad dressing","Hummus","Tahini","Salsa","Cream cheese","Cheese","Cheddar","Swiss","Mozzarella","Brie","Feta","Ricotta","Blue cheese","Parmesan","American","Goat cheese","Cream","Half and half","Whipping cream","Sour cream","Margarine","Butter","Shortening","Lard","Vegetable oil","Olive oil","Coconut oil","Peanut oil","Sunflower oil","Corn oil","Gelatin","Corn meal","Cornstarch","Flour","Bread crumbs","Rice","Oats","Quinoa","Couscous","Pasta","Noodles","Ramen","Macaroni","Spaghetti","Lasagna","Ravioli","Gnocchi","Rice cakes","Popcorn","Crackers","Tortillas","Bagels","Bread","Buns","Sliced bread","English muffins","Doughnuts","Waffles","Pretzels","Chips","Candy","Marshmallows","Chocolate chips","Raisins","Dates","Figs","Prunes","Apples","Bananas","Oranges","Grapefruit","Lemons","Limes","Strawberries","Blueberries","Raspberries","Blackberries","Grapes","Watermelon","Honeydew","Cantaloupe","Pineapple","Avocado","Peaches","Plums","Pears","Kiwi","Mangos","Papaya","Nectarines","Olives","Carrots","Potatoes","Onions","Garlic","Ginger","Celery","Cucumbers","Mushrooms","Peppers","Tomatoes","Eggplant","Squash","Lettuce","Spinach","Kale","Broccoli","Cauliflower","Brussels sprouts","Bok choy","Beans","Lentils","Peas","Artichokes","Cabbage","Corn","Asparagus","Seaweed","Jams","Jellies","Marmalade","Maple syrup","Honey","Fruit preserves","Fruit juice","Tea","Coffee","Hot chocolate","Soy milk","Almond milk","Yogurt","Sour cream","Ice cream","Popsicles","Eggs","Sugar","Brown sugar","Powdered sugar","Molasses","Salt","Pepper","Spices","Herbs","Chili powder","Paprika","Curry powder","Cumin","Oregano","Thyme","Rosemary","Garlic powder","Cinnamon","Nutmeg","Cloves","Mustard powder","Baking soda","Baking powder","Bouillon cubes","Yeast","Vanilla extract","Vegetable broth","Beef broth","Chicken broth","Red wine","White wine","Beer","Fruit punch","Juice","Tonic water","Lemon juice","Lime juice","Apple cider vinegar","White vinegar","Balsamic vinegar","Red wine vinegar","Soy sauce","Fish sauce","Oyster sauce","Worcestershire sauce","Tomato paste","Tomato sauce","Tomato puree","Canned vegetables","Canned beans","Canned fruit","Canned soup","Canned tuna","Canned salmon","Canned olives","Frozen vegetables","Frozen fruits","Frozen fish","Frozen chicken","Frozen pizza","Frozen burritos","Frozen waffles","Frozen french fries","Frozen fish sticks","Frozen chicken nuggets","Mayonnaise","Mustard","Ketchup","Horseradish","Salad dressing","Hummus","Tahini","Salsa","Pesto","Relish","Teriyaki sauce","Barbecue sauce","Hot sauce","Cream cheese","Margarine","Butter","Shortening","Lard","Vegetable oil","Olive oil","Coconut oil","Peanut oil","Sunflower oil","Corn oil","Gelatin","Baking soda","Baking powder","Cornstarch","Flour","Bread crumbs","Rice","Oats","Quinoa","Couscous","Pasta","Noodles","Ramen","Macaroni","Spaghetti","Lasagna","Ravioli","Gnocchi","Rice cakes","Popcorn","Crackers","Tortillas"]