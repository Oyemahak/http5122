//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name: "Mahak",
    role: "UX Engineer",
    age: "25",
    workExperience: "3 Year",

    callMe: function(){
    alert("Hi " +meObject.name +" you are an "+ meObject.role);
    }
};
// console.log(meObject.role);
// console.log("My name is " +meObject.name +" and I am a "+ meObject.role);

meObject.callMe();