import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: " Enter the first number", type: "number", name: "firstnumber" },
    { message: "Enter the second number", type: "number", name: "secondnumber" },
    {
        message: " Select one of the Operator to perform Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.Operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select Valid Operator");
}
