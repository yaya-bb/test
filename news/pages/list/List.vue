<template>
	<view class="news">
		<!-- 为了更好的进行数据传递：微信小程序自定义属性data-key -->
		<!-- 在事件中被dataset接收 -->
		<view class="lists" v-for="(item,index) in list" :key="index">
			<navigator :url="'../detail/Detail?id='+item.post_id" class="list-item">
				<view class="list" >
					<image class="icon" :src="item.author_avatar"></image>
					<view class="content">
						<view class="title">
							{{item.title}}
						</view>
						<view class="time">
							{{item.created_at}}
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				list: []
			}
		},
		onLoad: function() {
			uni.showLoading({
			  title: '加载中',
			}),
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.list = res.data;
					console.log(res);
					uni.hideLoading();
				},
				fail: () => {
					
				}
			})
		}
		// methods: {
		// 	// 获取新闻信息
		// 	goDetail(e) {
		// 		// event.target 触发事件的组件的一些属性值集合，想要一个大组件中有多个触发事件，就可以用target减少事件定义
		// 		// event.currentTarget 当前组件的一些属性值集合，想要更精确用这个
		// 		var newsid = e.currentTarget.dataset.newid
		// 		uni.navigateTo ({
		// 			url: '../detail/Detail?newid='+newsid,
		// 			success: res => {
		// 				// console.log(e);
		// 				// console.log("已跳转")
		// 				console.log(newsid)
		// 			}
		// 		});
		// 	}
		// }
	}
</script>

<style>
	.lists {
		padding: 15upx;
	}
	.list {
		float: left;
		padding: 20upx;
		border-bottom: 1upx solid #e5e5e5;
		width: 100%;
	}
	.icon {
		float: left;
		width: 100upx;
		height: 100upx;
		padding-right: 20upx;
	}
	.content {
		padding-left: 15upx;
		/* 超出高度或宽度出现滚动条,外部div适应内部的div */
		overflow: auto;
	}
	.title {
		font-size: 16px;
	}
	.time {
		color: #999;
		font-size: 12px;
	}
</style>
