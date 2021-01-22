// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Write the necessary steps for installation, if applicable.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide usage information for your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "Write any contribution guidelines if applicable.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Provide information on included tests and their usage, if applicable.",
        name: "testing"
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        choices: ["MIT", ],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", (err) => console.log("error in write file: ", err))
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const markdownGen = generateMarkdown(answers);
    writeToFile(answers.title + "_readme.md", markdownGen)
}

// Function call to initialize app
init();
