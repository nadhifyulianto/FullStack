/**
 * SMK Telkom Malang is developing a new Student Information System.
 * Before students can use the system, the administrator must record each student's basic information.
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 *
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 *
 * display the student data using console.log.
 */

type student ={
    studentID: number;
    name:string;
    age:number;
    status: boolean
};

const student1: student ={
    studentID: 4311,
    name: "bayu",
    age:16,
    status:true,
};

const student2: student ={
    studentID: 4312,
    name: "alix",
    age:17,
    status:true,
};

const student3: student ={
    studentID: 4313,
    name: "asep",
    age:16,
    status:false,
};

console.log(student1);
console.log();
console.log(student2);
console.log();
console.log(student3);