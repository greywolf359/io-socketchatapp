const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/src/index.js',
	output: {
		path: path.resolve(__dirname + '/public'),
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],

	resolve: {
		extensions: [".js", ".jsx", ".json", ".css"]
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
}