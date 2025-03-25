//LAB 9-DATA STORAGE: HOME PAGE
//window.onload
window.onload = function () {


    //check for stored values
    var U_name = localStorage.getItem("U_name");
    var U_color = localStorage.getItem("U_color");


        //retrieve stored values
        if (U_name && U_color) {
        //change welcome text to stored name
        document.getElementById("newMsgBox").textContent = "Welcome, " + U_name;

    }
        //change BG colour to stored colour

        document.body.style.background = U_color;


		
//#####============== DO THIS PART FIRST! ===============		
	//get the form and set submit listener

    var formHandle = document.forms.infoForm;
    formHandle.onsubmit = processForm;
    
    //onsubmit Function
    function processForm(mp) {
        mp.preventDefault();
        
        //get values from form

        var nameInput = formHandle.f_name;
        var colorInput = formHandle.f_colour;
        
        //console.log the form values

        console.log("Name:", nameInput.value, "Color:", colorInput.value);

        //store values

        localStorage.setItem("U_name", nameInput.value);
        localStorage.setItem("U_color", colorInput.value);
        
        //update display immediately

        document.getElementById("newMsgBox").textContent = "Welcome, " + nameInput.value;
        document.body.style.background = colorInput.value;
    }
	

	//onsubmit Function

    var deleteBtn = document.getElementById("btnDel");
    deleteBtn.onclick = function() {

        //get values from form

		localStorage.removeItem("U_name");
        localStorage.removeItem("U_color");
		
		//console.log the form values

        document.getElementById("newMsgBox").textContent = "Welcome!";
        document.body.style.background = "#c0c0c0";
        
        //store values
        
        location.reload();



    }
}  