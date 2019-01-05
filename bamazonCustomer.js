var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  })

function queryStart(){
    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;

        for(var i = 0; i<res.length;i++){
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name+ " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
            console.log('--------------------------------------------------------------------------------------------------')
          }
        
    
inquirer.prompt([

    {
      type: "input",
      name: "userInput",
      message: "Which product would you like to buy? Please enter ID",
      validate: function(value){
          if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            // console.log("ID: " + res[value].item_id + " | " + "Product: " + res[value].product_name + " | " + "Department: " + res[value].department_name+ " | " + "Price: " + res[value].price + " | " + "QTY: " + res[value].stock_quantity);
          } else {
              return false
          }
      }
    },
    {
        type: "input",
        name: "qty",
        message: "How many would you like?",
        validate: function(value){
            if(isNaN(value)){
                return false;
            } else {
                return true;
            }
        }
    }
]).then(function(answer){
    var itemID = (answer.userInput)-1;
    var quantity = parseInt(answer.qty);
    var total = parseFloat(((res[itemID].price)*quantity).toFixed(2));
    if (res[itemID].stock_quantity >= quantity) {
        connection.query("UPDATE products SET ? WHERE ?", [
            {stock_quantity: (res[itemID].stock_quantity - quantity)},
            {item_id: answer.userInput}
            ], function(err, result){
                if(err) throw err;
                console.log("Your total is $" + total.toFixed(2) + ".");
        });
        } else if (res[itemID].stock_quantity  === 0)  {
            console.log("This item is out of stock!")
        } else if   (res[itemID].stock_quantity > 0 || quantity > res[itemID].stock_quantity) {
            console.log("We only have " + res[itemID].stock_quantity + " in stock!")
            }
        
        reprompt();
        }

    )}


    )};


    function reprompt(){
        inquirer.prompt([{
          type: "confirm",
          name: "reply",
          message: "Would you like to purchase another item?"
        }]).then(function(ans){
          if(ans.reply){
            queryStart();
          } else{
            console.log("See you soon!");
          }
        });
      }
queryStart()


