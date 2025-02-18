//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {
    // GET DOM ELEMENTS WE'LL NEED
    var mysteryBox = document.getElementById("mysteryBox");
    var buttonBox = document.getElementById("buttonBox");
    
    // FUNCTION TO ASK USER
    function showPrompt() {
		var result = confirm("Do you want to see something?");
		
		if(result === true){
			mysteryBox.style.display = "none";
            buttonBox.style.display = "block";
		}
	
    }
    
    // FUNCTION TO CHANGE buttonBox
    function changeButtonBox() {
        buttonBox.style.width = "600px";
        buttonBox.style.backgroundColor = "orange";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
    }
    
    // SETUP LISTENERS
    mysteryBox.onmouseover = showPrompt;
    buttonBox.onclick = changeButtonBox;
}