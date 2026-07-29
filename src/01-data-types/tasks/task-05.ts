/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type employee ={
    id: number;
    name:string;
    date:Date;
    checkInTime:number;
    checkOuttime:number;
    totalworking:number;
    present:boolean;
};

const employee1: employee={
    id:1,
    name:"bayu",
    date:new Date("2026-07-27"),
    checkInTime: 7.00,
    checkOuttime: 15.00,
    totalworking:8,
    present:true,
};

const employee2: employee={
    id:2,
    name:"asep",
    date:new Date("2026-07-27"),
    checkInTime: 7.10,
    checkOuttime: 15.00,
    totalworking:7.50,
    present:true,
};

const employee3: employee={
    id:3,
    name:"alix",
    date:new Date("2026-07-27"),
    checkInTime: 7.20,
    checkOuttime: 15.00,
    totalworking:7.40,
    present:true,
};

console.log(employee1);
console.log(employee2);
console.log(employee3);
