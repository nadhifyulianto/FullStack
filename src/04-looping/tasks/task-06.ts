/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let total = 0
let outStock = 0
let lowStock = 0
let safeStock = 0

for (let i = 0; i < stocks.length; i++) {
    total = stocks[i];

    if (stocks[i] >= 10) {
    safeStock++
    } else if (stocks[i] >= 1 && stocks[i]< 10){
    lowStock++
    } else {
    outStock++
    }   
} const average = total / stocks.length

    console.log("Number of Out of Stock products : "+outStock)
    console.log("Number of Low Stock products : "+lowStock)
    console.log("Number of Safe Stock products : "+safeStock)
    console.log("Total inventory : "+total)
    console.log("Average stock quantity : "+average)