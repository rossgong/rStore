var products = require("./lib/products");
var inquirer = require("inquirer");

products.getAllProducts(initialPrompt);

function initialPrompt(prods) {

    inquirer.prompt([{
            type: "list",
            message: "Which product would you like to purchase?",
            choices: createProductChoices(prods),
            name: "product"
        }, {
            type: "input",
            message: "How many would you like to purchase? (Please enter a number)",
            // validate: input => {console.log(/^[0-9]*$/.test(input)) ? true : "Not a Valid Number"},
            name: "amount"
        } 
    ]).then(function(res) {
        var selected = prods[res.product-1];
        var updatedStock = selected.stock - res.amount;

        if (updatedStock >= 0) {
            products.updateStock(selected.id, updatedStock);
            console.log("Yosu have bought " + res.amount + " units of " + selected.name + " at a price of " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selected.price * parseInt(res.amount)));
        } else {
            console.log("You cannot buy more than we have sorry!!");
        }
        
        products.close();
    });
}

function createProductChoices(products) {
    var choices = [];

    products.forEach(product => {
        choices.push({ name : product.toString(), value : product.id});
    });
    return choices;
}