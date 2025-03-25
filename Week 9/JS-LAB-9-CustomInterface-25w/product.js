//LAB 9-DATA STORAGE: PRODUCT PAGE

window.onload = function() {

    var welcomeMsg = document.getElementById("MesgBox");
    
    var storedName = localStorage.getItem("U_name");
    var storedColor = localStorage.getItem("U_color");
    
    if (storedName !== null && storedColor !== null) {
        welcomeMsg.textContent = "Welcome back, " + storedName;
        document.body.style.background = storedColor;
    }
};