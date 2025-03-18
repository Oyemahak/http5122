// Assignment 4 - REGISTRATION FORM
// LISTEN FOR WINDOW.ONLOAD EVENT
window.onload = function () {
    // Access the form using its name attribute which is ixdForm
    var formHandle = document.forms.ixdForm;

    // Access the result message div and its components
    var resultMssg = document.getElementById("result");
    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultID = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");

    // ONSUBMIT EVENT: Listen for form submission
    formHandle.onsubmit = processForm;

    // FUNCTION TO HANDLE FORM SUBMISSION AND VALIDATION
    function processForm() {
        // Get form input values
        var firstNameField = formHandle.f__fName;
        var lastNameField = formHandle.f__lName;
        var humberIDField = formHandle.f__id;
        var programField = formHandle.f__program;
        var projectField = formHandle.f__project;

        // VALIDATION: FIRST NAME FIELD
        // Check if the First Name field is empty
        if (firstNameField.value === "") {
            firstNameField.style.backgroundColor = "Red"; // Highlight field in red
            firstNameField.focus(); // Set focus to the field
            return false; // Stop form submission
        }

        // VALIDATION: LAST NAME FIELD
        // Check if the Last Name field is empty
        if (lastNameField.value === "") {
            lastNameField.style.backgroundColor = "Red"; // Highlight field in red
            lastNameField.focus(); // Set focus to the field
            return false; // Stop form submission
        }

        // VALIDATION: HUMBER ID FIELD (REGEX)
        // Check if the Humber ID matches the required pattern
        var humberIDRegex = /^[nN]\d{8}$/; // Regex for Humber ID exactly as per requirement
        if (!humberIDRegex.test(humberIDField.value)) {
            humberIDField.style.backgroundColor = "Red"; // Highlight field in red
            humberIDField.focus(); // Set focus to the field
            return false; // Stop form submission
        }

        // VALIDATION: PROGRAM FIELD
        // Check if the Program field is set to the default option
        if (programField.value === "X") {
            programField.style.backgroundColor = "Red"; // Highlight field in red
            programField.focus(); // Set focus to the field
            return false; // Stop form submission
        } 

        // VALIDATION: PROJECT FIELD (RADIO BUTTONS)
        // Check if a project is selected
        if (!projectField.value) {
            document.getElementById("caption_project").style.backgroundColor = "Red"; // Highlight caption in red
            return false; // Stop form submission
        }

        // IF ALL FIELDS ARE VALID, PROCEED TO SHOW THE RESULT MESSAGE
        // Hide the header and form
        document.getElementById("welcome").style.display = "none";
        document.getElementById("form").style.display = "none";

        // Show the result message
        resultMssg.style.display = "block";

        // CUSTOMIZE RESULT MESSAGE WITH USER DATA
        // Confirmation message with form values with the words in bold uppercase replaced by dynamic values retrieved from the form.
        resultFname.innerHTML = firstNameField.value;
        resultFname.style.fontWeight = "700";
        resultFname.style.textTransform = "uppercase";

        resultLname.innerHTML = lastNameField.value;
        resultLname.style.fontWeight = "700";
        resultLname.style.textTransform = "uppercase";

        resultID.innerHTML = humberIDField.value;
        resultID.style.fontWeight = "700";
        resultID.style.textTransform = "uppercase";

        resultProgram.innerHTML = programField.options[programField.selectedIndex].text;
        resultProgram.style.fontWeight = "700";
        resultProgram.style.textTransform = "uppercase";

        resultProject.innerHTML = projectField.value;
        resultProject.style.fontWeight = "700";
        resultProject.style.textTransform = "uppercase";

        // Prevent form submission
        return false;
    }
};