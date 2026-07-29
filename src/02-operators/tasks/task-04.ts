/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

type Product = {
    productName: string;
    price: number;
    quantity: number;
};

const product1: Product = {
    productName: "Mechanical Keyboard",
    price: 850000,
    quantity: 1,
};

const product2: Product = {
    productName: "Wireless Mouse",
    price: 275000,
    quantity: 2,
};

const product3: Product = {
    productName: "Mouse Pad",
    price: 120000,
    quantity: 1,
};


const isPremium = true;


const shippingCost = isPremium ? 0 : 20000;


const subtotal =
    (product1.price * product1.quantity) +
    (product2.price * product2.quantity) +
    (product3.price * product3.quantity);


let totalItems = 0;

for (let i = 0; i < product1.quantity; i++) {
    totalItems++;
}

for (let i = 0; i < product2.quantity; i++) {
    totalItems++;
}

for (let i = 0; i < product3.quantity; i++) {
    totalItems++;
}


let discount = 0;

if (subtotal > 1000000) {
    discount = subtotal * 0.10;
}


const finalPayment = subtotal - discount + shippingCost;


console.log("Subtotal         : Rp" + subtotal);
console.log("Total Item       :", totalItems);
console.log("Diskon           : Rp" + discount);
console.log("Ongkir           : Rp" + shippingCost);
console.log("Total Pembayaran : Rp" + finalPayment);

