// Predefined team number and member names
var teamNumber = 3; // User can keep anything in between 1 to 6
var teamMembers = {
    "Priyank": "Priyank Shah",
    "Rutul": "Rutul Manani",
    "John": "John Doe",
    "Mahak": "Mahak Patel"
};

// Ask the user for their team number
var userInputTeamNumber = prompt("Enter your team number:");

if (isNaN(userInputTeamNumber)) {
    alert("Invalid input: Please enter a number.");
} else if (userInputTeamNumber != teamNumber) {
    alert("Access denied: Incorrect team number.");
} else {
    // If correct, ask for the user's first name
    var userFirstName = prompt("Enter your first name:");

    switch (userFirstName) {
        case "Priyank":
            alert(`Welcome, ${teamMembers["Priyank"]}!`);
            break;
        case "Rutul":
            alert(`Welcome, ${teamMembers["Rutul"]}!`);
            break;
        case "John":
            alert(`Welcome, ${teamMembers["John"]}!`);
            break;
        case "Mahak":
            alert(`Welcome, ${teamMembers["Mahak"]}!`);
            break;
        default:
            alert("Access denied!");
            break;
    }
}