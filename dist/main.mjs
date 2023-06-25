#!/usr/bin/env node
import n from"node:fs";import s from"node:path";import{fileURLToPath as y}from"node:url";import d from"prompts";import{blue as a,bold as f,red as c,reset as u,yellow as r,cyan as v}from"kolorist";const g=[{name:"vanilla",display:"Vanilla",color:r,flavors:[{name:"template-vanilla-js",display:"JavaScript",color:r},{name:"template-vanilla-ts",display:"TypeScript",color:a}]},{name:"lit",display:"Lit",color:a,flavors:[{name:"template-lit-js",display:"JavaScript",color:r},{name:"template-lit-ts",display:"TypeScript",color:a}]},{name:"react",display:"React",color:v,flavors:[{name:"template-react-js",display:"JavaScript",color:r},{name:"template-react-ts",display:"TypeScript",color:a}]},{name:"svelte",display:"Svelte",color:c,flavors:[{name:"template-svelte-js",display:"JavaScript",color:r},{name:"template-svelte-ts",display:"TypeScript",color:a}]}];async function S(){if(console.log(a("Create-Vite-Lite")),console.log(f(a("This package is still in beta. Bugs included at no extra charge!"))),k("."))try{const e=await h();console.log(`${e.framework.display} ${e.flavor.display}`);const o=s.resolve(y(import.meta.url),"../..",e.flavor.name),l=n.readdirSync(o);for(const t of l)L(o,t);$()}catch(e){console.log(e)}else return console.log(`\u274C ${c("You can only use this script within an empty folder")} \u274C`)}async function h(){return await d([{type:"select",name:"framework",message:"Pick a framework",choices:g.map(e=>({title:e.color(e.display),value:e}))},{type:e=>e&&e.flavors?"select":null,name:"flavor",message:u("Select a flavor:"),choices:e=>e.flavors.map(o=>{const l=o.color;return{title:l(o.display),value:{name:o.name,display:o.display}}})}],{onCancel:()=>{console.log("\u274C Cancelled"),process.exit(0)}})}function w(e){return{_gitignore:".gitignore"}[e]??e}function k(e){try{const o=n.readdirSync(e);return o.length===0||o.length===1&&o[0]===".git"}catch(o){return console.log(o),!1}}function C(){const e=process?.env?.npm_config_user_agent||null;if(!e)return null;const o=e.split(" ")[0],[l,t]=o.split("/");return{name:l,version:t}}function L(e,o){const l=w(o);i(s.join(e,o),l)}function i(e,o){n.statSync(e).isDirectory()?T(e,o):n.copyFileSync(e,o)}function T(e,o){n.mkdirSync(o,{recursive:!0});const l=n.readdirSync(e);for(const t of l){const p=s.resolve(e,t),m=s.resolve(o,t);i(p,m)}}function $(){console.log(`${a("All done.")} \xB7 ${c("Update package.json accordingly.")}`);const e=C();if(e?.name)switch(e?.name.toLowerCase()){case"yarn":console.log("  yarn"),console.log("  yarn dev");break;default:console.log(`  ${e?.name.toLowerCase()} install`),console.log(`  ${e?.name.toLowerCase()} run dev`);break}else console.log("  install dependencies"),console.log("  run dev script")}S();
