import React, { Component } from 'react';
import './card.less';

// 定义组件并暴露接口
export default class Card extends Component {
	render() {
		// 缓存数据
		let { data, method } = this.props;
		return (
			<div className="app-card">
				<div className="img-container">
					<img src={data.img} alt=""/>
				</div>
				<div className="content">
					<h2>{data.title}</h2>
					<p>
						<span className="sales">{data.sales + '人与你共同学习'}</span>
						<span className="level">{data.level}</span>
						<span className="price">{'￥' + data.price}</span>
					</p>
					<div className="layer">
						<span className={data.hasBuy ? "buy-btn has-buy" : "buy-btn"} onClick={e => method(data)}>{data.hasBuy ? '已购买' : '立即购买'}</span>
					</div>
				</div>
			</div>
		)
	}
}