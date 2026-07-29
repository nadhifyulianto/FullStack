/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

import { compileFunction } from "node:vm";


const name ="Alya Putri";
const gpa = 3.89;
const income = 4200000;
const Competition = 4;
const disciplinaryRecord = false;
const documents = true;

const scholarshipBugdet = 500000000;

const gpaRequitmen = gpa>= 3.75;
const incomeRecuitmen = income < 5000000;
const CompetitionRequitmen = Competition >= 3;
const disciplinaryRecordRequitmen = disciplinaryRecord == false;
const documentsRequitmen = documents == true;

const isquaifies = 
gpaRequitmen &&
incomeRecuitmen &&
CompetitionRequitmen &&
disciplinaryRecordRequitmen &&
documentsRequitmen;

let scholarshipAmount = isquaifies ? 0 : 12000000;

let afterbudget = scholarshipBugdet - scholarshipAmount;

console.log("============qualified================");
console.log("Name : "+ name);
console.log("GPA : "+ gpa);
console.log("income : "+income);
console.log("competition : "+Competition);
console.log("displinary Record : "+disciplinaryRecord);
console.log("document : "+documents);
console.log("scholarship Amoun : "+scholarshipAmount);
console.log("schlarship budget : "+afterbudget);
console.log("=====================================")







