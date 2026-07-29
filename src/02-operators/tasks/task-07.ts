/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

import { after } from "node:test";

const RoomPriceperNight = 650000;
const NightsStayed = 4;
const ServiceCharge = 120000;
const tax = 0.11;
const vip = true;

const discount = 0.12
const totalpricePernight = RoomPriceperNight*NightsStayed;

const afterdiscount = vip == true ? totalpricePernight * (1 - discount) : totalpricePernight;
const taxpayment = (afterdiscount + ServiceCharge) * tax;
const finalPayment = afterdiscount + ServiceCharge + taxpayment;


const freeBreakfast = NightsStayed >= 3 || vip == true ? "free breakfast" : "Nothing";

console.log("==============Payment==========");
console.log("Room subtotal : "+totalpricePernight);
console.log("Discount : "+afterdiscount);
console.log("Tax : "+taxpayment);
console.log("final Payment : "+finalPayment);
console.log("Whether the guest is eligible for free breakfast : "+freeBreakfast);
console.log("================================");


