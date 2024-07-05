import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
// import scss from "rollup-plugin-scss";
// import { terser } from "rollup-plugin-terser";
// import { visualizer } from "rollup-plugin-visualizer";
import pkg from "./package.json";

const excludePaths = ["src/hooks", "src/utils", "src/tests"];

export default [
	{
		input: "src/main.js",
		plugins: [
			resolve({
				extensions: [".jsx", ".js"],
			}),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				// exclude: excludePaths,
			}),
			babel({
				extensions: [".js", ".jsx"],
				babelHelpers: "bundled",
				// exclude: excludePaths,
			}),
			// scss({
			// 	outputStyle: "compressed",
			// }),
			// terser(),
			// visualizer({
			// 	filename: "./bundle-analysis.html",
			// 	open: true,
			// 	template: "treemap",
			// 	// sourcemap: true,
			// }),
		],
		output: [
			{ file: pkg.main, format: "cjs", exports: "named" },
			{ file: pkg.module, format: "es" },
			{
				file: pkg.browser,
				format: "umd",
				name: "SoleInk",
				globals: { react: "React", "react-dom": "ReactDOM" },
				exports: "named",
			},
		],
		external: ["react", "react-dom"],
	},
];
