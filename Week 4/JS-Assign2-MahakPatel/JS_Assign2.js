// Lucky 7 Movies Assignment

// Step 1: Declare and initialize 7 variables for Bollywood movie names
var movie1 = "Sholay";
var movie2 = "Dilwale Dulhania Le Jayenge";
var movie3 = "3 Idiots";
var movie4 = "Zindagi Na Milegi Dobara";
var movie5 = "Gully Boy";
var movie6 = "Kabir Singh";
var movie7 = "Bhool Bhulaiyaa";

// Step 2: Store movies in an array
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Step 3: Prompt user for a number between 1 and 7
var userChoice = prompt("Which top 7 movie would you like? Pick a number: 1-7");

// Convert input to a number
userChoice = parseInt(userChoice);

// Step 4: Validate input using a while loop
while (userChoice < 1 || userChoice > 7 || isNaN(userChoice)) {
    alert("Invalid input. Please enter a number between 1 and 7!");
    userChoice = prompt("Which top 7 movie would you like? Pick a number: 1-7");
    userChoice = parseInt(userChoice);
}

// Step 5: Display the selected movie
alert("Number " + userChoice + " on the list is: " + movies[userChoice - 1]);

// Step 6: Output the full movie list to the console using a for loop
console.log("Top 7 Movies List:");
for (var i = 0; i < movies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + movies[i]);
}
