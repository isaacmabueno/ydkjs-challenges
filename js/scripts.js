var taxRate = 0.08;
var phonePrice = 99.99;
var accesoryPrice = 9.99;
var spendingThreshold = 200;
var bankAccountBalance = 3000;
var amount = 0;

function calculateTax(amount) {
    return amount * taxRate;
}

function formatAmount (bankAccountBalance) {
    return "$" + amount.toFixed(2);
}

// keep buying phone while you still have money

while ( amount < bankAccountBalance) {
    // buy a phone
    amount = amount + phonePrice;

    // can we afford the accessory?
    if(amount < spendingThreshold) {
        amount = amount + accesoryPrice;
    }
}

// gotta pay your taxes as well

amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));
