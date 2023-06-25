#!/usr/bin/env node
import l from"node:fs";import s from"node:path";import{fileURLToPath as y}from"node:url";import d from"prompts";import{blue as t,bold as u,red as i,reset as g,yellow as r,cyan as v}from"kolorist";const f=[{name:"vanilla",display:"Vanilla",color:r,variants:[{name:"template-vanilla-js",display:"JavaScript",color:r},{name:"template-vanilla-ts",display:"TypeScript",color:t}]},{name:"lit",display:"Lit",color:t,variants:[{name:"template-lit-js",display:"JavaScript",color:r},{name:"template-lit-ts",display:"TypeScript",color:t}]},{name:"react",display:"React",color:v,variants:[{name:"template-react-js",display:"JavaScript",color:r},{name:"template-react-ts",display:"TypeScript",color:t}]},{name:"svelte",display:"Svelte",color:i,variants:[{name:"template-svelte-js",display:"JavaScript",color:r},{name:"template-svelte-ts",display:"TypeScript",color:t}]}];async function S(){if(console.log(t("Create-Vite-Lite")),console.log(u(t("This package is still in beta. Bugs included at no extra charge!"))),k("."))try{const e=await h();console.log(`${e.framework.display} ${e.variant.display}`);const o=s.resolve(y(import.meta.url),"../..",e.variant.name),a=l.readdirSync(o);for(const n of a)L(o,n);b()}catch(e){console.log(e)}else return console.log(`\u274C ${i("You can only use this script within an empty folder")} \u274C`)}async function h(){return await d([{type:"select",name:"framework",message:"Pick a framework",choices:f.map(e=>({title:e.color(e.display),value:e}))},{type:e=>e&&e.variants?"select":null,name:"variant",message:g("Select a variant:"),choices:e=>e.variants.map(o=>{const a=o.color;return{title:a(o.display),value:{name:o.name,display:o.display}}})}],{onCancel:()=>{console.log("\u274C Cancelled"),process.exit(0)}})}function w(e){return{_gitignore:".gitignore"}[e]??e}function k(e){try{const o=l.readdirSync(e);return o.length===0||o.length===1&&o[0]===".git"}catch(o){return console.log(o),!1}}function C(){const e=process?.env?.npm_config_user_agent||null;if(!e)return null;const o=e.split(" ")[0],[a,n]=o.split("/");return{name:a,version:n}}function L(e,o){const a=w(o);c(s.join(e,o),a)}function c(e,o){l.statSync(e).isDirectory()?T(e,o):l.copyFileSync(e,o)}function T(e,o){l.mkdirSync(o,{recursive:!0});const a=l.readdirSync(e);for(const n of a){const p=s.resolve(e,n),m=s.resolve(o,n);c(p,m)}}function b(){console.log(i("Update package.json accordingly."));const e=C();if(e?.name)switch(console.log(t("All done. Run:")),e?.name.toLowerCase()){case"yarn":console.log("  yarn"),console.log("  yarn dev");break;default:console.log(`  ${e?.name.toLowerCase()} install`),console.log(`  ${e?.name.toLowerCase()} run dev`);break}else console.log(t("All done.")),console.log("  install dependencies with your package manager"),console.log("  run dev script to start server")}S();
