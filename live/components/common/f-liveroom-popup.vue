<template>
	<uni-popup type="bottom" ref="popup">
		<view class="bg-white flex flex-column">
			<!-- 标题 -->
			<view v-if="popupType === 'beauty' || popupType === 'whiteness'">
				<view class="py-3 flex align-center justify-center">
					<text class="font-md">{{ popupType === 'beauty' ? '美颜' : '美白'}}</text>
				</view>
				<view class="f-divider"></view>
			</view>
			
			<!-- mode -->
			<view v-if="popupType === 'mode'">
				<view class="py-3 flex align-center justify-center" v-for="(item,index) in modeList" :key="index" :class="mode === item.value ? 'bg-main' : ''" @click="change(item)">
					<text class="font-md" :class="mode === item.value ? 'text-white' : ''">{{item.name}}</text>
				</view>
			</view>
			
			<!-- 美颜 -->
			<view class="p-2" v-if="popupType === 'beauty'">
				 <slider :min="beautyOption.min" :max="beautyOption.max" :step="beautyOption.step" :value="beauty" activeColor="#8745FF" block-color="#000000" :block-size="18" show-value @change="change"/>
			</view>
			<!-- 美白 -->
			<view class="p-2" v-else-if="popupType === 'whiteness'">
				 <slider :min="whitenessOption.min" :max="whitenessOption.max" :step="whitenessOption.step" :value="whiteness" activeColor="#8745FF" block-color="#000000" :block-size="18" show-value @change="change"/>
			</view>
			<!-- 关闭 -->
			<view class="f-divider"></view>
			<view class="py-3 flex align-center justify-center" hover-class="bg-light" @click="close">
				<text class="font-md">取消</text>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {
				modeList:[{
				   name:"标清",
				   value:"SD"
				},{
				   name:"高清",
				   value:"HD"
				},{
				   name:"超清",
				   value:"FHD"
				}],
				beautyOption:{
				   min:0,
				   max:9,
				   step:1
				},
				whitenessOption:{
				   min:0,
				   max:9,
				   step:1
				}
			}
		},
		components: {
			uniPopup
		},
		props: {
			popupType: {
				type: String,
				default: 'mode'
			},
			mode:{
				type: String,
				default: 'SD'
			},
			beauty:{
				type: Number,
				default: 0
			},
			whiteness:{
				type: Number,
				default: 0
			}
		},
		created() {
			let res = uni.getSystemInfoSync()
			// 切换选项
			if(res.platform === 'ios'){
				this.beautyOption = {
				   min:0,
				   max:1,
				   step:0.1
				}
				this.whitenessOption = {
					min:0,
					max:1,
					step:0.1
				}
			}
		},
		methods: {
			change(e){
				this.$emit('change',{
					detail:e,
					type:this.popupType
				})
			},
			open(){
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		},
	}
</script>

<style>
</style>
