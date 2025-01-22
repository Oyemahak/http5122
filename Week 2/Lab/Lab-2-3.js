//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var PromptMessage = "Would you like to join our mailing list?";
var Email;

//==== LOGIC =============

if (confirm(PromptMessage)) {
    Email = prompt("Please enter your email address:", "me@example.com");
    if (Email === null || Email === "" || Email === "me@example.com") {
        alert("Thank you, but your email was not valid.");
    } else {
        alert("Thank you, our next newsletter will be sent to " + Email);
    }
} else {
    alert("Thank you, we will not bother you again.");
}