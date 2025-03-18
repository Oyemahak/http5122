/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = function (){

//create page load function

	//create variables for required HTML elements
	var hoursOut = document.getElementById("hoursOut");
    var minsOut = document.getElementById("minsOut");
    var secsOut = document.getElementById("secsOut");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
	
	//create time variable so all functions have access to it
	var interval;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime() {
       
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        hoursOut.innerHTML = hours;
        minsOut.innerHTML = ":" + minutes;
        secsOut.innerHTML = ":" + seconds;
    }

    // CREATE FUNCTION TO FORMAT TIME (STRETCH GOAL)

    function formatTime(time) {
		if (time < 10) {
			return "0" + time;
		}
		return time;
    }
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
        if (interval) {
            clearInterval(interval);
        }

        displayTime();

        interval = setInterval(displayTime, 1000);
    }
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
        clearInterval(interval);
    }
	
	// SET EVENT LISTENERS
	btnStart.addEventListener("click", startClock);
    btnStop.addEventListener("click", stopClock); 
};