import { count } from "node:console";

/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
 const cafeChargersPerhuor = 8000;
 const timeplayerHours = 7;
 const timeplayerMenutes = 35;

 const minutesPlayer = (timeplayerHours*60)+35;
 const Remaining = minutesPlayer % 60;

 const totalbilled = timeplayerHours*cafeChargersPerhuor+1;
 const discount = 0.15;
 const afterdiscount = timeplayerHours > 5 ? totalbilled *discount : 0;

 console.log("=====================Payment======================")
 console.log("Total playing time in minutes : "+minutesPlayer)
 console.log("Remaining minutes after full hours : "+Remaining)
 console.log("Total billed hours : "+totalbilled)
 console.log("Total payment before discount : "+totalbilled)
 console.log("Discount amount : "+discount)
 console.log("Final payment : "+afterdiscount)
 console.log("===================================================")