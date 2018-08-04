import React, { Component } from 'react';
import axios from 'axios';
// 引入组件
import Card from '../../components/card/card.jsx';
import Buy from '../../components/buy/buy.jsx';
import './home.less';

// 暴露接口
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: [],
			item: {},
			showBuyLayer: false
		}
	}
	// 点击卡片执行的函数
	chooseItem(item) {
		// console.log(item)
		// 更新状态, 向子组件传递数据
		this.setState({
			item,
			showBuyLayer: true
		})
	}
	// 购买商品
	buyItem(id) {
		// console.log(id)
		this.state.data
			// 成员id相同的
			.find((item) => item.id === id)
			// 返回该成员，为该成员添加属性
			.hasBuy = true;
		// 更新整个data数组
		this.setState({ data: this.state.data, showBuyLayer: false })
	}
	// 渲染卡片
	createCards() {
		return this.state.data.map((item, index) => <Card key={index} data={item} method={this.chooseItem.bind(this)}></Card>)
	}
	render() {
		let { showBuyLayer, item } = this.state;
		return (
			<div className="app-page">
				<div className="container">
					<div className="page-content">{this.createCards()}</div>
				</div>
				<Buy method={this.buyItem.bind(this)} show={showBuyLayer} data={item}></Buy>
			</div>
		)
	}
	// 组件创建完成，发送请求
	componentDidMount() {
		// 发送请求
		axios.get('/action/lesson/home')
			// 监听返回
			.then(({ data }) => {
				// 判断数据请求成功
				if (data.errno ===  0) {
					this.setState({ data: data.data })
				} else {
					alert(data.msg)
				}
			})
	}
}