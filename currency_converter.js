import inquirer from "inquirer";
const UsdtoPkr = 228;
const PkrtoUsd = 0.0044;
const EutoPkr = 239;
const PkrtoEu = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu = 0.95;
async function converter() {
    let answer = await inquirer.prompt([{
            name: "currencyFrom",
            type: "list",
            choices: [`USD`, `PKR`, `EU`],
            message: "select from which currency you want to convert."
        },
        {
            name: "currencyTo",
            type: "list",
            choices: [`USD`, `PKR`, `EU`],
            message: "select to which currency you want to convert."
        },
        {
            name: "amount",
            type: "number",
            message: "Enter amount."
        }
    ]);
    //console.log(answer.amount);
    switch (answer.currencyFrom) {
        case `USD`:
            if (answer.currencyTo === "PKR") {
                let amount = answer.amount * UsdtoPkr;
                console.log(amount);
            }
            else if (answer.currencyTo === "EU") {
                let amount = answer.amount * UsdtoEu;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
        case `PKR`:
            if (answer.currencyTo === "USD") {
                let amount = answer.amount * PkrtoUsd;
                console.log(amount);
            }
            else if (answer.currencyTo === "EU") {
                let amount = answer.amount * PkrtoEu;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
        case `EU`:
            if (answer.currencyTo === "USD") {
                let amount = answer.amount * EutoUsd;
                console.log(amount);
            }
            else if (answer.currencyTo === "PKR") {
                let amount = answer.amount * EutoPkr;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
    }
    Repeat();
}
async function Repeat() {
    let again = await inquirer.prompt([{
            name: "repeat",
            type: "list",
            choices: [`y`, `n`],
            message: "Do yuo want to repeat"
        }]);
    return again.repeat === `y` ? true : false;
}
converter();
