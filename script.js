

// loops //

// var i = 0;

// while(i < 20){
//  console.log(i, "is less that 20")   
//  i++

// }
// for(var i = 0; i < 20; i++){
//     console.log(i, " its less than 20!")

// }



// for(var i = 0; i < 100; i++){
//     console.log(i, "TWEET TWEET TWEET")
// }





// var phrase = 1;
// while(phrase <= 100){
//     console.log(phrase, "tweet tweet")
//     phrase = phrase + 1
// }

// var favoriteFoods = ["burgers", "pizza", "pasta"]

// for(var i = 0; i < 3; i++){
//        console.log('i love ${favoriteFoods[i]}')
// }


// var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

// for(var i = 0; i < cohortOneStudents.length; i++){
//     console.log(cohortOneStudents[i]);
// }


// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.

// var interest = ["gaming", "NFL", "NBA"]

// for (var i = 0; i < 3; i++) {


//     if (interest[i] === "gaming") {
//         console.log(interest[i], "is my favorite")

//     } else {
//         console.log(interest[i], "is something i enjoy");
//     }
// }
//
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

// function greetAFriend(friendName) {
//     console.log(`Hi ${friendName}`)
// }


// function dreamVacation(friendName, destination) {
//     console.log(`${friendName} would love to visit ${destination}`)
// } 

// dreamVacation("Tom Brady", "Tampa Bay")
// dreamVacation("Phillip Rivers", "Indy")
// dreamVacation("Luke Skywalker", "Tatooine")

function myTaco(typeOfShell, topping) {
    var madeTaco = `They want a ${typeOfShell} shell with ${topping}`
    return madeTaco
}

var finishedTaco = myTaco("soft", "avacado")

console.log(finishedTaco)

console.log("github stop being dumb")