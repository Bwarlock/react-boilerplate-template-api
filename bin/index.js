#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const prompts = require("prompts");

// Function to create the project by copying the selected template
async function createProject() {
	try {
		// Prompt the user to select a template and provide a project name
		const response = await prompts([
			{
				type: "select",
				name: "template",
				message: "Which template would you like to use?",
				choices: [
					{ title: "TypeScript Template", value: "template-ts" },
					// { title: 'JavaScript Template', value: 'template-js' }
				],
			},
			{
				type: "text",
				name: "projectName",
				message: "What is the name of your project?",
				validate: (name) => (name ? true : "Project name cannot be empty."),
			},
		]);

		const { template, projectName } = response;

		// Set the template and target directories
		const templateDir = path.join(__dirname, `../${template}`);
		const targetDir = path.join(process.cwd(), projectName);

		// Copy the selected template to the target directory using fs-extra
		await fs.copy(templateDir, targetDir);

		console.log(
			`Project ${projectName} created successfully with the ${template} template!`
		);
	} catch (err) {
		console.error("Error creating project:", err);
	}
}

createProject();
