//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT

//1. Create the object structure first.
var bankCustomer = {};

//2. Add the required properties to your object.
var bankCustomer = {
    lastName: "Patel",
    branchNumber: "1001",
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,

//3. Add your first method and test it.
    makeDeposit: function(amount) {
        bankCustomer.accountBalance = bankCustomer.accountBalance + amount;
        return "Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
    },
    
//4. Add your second method and test it.
    makeWithdrawal: function(amount) {
        bankCustomer.accountBalance = bankCustomer.accountBalance - amount;
        return "Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
    },

    addInterest: function() {
        var tempInterestRate = bankCustomer.interestRate;
        if (bankCustomer.multipleAccounts === true) {
            tempInterestRate = tempInterestRate + 0.005;
        }
        bankCustomer.accountBalance = bankCustomer.accountBalance * tempInterestRate;
        return "Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
    }

};

//5. Create the required output to complete steps 6-10 of the lab.

console.log("Starting balance: $" + bankCustomer.accountBalance.toFixed(2));

console.log(bankCustomer.makeDeposit(200));

console.log("Balance after deposit: $" + bankCustomer.accountBalance.toFixed(2));

console.log(bankCustomer.makeWithdrawal(75));

console.log("Balance after withdrawal: $" + bankCustomer.accountBalance.toFixed(2));

//6. Once everything is working, tackle the Stretch Goal!
console.log(bankCustomer.addInterest());