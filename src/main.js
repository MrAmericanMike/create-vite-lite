#!/usr/bin/env node
const prompts = require("prompts");
const { blue, red, yellow, reset } = require("kolorist");

const FRAMEWORKS = [
	{
		name: "vanilla",
		display: "Vanilla",
		color: yellow,
		variants: [
			{
				name: "vanilla-ts",
				display: "TypeScript",
				color: blue
			},
			{
				name: "vanilla-js",
				display: "JavaScript",
				color: yellow
			}
		]
	},
	{
		name: "svelte",
		display: "Svelte",
		color: red,
		variants: [
			{
				name: "svelte-ts",
				display: "TypeScript",
				color: blue
			},
			{
				name: "svelte-js",
				display: "JavaScript",
				color: yellow
			}
		]
	}
];

async function getFramework() {
	return await prompts([
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
						title: variantColor(variant.display || variant.name),
						value: variant.name
					};
				})
		}
	]);
}

getFramework()
	.then((response) => {
		console.log(`You selected ${response.framework.display} variant ${response.variant}`);
	})
	.catch((error) => {
		console.log(error);
	});
