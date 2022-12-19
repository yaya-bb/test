<template>
	<uni-popup ref="showpopup" type="bottom">
		<view class="bg-white flex flex-column" style="width: 750rpx;height: 550rpx;">
			<view class="border-bottom flex justify-between" style="height: 100rpx;">
				<view class="flex">
					<view style="height: 100rpx;" class="flex align-center ml-3">
						<text class="font text-main">礼物</text>
					</view>
				</view>
				<view class=" flex align-center justify-center" style="height: 100rpx;width: 100rpx;" @click="close">
					<text class="iconfont text-secondary">&#xe607;</text>
				</view>
			</view>
			<swiper :indicator-dots="true" style="height: 350rpx;width: 750rpx;">
				<swiper-item class="flex flex-wrap">
					<view style="height: 175rpx;width: 187.5rpx;" class="flex flex-column align-center justify-center" :class="activeId === item.id ? 'border border-main' : ''" v-for="(item,index) in gifts" :key="index" @click="chooseGift(item.id)">
						<image :src="item.image" mode="widthFix" style="width: 100rpx;height: 100rpx;"></image>
						<view class="flex align-center mt-1">
							<text class="font-sm text-warning mr-1">{{item.name}}</text>
							<text class="font-sm text-secondary">{{item.coin}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="border-top flex align-center justify-end px-2" style="height: 100rpx;">
				<view class="flex rounded align-center justify-center bg-warning" style="width: 120rpx;height: 70rpx;" @click="toPay">
					<text class="font text-dark">充值</text>
				</view>
				<view class="flex rounded align-center justify-center bg-main ml-3" style="width: 120rpx;height: 70rpx;" @click="send">
					<text class="font text-white">发送</text>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import $H from '@/common/request.js';
	import { mapState } from 'vuex'
	export default {
		props: {
			live_id: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				activeId:0,
				gifts: []
			}
		},
		components: {
			uniPopup,
		},
		created() {
			$H.get('/gift/list').then(res=>{
				this.gifts = res
			})
		},
		computed: {
			...mapState({
				socket:state=>state.socket,
				token:state=>state.token
			})
		},
		methods: {
			send(){
				if(this.activeId < 1){
					return uni.showToast({
						title: '请先选择礼物',
						icon: 'none'
					});
				}
				if(this.socket && this.token){
					this.socket.emit('gift',{
						live_id:this.live_id,
						gift_id:this.activeId,
						token:this.token
					})
				} else {
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					});
					uni.navigateTo({
						url: '/pages/login/login',
					});
				}
			},
			chooseGift(id){
				this.activeId = id
			},
			open(){
				this.$refs.showpopup.open()
			},
			close(){
				this.$refs.showpopup.close()
			},
			toPay(){
				if(!this.$store.state.token){
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					});
					return uni.navigateTo({
						url: '/pages/login/login',
					});
				}
				uni.navigateTo({
					url: '../../pages/recharge/recharge',
				});
			}
		},
	}
</script>

<style>
	
</style>
