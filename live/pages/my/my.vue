<template>
	<view>
		
		<view class="flex align-center">
			<view class="flex align-center justify-center"
			style="width: 180rpx;height: 180rpx;">
				<image src="/static/gift/4.png" class="rounded-circle" style="width: 105rpx;height: 105rpx;"></image>
			</view>
			<view class="flex flex-column">
				<text class="font-md">昵称</text>
				<text class="font text-muted">描述</text>
			</view>
			<view class="ml-auto mr-3">
				<view class="border border-main rounded flex align-center justify-center p-2" hover-class="bg-light">
					<text class="text-main font">编辑资料</text>
				</view>
			</view>
		</view>
		<view class="f-divider"></view>
		<f-list-item icon="iconfaxian" title="我的金币" :showRight="false">
			<text class="text-muted font">50金币 立即充值</text>
		</f-list-item>
		<f-list-item icon="iconfaxian" title="我的直播">
			<text class="text-muted font">0</text>
		</f-list-item>
		<f-list-item icon="iconfaxian" title="我的关注">
			<text class="text-muted font">0</text>
		</f-list-item>
		<f-list-item icon="iconfaxian" title="历史记录"></f-list-item>
		
		
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue';
	export default {
		components: {
			fListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
