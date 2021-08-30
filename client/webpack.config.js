// eslint-disable-next-line no-undef
const webpack = require('webpack');
// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
	// eslint-disable-next-line no-undef
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: [{
					loader: '@svgr/webpack',
					options: {
						dimensions: false
					}
				}],
			}
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		// eslint-disable-next-line no-undef
		static: path.resolve(__dirname, './dist'),
		hot: true,
	},
};