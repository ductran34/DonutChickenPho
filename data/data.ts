// ======== Donut image ===========
import glaze from "./donuts/glaze.png"
import eclair from "./donuts/eclair.png"
import cinnamon_roll from "./donuts/cinnamon_roll.png"
import apple_fritter from "./donuts/apple_fritter.png"
import chocolate from "./donuts/chocolate.png"
import twist from "./donuts/twist.png"
import donut_hole from "./donuts/donut_hole.png"
import filling from "./donuts/filling.png"
// ======== Croissant image ===========
import sausage_egg_cheese_croissant from "./donuts/sausage_egg_cheese_croissant.png"
import bacon_egg_cheese_croissant from "./donuts/bacon_egg_cheese_croissant.png"
import ham_egg_cheese_croissant from "./donuts/ham_egg_cheese_croissant.png"
// ======== Biscuit image ===========
import bacon_egg_cheese_biscuit from "./donuts/bacon_egg_cheese_biscuit.png"
import sausage_biscuit from "./donuts/sausage_biscuit.png"
import sausage_egg_cheese_biscuit from "./donuts/sausage_egg_cheese_biscuit.png"
// ======== Kolaches image ===========
import small_kolaches from "./donuts/small_kolaches.png"
import large_kolaches from "./donuts/large_kolaches.png"
import jalapeno_kolaches from "./donuts/jalapeno_kolaches.png"
// ======== Burritos image ===========
import sausage_burritos from "./donuts/sausage_burritos.png"
// ======== PHO - Noodle Soup image ===========
import spring_roll from "./donuts/spring_roll.png"
import fried_egg_roll from "./donuts/fried_egg_roll.png"
import pho from "./pho/pho.png"
import pho3 from "./pho/pho3.png"
import pho4 from "./pho/pho4.png"
// ======== DRINK image ===========
import monster from "./drinks/monster.png"
import coke from "./drinks/coke.png"
import diet_coke from "./drinks/diet_coke.png"
import drpepper from "./drinks/drpepper.png"
import diet_drpepper from "./drinks/diet_drpepper.png"
import gatorade from "./drinks/gatorade.png"
import koolaid from "./drinks/koolaid.png"
import chocolate_nesquik from "./drinks/chocolate_nesquik.png"
import strawberry_nesquik from "./drinks/strawberry_nesquik.png"
import apple_juice from "./drinks/apple_juice.png"
import orange_juice from "./drinks/orange_juice.png"
import berry_juice from "./drinks/berry_juice.png"
import coffee_mocha from "./drinks/coffee_mocha.png"
import coffee_vanila from "./drinks/coffee_vanila.png"
import coffee_caramel from "./drinks/coffee_caramel.png"
import coffee_espresso from "./drinks/coffee_espresso.png"
//==========Chicken============//
// ---------- SIDE -----------
import mash from "./chicken/mash.png"
import coleslaw from "./chicken/coleslaw.png"
import potatologs from "./chicken/potatologs.png"
import mac from "./chicken/mac.png"
import corndog from "./chicken/corndog.png"
import orka from "./chicken/orka.png"
import crispito from "./chicken/crispito.png"
import friedoreo from "./chicken/friedoreo.png";
import fries from "./chicken/fries.png";
import applepie from "./chicken/applepie.png";
import funnel_fries from "./chicken/funnel_fries.png";
import green_beans from "./chicken/green_beans.png";
import honey_rolls from "./chicken/honey_rolls.png";
// ----------- Combo -------------
import chicken from "./chicken/fries.png";
import thigh from "./chicken/thigh.png"
import leg from "./chicken/leg.png";
import wing from "./chicken/wing.png";
import breast from "./chicken/breast.png";
import tender from "./chicken/tender.png";
import fish from "./chicken/fish.png";
import fishcombo from "./chicken/fishcombo.png";
import shrimpcombo from "./chicken/shrimpcombo.png";
import chickencombo from "./chicken/chickencombo.png";
import tendercombo from "./chicken/tendercombo.png";
import lemonpepperwings from "./chicken/lemonpepperwings.png";
import buffalowings from "./chicken/buffalowings.png";
import bbqwings from "./chicken/bbqwings.png";
import { IProduct , ISections} from "../pages/components/Types";

const sections : ISections[] = [
    {
        category : "breakfast",
        sections : [
            "Donuts", "Cakes", "Croissant", "Biscuits", "Kolaches", "Burritos"
        ]
    },
    {
        category : "pho",
        sections : [
            "Appetizers", "Rice Noodle Soup"
        ]
    },
    {
        category : "drink",
        sections : [
            "Bottled Soft Drinks", "Milk & Juice", "Energy Drinks", "Coffee"
        ]
    },
    {
        category : "chicken",
        sections : [
            "Combos", "Feed the Flock", "Wings", "Snacks", "By The Piece", "Sides", "Sweet Treats"
        ]
    }
]

const data : IProduct[] = [
    // ============== DONUTS ============ 
    {
        category: "donut",
        section : "Donuts",
        name: "Glaze",
        image: glaze,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Chocolate",
        image: chocolate,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Filling",
        image: filling,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Eclair",
        image: eclair,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Cinnamon Roll",
        image: cinnamon_roll,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Apple Fritter",
        image: apple_fritter,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Twist",
        image: twist,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Donuts",
        name: "Donut Hole",
        image: donut_hole,
        price : 3.00,
        description: "a"
    } ,
    // ============== CAKE ============ 
    {
        category: "breakfast",
        section : "Cakes",
        name: "Apple",
        image: apple_fritter,
        price : 3.00,
        description: "a"
    } ,
    // ============== Croissant ============ 
    {
        category: "breakfast",
        section : "Croissant",
        name: "Sausage Egg Cheese Croissant",
        image: sausage_egg_cheese_croissant,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Croissant",
        name: "Bacon Egg Cheese Croissant",
        image: bacon_egg_cheese_croissant,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Croissant",
        name: "Ham Egg Cheese Croissant",
        image: ham_egg_cheese_croissant,
        price : 3.00,
        description: "a"
    } ,
    // ============== Biscuits ============ 
    {
        category: "breakfast",
        section : "Biscuits",
        name: "Sausage Egg Cheese Biscuit",
        image: sausage_egg_cheese_biscuit,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Biscuits",
        name: "Bacon Egg Cheese Biscuit",
        image: bacon_egg_cheese_biscuit,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Biscuits",
        name: "Sausage Biscuit",
        image: sausage_biscuit,
        price : 3.00,
        description: "a"
    } ,
    // ============== Kolaches ============ 
    {
        category: "breakfast",
        section : "Kolaches",
        name: "Small Kolaches",
        image: small_kolaches,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Kolaches",
        name: "Regular Kolaches",
        image: large_kolaches,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "breakfast",
        section : "Kolaches",
        name: "Jalapeno Kolaches",
        image: jalapeno_kolaches,
        price : 3.00,
        description: "a"
    } ,
    // ============== Burritos ============ 
    {
        category: "donut",
        section : "Burritos",
        name: "Sausage Burritos",
        image: sausage_burritos,
        price : 3.00,
        description: "a"
    } ,
    // ============== PHO - NOODLE SOUP ============ 
    {
        category: "pho",
        section : "Appetizers",
        name: "Spring Roll",
        image: spring_roll,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "pho",
        section : "Appetizers",
        name: "Fried Egg Roll",
        image: fried_egg_roll,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "pho",
        section : "",
        name: "Special Beef Noodle Soup",
        image: pho,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "pho",
        section : "Rice Noodle Soup",
        name: "Beefball Noodle Soup",
        image: pho3,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "pho",
        section : "Rice Noodle Soup",
        name: "Chicken Noodle Soup",
        image: pho4,
        
        description: "a"
    } ,
    //================COMBO===================//
    {
        category: "chicken",
        section : "Combos",
        name: "Chicken Combo",
        image: chickencombo,
        choice: [
            {
                price : 8.49,
                pieces: 2,
                sides : "Classic side & Honey roll",
            },
            {
                price : 9.49,
                pieces: 3,
                sides : "Classic side & Honey roll",
            },
            {
                price : 10.89,
                pieces: 4,
                sides : "Classic side & Honey roll",
            },
        ],
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Combos",
        name: "Tender Combo",
        choice: [
            {
                price : 7.29,
                pieces: 3,
                sides : "Classic side & Honey roll",
            },
            {
                price : 10.26,
                pieces: 5,
                sides : "Classic side & Honey roll",
            }
        ],
        image: tendercombo,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Combos",
        name: "Fish Combo",
        choice: [
            {
                price : 8.99,
                pieces: 2,
                sides : "Coleslaw & Hushpuppies",
            },
            {
                price : 9.99,
                pieces: 3,
                sides : "Coleslaw & Hushpuppies",
            }
        ],
        image: fishcombo,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Combos",
        name: "Shrimp Combo",
        choice: [
            {
                price : 12.49,
                pieces: 6,
                sides : "Coleslaw & Hushpuppies",
            },
            {
                price : 16.99,
                pieces: 12,
                sides : "Coleslaw & Hushpuppies",
            }
        ],
        image: shrimpcombo,
        description: "a"
    } ,
    //================ FEED THE FLOCK ===================//
    {
        category: "chicken",
        section : "Feed the Flock",
        name: "Feed 4",
        choice: [
            {
                price : 18,
                pieces: 10,
                sides : "No sides",
            },
            {
                price : 18,
                pieces: 8,
                sides : "2 classic sides & 8 rolls",
            }
        ],
        image: chicken,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Feed the Flock",
        name: "Feed 6",
        choice: [
            {
                price : 23,
                pieces: 12,
                sides : "No sides",
            },
            {
                price : 23,
                pieces: 10,
                sides : "2 classic sides & 8 rolls",
            }
        ],
        image: chicken,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Feed the Flock",
        name: "Feed 8",
        choice: [
            {
                price : 28,
                pieces: 18,
                sides : "No sides",
            },
            {
                price : 28,
                pieces: 16,
                sides : "2 classic sides & 8 rolls",
            }
        ],
        image: chicken,
        description: "a"
    } ,
    //==============BY THE PIECE======================//
    {
        category: "chicken",
        section : "By The Piece",
        name: "Thigh",
        image: thigh,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "By The Piece",
        name: "Leg",
        image: leg,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "By The Piece",
        name: "Wing",
        image: wing,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "By The Piece",
        name: "Breast",
        image: breast,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "By The Piece",
        name: "Tender",
        image: tender,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "By The Piece",
        name: "Fish",
        image: fish,
        price : 3.00,
        description: "a"
    } ,
    //==============Wings======================//
    {
        category: "chicken",
        section : "Wings",
        name: "Lemon Pepper",
        
        choice: [
            {
                price : 5.49,
                pieces: 6,
                sides : "No sides",
            },
            {
                price : 9.49,
                pieces: 12,
                sides : "No sides",
            },
            {
                price : 15.49,
                pieces: 18,
                sides : "No sides",
            },
            {
                price : 19.49,
                pieces: 24,
                sides : "No sides",
            },
        ],
        image: lemonpepperwings,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Wings",
        name: "Buffalo",
        image: buffalowings,
        choice: [
            {
                price : 5.49,
                pieces: 6,
                sides : "No sides",
            },
            {
                price : 9.49,
                pieces: 12,
                sides : "No sides",
            },
            {
                price : 15.49,
                pieces: 18,
                sides : "No sides",
            },
            {
                price : 19.49,
                pieces: 24,
                sides : "No sides",
            },
        ],
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Wings",
        name: "BBQ",
        image: bbqwings,
        choice: [
            {
                price : 5.49,
                pieces: 6,
                sides : "No sides",
            },
            {
                price : 9.49,
                pieces: 12,
                sides : "No sides",
            },
            {
                price : 15.49,
                pieces: 18,
                sides : "No sides",
            },
            {
                price : 19.49,
                pieces: 24,
                sides : "No sides",
            },
        ],
        description: "a"
    } ,

    //================SNACKS=======================//
    {
        category: "chicken",
        section : "Snacks",
        name: "Corn dog",
        image: corndog,
        price : 3.00,
        description: "a"
    } ,    
    {
        category: "chicken",
        section : "Snacks",
        name: "Crispito",
        image: crispito,
        price : 3.00,
        description: "a"
    } ,
    //===============SIDES========================//
    {
        category: "chicken",
        section : "Sides",
        name: "Fries",
        image: fries,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sides",
        name: "Coleslaw",
        image: coleslaw,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sides",
        name: "Potato Logs",
        image: potatologs,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sides",
        name: "Mash Potatoes",
        image: mash,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sides",
        name: "Cajun Green Beans",
        image: green_beans,
        price : 3.00,
        description: "a"
    } ,

    {
        category: "chicken",
        section : "Sides",
        name: "Fried Orka",
        image: orka,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sides",
        name: "Mac & Cheese",
        image: mac,
        price : 3.00,
        description: "a"
    } ,


    
    //============Sweet Treats================//
    {
        category: "chicken",
        section : "Sweet Treats",
        name: "Fried Oreo (3ct)",
        image: friedoreo,
        price : 2.29,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sweet Treats",
        name: "Funnel Fries",
        image: funnel_fries,
        price : 1.99,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sweet Treats",
        name: "Fried Apple Pie",
        image: applepie,
        price : 2.69,
        description: "a"
    } ,
    {
        category: "chicken",
        section : "Sweet Treats",
        name: "Honey Rolls (3ct)",
        image: honey_rolls,
        price : 2.29,
        description: "a"
    } ,
    //=====Drinks=======//
    {
        category: "drink",
        section : "Energy Drinks",
        name: "Monster Ultra",
        image: monster,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Energy Drinks",
        name: "Gatorade",
        image: gatorade,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Milk & Juice",
        name: "Chocolate Milk",
        image: chocolate_nesquik,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Milk & Juice",
        name: "Strawberry Milk",
        image: strawberry_nesquik,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Milk & Juice",
        name: "Apple Juice",
        image: apple_juice,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Milk & Juice",
        name: "Orange Juice",
        image: orange_juice,
        price : 3.00,
        description: "a"
    } ,    {
        category: "drink",
        section : "Milk & Juice",
        name: "Berry Juice",
        image: berry_juice,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Milk & Juice",
        name: "Kool Aid Jammers",
        image: koolaid,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Bottled Soft Drinks",
        name: "Coke",
        image: coke,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Bottled Soft Drinks",
        name: "Diet Coke",
        image: diet_coke,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Bottled Soft Drinks",
        name: "Dr Pepper",
        image: drpepper,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Bottled Soft Drinks",
        name: "Diet Dr Pepper",
        image: diet_drpepper,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Coffee",
        name: "Coffee Mocha",
        image: coffee_mocha,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Coffee",
        name: "Coffee Vanila Cone",
        image: coffee_vanila,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Coffee",
        name: "Coffee Caramel",
        image: coffee_caramel,
        price : 3.00,
        description: "a"
    } ,
    {
        category: "drink",
        section : "Coffee",
        name: "Espresso and Cream",
        image: coffee_espresso,
        price : 3.00,
        description: "a"
    } ,
]


export {data,sections}