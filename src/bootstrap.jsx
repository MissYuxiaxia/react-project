import React from 'react';
import { render } from 'react-dom';
import ImageLoader from './tools/image-loader.es';
import Conf from './conf.es'; 
import './loader.less';
// 引入路由规则
import routes from './router/router.jsx';

// 获取元素
let textDOM = document.getElementById('loader_text_num')

// 加载图片
new ImageLoader(Conf.IMAGE, (done, whole) => {
	// 显示加载进度, 显示百分数
	textDOM.innerHTML = (done / whole * 100).toFixed(2)
}, (...arg) => {
	textDOM.innerHTML = '100.00';
	// 渲染虚拟DOM
	// 3 渲染路由规则
	render(routes, document.getElementById('app'))
}, (done, whole) => {
	textDOM.innerHTML = (done / whole * 100).toFixed(2)
})