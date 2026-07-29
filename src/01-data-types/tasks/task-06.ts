/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type marketplace ={
    code: number;
    nama:string;
    price:number;
    stok:number;
    weight:number;
    averageCustemerRating:number;
    discount:boolean;
};

const product1: marketplace={
    code:11,
    nama:"pen",
    price:1000,
    stok:10,
    weight:5,
    averageCustemerRating:5,
    discount:false,
};

const product2: marketplace={
    code:12,
    nama:"table",
    price:50000,
    stok:19,
    weight:100,
    averageCustemerRating:4.5,
    discount:true,
};

const product3: marketplace={
    code:13,
    nama:"book",
    price:2500,
    stok:20,
    weight:15,
    averageCustemerRating:4,
    discount:false,
};

console.log(product1);
console.log(product2);
console.log(product3);

