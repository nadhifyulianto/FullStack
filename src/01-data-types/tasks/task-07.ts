/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type learning ={
    idStudent: number;
    name:string;
    grade:string;
    iDcourse:number;
    courseTitle:string;
    instructorName:string;
    totalLearning:number;
    date:Date;
    registrasi:boolean;
};

const product1: learning={
    idStudent:111,
    name:"bayu",
    grade:"beginner",
    iDcourse:100,
    courseTitle:"math",
    instructorName:"doni",
    totalLearning:10,
    date:new Date("2026-07-27"),
    registrasi:true
};

const product2: learning={
    idStudent:112,
    name:"asep",
    grade:"senior",
    iDcourse:101,
    courseTitle:"english",
    instructorName:"joni",
    totalLearning:9,
    date:new Date("2026-07-27"),
    registrasi:true
};

const product3: learning={
    idStudent:113,
    name:"alix",
    grade:"amatir",
    iDcourse:102,
    courseTitle:"indonesia",
    instructorName:"key",
    totalLearning:8,
    date:new Date("2026-07-27"),
    registrasi:true
};