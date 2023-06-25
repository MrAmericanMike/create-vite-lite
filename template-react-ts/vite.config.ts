import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	root: "src",
	server: {
		port: 3000
	},
	preview: {
		port: 8080
	},
	build: {
		minify: true,
		assetsInlineLimit: 0,
		outDir: "../dist",
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	plugins: [react()]
});
