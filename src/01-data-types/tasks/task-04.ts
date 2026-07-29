/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

import { title } from "node:process";

type library ={
    numberISBN: number;
    title:string;
    author:string;
    pages:number;
    category:string;
    avaible:boolean;
};

const libary1: library={
    numberISBN: 1,
    title: "Moon",
    author: "asep",
    pages: 10,
    category: "Novel",
    avaible:true,
};

const libary2: library={
    numberISBN: 2,
    title: "Sun",
    author: "Uya",
    pages: 15,
    category: "Novel",
    avaible:false,
};

const libary3: library={
    numberISBN: 3,
    title: "Sky",
    author: "M",
    pages: 12,
    category: "Novel",
    avaible:true,
};