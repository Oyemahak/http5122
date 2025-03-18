/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = function (){


//create page load function

	//create variables for required HTML elements
	var todayData = document.getElementById("todayData");
	var finalData = document.getElementById("finalData");
	var dueData = document.getElementById("dueData");
	var countMsg = document.getElementById("countMsg");
	
	// Create variables for now date and due date
	var now = new Date();
	var dueDate = new Date("April 22, 2024 18:00:00");
	 
	//create variables for now date and due date
	
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE

	todayData.innerHTML = now.toDateString();
    finalData.innerHTML = dueDate.toDateString();

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE

	var timeDifference = dueDate.getTime() - now.getTime();

	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS

	var daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE

	if (daysRemaining > 0) {
       
        dueData.innerHTML = daysRemaining;
    } else {
       
        countMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
        countMsg.style.backgroundColor = "#FF0000";
        countMsg.style.color = "#FFFFFF";
    }

};