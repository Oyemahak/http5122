//#### ASSIGNMENT 3 - CUSTOM OBJECT ####

//Since I love badminton, let's create an object for a Badminton Player.
var badmintonPlayer = {
    name: "Mahak Patel",
    ranking: 10,
    tournamentsWon: 5,
    country: "Canada",
    
    //Function to update the player's ranking and show a popup message.
    updateRanking: function(newRanking) {
        badmintonPlayer.ranking = newRanking;
        alert("New ranking updated: " + badmintonPlayer.ranking);
    }
};

//Output the object to the console before modifications.
console.log("Initial Badminton Player Data:", badmintonPlayer);

//Send a popup asking for input and update the player's name.
var newName = prompt("Enter new player name:", badmintonPlayer.name);
badmintonPlayer.name = newName;

//Send another popup asking for the number of tournaments won and update it.
var newTournamentsWon = prompt("Enter number of tournaments won:", badmintonPlayer.tournamentsWon);
badmintonPlayer.tournamentsWon = parseInt(newTournamentsWon);

//Call the method to update the ranking.
var newRanking = prompt("Enter new ranking:", badmintonPlayer.ranking);
badmintonPlayer.updateRanking(parseInt(newRanking));

//Output the modified object to the console.
console.log("Updated Badminton Player Data:", badmintonPlayer);