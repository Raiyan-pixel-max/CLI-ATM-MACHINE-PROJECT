import inquirer from "inquirer"
let bankBalance: number = 50000
let pin = 123
console.log("\t\nWelcome to Raiyan's ATM Machine\n\t")

let userPinAns = await inquirer.prompt([
    {
    name: "pin",
    type: "number",
    message: "Enter your Pin Code: "

}
])
if (pin === userPinAns.pin ){
    console.log(`Correct Pin, You Logged In `)


let operation = await inquirer.prompt([
    {
    name: "choices",
    choices:["Withdraw", "Check Bank Balance"],
    type: "list",
    message: "What Operation You Wanna Perform"
}
])
if (operation.choices === "Check Bank Balance") {
    console.log(`Your Current Bank Balance is ${bankBalance}`)
}


if (operation.choices === "Withdraw"){


let withdrawAmount = await inquirer.prompt([
        {
            name: "withdrawAmountAns",
            message: "How Much Amount You Want To Withdraw:",
        }
    ])
if (withdrawAmount.withdrawAmountAns > bankBalance) {
    console.log("You Don't Have Enough Bank Balance")
} else{
    bankBalance -= withdrawAmount.withdrawAmountAns 
    console.log("Successfully Withdraw")
}
console.log(`Your Remaining Balance is ${bankBalance}`)
}

} else {
    console.log("Error, Invalid Pin")
}

