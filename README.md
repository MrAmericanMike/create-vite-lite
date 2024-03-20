# Create Vite Lite

## Usage

Use `create` on an empty directory (root for your project)

```sh
npm create vite-lite
```

```sh
pnpm create vite-lite
```

```sh
yarn create vite-lite
```

## What is this package?

The idea of this package is to provide Vite like Scaffolding for different Frameworks.

## Why no use create-vite?

Please feel free to use [create-vite](https://www.npmjs.com/package/create-vite). This lite version is meant to provide you with a leaner template.

## Why this package exists?

I decided to make this package so when someone starts a project that will use Vite it comes scaffolded in a slightly different way compared to create-vite. Check the templates folder on the [repository](https://github.com/MrAmericanMike/create-vite-lite) to see their structure.
This scaffolds also come with a `vite.config.js` file, something that create-vite doesn't provide. It also sets different ports and few more things.

## Notice

Typescripts settings follow Vite templates for the most part, with some minor changes. Please feel free to suggest changes.

## Can we contribute?

Sure, open an [issue](https://github.com/MrAmericanMike/create-vite-lite/issues) we will take a look at it.

## What Frameworks?

As for now it includes **Vanilla**, **Lit**, **Preact**, **React**, **Solid**, **Svelte** and **Vue**

---

### TODO

-   Write tests
-   Manually test build process for each flavor
-   Make sure scaffold is consistent across the provided frameworks
-   Actually set better tsconfig.json files for every framework
-   Refine which ones need tsconfig.node.json and which ones don't
