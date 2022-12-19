<template>
	<view class="p-3 border-top border-light-secondary">
		<view class="bg-main flex flex-column py-4 align-center justify-center rounded">
			<text class="text-light font-sm mb-2">当前金币</text>
			<text class="text-white font-weight-bold" style="font-size: 60rpx;">{{user.coin}}</text>
		</view>
		
		<view class="border-bottom border-light-secondary mt-3 mb-1"></view>
		
		<view>
			<text class="font-sm text-light-muted">请选择充值金额</text>
		</view>
		
		<view class="flex flex-wrap" style="margin-left: -20rpx;margin-right: -20rpx;">
			<view class="p-2" style="width: 33.3%;box-sizing: border-box;" v-for="(item,index) in coins" :key="index" @click="chooseCoin(index)">
				<view class="border rounded flex flex-column align-center justify-center " :class="item.price ? 'py-2' : 'py-4'" :style="index === activeIndex ? 'background-color:#f8f2fb;' : ''">
					<template v-if="item.price">
						<view>
							<text class="iconfont iconbizhongguanli text-warning"></text><text class="font-md ml-1 font-weight-bold">{{item.coin}}</text>
						</view>
						<text class="font-sm text-muted">￥{{item.price}}</text>
					</template>
					<text v-else class="font-md text-muted">自定义</text>
				</view>
			</view>
		</view>
		
		<view class="position-fixed left-0 bottom-0 right-0 bg-white border-top border-light-secondary flex align-center justify-between px-3" style="height:50px;">
			<view>
				<text class="iconfont iconbizhongguanli text-warning"></text><text class="font-lg ml-1 font-weight-bold">{{price}}</text>
			</view>
			<view class="rounded bg-main flex align-center justify-center text-white" hover-class="bg-main-hover" style="width: 150rpx;height: 35px;" @click="pay">
				<text class="font">去充值</text>
			</view>
		</view>
		
		
		<uni-popup ref="dialogInput" type="dialog">
			<uni-popup-dialog mode="input" title="自定义价格" value="" placeholder="￥请输入金额" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
		
	</view>
</template>

<script>
	import fMainButton from '@/components/common/f-main-button.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/components/uni-ui/uni-popup/uni-popup-dialog.vue';
	import { mapState } from 'vuex'
	export default {
		components: {
			fMainButton,
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				activeIndex:0,
				coins:[{
					coin:10,
					price:10
				},{
					coin:20,
					price:20
				},{
					coin:30,
					price:30
				},{
					coin:50,
					price:50
				},{
					coin:100,
					price:100
				},{
					price:false
				}],
				price:0
			}
		},
		onLoad() {
			this.price = this.coins[this.activeIndex].price
		},
		computed: {
			...mapState({
				user:state=>state.user
			})
		},
		methods: {
			pay(){
				this.$H.post('/gift/wxpay',{ price:this.price },{
					token:true
				}).then(orderInfo=>{
					console.log(orderInfo)
					uni.requestPayment({
					    provider:'wxpay',
					    orderInfo, //微信订单数据
					    success: (res)=> {
							this.$store.dispatch('getUserInfo')
							uni.showToast({
								title: '充值成功',
								icon: 'none'
							});
							uni.navigateBack({
								delta: 1
							});
					        console.log('success:' + JSON.stringify(res));
					    },
					    fail: (err)=> {
							uni.showModal({
								title: '提示',
								content: '支付失败',
								showCancel: false
							});
					        console.log('fail:' + JSON.stringify(err));
					    }
					});
				}).catch(err=>{
					console.log(err);
				})
			},
			chooseCoin(index){
				this.activeIndex = index
				let price = this.coins[this.activeIndex].price
				if(price){
					this.price = price
				} else {
					this.$refs.dialogInput.open()
				}
			},
			dialogInputConfirm(done, val) {
				console.log(val);
				if(val === '' || parseInt(val) <= 0){
					return uni.showToast({
						title: '至少输入1元',
						icon: 'none'
					});
				}
				this.price = parseInt(val)
				done()
			},
		}
	}
</script>

<style>

</style>
