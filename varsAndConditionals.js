/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25
let jamieLannisterAttack = 35

// if (jonSnowAttack > jamieLannisterAttack) {
//     console.log('Jon is stronger')
// } else {
//     console.log('Jamie is stronger')
// }

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon has better attack')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie has better attack')
} else {
    console.log('Jon and Jamie have the same attack')
}

let jonSnowHealth = 100
let jonSnowDefense = 0
let jamieLannisterHealth = 100

// if (jonSnowHealth > 0) {
//     console.log('Jon Snow is still alive!')
// } else { 
//     console.log('Jon snow has died!')
// }

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon has been slain')
} else {
    jonSnowHealth = jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25 // jonSnowDefense = jonSnowDefense + 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack + jonSnowDefense
    console.log(`Jon's health is down to ${jonSnowHealth}`)
}

