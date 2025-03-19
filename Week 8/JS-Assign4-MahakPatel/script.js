// Assignment 4 - REGISTRATION FORM
// LISTEN FOR WINDOW.ONLOAD EVENT

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

        // Reset background colors for all fields
        firstNameField.style.backgroundColor = "";
        lastNameField.style.backgroundColor = "";
        humberIDField.style.backgroundColor = "";
        programField.style.backgroundColor = "";
        document.getElementById("caption_project").style.backgroundColor = "";

        // VALIDATION: FIRST NAME FIELD
        if (firstNameField.value === "") {
            firstNameField.style.backgroundColor = "Red";
            firstNameField.focus();
            return false;
        }

        // VALIDATION: LAST NAME FIELD
        if (lastNameField.value === "") {
            lastNameField.style.backgroundColor = "Red";
            lastNameField.focus();
            return false;
        }

        // VALIDATION: HUMBER ID FIELD (REGEX)
        var humberIDRegex = /^[nN]\d{8}$/;
        if (humberIDField.value === "" || !humberIDRegex.test(humberIDField.value)) {
            humberIDField.style.backgroundColor = "Red";
            humberIDField.focus();
            return false;
        }

        // VALIDATION: PROGRAM FIELD
        if (programField.value === "X") {
            programField.style.backgroundColor = "Red";
            programField.focus();
            return false;
        }

        // VALIDATION: PROJECT FIELD (RADIO BUTTONS)
        if (!projectField.value) {
            document.getElementById("caption_project").style.backgroundColor = "Red";
            return false;
        }

        // If all fields are valid, proceed to show the result message
        // Hide the header and form
        document.getElementById("welcome").style.display = "none";
        document.getElementById("form").style.display = "none";

        // Show the result message
        resultMssg.style.display = "block";

        // CUSTOMIZE RESULT MESSAGE WITH USER DATA
        resultFname.innerHTML = firstNameField.value;
        resultLname.innerHTML = lastNameField.value;
        resultID.innerHTML = humberIDField.value;
        resultProgram.innerHTML = programField.options[programField.selectedIndex].text;
        resultProject.innerHTML = projectField.value;

        // Prevent form submission
        return false;
    }
};