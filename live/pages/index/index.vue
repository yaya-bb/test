<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200" style="width: 750rpx;height: 250rpx;">
			<swiper-item>
				<image src="../../static/demo/banner/1.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/demo/banner/2.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
		</swiper>
		
		<!-- 列表 -->
		<view class="flex flex-wrap">
			
			<view style="width: 375rpx;padding: 5rpx;box-sizing: border-box;">
				<image src="/static/tabbar/min.png" style="width: 365rpx;height: 365rpx;" class="rounded"></image>
			</view>
			<view style="width: 375rpx;padding: 5rpx;box-sizing: border-box;">
				<image src="/static/tabbar/min.png" style="width: 365rpx;height: 365rpx;" class="rounded"></image>
			</view>
			<view style="width: 375rpx;padding: 5rpx;box-sizing: border-box;">
				<image src="/static/tabbar/min.png" style="width: 365rpx;height: 365rpx;" class="rounded"></image>
			</view>

			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
