const webpack = require('webpack');

module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file',
				query: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader'
				]
			},
		],
	},
	resolve: {
		extensions: ['', '.js'],
		modules: [
			path.resolve('./app'),
			'node_modules'
		]
	},
	devServer: {
		contentBase: './app'
	}
};