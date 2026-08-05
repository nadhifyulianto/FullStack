/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let ordersreadytoship = 0
let unpaidOrders = 0 
let orderswaitingforstock = 0
let readyOrdersIDs = []

for (let i = 0; i < orders.length; i++) {
  if (orders[i].paid = true && orders[i].stockAvailable == true) {
  ordersreadytoship++
  readyOrdersIDs.push(orders[i].id);
  } else if (orders[i].paid === false ){
  unpaidOrders++
  } else if (orders[i].stockAvailable === false) {
  orderswaitingforstock++
  }
} console.log("Number of orders ready to ship : "+ordersreadytoship)
  console.log("Number of unpaid orders : "+unpaidOrders)
  console.log("Number of orders waiting for stock : "+orderswaitingforstock)
  console.log("Ready Order IDs : "+readyOrdersIDs);
