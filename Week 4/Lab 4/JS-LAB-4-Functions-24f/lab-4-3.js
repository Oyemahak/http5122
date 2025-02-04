//#### LAB 4 - FUNCTIONS ####  
//PART 3: SAFE DOG WALKING CHECK  

//================== CREATE YOUR checkTemp FUNCTION  
// This function checks if the temperature is safe for walking.  
// It needs to receive currentTemp (number).  
// It will return true if too hot or too cold, otherwise false.  

function checkTemp(currentTemp) {
    if (currentTemp >= 30 || currentTemp <= -10) {
        return true;  // Temperature is extreme, return true
    } else {
        return false; // Temperature is safe, return false
    }
}

//================== GET USER INPUT  
var userTemp = prompt("Enter your current temperature:");
userTemp = parseFloat(userTemp); // Convert user input to a number

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS  
if (checkTemp(userTemp) === true) {
    alert("Yikes! This is no weather for dog walking!");
} else {
    alert("You're good, have a nice walk!");
}