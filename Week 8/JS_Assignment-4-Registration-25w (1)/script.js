// JavaScript for handling the registration form

// Prevent form submission and handle form validation
document.forms['ixdForm'].onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form elements
    var formHandle = document.forms['ixdForm'];
    var firstName = formHandle.f__fName.value.trim();
    var lastName = formHandle.f__lName.value.trim();
    var humberID = formHandle.f__id.value.trim();
    var program = formHandle.f__program.value;
    var project = formHandle.f__project.value;

    // Validation flags
    var isValid = true;

    // Validate First Name
    if (firstName === "") {
        formHandle.f__fName.style.backgroundColor = "red";
        formHandle.f__fName.focus();
        isValid = false;
    } else {
        formHandle.f__fName.style.backgroundColor = "";
    }

    // Validate Last Name
    if (lastName === "") {
        formHandle.f__lName.style.backgroundColor = "red";
        formHandle.f__lName.focus();
        isValid = false;
    } else {
        formHandle.f__lName.style.backgroundColor = "";
    }

    // Validate Humber ID using regex
    var humberIDRegex = /^[nN]\d{8}$/;
    if (!humberIDRegex.test(humberID)) {
        formHandle.f__id.style.backgroundColor = "red";
        formHandle.f__id.focus();
        isValid = false;
    } else {
        formHandle.f__id.style.backgroundColor = "";
    }

    // Validate Program
    if (program === "X") {
        formHandle.f__program.style.backgroundColor = "red";
        formHandle.f__program.focus();
        isValid = false;
    } else {
        formHandle.f__program.style.backgroundColor = "";
    }

    // Validate Project
    if (!project) {
        document.getElementById('caption_project').style.backgroundColor = "red";
        isValid = false;
    } else {
        document.getElementById('caption_project').style.backgroundColor = "";
    }

    // If all fields are valid, show the confirmation message
    if (isValid) {
        // Hide the form and header
        document.getElementById('welcome').style.display = "none";
        document.getElementById('form').style.display = "none";

        // Show the confirmation message
        document.getElementById('result').style.display = "block";

        // Populate the confirmation message with form values
        document.getElementById('result__Fname').textContent = firstName;
        document.getElementById('result__Lname').textContent = lastName;
        document.getElementById('result__id').textContent = humberID;
        document.getElementById('result__program').textContent = formHandle.f__program.options[formHandle.f__program.selectedIndex].text;
        document.getElementById('result__project').textContent = project;
    }
};