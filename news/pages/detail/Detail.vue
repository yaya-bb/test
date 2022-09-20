<template>
	<view class="detail">
		<view class="title">{{title}}</view>
		<view class="content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {
				title: '',
				strings: '',
				id: ''
			}
		},
		onLoad: function(e) {
			console.log(e.id);
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.id,
					method: 'GET',
					success: res => {
						console.log(res);
						this.id = e.id;
						this.title = res.data.title;
						this.strings = res.data.content;
					}
				})
			},
		methods: {
			
		},
	}
</script>

<style>
	.detail {
		padding: 10upx;
		flex-wrap: wrap;
	}
	.title {
		line-height: 2em;
		font-size: 40upx;
		font-weight: bold;
	}
	.content {
		line-height: 2em;
	}
</style>
