#! /usr/bin/env node
import inquirer from "inquirer";
//welcom note
console.log("\t Welcom To Currency Conversio \n\t *****************************");
// inquirer pkg to take user input
var user_answer = await inquirer.prompt([
    { message: "Enter Amount", type: "number", name: "user_amount" },
    { message: "Select Your Currency unit", type: "list", name: "user_currency_type",
        choices: ["usd", "euro", "inr", "pkr"]
    },
    { message: "Select currency unit in which you want to convert :", type: "list",
        name: "user_currency_want", choices: ["usd", "euro", "inr", "pkr"]
    },
]);
const unit = { usd: 1, euro: 0.94, inr: 83.6, pkr: 278.5 }; //usd is base amount
var amount = user_answer.user_amount; //user amount
var user_unit = unit[user_answer.user_currency_type]; //user currency type
var converting_unit = unit[user_answer.user_currency_want]; //user currency want
var currency_conversion = (amount / user_unit) * converting_unit; //variable used for calculation
console.log("your amount : " + amount + " " + user_answer.user_currency_type +
    " in " + user_answer.user_currency_want + " is = " + " "
    + currency_conversion + " " + user_answer.user_currency_want);
