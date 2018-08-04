import React, { Component } from 'react';
// 样式
import './slider.less';

// 定义组件并暴露接口
export default class Slider extends Component {
	// 状态数据
	constructor(props) {
		super(props);
		// 状态数据
		this.state = {
			// 当前选中图片的索引值
			num: 0
		}
	}
	// 创建按钮
	createBtnItem() {
		// 获取当前索引值
		let current = this.state.num % this.props.data.length;
		return this.props.data.map((item, index) => (
			<li key={index} onClick={e => this.toggle(index)} className={current === index ? 'choose' : ''}></li>
		))
	}
	// 渲染
	render() {
		// 解构
		let { width, height, data } = this.props;
		// 当前显示的图片
		let url = data[this.state.num % data.length];
		return (
			<div className="app-slider" style={{ width: width }}>
				<div ref="content" className="content" style={{ 
					height: height,
					backgroundImage: `url(${url})`
				}}></div>
				<ul className="btns">{this.createBtnItem()}</ul>
			</div>
		)
	}
	// 点击按钮，切换图片
	toggle(num) {
		// 如果正在切换，就不能切换了
		if (this.hasChange) {
			return;
		}
		// 关闭切换
		this.hasChange = true;
		// 重启循环定时器
		this.startLoop();
		// 更新状态
		this.setState({ num })
	}
	// 启动定时器
	startLoop() {
		// 清空原有的
		clearInterval(this.timeBar);
		// 循环更改状态
		this.timeBar = setInterval(() => {
			// 更新状态
			this.setState({
				num: ++this.state.num
			})
		}, 3000)
	}
	// 组件创建完成，用循环定时器更新状态
	componentDidMount() {
		this.startLoop();
		// 注册事件，监听动画结束
		this.refs.content.addEventListener('webkitTransitionEnd', () => {
			// console.log(11111)
			// 动画结束，关闭开关
			this.hasChange = false;
		})
	}
}
// 定义默认属性数据
Slider.defaultProps = {
	data: [],
	height: '100px'
}