/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

import { after } from "node:test";

const friedRice: number = 18000;
const drinks: number = 5000;
const discount: number = 10000;
const osis: boolean = true;

const totalprice: number = friedRice*3+drinks*2;
const afterdiscount = totalprice-discount;

console.log("fried rice 3= "+friedRice*3,"+","drinks 2= ",drinks*2);
console.log("total price "+totalprice);
console.log("raka osis "+osis);
console.log("total price after discount osis 10000 = "+afterdiscount);

