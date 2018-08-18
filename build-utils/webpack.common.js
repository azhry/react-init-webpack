const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
	entry: {
		vendor: ['semantic-ui-react']
	},
	output: {
		path: commonPaths.outputPath,
		publicPath: '/'
	},
	module: {
		rules: [
		  	{
			    test: /\.(js)$/,
			    exclude: /node_modules/,
			    use: [
				    {
				    	loader: 'babel-loader',
				    	options: {
					        plugins: ['lodash'],
					        presets: [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
					    }
				    }
				]
		  	}
		]
	},
	optimization: {
		splitChunks: {
		  	cacheGroups: {
			    vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true
			    }
		  	}
		}
	},
	plugins: [
		new LodashModuleReplacementPlugin,
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.png',
			minify: {
				removeComments: true,
		        collapseWhitespace: true,
		        removeRedundantAttributes: true,
		        useShortDoctype: true,
		        removeEmptyAttributes: true,
		        removeStyleLinkTypeAttributes: true,
		        keepClosingSlash: true,
		        minifyJS: true,
		        minifyCSS: true,
		        minifyURLs: true,
		    }
		})
	]
};
module.exports = config;