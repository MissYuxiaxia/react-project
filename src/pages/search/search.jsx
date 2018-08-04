// 引入首页
import Home from '../home/home.jsx';
// 引入axios
import axios from 'axios';

// 暴露接口
export default class Search extends Home {
	// 组件创建完成
	componentDidMount() {
		// 请求数据
		this.getData();
	}
	getData() {
		// 发送请求
		axios.get('action/lesson/search?word=' + this.props.match.params.word)
			// 存储数据
			.then(({ data }) => {
				// 判断数据请求成功
				if (data.errno ===  0) {
					this.setState({ data: data.data })
				} else {
					alert(data.msg)
				}
			})
	}
	componentDidUpdate(props, state) {
		// 数据更新，请求新的课程数据
		if (this.props.match.params.word !== props.match.params.word) {
			this.getData();
		}
	}
}