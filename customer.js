var products = require("./lib/products");
var inquirer = require("inquirer");

products.getAllProducts(initialPrompt);

function initialPrompt(prods) {

	inquirer.prompt([{
		type: "list",
		message: "Which product would you like to purchase?",
		choices: products.createProductChoices(prods),
		name: "product"
	}, {
		type: "input",
		message: "How many would you like to purchase? (Please enter a number)",
		validate: function (elem) {
			if (!/^\d*$/.test(elem)) {
				return "Not a number";
			} else {
				return true;
			}
		},
		name: "amount"
	}
	]).then(function (res) {
		var selected = prods.find(function (elem) {
			return elem.id === res.product;
		});;
		var updatedStock = selected.stock - res.amount;

		if (updatedStock >= 0) {
			products.updateStock(selected.id, updatedStock);
			console.log("You have bought " + res.amount + " units of " + selected.name + " at a price of " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selected.price * parseInt(res.amount)));
		} else {
			console.log("You cannot buy more than we have sorry!!");
		}

		products.close();
	});
}