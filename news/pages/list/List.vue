<template>
	<view class="news">
		<view class="lists" v-for="(item,index) in list" :key="index" @tap="goDetail" :data-newid="item.post_id">
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
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.list = res.data;
					console.log(res);
				},
				fail: () => {
					
				}
			})
		},
		methods: {
			// 获取新闻信息
			goDetail(e) {
				var newsid = e.currentTarget.dataset.newid
				uni.navigateTo ({
					url: '../detail/Detail?newid='+newsid,
					success: res => {
						// console.log(e);
						// console.log("已跳转")
						console.log(newsid)
					}
				});
			}
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
		padding-left: 15upx;
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
