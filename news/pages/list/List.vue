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
			this.getList();
		},
		methods: {
			  getList() {
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
			  },
			  /**
			   * 页面相关事件处理函数--监听用户下拉动作
			   */
			  onPullDownRefresh() {
			    // 重新发起请求，并关闭下拉窗口
			    this.getList(() => uni.stopPullDownRefresh());
			  },
		}
			
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
		padding-right: 25upx;
		/* 超出高度或宽度出现滚动条,外部div适应内部的div */
		overflow: auto;
	}
	.title {
		font-size: 16px;
		/* 内容超出三行显示省略号 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.time {
		margin-top: 10upx;
		color: #999;
		font-size: 12px;
	}
</style>
