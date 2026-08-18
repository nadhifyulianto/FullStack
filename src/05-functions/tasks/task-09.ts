import { futimes } from "node:fs";

/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];
    type data = {
        id:number,
        name:string,
        age:number,
        department:string,
        admitted:boolean,
        bill:number
    }

    function getTotalPatients(data: typeof patients): number {
    return data.length
}

    function getTotalAdmittedPatients(data: typeof patients): number {
    return data.filter(item => item.admitted).length
}

    function getDischargedPatients(data: typeof patients): number {
    return data.filter(item => !item.admitted).length        
}

    function getPatientsinEachDepartment(data: typeof patients): number {
    
}

    function getHighestBill(data: typeof patients): number {
    return Math.max (...data.map(patient => patient.bill))
}  

    function getLowestBill(data: typeof patients): number {
    return Math.min (...data.map(patient => patient.bill))
}

    function getAverageBill(data: typeof patients): number {
    const totalScore = data.reduce((total, patient) => total + patient.bill, 0);
    return totalScore / data.length;
}

    function getTotalHospitalRevenue(data: typeof patients): number {
    return data.reduce((total, patient) => total + patient.bill, 0);
        
}

    function getAdmittedPatients(data : typeof patients):string[] {
    return data.filter(patient => patient.admitted)
    .map(patient => patient.name);
}


     




     

     
    

    