import { defineConfig } from "vite";

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
		outDir: "../public",
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	plugins: []
});
