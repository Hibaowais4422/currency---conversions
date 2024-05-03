#! /usr/bin/env node  
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\t'CURRENCY CONVERTER'\n"));
const currency = {
    USD: 1,
    PKR: 280,
    SAR: 3.75,
    INR: 74.57,
    EUR: 0.91,
    JYP: 113,
    AUD: 1.65,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "PKR", "SAR", "INR", "EUR", "JYP", "AUD"]
    },
    {
        name: 'to',
        type: 'list',
        message: 'Enter To Currency',
        choices: ["USD", "PKR", "SAR", "INR", "EUR", "JYP", "AUD"]
    },
    {
        name: 'amount',
        message: 'Enter Amount',
        type: "number"
    },
]);
// console.log(user_answer)
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.greenBright(Math.round(convertedAmount)));
