/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport (attendance: { name: string, present: boolean }[]):void{
    let total = attendance.length
    let totalpresent = 0 
    let totalabsent = 0

    for (let i = 0; i < attendance.length; i++) {

        if (attendance[i].present) {
        totalpresent++
        console.log(attendance[i].name + " is Present");
        } else {
        totalabsent++
        console.log(attendance[i].name + " is Absent");
        }
        
    }

    console.log("Total students:", total);
    console.log("Present:", totalpresent);
    console.log("Absent:", totalabsent);
}
printAttendanceReport(attendances);