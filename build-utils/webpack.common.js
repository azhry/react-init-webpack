const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/theme/ant-theme-vars.less'), 'utf8'));

const config = {
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
					        plugins: [
					        	'lodash',
					        	['import', { libraryName: "antd", style: true }]
					        ],
					        presets: [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
					    }
				    }
				]
		  	},
		  	{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true,
							modifyVars: themeVariables
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
		},
		minimize: true,
		minimizer: [
            new UglifyJsPlugin()
        ]
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