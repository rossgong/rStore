var products = require("./lib/products");
var inquirer = require("inquirer");

initialPrompt();

function initialPrompt() {

	inquirer.prompt([
		{
			type: "list",
			message: "Welcome MANAGER! What would you like to do?",
			choices: [
				{ name: "View Products for Sale", value: "viewAll" },
				{ name: "View Low Inventory", value: "viewLow" },
				{ name: "Add to Inventory", value: "addStock" },
				{ name: "Add new Product", value: "addProd" }
			],
			name: "choice"
		}
	]).then(function (res) {
		switch (res.choice) {
			case "viewAll":
				products.getAllProducts(printProds);
				break;
			case "viewLow":
				products.filterProducts("stock_quantity<5", printProds);
				break;
			case "addStock":
				products.getAllProducts(function (prods) {
					inquirer.prompt([{
						type: "list",
						message: "Which product would you like to add stock?",
						choices: products.createProductChoices(prods),
						name: "product"
					}, {
						type: "input",
						message: "How many would you like to add? (Please enter a number)",
						// validate: input => {console.log(/^[0-9]*$/.test(input)) ? true : "Not a Valid Number"},
						name: "amount"
					}
					]).then(function (res) {
						var selected = prods.find(function (elem) {
							return elem.id === res.product;
						});
						var updatedStock = selected.stock + parseInt(res.amount);

						products.updateStock(selected.id, updatedStock);
						console.log("You have added " + res.amount + " units of " + selected.name + " to your inventory!");

						products.close();
					});
				});
				break;
			case "addProd":

				break;
			default:

				break;
		}
	});
}

function printProds(prods) {
	prods.forEach(prod => {
		console.log(prod.toString());
	});

	products.close();
}