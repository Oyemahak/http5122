//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
var username = "dart"; // Correct user name
var password = "vader"; // Correct password
var EnterUsername; // user name input
var EnterPassword; // password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
EnterUsername = prompt("Enter your username:");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Entered username:", EnterUsername);
//5. CREATE POPUP BOX FOR PASSWORD
EnterPassword = prompt("Enter your password:");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Entered password:", EnterPassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (EnterUsername === username && EnterPassword === password) {
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert("Welcome back " + EnterUsername);
console.log("Login successful");
} else {
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
alert("Invalid username/password");
console.log("Login Fail");
}
