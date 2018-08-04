import React, { Component } from 'react';
import { render } from 'react-dom';
// 导航元素
import { Link } from 'react-router-dom';
import Slider from '../slider/slider.jsx';
// 引入配置
import Conf from '../../conf.es';
// 引入样式
import './header.less';

// 创建应用程序组件
export default class Header extends Component {
	search(e) {
		// console.log(e.keyCode)
		if (e.keyCode === 13) {
			// 进入搜索页面
			location.hash = '#/search/' + e.target.value;
			// 清空输入框
			e.target.value = '';
		}
	}
	// 渲染
	render() {
		return (
			<div className="app-header">
				<div className="navbar navbar-static-top">
					<div className="container">
						<Link className="navbar-brand" to="/">
							<img src="static/img/logo.png" alt=""/>
						</Link>
						<div className="pull-right form-group">
							{/*绑定键盘事件*/}
							<input type="text" onKeyUp={e => this.search(e)} className="form-control"/>
						</div>
						<ul className="nav nav-pills nav-justified">
							<li>
								<Link to="/type/高级">高级课程</Link>
							</li>
							<li>
								<Link to="/type/进阶">进阶课程</Link>
							</li>
							<li>
								<Link to="/type/初级">初级课程</Link>
							</li>
							<li>
								<Link to="/type/react">React</Link>
							</li>
							<li>
								<Link to="/type/vue">Vue</Link>
							</li>
							<li>
								<Link to="/type/angular">Angular</Link>
							</li>
						</ul>
					</div>
				</div>
				<Slider width="100%" height="500px" data={Conf.IMAGE}></Slider>
			</div>
		)
	}
}