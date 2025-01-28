// LAB 3 - ARRAYS & LOOPS - PART 3

// PART 3 - SHOPPING CART SHIPPING
// ==== VARIABLES ========
var shoppingCart = [];
var totalCost = 0;
var freeShippingThreshold = 35;

// ==== LOGIC ========
// CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (totalCost < freeShippingThreshold) {
    // GET ITEM COST FROM USER
    var itemCost = prompt("Enter the price of the item:");

    // CONVERT USER INPUT TO A NUMBER
    itemCost = parseInt(itemCost);

    // ADD ITEM COST TO RUNNING TOTAL VARIABLE
    totalCost += itemCost;

    // PUSH ITEM COST TO CART ARRAY
    shoppingCart.push(itemCost);
}

// SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

// SEND OUTPUT TO CONSOLE
console.log("Item prices: " + shoppingCart.join(" | ") + " = " + totalCost);
