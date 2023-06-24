#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prompts from "prompts";
import { blue, bold, red, yellow, reset } from "kolorist";

const FRAMEWORKS = [
	{
		name: "vanilla",
		display: "Vanilla",
		color: yellow,
		variants: [
			{
				name: "template-vanilla-js",
				display: "JavaScript",
				color: yellow
			},
			{
				name: "template-vanilla-ts",
				display: "TypeScript",
				color: blue
			}
		]
	},
	{
		name: "svelte",
		display: "Svelte (not implemented)",
		color: red,
		variants: [
			{
				name: "template-svelte-js",
				display: "JavaScript (not implemented)",
				color: yellow
			},
			{
				name: "template-svelte-ts",
				display: "TypeScript (not implemented)",
				color: blue
			}
		]
	}
];

async function doMagic() {
	console.log(`${blue("Create-Vite-Lite")} ${red("0.0.5")}`);
	console.log(`${bold(blue("This library is still in beta. Bugs included at no extra charge!"))}`);
	if (!isPathEmpty(".")) {
		return console.log(`❌ ${red("You can only use this script within an empty folder")} ❌`);
	} else {
		try {
			const RESPONSE = await getFramework();
			console.log(`${RESPONSE.framework.display} ${RESPONSE.variant.display}`);
			const TEMPLATE_DIR = path.resolve(fileURLToPath(import.meta.url), "../..", RESPONSE.variant.name);
			const FILES = fs.readdirSync(TEMPLATE_DIR);
			for (const FILE of FILES) {
				writeFile(TEMPLATE_DIR, FILE);
			}
			doneMessage();
		} catch (error) {
			console.log(error);
		}
	}
}

async function getFramework() {
	return await prompts(
		[
			{
				type: "select",
				name: "framework",
				message: "Pick a framework",
				choices: FRAMEWORKS.map((framework) => {
					return {
						title: framework.color(framework.display),
						value: framework
					};
				})
			},
			{
				type: (framework) => (framework && framework.variants ? "select" : null),
				name: "variant",
				message: reset("Select a variant:"),
				choices: (framework) =>
					framework.variants.map((variant) => {
						const variantColor = variant.color;
						return {
							title: variantColor(variant.display),
							value: { name: variant.name, display: variant.display }
						};
					})
			}
		],
		{
			onCancel: () => {
				console.log("❌ Cancelled");
				process.exit(0);
			}
		}
	);
}

function renameFile(file) {
	const FILES = {
		_gitignore: ".gitignore"
	};
	return FILES[file] ?? file;
}

function isPathEmpty(path) {
	try {
		const files = fs.readdirSync(path);
		return files.length === 0 || (files.length === 1 && files[0] === ".git");
	} catch (error) {
		console.log(error);
		return false;
	}
}

function getPackageManager() {
	const AGENT = process?.env?.npm_config_user_agent || null;
	if (!AGENT) {
		return null;
	}
	const PKG = AGENT.split(" ")[0];
	const [NAME, VERSION] = PKG.split("/");
	return {
		name: NAME,
		version: VERSION
	};
}

function writeFile(templateDir, file) {
	const TARGET = renameFile(file);
	copyFile(path.join(templateDir, file), TARGET);
}

function copyFile(source, destination) {
	const STATS = fs.statSync(source);
	if (STATS.isDirectory()) {
		copyDir(source, destination);
	} else {
		fs.copyFileSync(source, destination);
	}
}

function copyDir(sourceDir, destinationDir) {
	fs.mkdirSync(destinationDir, { recursive: true });
	const FILES = fs.readdirSync(sourceDir);
	for (const FILE of FILES) {
		const sourceFile = path.resolve(sourceDir, FILE);
		const destinationFile = path.resolve(destinationDir, FILE);
		copyFile(sourceFile, destinationFile);
	}
}

function doneMessage() {
	const PKG_MANAGER = getPackageManager();
	if (PKG_MANAGER?.name) {
		console.log(blue("All done. Run:"));
		switch (PKG_MANAGER?.name.toLowerCase()) {
			case "yarn":
				console.log("  yarn");
				console.log("  yarn dev");
				break;
			default:
				console.log(`  ${PKG_MANAGER?.name.toLowerCase()} install`);
				console.log(`  ${PKG_MANAGER?.name.toLowerCase()} run dev`);
				break;
		}
	} else {
		console.log(blue("All done."));
		console.log(`  install dependencies with your package manager`);
		console.log(`  run dev script to start server`);
	}
}

doMagic();
