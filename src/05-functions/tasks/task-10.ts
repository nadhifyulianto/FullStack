/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type data = {
    student : string,
    course : string,
    completed : boolean
    score : number,
    duration : number
}

const pasingscore:number = 75

function getTotalEnrollments(data: typeof enrollments): number {
    return data.length
}

function getCompletedEnrollments(data: typeof enrollments): number{
    return data.filter(item => item.completed).length
}

function getIncompleteEnrollments(data: typeof enrollments): number{
    return data.filter(item => !item.completed).length
}

function getCompletionPercentage(data: typeof enrollments): number{
    return (getCompletedEnrollments(data) / getTotalEnrollments(data)) * 100;
}

function getHighestScore(data : typeof enrollments):  number {
    return Math.max (...data.map (item => item.score))
}

function getLowestScore(data : typeof enrollments):  number {
    return Math.min (...data.map (item => item.score))
}

function getAvergaeScore(data : typeof enrollments):  number {
    const totalscore = data.reduce((total, item) => total + item.score, 0)
    return totalscore / data.length
}

function getPasingScore(data : typeof enrollments):  number {
    return data.filter(item => item.score >= pasingscore).length;
}

function getCourses(data: typeof enrollments[]): string[] { 
    return [...new Set(data.map(item => item.course))]; 
}

function getStudentsEnrolledInCourse( data: typeof enrollments[], courseName: string ): number { 
    return data.filter(item => item.course === courseName).length; 
}





