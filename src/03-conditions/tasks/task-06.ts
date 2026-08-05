/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

const name ="Siti Rahma"
const criticalCondition = false
const hasAppointment  = true
const age = 67
const hasInsurance = true

if (criticalCondition) {
    console.log("Ngantri Boss")
} else {
    if (hasAppointment && age > 60 ) {
        console.log("receive Priority Queue")
    } else if (hasAppointment && age < 60) {
        console.log("Other patients receive Regular Queue")  
    } else {
         if (hasInsurance) {
            console.log("Patients with health insurance are assigned to the Insurance Registration Counter")
        } else [
            console.log("Patients without insurance are assigned to the General Registration Counter. ")
        ] 
    }
}

