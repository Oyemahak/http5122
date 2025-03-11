// LAB 7 - SHIPPING FORM

// LISTEN FOR WINDOW.ONLOAD EVENT
window.onload = function () {
    // Access the form using its name attribute
    var formHandle = document.forms.form_ship;

    // Access the thank you message div and its components
    var thanksMssg = document.getElementById("thanks_msg");
    var thanksCustomer = document.getElementById("thanksCustomer");
    var thanksPC = document.getElementById("thanksPC");
    var thanksSpeed = document.getElementById("thanksSpeed");
    var thanksCost = document.getElementById("thanksCost");

    // ONSUBMIT EVENT
    formHandle.onsubmit = processForm;

    function processForm() {
        // Get form input values
        var nameField = formHandle.f_Name;
        var postalCodeField = formHandle.f_pc;
        var speedField = formHandle.f_speed; // For stretch goal

        // Conditions for Name field
        if (nameField.value === "") {
            nameField.style.backgroundColor = "Red";
            nameField.focus();
            return false;
        }

        // Conditions for Postal code field
        if (postalCodeField.value === "") {
            postalCodeField.style.backgroundColor = "Red";
            postalCodeField.focus();
            return false;
        }

        // Stretch Goal: Validate Speed of Delivery field
        if (speedField && speedField.value === "0") {
            speedField.style.backgroundColor = "Red";
            speedField.focus();
            return false;
        }

        // Hide form and show thank you message
        formHandle.style.display = "none";
        thanksMssg.style.display = "block";

        // Customize thank you message with user data
        thanksCustomer.innerHTML = nameField.value;
        thanksPC.innerHTML = postalCodeField.value;

        // Stretch Goal: Add speed and cost to thank you message
        if (speedField) {
            var selectedOption = speedField.options[speedField.selectedIndex];
            thanksSpeed.innerHTML = selectedOption.text;
            thanksCost.innerHTML = selectedOption.value;
        }

        return false;
    }
};