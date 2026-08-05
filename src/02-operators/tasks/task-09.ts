/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const Keyboard = 850000
const quantity1 = 1

const mouse = 275000
const quantity2 = 2

const monitor = 420000
const quantity3 = 1

const voucer = 100000
const member = true
const tax = 0.11

const totalprice = Keyboard*quantity1+mouse*quantity2+monitor*quantity3
const discount = member == true ? (totalprice * (1 - 0.10)) - voucer : totalprice - voucer;

const ppn = discount*tax

const freeOngkir = member == true || discount > 1500000 ? "Free Ongkir" : "Nothing";
const poin = Math.floor(discount / 50000);

console.log("=========Struk============");
console.log("Product subtotal : "+ totalprice);
console.log("Membership discount : 10%");
console.log("Voucher deduction : "+ voucer);
console.log("Payment before tax : "+discount);
console.log("VAT : "+tax);
console.log("Final payment : "+ppn);
console.log("reward Points : "+poin);
console.log("Free shipping eligibility : "+freeOngkir);
console.log("============================================");
