const { resolve } = require('path');
const webpack = require('webpack');
//Resolving a path: give the name of a file or dir to a tool (like the path library) and rely on it to find the exact path to the file. no need for exact path specifications!

//nice 😎

module.exports = {
	//entry point = file that tells webpack (the module bundler) how to build the app.

	entry: [
		resolve(__dirname, "src") + "/index.jsx"
	], //where bundling starts

	output: {
		filename: 'app.bundle.js',
		path: resolve(__dirname, 'build'),
	}, //where to put the bundle webpack creates

	resolve: {
		extensions: ['.js', '.jsx']
	}, //webpack can locate files with these extensions

	module: {
		rules: [
			{
				test: /\.jsx?$/,//files for loader to transform
				loader: "babel-loader",
				options: {
					presets: [
						"es2015",
						"react"
					]
				}
			},
		],
	}

};
