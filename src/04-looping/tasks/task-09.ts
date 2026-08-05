/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let totalscore = 0
let Agrade = 0
let Bgrade = 0 
let Cgrade = 0
let Dgrade = 0

let highest = 0
let lowest = 0


for (let i = 0; i < students.length; i++) {
     totalscore += students[i].score
    
    if (students[i].score >= 90) {
    Agrade++ 
    } else if (students[i].score >=80 && students[i].score <= 89){
    Bgrade++
    } else if (students[i].score >=70 && students[i].score <= 79){
    Cgrade++
    } else {
    Dgrade++
    }

    if (students[i].score > highest) {
    highest = students[i].score;
  }

    if (students[i].score > lowest) {
    lowest = students[i].score;
  } 
} const average = totalscore / students.length

console.log("Total Score : "+ totalscore);
console.log("Average : "+ average);
console.log("A Grade : "+ Agrade);
console.log("B Grade : "+ Bgrade);
console.log("C Grade : "+ Cgrade);
console.log("D Grade : "+ Dgrade);
console.log("Highest : "+ highest);
console.log("Lowest : "+ lowest);