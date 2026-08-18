/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students:{
  name : string
  major : string
  active : boolean

}[]): number {
    let total = 0
    let totalstudent = students.length
    console.log("Total Students: "+totalstudent) 
  
  for (const student of students) {
    if (student.active) {
        total++
    }
    
  }
  return total 

} 
console.log("Student Active: "+countActiveStudents(students));

function countInactiveStudents(students:{
  name : string
  major : string
  active : boolean

}[]): number {
    let total = 0
  
  for (const student of students) {
    if (!student.active) {
      total++
    } 
    
  }
  return total 
} console.log("Student Inactive: "+countInactiveStudents(students)); 

function countStudentsByMajor(students: { name: string; major: string; active: boolean }[],
  major: string
): number {
  let total = 0;

  for (const student of students) {
    if (student.major === major) {
      total++;
    }
  }

  return total;
}

console.log("Student Software Engineering:", countStudentsByMajor(students, "Software Engineering"));
console.log("Student Networking:", countStudentsByMajor(students, "Networking"));
console.log("Student Multimedia:", countStudentsByMajor(students, "Multimedia"));


function printEnrollmentReport(){
    
}