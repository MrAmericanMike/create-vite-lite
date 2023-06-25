import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["src/main"],
	clean: true,
	rollup: {
		inlineDependencies: true,
		esbuild: {
			minify: true
		}
	}
});

