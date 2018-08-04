// 默认函数
let defFn = function() {};
// 定义插件
export default class ImageLoader {
	/***
	 * 构造函数
	 * @urls 	加载图片的列表
	 * @success 加载成功时候的回调函数
	 * @done 	加载完成时候的回调函数
	 * @fail 	加载失败时候的回调函数
	 **/ 
	constructor(urls = [], success = defFn, done = defFn, fail = defFn) {
		this.urls = urls;
		this.success = success;
		this.done = done;
		this.fail = fail;
		// 加载完成的图片数量
		this.num = 0;
		// 开始加载图片
		this.init()
	}
	// 加载图片的方法
	init() {
		let len = this.urls.length;
		while(--len >= 0) {
			// 加载每一张图片
			this.loader(this.urls[len])
		}
	}
	// 加载每一张图片
	loader(url) {
		// 创建图片加载器
		let img = new Image();
		// 监听图片加载成功
		img.onload = () => {
			// 执行回到函数
			this.loaderCallback(true)
		}
		// 监听图片加载失败
		img.onerror = () => {
			this.loaderCallback(false)
		}
		// 加载图片
		img.src = url;
	}
	/***
	 * 每张图片加载完成，执行的回调函数
	 * @isSuccess 	是否成功
	 **/ 
	loaderCallback(isSuccess) {
		// 更改加载完成图片的数据量
		this.num++;
		// 如果成功，执行成功的回调函数
		if (isSuccess) {
			this.success(this.num, this.urls.length);
		} else {
			// 否则执行，失败的回调函数
			this.fail(this.num, this.urls.length);
		}
		// 如果完成，执行done
		if (this.num === this.urls.length) {
			this.done(this.num)
		}
	}
}