<template>
	<div class="home-main">
		<!-- 导航栏 -->
		<van-nav-bar
			title="签到"
			left-arrow
			@click-left="$router.back()"
		/>
		<div class="hei"></div>
		<!-- tab栏 -->
		<div class="tab">
			<div class="tab-model">
				<div
					class="model" 
					v-for="(item,index) in tabList" 
					:key="index"
					@click="tabChange(index,item)"
					:class="active===index ? 'active':''"
				>
					{{item.type}}
				</div>
			</div>
		</div>
		<!-- 人员 -->
		<div class="people" v-if="active != tabNum">
			<div v-for="(item,index) in lists" :key="index">
				<div>{{item.type}}</div>
				<div>
					<div 
						v-for="(item,i) in item.list" 
						:key="i" 
						:class="{active:item.select}"
						@click="getSelect(index,i)"
					>
						<div>{{item.name ? item.name : "?"}}</div>
						<div>({{item.identity}})</div>
						<van-icon name="success" v-if="item.select"/>
					</div>
				</div>
			</div>
			<div class="bot">
				<span>总人数：200</span>
				<span>已到人数：100</span>
				<span>未到人数：100</span>
			</div>
		</div>
		<!-- 统计 -->
		<div class="num" v-else>
			<div>应到人数：200</div>
			<div>实到人数：190</div>
			<div>未到人数：10</div>
			<div>新增人数：4</div>
			<div>总计人数：204</div>
			<div class="peo">
				<div class="tit">未到人员名单</div>
				<div class="model top">
					<div>亲戚</div>
					<div>
						<div>
							大姨家：
							<span>[大姨夫]</span>
							<span>大哥</span>
						</div>
						<div>
							二姨家：
							<span>[二姨夫]</span>
							<span>大哥</span>
						</div>
					</div>
				</div>
				<div class="model top">
					<div>父母朋友</div>
					<div>
						<div>父亲朋友：</div>
						<div>母亲朋友：</div>
					</div>
				</div>
				<div class="model">
					<div>新郎朋友</div>
					<div>
						<div>小学：</div>
						<div>中学：</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed:{
		tabNum(){
			return this.tabList.length -1;
		},
		allList(){
			return this.list
		},
		relativeList(){
			const newlist = this.list.filter(item=>item.of==='1')
			return newlist;
		},
		parentfriendList(){
			const newlist = this.list.filter(item=>item.of==='2')
			return newlist;
		},
		groomfriendList(){
			const newlist = this.list.filter(item=>item.of==='3')
			return newlist;
		}
	},
	data() {
		return {
			active: 0, // 激活tab
			tabList: [
				{
					type:'全部', 
					of:'0'
				},
				{
					type:'亲戚', 
					of:'1'
				},
				{
					type:'父母朋友', 
					of:'2'
				},
				{
					type:'新郎朋友', 
					of:'3'
				},
				{
					type:'统计',
					of:'4'
				}
			], // tab列表
			list: [
				{
					type: '本家',
					of: '1', // 1-亲戚 2-父母朋友 3-新郎朋友
					list: [
						{
							name:'张三',
							identity:'父亲',
							select: true,
						},
						{
							name:'李三',
							identity:'母亲',
							select: true,
						},
						{
							name:'张三女',
							identity:'姐姐',
							select: false,
						},
						{
							name:'',
							identity:'姐夫',
							select: false,
						}
					]
				},
				{
					type: '父亲朋友',
					of: '2',
					list: [
						{
							name:'？',
							identity:'父亲朋友',
							select: true,
						},
					]
				},
				{
					type: '大学同学',
					of: '3',
					list: [
						{
							name:'阿大',
							identity:'室友',
							select: true,
						},
						{
							name:'阿二',
							identity:'同学',
							select: false,
						},
					]
				}
			], // 人员列表
			lists:[],
			nums: {}, // 统计 
		}
	},
	created() {
		this.lists = this.list
	},
	methods:{
		// tab切换
		tabChange(index,data){
			this.active = index;
			switch(data.of){
				case '0':
					this.lists = JSON.parse(JSON.stringify(this.allList));
					break;
				case '1':
				  this.lists = JSON.parse(JSON.stringify(this.relativeList));
					break;
				case '2':
					this.lists = JSON.parse(JSON.stringify(this.parentfriendList));
					break;
				case '3':
					this.lists = JSON.parse(JSON.stringify(this.groomfriendList));
					break;
				default:
					break;
			}
			this.$nextTick(()=>{
				this.setCentert();
			})
		},
		setCentert() {
			let container = document.querySelector('.tab-model')
			let activeNode = document.querySelector('.model.active')
			// console.log('---', activeNode.offsetLeft)
			// console.log('---', document.body.clientWidth)
			// console.log('---', activeNode.clientWidth)
			// 元素距离滑块左边距离  -  居中时元素到窗口左边距离  =  滚动条滑动的距离
			let scrollWidth = activeNode.offsetLeft - (document.body.clientWidth-activeNode.clientWidth)/2
			container.scrollLeft = scrollWidth;
			// console.log('---', scrollWidth)
		},
		// 点击签到
		getSelect(index,i){
			this.lists[index].list[i].select = !this.lists[index].list[i].select
		},
	}
}
</script>

<style lang="less" scoped>
	.home-main{
		font-size: 16/100rem;
		.tab{
			width: 100%;
			padding: 12/100rem 12/100rem 0;
			box-sizing: border-box;
			border-bottom: 1/100rem solid #f6f6f6;
			overflow: hidden;
			>div{
				overflow: hidden;
				overflow-x: auto;
				display: flex;
				align-items: center;
				transition: .3s;
				&::-webkit-scrollbar{
					display: none;
				}
				>div{
					flex: 0 0 30%;
					cursor: pointer;
					border-radius: 4/100rem;
					border: 1/100rem solid #d9d8d8;
					padding: 6/100rem 12/100rem;
					box-sizing: border-box;
					margin-right: 12/100rem;
					margin-bottom: 12/100rem;
					text-align: center;
					transition: .3s;
					&.active{
						border: 1/100rem solid #F27306;
						color: #F27306;
					}
					&:nth-child(1){
						flex: 0 0 20%;
					}
					&:nth-child(2){
						flex: 0 0 20%;
					}
					&:nth-child(5){
						flex: 0 0 20%;
					}
				}
			}
		}
		.people{
			box-sizing: border-box;
			>div{
				padding: 0 12/100rem 12/100rem;
				box-sizing: border-box;
				display: flex;
				position: relative;
				&::after{
					content: '';
					color: #f1ecec;
					position: absolute;
					left: 12/100rem;
					right: 12/100rem;
					bottom: 0;
					// width: 100%;
					height: 1/100rem;
					background-color: #f1ecec;
				}
				>div{
					&:first-child{
						margin-top: 12/100rem;
						padding-right: 12/100rem;
						box-sizing: border-box;
						border-right: 1/100rem solid #f1ecec;
						min-width: 50/100rem;
					  width: 50/100rem;
					}
					&:last-child{
						padding-left: 12/100rem;
						box-sizing: border-box;
						flex: 1;
						display: flex;
						flex-wrap: wrap;
					}
					>div{
						cursor: pointer;
						margin-top: 12/100rem;
						margin-right: 12/100rem;
						border: 1/100rem solid #d9d8d8;
						padding: 6/100rem 12/100rem;
						box-sizing: border-box;
						border-radius: 4/100rem;
						position: relative;
						transition: .3s;
						&.active{
							border: 1/100rem solid #F27306;
							color: #F27306;
						}
						i{
							position: absolute;
							right: 0;
							top: 0;
						}
						>div{
							text-align: center;
							&:nth-child(2){
								font-size: 12/100rem;
							}
						}
					}
				}
			}
			.bot{
				padding-top: 12/100rem;
				box-sizing: border-box;
				flex-direction: column;
				span{
					padding-bottom: 12/100rem;
					box-sizing: border-box;
				}
				&::after{
					display: none;
				}
			}
		}
		.num{
			padding: 12/100rem;
			box-sizing: border-box;
			>div{
				padding-bottom: 12/100rem;
				box-sizing: border-box;
			}
			.peo{
				border-top: 1/100rem solid #eee;
				padding-top: 12/100rem;
				padding-bottom: 0;
				box-sizing: border-box;
				.tit{
					padding-bottom: 12/100rem;
					box-sizing: border-box;
					font-weight: 600;
				}
				.model{
					background-color: #f1e3ca;
					border-radius: 4/100rem;
					&:not(:last-child){
						margin-bottom: 12/100rem;
					}
					>div{
						&:first-child{
							padding: 8/100rem;
							box-sizing: border-box;
						}
						>div{
							padding: 0 12/100rem 12/100rem;
							box-sizing: border-box;
							span{
								padding-right: 12/100rem;
								box-sizing: border-box;
							}
						}
					}
				}
			}
		}
	}
	.hei{
		height: 50/100rem;
	}
	/deep/ .van-nav-bar {
		position: fixed;
		width: 100%;
		background-color: #ffd6a0;
		z-index: 111;
	}
	/deep/ .van-nav-bar__content {
		height: 50/100rem;
	}
	/deep/ .van-nav-bar .van-icon {
    color: #F27306;
	}
</style>