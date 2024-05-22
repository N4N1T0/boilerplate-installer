#!/usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("node:path");

const questions = [
	{
		type: "input",
		name: "projectName",
		message: "What is the name of your project?",
		default: "my-project",
	},
	{
		type: "list",
		name: "projectType",
		message: "Which type of project do you want to create?",
		choices: ["Next.js", "Astro"],
		default: "Next.js",
	},
];

inquirer.prompt(questions).then((answers) => {
	const targetPath = path.join(process.cwd(), answers.projectName);
	const templatePath = path.join(
		__dirname,
		"templates",
		answers.projectType === "Next.js" ? "next-template" : "astro-template",
	);

	// Ensure the destination directory exists, create it if it doesn't
	fs.ensureDirSync(targetPath);

	// Copy the selected template folder to the target path, including hidden files and directories
	fs.copySync(templatePath, targetPath, { overwrite: true });

	console.log(`${answers.projectType} project setup complete!`);
	console.log(
		`Run 'cd ${answers.projectName}' to start working on your project.`,
	);
});
