var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8682,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
  purchaseProduct();  
});


function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");
  });
}



function purchaseProduct() {
  // query the database for all items being sold
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to order
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What product would you like to purchase?"
        },
        {
          name: "units_ordered",
          type: "input",
          message: "How many units would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if there's enough in stock
        if (chosenItem.stock_quantity > parseInt(answer.units_ordered)) {
          
          connection.query(

            // UPDATE products SET stock_quantity = stock_quantity - units_ordered where item id = item chosen
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: - answer.units_ordered
              },
              {
                id: chosenItem
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Purchase of " + answer.units_ordered + " " + chosenItem.product_name + " placed successfully!");
              
            }
          );
        }
        else {
          // units ordered higher than stock_quantity so advise
          console.log("Sorry we can't honor order since there's not enough in stock of item ordered.");
          
        }
      });
  });
  
}
