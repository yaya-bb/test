<template>
	<view class="btn flex align-center px-2" style="width: 250rpx;height: 60rpx;">
		<text class="text-warning font mr-1">金币</text>
		<text class="text-light font">{{value}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
				default: ""
			},
		},
	}
</script>

<style>
	.btn{
		background-color: rgba(0,0,0,0.2);
		border-radius: 100rpx;
	}
</style>
