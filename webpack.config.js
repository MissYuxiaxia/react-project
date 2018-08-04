// 引入path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack配置
module.exports = {
	// 入口文件
	entry: './src/bootstrap.jsx',
	// 发布文件
	output: {
		// 文件名
		filename: './dist/pc.js',
		// 发布目录
		path: path.join(process.cwd(), '../static')
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// es
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'				
			}
		]
	},
	// 功能
	plugins: [
		// 处理模块
		new HtmlWebpackPlugin({
			// 模板文件
			template: './index.html',
			// 发布地址
			filename: '../views/pc.html',
			// 注入js
			inject: true,
			// 添加hash
			hash: true
		})
	]
}