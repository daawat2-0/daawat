const portLandMenu = [
    //Veg Appetizers
    {itemName : "Vegetarain Samosa", price : 5.99,Ingredients : "Crispy fried dumplings stuffed with potatoes and vegetables", type: "portlandVegAppetizers", imageLink : "./Menu/Vegetarain Samosa.jpg"},
    {itemName : "Paneer Pakora", price : 7.99,Ingredients : "Paneer coated in a chickpea batter and fried", type: "portlandVegAppetizers", imageLink : "./Menu/paneer pakoda.JPG"},
    {itemName : "Mix Vegetable Pakora", price : 6.99,Ingredients : "Mixed vegetables coated in a chickpea batter and fried", type: "portlandVegAppetizers", imageLink : "./Menu/mix veg pakoda.JPG"},
    {itemName : "Aloo Tikki Chat", price : 8.99,Ingredients : "Fried potato patty topped with yogurt, cilantro and a spicy sauce", type: "portlandVegAppetizers", imageLink : "./Menu/aloo tikki chaat.JPG"},
    {itemName : "Samosa Chat", price : 8.99,Ingredients : "Savory stuffed pastry topped with chickpea, yogurt and a spicy sauce", type: "portlandVegAppetizers", imageLink : "./Menu/samosa chaat.JPG"},
    {itemName : "Onion Bhaaji", price : 6.99,Ingredients : "Onion Fritters coated in chickpea batter and fried, served chutney", type: "portlandVegAppetizers", imageLink : "./Menu/onion bhaji.JPG"},

    // Non-Veg Appetizers
    {itemName : "Lamb Samosa", price : 8.99,Ingredients : "Crispy fried dumplings stuffed with lamb and vegetables",type: "portlandNonVegAppetizers", imageLink : "./Menu/lamb samosa.JPG"},
    {itemName : "Tandoori Chicken", price : 19.99,Ingredients : "Roasted Chicken marinated in yogurt and spices",type: "portlandNonVegAppetizers", imageLink : "./Menu/Tandoori chicken.png"},
    {itemName : "Fish Pakora", price : 10.99,Ingredients : "Fish coated with chickpea batter and fried",type: "portlandNonVegAppetizers", imageLink : "./Menu/Fish pakora.png"},
    {itemName : "Chicken Seekh Kabab", price : 13.99,Ingredients : "Marinated Chicken in yogurt and spices threaded onto skewers, cooked in clay oven",type: "portlandNonVegAppetizers", imageLink : "./Menu/chicken seekh kabab.png"},
    {itemName : "Lamb Seekh Kabab", price : 13.99,Ingredients : "Marinated Lamb in yogurt and spices threaded onto skewers, cooked in clay oven",type: "portlandNonVegAppetizers", imageLink : "./Menu/Lamb Seekh Kabab.png"},
    {itemName : "Tandoori Shrimp", price : 14.99,Ingredients : "Roasted Shrimp marinated in yogurt and spices",type: "portlandNonVegAppetizers", imageLink : "./Menu/tandoori shrimp.png"},
    {itemName : "Tandoori Fish", price : 13.99,Ingredients : "Roasted Fish marinated in yogurt and spices",type: "portlandNonVegAppetizers", imageLink : "./Menu/tandoori fish.png"},

    //Vegetarian Mains
    {itemName : "Channa Masala", price : 16.99, Ingredients : "Garbanzo beans made in Indian spices, onions, ginger, garlic & tomatoes.",type:"portlandVegetarianMains", imageLink : "./Menu/Chana masala.JPG"},
    {itemName : "Aloo Gobhi", price : 16.99, Ingredients : "Cauliflower, potatoes cooked with ginger, garlic, onion and spices",type:"portlandVegetarianMains", imageLink : "./Menu/Aloo Gobhi.JPG"},
    {itemName : "Dal Tadka", price : 16.99, Ingredients : "Yellow lentils cooked with cumin seeds, ginger, garlic, tomato, and onions",type:"portlandVegetarianMains", imageLink : "./Menu/Dal fry.JPG"},
    {itemName : "Dal Makhani", price : 18.99, Ingredients : "Black lentils with subtle smoky flavors and rich creaminess",type:"portlandVegetarianMains", imageLink : "./Menu/Dal makhani.JPG"},
    {itemName : "Palak Paneer", price : 17.99, Ingredients : "Pureed Spinach made with onions, spices, paneer and herbs",type:"portlandVegetarianMains", imageLink : "./Menu/Palak paneer.JPG"},
    {itemName : "Shahi Paneer", price : 17.99, Ingredients : "Paneer chunks simmered slowly in our special inhouse curry",type:"portlandVegetarianMains", imageLink : "./Menu/Shahi paneer.JPG"},
    {itemName : "Kadhai Paneer", price : 16.99, Ingredients : "Cheese cubes cooked in a gravy with onions, tomatoes, and bell peppers",type:"portlandVegetarianMains", imageLink : "./Menu/kadhai paneer.JPG"},
    {itemName : "Malai Kofta", price : 18.99, Ingredients : "Potato and Cheese fried balls served in rich gravy",type:"portlandVegetarianMains", imageLink : "./Menu/Malai kofta.JPG"},
    {itemName : "Mix Veg", price : 16.99, Ingredients : "Mixed vegetables sautéed with Indian spices",type:"portlandVegetarianMains", imageLink : "./Menu/Mix veg curry.JPG"},
    {itemName : "Bhindi Masala", price : 16.99, Ingredients : "Semi dry, Okra curry, sautéed with spices, herbs, onions, and tomato's",type:"portlandVegetarianMains", imageLink : "./Menu/bhindi.JPG"},
    {itemName : "Navratana Korma", price : 17.99, Ingredients : "Mixed vegetables cooked in gravy of tomato and onion sauce with mild spices",type:"portlandVegetarianMains", imageLink : "./Menu/navratan korma.JPG"},
    {itemName : "Methi Matar Mushroom", price : 16.99, Ingredients : "Mushroom and peas cooked in a buttery creamy white sauce",type:"portlandVegetarianMains", imageLink : "./Menu/methi matar mushroom.JPG"},


    //Non Vegetarians Mains
    {itemName : "Butter Chicken", price : 18.99, Ingredients : "Chicken cooked in a velvety sauce with spices",type:"portlandNonVegetariansMains", imageLink : "./Menu/Butter chicken.png"},
    {itemName : "Chicken Tikka Masala", price : 18.99, Ingredients : "Tender chicken pieces swimming in a creamy tomato sauce with spices",type:"portlandNonVegetariansMains", imageLink : "./Menu/chicken tikka masala.png"},
    {itemName : "Kadhai Chicken", price : 18.99, Ingredients : "Chicken cooked in a ginger, garlic sauce with onion and bell pepper",type:"portlandNonVegetariansMains", imageLink : "./Menu/Kadhai Chicken.png"},
    {itemName : "Chicken Handi (Boneless)", price : 16.99, Ingredients : "Boneless chicken cooked in a whipped, aromatic, yogurt-tomato sauce and spices",type:"portlandNonVegetariansMains", imageLink : "./Menu/Chicken Handi (Boneless).png"},
    {itemName : "Chicken Vindaloo", price : 18.99, Ingredients : "Chicken Dish with a tangy and spicy flavor combo",type:"portlandNonVegetariansMains", imageLink : "./Menu/chicken vindaloo.png"},
    {itemName : "Kadhai Gosht", price : 19.99, Ingredients : "Juicy pieces of goat tossed in herbs and spices",type:"portlandNonVegetariansMains", imageLink : "./Menu/kadhai gosht.png"},
    {itemName : "Saag Gosht", price : 19.99, Ingredients : "Pieces of goat cooked in a creamy spinach gravy",type:"portlandNonVegetariansMains", imageLink : "./Menu/saag gosht.png"},
    {itemName : "Jalfrezi (Fish, Chicken, Shrimp, Lamb)", price : 19.99, Ingredients : "(Meat) stir fried with plenty of veggies",type:"portlandNonVegetariansMains", imageLink : "./Menu/Jalfrezi (Fish, Chicken, Shrimp, Lamb).png"},


    //Authentic Indian Wraps
    {itemName : "Paneer Wrap", price : 9.99, Ingredients : "Flavorful wrap made with marinated cheese and veggies",type:"portlandAuthenticIndianWraps", imageLink : "./Menu/paneer wrap.png"},
    {itemName : "Veggie Wrap", price : 8.99, Ingredients : "Flavorful wrap with cooked veggies",type:"portlandAuthenticIndianWraps", imageLink : "./Menu/veggie wrap.png"},
    {itemName : "Chicken Seekh Kebab Wrap", price : 9.99, Ingredients : "Tender chicken marinated with indian sauces and onions",type:"portlandAuthenticIndianWraps", imageLink : "./Menu/chicken seekh kebab wrap.png"},
    {itemName : "Chicken Malai Boti", price : 11.99, Ingredients : "Bone-less chicken cooked with creamy sauce and spices",type:"portlandAuthenticIndianWraps", imageLink : "./Menu/chicken malai boti.png"},
    {itemName : "Chicken Boti Wrap", price : 9.99, Ingredients : "Bone-less chicken cooked with indian spices",type:"portlandAuthenticIndianWraps", imageLink : "./Menu/chicken boti wrap.png"},


    // Rice Option
    {itemName : "Veg Biryani", price : 14.99, Ingredients : "Authentic Indian rice cooked with a special blend of veggies and spices.",type:"portlandRiceOption", imageLink : "./Menu/veg biryani.png"},
    {itemName : "Non-Veg Biryani", price : "17.99/18.99/16.99/18.99", Ingredients : "Authentic Indian rice cooked with a special blend of veggies, spices and your choice of meat. (Lamb, Goat, Chicken, Shrimp)",type:"portlandRiceOption", imageLink : "./Menu/non-veg biryani.png"},
    {itemName : "Plain Steamed Rice", price : 3.99, Ingredients : "",type:"portlandRiceOption", imageLink : "./Menu/plain steamed rice.png"},


    //Freshly Baked Bread
    {itemName : "Plain Naan", price : 3.50, Ingredients : "Light and fluffy flatbread",type:"portlandFreshlyBakedBread", imageLink : "./Menu/plain naan.png"},
    {itemName : "Tandoori Naan", price : 3.99, Ingredients : "Indian flatbread made in clay oven",type:"portlandFreshlyBakedBread", imageLink : "./Menu/tandoori naan.png"},
    {itemName : "Butter Naan", price : 4.50, Ingredients : "Mixed vegetables sautéed with Indian spices",type:"portlandFreshlyBakedBread", imageLink : "./Menu/butter naan.png"},
    {itemName : "Lacha Paratha", price : 4.99, Ingredients : "Indian flatbread with flaky and crispy layers",type:"portlandFreshlyBakedBread", imageLink : "Menu/Lachha Paratha.png"},
    {itemName : "Onion Kulcha", price : 4.99, Ingredients : "Flatbread stuffed with onion and spices cooked in oven.",type:"portlandFreshlyBakedBread", imageLink : "./Menu/onion kulcha.png"},
    {itemName : "Garlic Naan", price : 4.99, Ingredients : "Naan bread laced with garlic & cilantro with butter",type:"portlandFreshlyBakedBread", imageLink : "./Menu/garlic naan.png"},
    {itemName : "Gobi Paratha", price : 5.99, Ingredients : "Indian flatbread stuffed with onions, spices and cauliflower.",type:"portlandFreshlyBakedBread", imageLink : "./Menu/gobi paratha.png"},
    {itemName : "Chicken Naan", price : 6.99, Ingredients : "Flatbread stuffed with chicken and spices blend.",type:"portlandFreshlyBakedBread", imageLink : "./Menu/chicken naan.png"},
    {itemName : "Cheese Naan", price : 5.99, Ingredients : "Tandoori naan stuffed with mozzarella cheese.",type:"portlandFreshlyBakedBread", imageLink : "./Menu/cheese naan.png"},
    {itemName : "Aloo Paratha", price : 5.99, Ingredients : "Indian flatbread with spiced potatoes.",type:"portlandFreshlyBakedBread", imageLink : "./Menu/aloo paratha.png"},
    {itemName : "Chilli Cheese Naan", price : 6.99, Ingredients : "Flatbread stuffed with green chilli, Indian cheese, onions, and spices",type:"portlandFreshlyBakedBread", imageLink : "./Menu/chilli cheese naan.png"},
    {itemName : "Assorted Bread Basket", price : 12.99, Ingredients : "Variety of Indian flatbreads", imageLink : "./Menu/Assorted Bread Basket.png"},


    // Indian Street Food
    {itemName : "Chilli Paneer", price : 14.99, Ingredients : "Fried paneer cubes tossed in spicy and tangy sauce with onion and bell peppers",type:"portlandIndianStreetFood", imageLink : "./Menu/chili paneer.JPG"},
    {itemName : "Gobi Manchurian", price : 13.99, Ingredients : "Indian flatbread with flaky and crispy layers",type:"portlandIndianStreetFood", imageLink : "./Menu/gobhi manchurian.JPG"},
    {itemName : "Chilli Chicken", price : 15.99, Ingredients : "Fried Chicken tossed in spicy and tangy sauce with onion and bell peppers",type:"portlandIndianStreetFood", imageLink : "./Menu/chilli chicken.png"},
    {itemName : "Choley Bhature", price : 12.99, Ingredients : "Fried flatbread served with chickpea curry",type:"portlandIndianStreetFood", imageLink : "./Menu/Choley Bhature.png"},
    {itemName : "Bollywood Wings", price : 10.99, Ingredients : "",type:"portlandIndianStreetFood", imageLink : "./Menu/bollywood wings.png"},
    {itemName : "Pani Puri", price : 6.99, Ingredients : "Hollow fried ball filled with potato, chickpeas, onions and flavored water",type:"portlandIndianStreetFood", imageLink : "./Menu/pani puri.png"},
    {itemName : "Paappadum", price : 2.50, Ingredients : "Thin and crispy snack",type:"portlandIndianStreetFood", imageLink : "./Menu/Papadum.png"},
    {itemName : "Desi Salad", price : 4.99, Ingredients : "Indian style salad",type:"portlandIndianStreetFood", imageLink : "./Menu/desi salad.png"},
    {itemName : "Mint Chutney", price : 2.50, Ingredients : "Sauce made out of mint",type:"portlandIndianStreetFood", imageLink : "./Menu/mint chutney.png"},
    {itemName : "Tamarind Chutney", price : 2.50, Ingredients : "Sauce made out of tamarind",type:"portlandIndianStreetFood", imageLink : "./Menu/tamarind chutney.png"},
    {itemName : "Mixed Pickle", price : 3.99, Ingredients : "Pickled veggies",type:"portlandIndianStreetFood", imageLink : "./Menu/mixed pickle.png"},
    {itemName : "Raita", price : 4.99, Ingredients : "Yogurt with grated carrots and cucumber",type:"portlandIndianStreetFood", imageLink : "./Menu/raita.png"},


    //Drinks and Desserts Corner
    {itemName : "Butter Milk", price : 3.99, Ingredients : "Made from yogurt and milk",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/mango lassi.JPG"},
    {itemName : "Mango Lassi", price : 4.99, Ingredients : "Made from yogurt, milk, and mango pulp",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/mango lassi.JPG"},
    {itemName : "Sweet Lassi", price : 4.99, Ingredients : "Made from yogurt and sugar",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/sweet lassi.JPG"},
    {itemName : "Lemonade", price : 4.99, Ingredients : "Mango/Strawberry/Watermelon",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/lemonade.JPG"},
    {itemName : "Masala Soda", price : 3.99, Ingredients : "Sparkling water with spices",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/masala soda.JPG"},
    {itemName : "Masala Chai", price : 3.99, Ingredients : "Indian Tea",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/masala chai.png"},
    {itemName : "Rose Milk", price : 4.99, Ingredients : "Milk with rose syrup",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/rose milk.JPG"},
    {itemName : "Salty Lassi", price : 4.49, Ingredients : "Made from yogurt and salt",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/Salty Lassi.png"},
    {itemName : "Gajar Halwa", price : 6.99, Ingredients : "Carrot Pudding",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/gajar halwa.png"},
    {itemName : "Kheer", price : 4.99, Ingredients : "Rice Pudding",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/kheer.png"},
    {itemName : "Gulab Jamun", price : "2pc: 5.99, 4pc: 7.99", Ingredients : "Pastry ball coated with syrup made out of honey and rose water",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/gulab jamun.png"},
    {itemName : "Ras Malai", price : 4.99, Ingredients : "Rasmalai are soft cheese dumplings soaked in a cardamom and saffron milk",type:"portlandDrinksandDessertsCorner", imageLink : "./Menu/Ras Mala.png"},
]