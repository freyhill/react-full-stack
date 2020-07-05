/* eslint-env node */

/**************************
 * @file: webpack配置
 * @author: leinov
 * @date: 2018-01-08
 ***************************/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
//主配置
module.exports = (env, argv) => ({
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							{ "plugins": ["@babel/plugin-proposal-class-properties"] } 
						],
					}
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/, //css打包 路径在plugins里
				use: [
					argv.mode == "development" ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false, sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } }
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
				options: {
					publicPath: '/'
				}
			},

		],
	},
	devServer: {
		port: 3100,
		open: true,
		proxy: {
			'/api': {
				target:'http://localhost:9003',
				changeOrigin: true,
				secure: false
			}
		}
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src/"),
			component: path.resolve(__dirname, "src/component/"),
			store: path.resolve(__dirname, "src/store/"),
		}
	},
	plugins: [

		new HtmlWebpackPlugin({ 
			title:"react-full-stack",
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin()
	],
	optimization: {
	}
});
