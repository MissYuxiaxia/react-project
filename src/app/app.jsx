import React, { Component } from 'react';
// 引入路由
import { Switch, Route } from 'react-router-dom';
// 引入组件
import Header from '../components/header/header.jsx';
// 引入页面组件
import Home from '../pages/home/home.jsx';
import Search from '../pages/search/search.jsx';
import Type from '../pages/type/type.jsx';
import './app.less';

// 创建应用程序组件
export default class App extends Component {
	// 渲染
	render() {
		return (
			<div>
				<Header></Header>
				{/*1 确定路由渲染位置*/}
				<Switch>
					<Route path="/type/:id" component={Type}></Route>
					<Route path="/search/:word" component={Search}></Route>
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}