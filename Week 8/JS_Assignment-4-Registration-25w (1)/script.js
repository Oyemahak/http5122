window.onload = function () {
    // Access the form using its name attribute
    var formHandle = document.forms.ixdForm;

    // Access the result message div and its components
    var resultMssg = document.getElementById("result");
    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultID = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");

    // ONSUBMIT EVENT
    formHandle.onsubmit = processForm;

    function processForm() {
        // Get form input values
        var firstNameField = formHandle.f__fName;
        var lastNameField = formHandle.f__lName;
        var humberIDField = formHandle.f__id;
        var programField = formHandle.f__program;
        var projectField = formHandle.f__project;

        // Validation flag
        var isValid = true;

        // Conditions for First Name field
        if (firstNameField.value === "") {
            firstNameField.style.backgroundColor = "Red";
            firstNameField.focus();
            isValid = false;
        } else {
            firstNameField.style.backgroundColor = "";
        }

        // Conditions for Last Name field
        if (lastNameField.value === "") {
            lastNameField.style.backgroundColor = "Red";
            lastNameField.focus();
            isValid = false;
        } else {
            lastNameField.style.backgroundColor = "";
        }

        // Conditions for Humber ID field (Regex Validation)
        var humberIDRegex = /^[nN]\d{8}$/; // Regex for Humber ID
        if (!humberIDRegex.test(humberIDField.value)) {
            humberIDField.style.backgroundColor = "Red";
            humberIDField.focus();
            isValid = false;
        } else {
            humberIDField.style.backgroundColor = "";
        }

        // Conditions for Program field
        if (programField.value === "X") {
            programField.style.backgroundColor = "Red";
            programField.focus();
            isValid = false;
        } else {
            programField.style.backgroundColor = "";
        }

        // Conditions for Project field (Radio Buttons)
        if (!projectField.value) {
            document.getElementById("caption_project").style.backgroundColor = "Red";
            isValid = false;
        } else {
            document.getElementById("caption_project").style.backgroundColor = "";
        }

        // If all fields are valid, proceed to show the result message
        if (isValid) {
            // Hide form and show result message
            document.getElementById("welcome").style.display = "none";
            document.getElementById("form").style.display = "none";
            resultMssg.style.display = "block";

            // Customize result message with user data
            resultFname.innerHTML = firstNameField.value;
            resultLname.innerHTML = lastNameField.value;
            resultID.innerHTML = humberIDField.value;
            resultProgram.innerHTML = programField.options[programField.selectedIndex].text;
            resultProject.innerHTML = projectField.value;
        }

        return false; // Prevent form submission
    }
};