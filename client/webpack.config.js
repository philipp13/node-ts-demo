const Path = require("path");


module.exports = {
	entry: "./src/index.ts",
	mode: "production",
	output: {
		filename: "bundle.js",
		path: Path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@shared": Path.resolve(__dirname, "../shared")
		}
	},
	module: {
		rules: [
			{test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/}
		]
	}
};