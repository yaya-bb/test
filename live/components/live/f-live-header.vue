<template>
	<view class="position-fixed px-2 flex justify-between" style="top: 24px;width: 750rpx;">
		<!-- 关注 -->
		<view class="btn flex align-center p-1" style="width: 335rpx;height: 80rpx;">
			<image :src="user.avatar || defaultImg" class="rounded-circle mr-1" style="width: 70rpx;height: 70rpx;"></image>
			<view class="flex-1">
				<text class="text-white font">{{user.username}}</text>
				<text class="text-light font-sm">{{lookCount}}</text>
			</view>
			<view v-if="showAddBtn" class="flex align-center justify-center rounded-circle bg-danger" style="width: 70rpx;height: 70rpx;"><text class="font-lg text-white">+</text></view>
		</view>
		<!-- 观看用户 -->
		<view class="flex" style="width: 335rpx;height: 80rpx;">
			<scroll-view scroll-x="true" class="flex align-center" style="width: 255rpx;height: 80rpx;">
				<image v-for="(item,index) in list" :key="index" :src="item.avatar || defaultImg" class="rounded-circle mr-1" style="width: 70rpx;height: 70rpx;"></image>
			</scroll-view>
			<view style="width: 80rpx;height: 80rpx;">
				<view class="btn btn-icon" style="margin-left: 0;">
					<text class="font-sm text-white">{{onlineCount}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			user:Object,
			lookCount:{
				type: Number,
				default:0
			},
			onlineCount:{
				type: Number,
				default:0
			},
			showAddBtn:{
				type: Boolean,
				default:true
			},
			list:Array,
		},
		watch: {
			user(newValue, oldValue) {
				console.log(newValue);
			}
		},
		data() {
			return {
				defaultImg:"/static/default.jpg"
			}
		},
	}
</script>

<style>
	.btn{
		background-color: rgba(255,255,255,0.125);
		border-radius: 100rpx;
	}
	.btn-icon{
		width: 80rpx;
		height: 80rpx;
		justify-content: center;
		align-items: center;
		margin-left: 30rpx;
	}
</style>
