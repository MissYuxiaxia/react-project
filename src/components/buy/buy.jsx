import React, { Component } from 'react';
import axios from 'axios';
import './buy.less';

// 创建组件并暴露接口
export default class Buy extends Component {
	// 将属性数据转换成状态
	constructor(props) {
		super(props);
		// 转换
		this.state = props;
	}
	// 组件存在期，转换数据
	componentWillReceiveProps(props) {
		this.setState(props)
	}
	// 隐藏弹层
	hide() {
		this.setState({ show: false })
	}
	// 购买商品
	buyItem(id) {
		// 发送请求 工作中，应该先检测登录，然后发送post请求
		axios.get('action/lesson/buy.json', { id })
			// 监听数据返回
			.then(({ data }) => {
				// 提交成功
				if (data.errno === 0) {
					// 隐藏弹层
					// this.hide();
					// 通知父组件购买商品
					this.props.method(id)
				}
			})
	}
	// 渲染虚拟DOM
	render() {
		// console.log(this.state.data)
		// 缓存数据
		let { show, data } = this.state;

		return (
			<div className="app-buy" style={{display: show ? 'block' : ''}}>
				<div className="buy-content">
					<div className="buy-header">
						<span className="buy-close" onClick={e => this.hide()}>&times;</span>
						<h3>购买课程</h3>
					</div>
					<div className="buy-body">
						<div className="buy-info">
							<img src={data.img} alt=""/>
							<h2>{data.title}</h2>
							<p>{data.sales + '人与你共同学习'}</p>
						</div>
						<div className="buy-price">
							<span>课程价格</span>
							<span className="buy-price-content">
								￥
								<strong>{data.price}</strong>
							</span>
						</div>
					</div>
					<div className="buy-footer">
						<span className="buy-btn-cancel" onClick={e => this.hide()}>取消</span>
						<span className="buy-btn-choose" onClick={e => this.buyItem(data.id)}>去付款</span>
						<p>
							<input type="checkbox"/>
							<span>统一爱创课堂条款</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
Buy.defaultProps = {
	data: {}
}