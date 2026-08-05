/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];
    let total= 0
    let gold = 0
    let silver = 0
    let bronze = 0
    let withoutMedal = 0

for (let i = 0; i < scores.length; i++) {
    total += scores[i]; 


     if (scores[i] >= 95) {
    gold++;
  } else if (scores[i] >= 85 && scores[i] <= 94) {
    silver++;
  } else if (scores[i] >=75 && scores[i] <= 84 ){
    bronze++
  } else {
    withoutMedal++
  }
}   const average = total / scores.length


    console.log("Number of Gold Medal winners : "+gold)
     console.log("Number of Silver Medal winners : "+silver)
      console.log("Number of Bronze Medal winners : "+bronze)
       console.log("Number of students without medals : "+withoutMedal)
        console.log("Average competition score : "+average)
