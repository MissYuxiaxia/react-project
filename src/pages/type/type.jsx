// 引入首页
import Home from '../home/home.jsx';
import axios from 'axios';

// 暴露接口
export default class Type extends Home {
	// 发送请求是不同的
	componentDidMount() {
		this.getData();
	}
	getData() {
		// 发送请求
		axios.get('action/lesson/type?id=' + this.props.match.params.id)
			// 更新数据
			.then(({ data }) => {
				// 如果请求成功，显示结果
				if (data.errno === 0) {
					this.setState({ data: data.data })
				} else {
					// 提示用户
					alert(data.msg)
					// 没有数据，清空视图
					this.setState({ data: [] })
				}
			})
	}
	componentDidUpdate(props, state) {
		// 路由中，当前的params.id和之前的parmas不同，要发送请求
		if (this.props.match.params.id !== props.match.params.id) {
			this.getData();
		}
	}
}