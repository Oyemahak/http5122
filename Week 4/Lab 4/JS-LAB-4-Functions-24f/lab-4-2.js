//#### LAB 4 - FUNCTIONS ####
//PART 2: AN AVERAGE FUNCTION

//################## CREATE YOUR AVERAGE FUNCTION
// This function takes five numbers and returns their average to one decimal place.
function averageIt(num1, num2, num3, num4, num5) {
    return ((num1 + num2 + num3 + num4 + num5) / 5).toFixed(1);
}
var getNum = averageIt(5, 10, 15, 20, 25);
alert("The average is: " + getNum);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var course1 = 8; 
var course2 = 7; 
var course3 = 9; 
var course4 = 6; 
var course5 = 70;

var overallAverage = averageIt(course1, course2, course3, course4, course5);
alert("Your program average is: " + overallAverage);

if (overallAverage >= 70) {
    alert("Success! You passed with an average of " + overallAverage);
} else {
    alert("Review required! Your average is " + overallAverage);
}