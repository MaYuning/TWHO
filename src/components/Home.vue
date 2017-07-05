<template>
	<div id='zhengti'> 
		<div id="tou">
			<span class="mpos">
				历史上的今天
			</span>
		</div> 
		<div id='shenti'>
			<h1>历史上{{yue}}月{{ri}}日都发生了什么</h1>
			<div class="linediv"></div>
			<ul class="lishi_ul">
				<li class="circler typeid_57" v-for="item in ls">
					<p class="time"> 
						<span class="poh"><b>{{item.year}}</b></span>
					</p>
					<div class="text pr"> 
						<a>{{item.title}}</a>
					</div>
				</li>
			</ul>
			<div class="viewmore">
				<a href="javascript:;" class="get_more" target="">没有更多信息</a>
			</div>
		</div>
	</div>
</template>
<style></style>	
<script> 
export default {
		data(){
			return {
				// ls 表示天气
				ls : [],
				yue : '',
				ri : ''
			}
		},
		methods : {
			getWeather(){

				var now = new Date;
				this.yue =now.getMonth() + 1;
				this.ri  =now.getDate(); 
				// 请求天气
				this.$http.get('/afd/api/HistoryToday/LookUp',{
					params : {
						key : 'a0fd0b4c7a514053bf542afe89a486bd',
						yue : this.yue,
						ri : this.ri,
						type: 2,
						page : 1,
						rows : 50 
					}
				}).then(function(msg){
					// console.log(msg.data);
					this.ls = msg.data.result;
					console.log(this.ls);
  
				}.bind(this)).catch(function(err){  
					//console.log(err);
                    if(err){
                        alert('参数错误');
                    }
				})
			}
		},
		created(){
			// 获取天气
			this.getWeather()
		}
	}
</script>
<style> 
#zhengti{
	background: #F2F2F4;
    font-family: "微软雅黑";
	margin-bottom:3.125rem;
}
#tou{
    width: 100%;
    height: 3.125rem;
    color: #da4041;
    background: #da4041;
    position: relative;
}
span.mpos{
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    display: block;
    line-height: 3.125rem;
    color: #fff;    
}
#shenti{
	position: relative;
}	
#shenti>h1{
    position: absolute;
    top: 1.25rem;
    left: 2.8em;
    color: #333;
    font-weight: bold;
    line-height: 2.1875rem; 
    font-size: 1.25rem; 
    height: 2.1875rem;
    overflow: hidden;
    text-align: center;
}
.linediv {
    top: 1.25rem;
    width: 2.1875rem;
    z-index: 4;
    left: 0.75rem;
    height: 2.1875rem;
    position: relative;
    background: url(../assets/event.png) center center no-repeat;
    background-size: contain;
}
.lishi_ul{ 
    /*margin-top: 6em;*/
    padding-top: 7%;
    background: url(../assets/tbg.jpg) 28px 16px repeat-y scroll;
    list-style: none;
}
.lishi_ul li{ 
    list-style: none;
    position: relative;
    top: -1em;
    margin-bottom: 0.5rem;
    overflow: hidden; 
    width: 100%;
}
.lishi_ul .time {
    top: 1.41em;
    position: relative;
    background: #F2F2F4;    
    left: 9px;
    width: 43px;
    color: #ee6566;
    font-weight: bold;
    text-align: center;
}
.lishi_ul .time:before, .lishi_ul .time:after{
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background: #da4041;
    border-radius: 3px;
    margin-left: 17px;
    position: relative;
    top: -1px;    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.lishi_ul .time .poh {
    margin-left: -0.0625rem;
    color: #da4041;
}
.lishi_ul .time b {
    background: none;
    color: #da4041;
    font-size: 1.0rem;
    margin: 0.1875rem 0;
    display: inline-block;
    border-radius: 3px;
    padding: 0.125rem;
    font-weight: normal;
}
.lishi_ul .time:after {
    top: 1px;
} 
.lishi_ul .text, .lishi_ul .pic {
    margin-left: 3.75rem;
    position: relative;
    top: -0.625rem;
    margin-right: 1rem;
    background: #fff;
}
.lishi_ul .text span {
    display: inline-block;
    line-height: 1.25rem;
    text-align: left;    
    position: absolute;
    left: -6.25rem;
    top: -6.25rem;
}
.lishi_ul .text a {
    color: #333;
    font-weight: normal;
    line-height: 1.5625rem;
    padding-left: 0.625rem;    
    display: block; 
    margin-bottom: 0.35em; 
    overflow: hidden;
}
.viewmore {
    padding-left: 0.625rem;    
    width: 7.8125rem;
    height: 2.0rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 1.5em;
    line-height: 2.0rem; 
    padding-bottom: 2rem;
}
.viewmore a {
    color: #808080;
    text-decoration: none;
}
</style>