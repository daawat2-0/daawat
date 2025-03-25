const vancouverMenu = [
    //Veg Starters
    { itemName: "Vegetable Samosa", price: 5.99, Ingredients: "Crisp fried dumplings filled with mildly spiced potatoes and peas", type: "vancouverVegStarters", imageLink: "./Menu/Vegetarain Samosa.jpg" },
    { itemName: "Paneer Pakora", price: 7.99, Ingredients: "Cottage Cheese deep fried with chickpeas flour batter and delicate spices", type: "vancouverVegStarters", imageLink: "./Menu/paneer pakoda.JPG" },
    { itemName: "Mix Veg Pakora", price: 6.99, Ingredients: "Spinach Cauliflower and potatoes deep fried with chickpeas flour batter and delicate spices", type: "vancouverVegStarters", imageLink: "./Menu/mix veg pakoda.JPG" },
    { itemName: "Aloo Tikki", price: 6.99, Ingredients: "A popular street snack made with potatoes, veggies, and house ground spices, then deep fried", type: "vancouverVegStarters", imageLink: "./Menu/aloo tikki.JPG" },
    { itemName: "Aloo Tikki Chat", price: 8.99, Ingredients: "A lip smacking snack made with Aloo Tikki, garbanzo beans, different chutneys & house made spices", type: "vancouverVegStarters", imageLink: "./Menu/aloo tikki chaat.JPG" },
    { itemName: "Samosa Chaat", price: 8.99, Ingredients: "A lip smacking snack made with Samosas, garbanzo beans, different chutneys & house made spices", type: "vancouverVegStarters", imageLink: "./Menu/samosa chaat.JPG" },
    { itemName: "Onion Bhaaji", price: 6.99, Ingredients: "Onion fritters deep fried and delicately spiced", type: "vancouverVegStarters", imageLink: "./Menu/onion bhaji.JPG" },
    { itemName: "Gobi 65", price: 13.99, Ingredients: "Cauliflower marinated in spices & fried to a crispy perfection, sprinkled with special masala", type: "vancouverVegStarters", imageLink: "./Menu/gobhi 65.JPG" },
    { itemName: "Chilli Paneer", price: 14.99, Ingredients: "Deep Fried Paneer tossed in ginger, garlic, soy sauce and house made spices", type: "vancouverVegStarters", imageLink: "./Menu/chili paneer.JPG" },
    { itemName: "Paani Puri", price: 6.99, Ingredients: "Hollow fried balls filled with potatoes, onion and mint flavoured water", type: "vancouverVegStarters", imageLink: "./Menu/pani puri.png" },
    { itemName: "Gobi Munchurian", price: 13.99, Ingredients: "A marinated cauliflower deep fried & tossed in ginger, garlic, green chillies, vinegar and soy sauce", type: "vancouverVegStarters", imageLink: "./Menu/gobhi manchurian.JPG" },
    { itemName: "Chilli Potatoes", price: 12.99, Ingredients: "Deep Fried Potatoes tossed in ginger, garlic, soy sauce and house made spices", type: "vancouverVegStarters", imageLink: "./Menu/chili patato.JPG" },
    { itemName: "Choley Bhature", price: 16.99, Ingredients: "Fluffy deep-fried flatbread served with flavorful chickpea curry, cooked with aromatic spices and herbs.", type: "vancouverVegStarters", imageLink: "./Menu/choley bhature.png" },
    { itemName: 'Potato Finger fries', price: 4.99, Ingredients: 'Crispy golden potato fries, lightly seasoned with salt and spices for a perfect crunch.', type: "vancouverVegStarters", imageLink: "Menu/potato finger fries.png" },


    //Non- Veg Starters
    { itemName: "Lamb Samosa", price: 8.99, Ingredients: "Crispy fried dumplings stuffed with lamb and vegetables", type: "vancouverNonVegStarters", imageLink: "./Menu/lamb samosa.JPG" },
    { itemName: "Chicken 65", price: 14.99, Ingredients: "Boneless Chicken breast marinated in spices & fried to a crispy perfection sprinkled with special masala", type: "vancouverNonVegStarters", imageLink: "./Menu/chicken 65.JPG" },
    { itemName: "Chilli Chicken", price: 15.99, Ingredients: "Deep Fried marinated chicken in tossed in ginger, garlic, soy sauce and house made spices", type: "vancouverNonVegStarters", imageLink: "./Menu/chilli chicken.png" },
    { itemName: "Fish Pakora", price: 12.99, Ingredients: "Fish coated with chickpeas batter and fried", type: "vancouverNonVegStarters", imageLink: "./Menu/Fish pakora.png" },
    { itemName: "Chicken Wings", price: 12.99, Ingredients: "Bite Sized pieces of boneless chicken that are marinated in a blend of spices, then deep fried until crispy and golden brown", type: "vancouverNonVegStarters", imageLink: "./Menu/chicken wings.png" },
    { itemName: "Chilli Shrimp", price: 16.99, Ingredients: "Deep Fried shrimp in tossed in ginger, garlic, soy sauce and house made spices making it a delicacy", type: "vancouverNonVegStarters", imageLink: "./Menu/chilli shrimp.png" },


    // Tandoori Kababs
    { itemName: "Tandoori Chicken (Full/Half)", price: 19.99 / 12.99, Ingredients: "Chicken is marinated in tandoori masala & cooked inside the tandoor", type: "vancouverTandooriKababs", imageLink: "./Menu/Tandoori chicken.png" },
    { itemName: "Chicken Seekh Kabab", price: 14.99, Ingredients: "Chicken seasoned with ginger, garlic, and house blend spices and baked inside the tandoor", type: "vancouverTandooriKababs", imageLink: "./Menu/chicken seekh kabab.png" },
    { itemName: "Lamb Seekh Kabab", price: 15.99, Ingredients: "Ground Lamb seasoned with ginger, garlic and house blend spices and baked inside the tandoor", type: "vancouverTandooriKababs", imageLink: "./Menu/Lamb Seekh Kabab.png" },
    { itemName: "Lamb Boti Kabab", price: 16.99, Ingredients: "Lamb marinated in yogurt, ginger, garlic and secret house spices, Lamb is cooked inside the tandoor to perfection & served with mint & tamarind chutney", type: "vancouverTandooriKababs", imageLink: "./Menu/lamb boti kabab.png" },
    { itemName: "Tandoori Fish", price: 14.99, Ingredients: "Marinated fish cooked inside the tandoor to perfection", type: "vancouverTandooriKababs", imageLink: "./Menu/tandoori fish.png" },
    { itemName: "Chicken Malai Kabab", price: 14.99, Ingredients: "Marinated in ginger, garlic, yogurt, cream and cooked inside the tandoor to perfection & served with mint & tamarind chutney", type: "vancouverTandooriKababs", imageLink: "./Menu/chicken malai kabab.png" },
    { itemName: "Haryali Kabab", price: 17.99, Ingredients: "Chicken marinated in ginger, garlic, cilantro, mint green chilli, and cooked inside the tandoor served with mint & tamarind chutney", type: "vancouverTandooriKababs", imageLink: "./Menu/Haryali Kabab.png" },
    { itemName: "Paneer Tikka Kabab", price: 17.99, Ingredients: "Paneer marinated cooked inside the tandoor to perfection & served with mint & tamarind chutney", type: "vancouverTandooriKababs", imageLink: "./Menu/Paneer Tikka Kabab.png" },


    //Vegetarian Curries
    { itemName: "Aloo Matar", price: 17.99, Ingredients: "Peas & potatoes cooked in an onion tomato base with special house-blended spices", type: "vancouverVegetarianCurries", imageLink: "./Menu/aloo matar.png" },
    { itemName: "Palak Aloo", price: 17.99, Ingredients: "Spinach and Potatoes cooked in onion tomatoes & spices.", type: "vancouverVegetarianCurries", imageLink: "./Menu/Palak Aloo.png" },
    { itemName: "Channa Saag", price: 18.99, Ingredients: "Garbanzo beans cooked with tempered spinach, onions & tomatoes", type: "vancouverVegetarianCurries", imageLink: "./Menu/chana saag.png" },
    { itemName: "Mix Veg Kofta", price: 1.99, Ingredients: "Medley of minced vegetable dumplings tossed in garlic, ginger, onion", type: "vancouverVegetarianCurries", imageLink: "./Menu/Mix Veg Kofta.jpg" },
    { itemName: "Deewani Handi", price: 19.99, Ingredients: "A classic authentic royal vegetables preparation cooked in a handi, the vegetables are tossed together with ginger, garlic, and masala powders.", type: "vancouverVegetarianCurries", imageLink: "./Menu/Deewani Handi.jpg" },
    { itemName: "Matar Paneer", price: 18.99, Ingredients: "Peas and Paneer cooked in an onion tomato base with special blend spices for a smooth creamy dish", type: "vancouverVegetarianCurries", imageLink: "./Menu/matar panner.PNG" },
    { itemName: "Channa Masala", price: 18.99, Ingredients: "Garbanzo beans cooked with onion, tomatoes, ginger, garlic and spices", type: "vancouverVegetarianCurries", imageLink: "./Menu/Chana masala.JPG" },
    { itemName: "Palak Paneer", price: 18.99, Ingredients: "Spinach, Paneer cooked in a base seasoned with garlic and garam masala", type: "vancouverVegetarianCurries", imageLink: "./Menu/Palak paneer.JPG" },
    { itemName: "Aloo Gobhi", price: 17.99, Ingredients: "Potatoes and Cauliflower cooked with onion, tomatoes, ginger, garlic and tempering", type: "vancouverVegetarianCurries", imageLink: "./Menu/Aloo Gobhi.JPG" },
    { itemName: "Shahi Paneer", price: 18.99, Ingredients: "Paneer cooked in an onion base with yogurt, cream, cashews, almonds & special house-blended spices", type: "vancouverVegetarianCurries", imageLink: "./Menu/Shahi paneer.JPG" },
    { itemName: "Malai Kofta", price: 19.99, Ingredients: "Potatoes and cheese fried balls served in rich gravy", type: "vancouverVegetarianCurries", imageLink: "./Menu/Malai kofta.JPG" },
    { itemName: "Dal Makhani", price: 18.99, Ingredients: "Signature Dal Makhani: Slow cooked black lentils and kidney beans, Infused with aromatic spices, finished with butter and cream. Served with Rice, an exquisite vegetarian delight", type: "vancouverVegetarianCurries", imageLink: "./Menu/Dal makhani.JPG" },
    { itemName: "Dal Fry", price: 17.99, Ingredients: "Yellow/Red Lentils cooked with spices and tempered with exotic spices", type: "vancouverVegetarianCurries", imageLink: "./Menu/Dal fry.JPG" },
    { itemName: "Mix Vegetable Curry", price: 17.99, Ingredients: "An assorted medley of veggies cooked with mild spices in an onion & tomato base", type: "vancouverVegetarianCurries", imageLink: "./Menu/Mix veg curry.JPG" },
    { itemName: "Bhindi Masala", price: 17.99, Ingredients: "Delight in our Bhindi Masala- sauteed Okra with aromatic spices, tangy tomatoes, crystalised onions and delicate hints of ginger and garlic. Served with fragrant basmati rice, its a true taste of India.", type: "vancouverVegetarianCurries", imageLink: "./Menu/bhindi.JPG" },
    { itemName: "Navratana Korma", price: 18.99, Ingredients: "9 ingredients including an assorted medley of veggies cooked to a smooth cream based dish. Very mild & a little sweet", type: "vancouverVegetarianCurries", imageLink: "./Menu/navratan korma.JPG" },
    { itemName: "Kadhai Paneer", price: 19.99, Ingredients: "Cheese cubes cooked in a gravy with onion, tomatoes and bell pepper garnished with fresh ginger", type: "vancouverVegetarianCurries", imageLink: "./Menu/kadhai paneer.JPG" },
    { itemName: "Methi Matar Mushroom", price: 17.99, Ingredients: "Mushroom and peas cooked in a buttery spinach sauce", type: "vancouverVegetarianCurries", imageLink: "./Menu/methi matar mushroom.JPG" },
    { itemName: "Vegetable Madras Curry", price: 19.39, Ingredients: "Medley of mixed vegetables cooked with coconut, onion, tomato, ginger, garlic", type: "vancouverVegetarianCurries", imageLink: "./Menu/Vegetable Madras Curry.png" },
    { itemName: "Paneer Tikka Masala", price: 19.99, Ingredients: "Tandoor baked paneer cooked with onion, tomato, bell peppers & cream", type: "vancouverVegetarianCurries", imageLink: "./Menu/paneer tikka masala.JPG" },
    { itemName: "Baigan Bharta", price: 18.99, Ingredients: "Eggplant roasted inside the tandoor & cooked with spices, peppers, onions and peas", type: "vancouverVegetarianCurries", imageLink: "./Menu/baingan bharta.JPG" },
    { itemName: "Butter Paneer", price: 18.99, Ingredients: "Cottage cheese cooked in a smooth butter silky tomato sauce. Punjabi dish", type: "vancouverVegetarianCurries", imageLink: "./Menu/butter paneer.JPG" },


    //Non- Veg Curries
    { itemName: "Butter Chicken", price: 18.99, Ingredients: "Chicken cooked inside the tandoor, then simmered in a silky Butter, Creamy Tomato base. Cream & yogurt makes this dish very rich in flavor.", type: "vancouverNonVegCurries", imageLink: "./Menu/Butter chicken.png" },
    { itemName: "Chicken Tikka Masala", price: 18.99, Ingredients: "Marinated chicken is cooked with onion, tomato, bell peppers in a creamy sauce.", type: "vancouverNonVegCurries", imageLink: "./Menu/chicken tikka masala.png" },
    { itemName: "Kadhai Chicken", price: 18.99, Ingredients: "Chicken cooked in a gravy with onion, tomatoes and bell pepper garnished with fresh ginger.", type: "vancouverNonVegCurries", imageLink: "./Menu/Kadhai Chicken.png" },
    { itemName: "Chicken Vindaloo", price: 18.99, Ingredients: "Savor the bold flavors of India with our Chicken Vindaloo. Tender pieces of premium chicken cooked to perfection with traditional spices and fiery chilli peppers, ginger, garlic and fennel seeds.", type: "vancouverNonVegCurries", imageLink: "./Menu/chicken vindaloo.png" },
    { itemName: "Kadhai Goat", price: 21.99, Ingredients: "Goat cooked in a gravy with onion, tomato and bell pepper garnished with fresh ginger.", type: "vancouverNonVegCurries", imageLink: "./Menu/kadhai gosht.png" },
    { itemName: "Goat Saag", price: 21.99, Ingredients: "Classic Indian dish where the Goat is cooked with spinach. Nutrient-rich, low fat and low calorie meal.", type: "vancouverNonVegCurries", imageLink: "./Menu/Goat Saag.png" },
    { itemName: "Chicken Korma", price: 20.99, Ingredients: "Chicken mildly spiced with cream & yogurt. Very mild dish with a smoothy flavour.", type: "vancouverNonVegCurries", imageLink: "./Menu/Chicken Korma.png" },
    { itemName: "Lamb Korma", price: 18.99, Ingredients: "Lamb is mildly spiced with cream & yogurt. Very mild dish with a smooth flavour.", type: "vancouverNonVegCurries", imageLink: "./Menu/lamb korma.png" },
    { itemName: "Mango Chicken", price: 19.99, Ingredients: "A delightful blend of tender chicken, aromatic spices and ripe mangoes, creating a mouthwatering dish that balances sweet and savoury flavours in every bite.", type: "vancouverNonVegCurries", imageLink: "./Menu/mango chicken.png" },
    { itemName: "Chicken Curry", price: 19.99, Ingredients: "Traditional curry cooked with an exotic blend of flavourful spices, onions & tomatoes.", type: "vancouverNonVegCurries", imageLink: "./Menu/chicken curry.png" },
    { itemName: "Chicken Saag", price: 19.99, Ingredients: "Classic Indian Dish where the chicken is cooked with spinach. Nutrient rich, low fat & low calorie meal.", type: "vancouverNonVegCurries", imageLink: "./Menu/chicken saag.png" },
    { itemName: "Lamb Saag", price: 19.99, Ingredients: "Classic Indian dish where lamb is cooked with spinach. Nutrient rich, low fat & low-calorie meal.", type: "vancouverNonVegCurries", imageLink: "./Menu/Lamb Saag.png" },
    { itemName: "Lamb Vindaloo", price: 20.99, Ingredients: "Savor the bold flavours of India with our Lamb Vindaloo. Tender pieces of premium lamb cooked to perfection with traditional spices and fiery chilli peppers, ginger, garlic and fennel seeds, creating an unforgettable culinary experience.", type: "vancouverNonVegCurries", imageLink: "./Menu/Lamb Vindaloo.png" },
    { itemName: "Goat Vindaloo", price: 21.55, Ingredients: "Savor the bold flavours of India with our Goat Vindaloo. Tender pieces of premium goat cooked to perfection with traditional spices and fiery chilli peppers, ginger, garlic and fennel seeds, creating an unforgettable culinary experience.", type: "vancouverNonVegCurries", imageLink: "./Menu/Goat Vindaloo.png" },
    { itemName: "Nilgiri Chicken", price: 20.99, Ingredients: "Coconut, mint and coriander leaves which infuses the curry sauce with a mild sweet herbie flavor.", type: "vancouverNonVegCurries", imageLink: "./Menu/Nilgiri Chicken.png" },
    { itemName: "Malabar Chicken", price: 20.99, Ingredients: "The flavour of south Indian cuisine. Coconut based curry with tempered spices.", type: "vancouverNonVegCurries", imageLink: "./Menu/Malabar Chicken.png" },
    { itemName: "Shahi Chicken Curry", price: 20.99, Ingredients: "Chicken is cooking in an onion base with Tomato Sauce, cream, cashews, almonds & special house-blended spices.", type: "vancouverNonVegCurries", imageLink: "./Menu/Shahi Chicken Curry.png" },
    { itemName: "Madras Curry Chicken", price: 19.99, Ingredients: "A spicy curry from the south of India where chicken is cooked in tempered spices.", type: "vancouverNonVegCurries", imageLink: "./Menu/madras curry chicken.png" },
    { itemName: "Madras Curry Goat", price: 21.99, Ingredients: "Goat curry with a delicious flavor of Madras curry, tamarind and coconut milk. Tempered with cumin and mustard seeds.", type: "vancouverNonVegCurries", imageLink: "./Menu/madras curry goat.png" },
    { itemName: "Madras Curry Lamb", price: 20.99, Ingredients: "Lamb curry with a delicious flavour of Madras curry, tamarind, and coconut milk. Tempered with cumin and mustard seeds.", type: "vancouverNonVegCurries", imageLink: "./Menu/madras curry lamb.png" },
    { itemName: "Lamb Masala", price: 20.99, Ingredients: "Traditional curry cooked with an exotic blend of spices, onions & tomatoes. Flavourful.", type: "vancouverNonVegCurries", imageLink: "./Menu/lamb masala.png" },
    { itemName: "Chicken Changezi", price: 20.99, Ingredients: "Popular chicken delicacy in the said to have its origin with the mongolian ruler Ghenghis Khan. Chicken cooked in onion, tomato, ginger, garlic, cashews, cream and a hint of lemon.", type: "vancouverNonVegCurries", imageLink: "./Menu/chicken changezi.png" },


    //Biryani corner
    {itemName: "Veggie Biryani", price: 16.99,  type :"vancouverBiryani", Ingredients: "Influenced by the Deev-n traditions, this biryani is made with mixed vegetables, parboiled rice, and aromatic spices, making it very flavorful.",imageLink:"./Menu/veggie biryani.png" },
    {itemName: "Chicken Biryani",price: 18.99, type :"vancouverBiryani", Ingredients:"Influenced by the Nawabs of Awadh, this royal dish is made with spices and herbs, making it very aromatic and delicious.",imageLink:"./Menu/chicken biryani.png" },
    {itemName: "Lamb Biryani",price: 20.99, type :"vancouverBiryani", Ingredients:"Lamb biryani is delicious in its own right. Lamb is layered together with ginger, garlic, turmeric, red chili, cumin, coriander powder, lots of onion, and tomato.",imageLink:"./Menu/lamb biryani.png" },
    {itemName: "Shrimp Biryani",price: 20.99, type :"vancouverBiryani", Ingredients:"Shrimp biryani is delicious in its own right. Shrimp is layered together with ginger, garlic, turmeric, red chili, cumin, coriander powder, lots of onion, and tomato.",imageLink:"./Menu/shrimp biryani.png" },
    {itemName: "Goat Biryani",price: 20.99, type :"vancouverBiryani", Ingredients:"Goat biryani is delicious in its own right. Goat is layered together with ginger, garlic, turmeric, red chili, cumin, coriander powder, lots of onion, and tomato.",imageLink:"./Menu/goat biryani.png" },
    {itemName: "Mix Biryani",price: 24.99, type :"vancouverBiryani", Ingredients:"An enticing blend of diverse proteins harmoniously infused with biryani masala, yogurt, mint, cashews, raisins, fried onions, and cilantro, expertly cooked under gentle steam to create a delectable culinary experience.",imageLink:"./Menu/Mix Biryani.png" },


    //Chef's Special
    { itemName: "Tandoori Mix Grill", price: 26.99, Ingredients: "Marinated in ginger, garlic, cilantro, tandoori masala and other house spices, chicken shrimp, lamb are cooked/grilled inside tandoor to delicious perfection", type: "vancouverChefSpecial", imageLink: "./Menu/Tandoori Mix Grill.png" },
    { itemName: "Tandoori Shrimp", price: 16.99, Ingredients: "Marinated Shrimp cooked inside the tandoor to perfection", type: "vancouverChefSpecial", imageLink: "./Menu/tandoori shrimp.png" },
    { itemName: "Lamb Kali Mirch", price: 22.99, Ingredients: "A popular north Indian dish with black pepper, onion, tomatoes, cashew, cream and yogurt", type: "vancouverChefSpecial", imageLink: "./Menu/lamb kali mirch.png" },
    { itemName: "Lamb Rogan Josh", price: 22.99, Ingredients: "Rogan Josh pulls passion from its whole and powdered spices, but not a lot of heat. Rogan josh is a type of Indian curry distinguished by its thick flavourful red sauce and tender meat which has been slow cooked in oil, yogourt and a mix of different spices", type: "vancouverChefSpecial", imageLink: "./Menu/Lamb Rogan Josh.png" },
    { itemName: "Lamb Shank", price: 33.99, Ingredients: "Tender slow-cooked lamb shank, simmered in a rich, flavorful gravy with aromatic spices.", type: "vancouverChefSpecial", imageLink: "./Menu/Lamb Shank.png" },
    { itemName: "Peshawari Naan", price: 8.99, Ingredients: "Tandoor baked Indian bread stuffed with cashews, raisins, & almond seasoning", type: "vancouverChefSpecial", imageLink: "./Menu/Peshawari Naan.png" },
    { itemName: "Coconut Naan", price: 6.99, Ingredients: "Stuffed with coconut powder and a hint of sugar then baked inside the tandoor and glazed with butter", type: "vancouverChefSpecial", imageLink: "./Menu/Coconut Naan.png" },


    //Seafood
    { itemName: "Fish Tikka Masala", price: 20.99, Ingredients: "A signature dish of curry express. Marinated Mahi Mahi fish is cooked with onions, tomato, bell peppers, cashews, and cream", type: "vancouverSeafood", imageLink: "./Menu/fish tikka masala.png" },
    { itemName: "Shrimp Makhani", price: 21.99, Ingredients: "Shrimp is simmered in a tomato base. Cream & yogurt makes this dish extra ordinarily rich in flavour", type: "vancouverSeafood", imageLink: "./Menu/Shrimp Makhani.png" },
    { itemName: "Shrimp Tikka Masala", price: 21.99, Ingredients: "A signature dish of curry express where marinated shrimp is cooked with onion, tomato, bell peppers, cashews, and cream", type: "vancouverSeafood", imageLink: "./Menu/shrimp tikka masala.png" },
    { itemName: "South Indian Fish", price: 20.99, Ingredients: "Flavours of South Indian Cuisine, Mahi Mahi is cooked with tempered spices, ginger, garlic, and coconut curry", type: "vancouverSeafood", imageLink: "./Menu/South Indian Fish.png" },
    { itemName: "Shrimp Curry", price: 21.99, Ingredients: "Traditional curry cooked with an exotic blend of spices, onions & tomatoes. Flavourful", type: "vancouverSeafood", imageLink: "./Menu/shrimp curry.png" },
    { itemName: "Madras Curry Fish", price: 20.99, Ingredients: "Fish curry with a delicious flavour of Madras Curry Powder, Tamarind, and coconut milk. Tempered with cumin and mustard seeds", type: "vancouverSeafood", imageLink: "./Menu/madras curry fish.png" },
    { itemName: "Madras Curry Shrimp", price: 21.99, Ingredients: "Shrimps curry with a delicious flavour of Madras Curry Powder, tamarind, and coconut milk. Tempered with cumin and mustard seeds", type: "vancouverSeafood", imageLink: "./Menu/madras curry shrimp.png" },


    //Breads
    { itemName: "Plain Naan", price: 3.50, Ingredients: "Tandoor baked Indian bread", type: "vancouverBreads", imageLink: "./Menu/plain naan.png" },
    { itemName: "Butter Naan", price: 4.50, Ingredients: "Tandoor baked Indian bread glazed with butter", type: "vancouverBreads", imageLink: "./Menu/butter naan.png" },
    { itemName: "Lacha Paratha", price: 4.99, Ingredients: "Indian flatbread with flaky and crispy layers", type: "vancouverBreads", imageLink: "./Menu/Lachha Paratha.png" },
    { itemName: "Gobi Paratha", price: 5.99, Ingredients: "Stuffed with cauliflower and baked inside the tandoor", type: "vancouverBreads", imageLink: "./Menu/gobi paratha.png" },
    { itemName: "Aloo Paratha", price: 5.99, Ingredients: "Stuffed with potatoes and baked insidethe tandoor", type: "vancouverBreads", imageLink: "./Menu/aloo paratha.png" },
    { itemName: "Onion Kulcha", price: 4.99, Ingredients: "Stuffed with onions and green chillies baked inside the tandoor", type: "vancouverBreads", imageLink: "./Menu/onion kulcha.png" },
    { itemName: "Chicken Naan", price: 6.99, Ingredients: "Stuffed with minced chicken and baked inside the tandoor", type: "vancouverBreads", imageLink: "./Menu/chicken naan.png" },
    { itemName: "Chilli Cheese Naan", price: 6.99, Ingredients: "Tandoor baked Indian bread with cheese and green spicy seasoning", type: "vancouverBreads", imageLink: "./Menu/chilli cheese naan.png" },
    { itemName: "Assorted Bread Basket", price: 15.99, Ingredients: "Basket include 4 different Naan: Tandoori, garlic, cheese and choice of the day", type: "vancouverBreads", imageLink: "./Menu/Assorted Bread Basket.png" },
    { itemName: "Garlic Naan", price: 4.49, Ingredients: "Tandoor baked Indian bread with our special garlic", type: "vancouverBreads", imageLink: "./Menu/garlic naan.png" },
    { itemName: "Garlic Cheese Naan", price: 4.99, Ingredients: "Tandoor baked Indian bread with our special garlic", type: "vancouverBreads", imageLink: "./Menu/garlic cheese naan.png" },
    { itemName: "Chilli Garlic Naan", price: 5.99, Ingredients: "Tandoor Indian Bread with our special garlic and spicy seasoning", type: "vancouverBreads", imageLink: "./Menu/Chilli Garlic Naan.png" },
    { itemName: "Tandoori Roti", price: 3.99, Ingredients: "Wheat flour Indian bread baked inside the tandoor", type: "vancouverBreads", imageLink: "./Menu/tandoori roti.png" },
    { itemName: "Paneer Paratha", price: 6.99, Ingredients: "Stuffed with paneer and baked inside the tandoor", type: "vancouverBreads", imageLink: "./Menu/paneer paratha.png" },
    { itemName: "Spinach Cheese Naan", price: 6.99, Ingredients: "Stuffed with cheese and spinach seasoned with Indian spices", type: "vancouverBreads", imageLink: "./Menu/spinach cheese naan.png" },


    //Sides
    { itemName: "Paappadum", price: 2.50, Ingredients: "A crispy wafer made with lentils and sun dried.", type: "vancouverSides", imageLink: "./Menu/Papadum.png" },
    { itemName: "Desi Salad", price: 6.99, Ingredients: "Consists of cucumber, onion, carrots, tomato, and cabbage topped", type: "vancouverSides", imageLink: "./Menu/desi salad.png" },
    { itemName: "Kachumber Salad", price: 9.99, Ingredients: "Vegetables topped served on crispy wafer made with lentils topped with salt, pepper, and lemon juice", type: "vancouverSides", imageLink: "./Menu/kachumber salad.png" },
    { itemName: "Mint Chutney", price: 2.50, Ingredients: "Mint/Cilantro chutney is a perfect dipping sauce", type: "vancouverSides", imageLink: "./Menu/mint chutney.png" },
    { itemName: "Imli Chutney", price: 2.50, Ingredients: "Imli is Tamarind. Its an exotic sweet & sour dipping sauce.", type: "vancouverSides", imageLink: "./Menu/imli chutney.png" },
    { itemName: "Mango Chutney", price: 3.99, Ingredients: "Sweet and tangy mango chutney, made with ripe mangoes, spices, and a hint of chili.", type: "vancouverSides", imageLink: "./Menu/mango chutney.png" },
    { itemName: "Mixed Pickle", price: 3.99, Ingredients: "A medley of vegetables seasoned and pickled in spices", type: "vancouverSides", imageLink: "./Menu/mixed pickle.png" },
    { itemName: "Raita", price: 4.99, Ingredients: "Cool creamy condiment, rich in flavour made with yogurt. Also helps in neutralizing the spices", type: "vancouverSides", imageLink: "./Menu/raita.png" },
    { itemName: "Thecha", price: 3.99, Ingredients: "Our special very spicy dipping sauce. Add with kababs or any entree.", type: "vancouverSides", imageLink: "./Menu/Thecha.png" },
    { itemName: "Shahi Pulao", price: 6.99, Ingredients: "Basmati rice infused with indian spices and topped with cashews and raisins.", type: "vancouverSides", imageLink: "./Menu/shahi pulao.png" },
    { itemName: "Lemon Rice", price: 4.99, Ingredients: "Basmati rice cooked with lemon and mustard seeds.", type: "vancouverSides", imageLink: "./Menu/lemon rice.png" },
    { itemName: "Extra Rice", price: 3.99, Ingredients: "Extra plain rice", type: "vancouverSides", imageLink: "./Menu/extra rice.png" },


    //Drinks
    { itemName: "Mango Lassi", price: 6.99, Ingredients: "Traditional Indian drink/smoothie made with mango and yogurt. (House Made yogurt)", type: "vancouverDrinks", imageLink: "./Menu/mango lassi.JPG" },
    { itemName: "Sweet Lassi", price: 5.99, Ingredients: "Traditional Indian drink/smoothie made with yogurt. (House Made yogurt)", type: "vancouverDrinks", imageLink: "./Menu/sweet lassi.JPG" },
    { itemName: "Salty Lassi", price: 5.99, Ingredients: "Traditional Indian drink/smoothie made with house spices and yogurt. (House Made yogurt)", type: "vancouverDrinks", imageLink: "./Menu/salty lassi.JPG" },
    { itemName: "Rose Lassi", price: 5.99, Ingredients: "Traditional Indian drink/smoothie made with rose and yogurt. (House Made yogurt)", type: "vancouverDrinks", imageLink: "./Menu/rose lassi.JPG" },
    { itemName: "Lemonade", price: 4.99, Ingredients: "Mango, Strawberry, Watermelon", type: "vancouverDrinks", imageLink: "./Menu/lemonade.JPG" },
    { itemName: "Masala soda", price: 4.99, Ingredients: "Soda with indian spices, mint & lemon", type: "vancouverDrinks", imageLink: "./Menu/masala soda.JPG" },
    { itemName: "Masala Chai", price: 4.99, Ingredients: "Traditional Indian Drink", type: "vancouverDrinks", imageLink: "./Menu/masala chai.JPG" },
    { itemName: "Rose Milk", price: 5.99, Ingredients: "Traditional Indian drink/smoothie made with Rose and milk.", type: "vancouverDrinks", imageLink: "./Menu/rose milk.JPG" },
    { itemName: "All bottled Water, Pepsi Products.", price: 2.99, Ingredients: "", type: "vancouverDrinks", imageLink: "./Menu/All bottled Water, Pepsi Products..png" },


    //Desserts
    { itemName: "Gajar Halwa", price: 6.99, Ingredients: "Carrot Pudding", type: "vancouverDesserts", imageLink: "./Menu/gajar halwa.png" },
    { itemName: "Kheer", price: 5.99, Ingredients: "Rice pudding made with reduction and dry fruits. Traditional Indian Dessert", type: "vancouverDesserts", imageLink: "./Menu/kheer.png" },
    { itemName: "Gulab Jamun (4pc)", price: 7.99, Ingredients: "Fried milk dumplings soaked in rose flavoured sugar syrup", type: "vancouverDesserts", imageLink: "./Menu/gulab jamun.png" },
    { itemName: "Ras Malai", price: 5.99, Ingredients: "Soft cheese dumplings soaked in a cardamom and saffron milk", type: "vancouverDesserts", imageLink: "./Menu/Ras Mala.png" },
]