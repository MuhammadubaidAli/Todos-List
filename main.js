import inquirer from "inquirer";
let condition = "true";
let todos = [];
while (condition) {
    let todosQuestion = await inquirer.prompt([{
            name: "Qno_01",
            type: "input",
            message: "What would you like to add in your todos?",
        },
        {
            name: "Qno_02",
            type: "confirm",
            message: " would you like to add more in your todos?"
        }
    ]);
    todos.push(todosQuestion.Qno_01);
    condition = todosQuestion.Qno_02;
    console.log(todos);
}
