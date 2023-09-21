
const menuData = {
    Pizza: [
        {
            name: "Pizza Casei",
            description: "sos rosii, mozzarella, sunca, bacon, salam, chorizo, ciuperci, masline",
            quantity: "700g",
            price: "27 RON"
        },
        {
            name: "Pizza Margherita",
            description: "sos de rosii, mozzarella, oregano",
            quantity: "550g",
            price: "20 RON"
        },
        {
            name: "Pizza Calzone",
            description: "sos de rosii, salam, sunca, ciuperci, mozzarella, oregano",
            quantity: "650g",
            price: "23 RON"
        },
        {
            name: "Pizza Balkan",
            description: "sos de rosii, mozzarella, oregano, salam, salam afumat, sunca, bacon, ciuperci, ceapa, masilne, pui",
            quantity: "800g",
            price: "33 RON"
        },
        {
            name: "Pizza Capricioasa",
            description: "sos de rosii, sunca, ciuperci, mozzarella, oregano, masline",
            quantity: "650g",
            price: "24 RON"
        },
        {
            name: "Pizza Diavolo",
            description: "sos de rosii, mozzarella, salam afumat/chorizo, ardei iute - jalapenos",
            quantity: "650g",
            price: "25 RON"
        },
        {
            name: "Pizza Funghi",
            description: "sos de rosii, ciuperci, mozzarella, oregano",
            quantity: "650g",
            price: "22 RON"
        },
        {
            name: "Pizza Tonno",
            description: "sos de rosii, ton, ceapa, mozzarella, masline, oregano",
            quantity: "650g",
            price: "26 RON"
        },
        {
            name: "Pizza Vegetariana",
            description: "sos de rosii, mozzarella, ciuperci, ardei gras, masline, rosii, ceapa, porumb",
            quantity: "650g",
            price: "22 RON"
        },
        {
            name: "Pizza cu Pui",
            description: "sos de rosii, piept de pui, mozzarella, ciuperci, masline",
            quantity: "650g",
            price: "26 RON"
        },
        {
            name: "Pizza Salami",
            description: "sos de rosii, mozzarella, salam",
            quantity: "650g",
            price: "23 RON"
        },
        {
            name: "Pizza Hut + Margine Cascaval",
            description: "ingrediente la alegere",
            quantity: "650g",
            price: "32 RON"
        },
        {
            name: "Pizza Prosciutto",
            description: "sos de rosii, mozzarella, sunca",
            quantity: "650g",
            price: "23 RON"
        },
        {
            name: "Pizza Quattro Stagioni",
            description: "4 sectiuni cu ingrediente diferite",
            quantity: "650g",
            price: "25 RON"
        },
        {
            name: "Pizza Quattro Formagio",
            description: "mozzarella, brie, parmesan, gorgonzola",
            quantity: "650g",
            price: "35 RON"
        },
        {
            name: "Pizza Hawaii",
            description: "sos de rosii, sunca, cascaval, ananas",
            quantity: "550g",
            price: "27 RON"
        },
        {
            name: "Focaccia",
            description: "olio extra vergine di Olivia, oregano, sare",
            quantity: "350g",
            price: "7RON"
        },
        {
            name: "Pizza Family",
            description: "sos de rosii, mozzarella, sunca, salam, bacon, chorizo, ciuperci, masline",
            quantity: "1800g",
            price: "95 RON"
        },
        {
            name: "Pizza Nutella",
            description: "nutella, fructe, biscuiti, topping",
            quantity: "350g",
            price: "20 RON"
        }
    ],
    FastFood: [
        {
            name: "Plescavita Sarbeasca",
            description: "carne de vita, ceapa, varza, sosuri, salata verde",
            quantity: "450g",
            price: "18 RON"
        },
        {
            name: "Plescavita cu Mozzarella",
            description: "carne de vita, ceapa, mozzarella, varza, sosuri, salata verde",
            quantity: "450g",
            price: "22 RON"
        },
        {
            name: "Shaorma de Casa",
            description: "piept de pui, cartofi prajiti, salata, varza, rosii, ceapa, sos",
            quantity: "450g",
            price: "20 RON"
        },
        {
            name: "Shaorma la Farfurie",
            description: "piept de pui, ceapa, varza, salata, cartofi prajiti, sosuri, chifla",
            quantity: "450g",
            price: "24 RON"
        },
        {
            name: "Sharoma Vegetariana",
            description: "varza, ceapa, masline, porumb, salata verde, rosii, ciuperci, cartofi",
            quantity: "450g",
            price: "17 RON"
        },
        {
            name: "Kebab",
            description: "piept de pui, varza, salata verde, ceapa, sosuri",
            quantity: "450g",
            price: "17 RON"
        },
        {
            name: "Kebab Pui + Bacon",
            description: "piept de pui, bacon, varza, salata verde, ceapa, sosuri",
            quantity: "450g",
            price: "20 RON"
        },
        {
            name: "Doner Box",
            description: "piept de pui, salata, cartofi prajiti, varza, ceapa, rosii, sosuri",
            quantity: "450g",
            price: "18 RON"
        },
        {
            name: "Burger Clasic",
            description: "carne de vita, salata verde, rosii, castraveti",
            quantity: "400g",
            price: "16 RON"
        },
        {
            name: "Burger Pui",
            description: "carne de pui, cartofi, salata verde, rosii, castraveti",
            quantity: "400g",
            price: "16 RON"
        },
        {
            name: "Burger Balkan",
            description: "carne de vita, salata verde, rosii, castraveti murati, ou, prosciutto, ceapa caramelizata, sos american, mustar, cascaval, cartofi",
            quantity: "500g",
            price: "23 RON"
        },
        {
            name: "Cheese Burger",
            description: "carne de vita, salata verde, rosii, castraveti murati, cascaval, ceapa",
            quantity: "450g",
            price: "20 RON"
        },
        {
            name: "Crispy Burger",
            description: "crispy pui, salata verde, rosii, castraveti",
            quantity: "450g",
            price: "15 RON"
        },
        {
            name: "Box Crispy (3 persoane)",
            description: "crispy de pui mix, cascaval pane, nuggets, cartofi prajiti, focaccia, sos",
            quantity: "",
            price: "110 RON"
        },
        {
            name: "Meniu Crispy",
            description: "crispy de pui, cartofi prajiti, salata, sosuri, chifla",
            quantity: "450g",
            price: "25 RON"
        },
        {
            name: "Piept de Pui la Gratar",
            description: "piept de pui, cartofi prajiti, salata la alegere, chifla",
            quantity: "450g",
            price: "26 RON"
        },
        {
            name: "Platou Mix (3-4 persoane)",
            description: "mix carne (pui, porc, vita), cartofi prajiti, salata verde, sosuri, focaccia",
            quantity: "1200g",
            price: "120 RON"
        },
    ],
    Salate: [
        {
            name: "Salata cu Ton",
            description: "salata verde, ceapa, ton, masline, lamaie, porumb",
            quantity: "400g",
            price: "18 RON"
        },
        {
            name: "Salata cu Piept de Pui",
            description: "salata verde, rosii, masline, ceapa, piept de pui, sos",
            quantity: "450g",
            price: "20 RON"
        },
        {
            name: "Mix Salata",
            description: "salata verde, ceapa, varza, rosii, branza, masline, porumb, castraveti",
            quantity: "400g",
            price: "16 RON"
        },
        {
            name: "Salata Balkan",
            description: "salata verde, varza, rosii, castraveti, ceapa, masline, bacon, prosciutto, lipie",
            quantity: "500g",
            price: "20 RON"
        },
    ],
    Cartofi: [
        {
            name: "Cartofi cu Sos la alegere",
            description: "",
            quantity: "",
            price: "7 RON"
        },
        {
            name: "Cartofi cu Mozzazrella",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Cartofi cu Mozzarella si Bacon",
            description: "",
            quantity: "",
            price: "12 RON"
        },
    ],
    Sandwichuri: [
        {
            name: "Sandwich cu Piept de Pui",
            description: "piept de pui, cascaval, salata, sosuri",
            quantity: "300g",
            price: "14 RON"
        },
        {
            name: "Sandwich cu Sunca",
            description: "sunca, cascaval, salata verde, sosuri",
            quantity: "300g",
            price: "12 RON"
        },
        {
            name: "Sandwich cu Ton",
            description: "ton, salata verde, ceapa, masline, porumb",
            quantity: "300g",
            price: "14 RON"
        },
        {
            name: "Sandwich cu Salam",
            description: "salam, salata verde, sos american, cascaval",
            quantity: "300g",
            price: "12 RON"
        },
        {
            name: "Sandwich Vegetarian",
            description: "legume de sezon",
            quantity: "300g",
            price: "10 RON"
        },
    ],
    Clatite: [
        {
            name: "Clatite cu Nutella + Toping",
            description: "",
            quantity: "",
            price: "11 RON"
        },
        {
            name: "Clatite cu Gem",
            description: "capsuni, afine, prune, piersici",
            quantity: "",
            price: "11 RON"
        },
        {
            name: "Clatite cu Nutella + Banane + Biscuiti + Topping (la alegere)",
            description: "",
            quantity: "",
            price: "15 RON"
        },
        {
            name: "Balkan (Clatita Casei)",
            description: "nutella, banane, biscuiti, topping, fistic, nuca",
            quantity: "",
            price: "18 RON"
        },
        {
            name: "Baklava (2 buc triunghi)",
            description: "",
            quantity: "",
            price: "15 RON"
        },
        {
            name: "Baklava (3 buc roll)",
            description: "",
            quantity: "",
            price: "10 RON"
        },
    ],
    Extra: [
        {
            name: "Ou",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Porumb",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Bacon",
            description: "",
            quantity: "",
            price: "5 RON"
        },
        {
            name: "Mozzarella",
            description: "",
            quantity: "",
            price: "5 RON"
        },
        {
            name: "Sos Curry",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Usturoi",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Sos Iute",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Ketchup",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Maioneza",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Mustar",
            description: "",
            quantity: "",
            price: "2 RON"
        },
        {
            name: "Carne de pui",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Chifla Fresh",
            description: "",
            quantity: "",
            price: "3 RON / Buc"
        },
    ],
    Bauturi: [
        {
            name: "Cafea",
            description: "",
            quantity: "",
            price: "6 RON"
        },
        {
            name: "Latte Macchiato",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Cappuccino",
            description: "",
            quantity: "",
            price: "7 RON"
        },
        {
            name: "Frappe",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Ice Coffee",
            description: "",
            quantity: "",
            price: "7 RON"
        },
        {
            name: "Ciocolata Calda",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Apa",
            description: "",
            quantity: "",
            price: "5 RON"
        },
        {
            name: "Suc 330ml",
            description: "",
            quantity: "",
            price: "6 RON"
        },
        {
            name: "Suc 500ml",
            description: "",
            quantity: "",
            price: "7 RON"
        },
        {
            name: "Ceai",
            description: "",
            quantity: "",
            price: "6 RON"
        },
        {
            name: "Fresh Portocale 100%",
            description: "",
            quantity: "",
            price: "12 RON"
        },
        {
            name: "Fresh Limonada",
            description: "",
            quantity: "",
            price: "9 RON"
        },
        {
            name: "Suc Coacaze",
            description: "",
            quantity: "",
            price: "8 RON"
        },
        {
            name: "Redbul",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Monster",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Burn",
            description: "",
            quantity: "",
            price: "8 RON"
        },
        {
            name: "Hell",
            description: "",
            quantity: "",
            price: "7 RON"
        },
        {
            name: "Skol",
            description: "",
            quantity: "",
            price: "8 RON"
        },
        {
            name: "Tuborg",
            description: "",
            quantity: "",
            price: "8 RON"
        },
        {
            name: "Corona",
            description: "",
            quantity: "",
            price: "12 RON"
        },
        {
            name: "Bucur",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Blanc",
            description: "",
            quantity: "",
            price: "12 RON"
        },
        {
            name: "Carlsberg",
            description: "",
            quantity: "",
            price: "10 RON"
        },
        {
            name: "Bere fara Alcool",
            description: "",
            quantity: "",
            price: "8 RON"
        },
        {
            name: "Bere Draft",
            description: "",
            quantity: "",
            price: "10 RON"
        },
    ]
}

export default menuData