var path = require('path');
module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: path.resolve(__dirname, '/public'),
		filename: 'bundle.js'
	},

	module:{
		rules: [
			{
				exclude: [
					path.resolve(__dirname, "/node_modules")
				]
			},
			{
				test: /(\.js|.jsx$)/,
				loader: "babel-loader",
				options: {presets: ['env']}
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".css"]
	},

	/*
	devServer:{
		contentBase: path.join(__dirname, '/public'),
		compress: true,
		port: 3000,
		historyApiFallback: true
	},
	
	
	devtool: 'source-map',
	*/
	
}