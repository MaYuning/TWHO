<template>
	<div class='tq_div'>
		<div id="tou">
			<img src="../assets/tq_logo.png" alt="">
			<div class="Header_weather"><b @click="fn2()">{{wq.city_name}}</b><b @click="fn()" class="b_wd">{{wendu}}℃</b></div> 
			<div class="Header_show" v-if="srcs"> 
				<div class="Header_title">
					<div class="Header_alert cssrk"> 
						<input type="text" class="el-input__inner" v-model="cityname" placeholder="请输入要查询天气的城市" @change="getWeather">
					</div>
				</div> 
			</div>
			<div class="Header_show" v-if="willShow"> 
				<div class="Header_title">
					<div class="Header_alert">
						<b>{{rq}}</b><span>农历 {{nl}}</span><span class="span_margin">星期{{week}}</span>
					</div>
				</div>
				<div class="Header_items">
					<ul>
						<li class="Header_item" v-for="item in w">
							<span class="Header_week">星期{{item.week}}</span>
							<span class="Header_date">{{item.date}}</span>
							<span class="Header_temp">白天</span> 
							<span class="Header_wea">{{item.info.day[1]}}</span> 
							<span class="Header_temp">夜间</span> 
							<span class="Header_wea">{{item.info.night[1]}}</span> 
						</li> 
					</ul>
				</div>  
			</div>
		</div> 
		<span class="Banner_banner"><img src="../assets/fArYVXMtdV6gi4r3.jpg" alt=""></span>
		<div class="IndexWeather_weather">
			<span class="IndexWeather_title"></span>
			<span class="IndexWeather_phone"></span>
			<div class="IndexWeather_desc">
				<div class="IndexWeather_time">
					<b>分钟级</b><span>短时预报分钟</span>
				</div>
				<div class="IndexWeather_KM">
					<b>公里级</b><span>预报范围缩小到1公里</span>
				</div>
				<div class="IndexWeather_AI">
					<b>AI智能</b><span>机械学习技术结合<br>传统数值模式系统</span>
				</div>
				<div class="IndexWeather_view">
					<b>可视化</b><span>全球数据预报可视化<br>世界领先模式同化系统</span>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		data(){
			return {
				// w 表示天气
				srcs : false,
				willShow : false,
				w : [],
				wq: [],
				cityname : '',
				rq:'',
				nl:'',
				week: '',
				wendu:''
			}
		},
		methods : { 
			getWeather(){
				// 调用函数
				if(!this.cityname){
					this.cityname = '北京'
				}
				var date = new Date();
				this.rq = date.toLocaleDateString(); 
				// 请求天气
				this.$http.get('/afd/api/Weather/Query',{
					params : {
						key : 'f9d34cb7fe574d23be415dfd7adfd2e8',
						cityname : this.cityname
					}
				}).then(function(msg){
					// console.log(msg);
					this.w = msg.data.result.weather; 
					this.wq = msg.data.result.realtime;
					this.wendu = this.wq.weather.temperature; 
					// 清除当前天气的值
					this.nl = msg.data.result.realtime.moon;
					this.week = msg.data.result.weather[0].week;
				}.bind(this)).catch(function(err){
					// console.log(err);
					if(err){
						alert('参数错误');
					}
				})
			},
			fn:function(){  
          		if(this.willShow==false){  
	           		this.willShow=true;

          		}else{  
		            this.willShow=false; 
	          	}
	      },
			fn2:function(){  
          		if(this.srcs==false){  
	           		this.srcs=true;

          		}else{  
		            this.srcs=false; 
	          	}
	      }
		},
		created(){
			// 获取天气
			this.getWeather()
		}
	}
</script>

<style scoped>  
.tq_div{
	margin-bottom: 3.125rem;
}
li, ul {
    list-style: none;
}
#tou{
    width: 100%;
    height: 2.375rem;
    color: #fff;
    background: #262a32;
    position: relative;
}
#tou>img{
	float: left; 
	width: 4.75rem;
    margin: 0.53125rem 0 0 0.53125rem; 
}
.Header_weather{
    float: right;
    height: 2.375rem;
    padding: 0 0.5rem 0 1.25rem;
    background: url(../assets/f851e09b.i_location.png) no-repeat 0;
    background-size: 0.9375rem 1.125rem;
}
.Header_weather>span{
    display: inline-block;
    float: right; 
    height: 1.25rem;
    margin: 0.5rem 0 0 0.5rem;
}
.Header_weather i img {
    width: 100%;
    height: 100%;
}
.Header_weather b {
    margin: 0.625rem 0.5rem 0 0;
    padding: 0 0.5rem 0 0;
    border-right: 0.0625rem solid hsla(0,0%,100%,.3);
}
.b_wd{
	border-right: 0px !important;
}
.Header_weather b, .Header_weather span {
    display: inline-block;
    font-size: 0.875rem;
} 
b {
    font-weight: 100;
}
.Header_show{
    display: block;
    width: 100%;
    position: absolute;
    top:2.375rem;
    background: rgba(0,0,0,.7);
    z-index: 2;
}
.Header_title {
    width: 100%;
    height: 2.3125rem;
    line-height: 2.3125rem;
    background: #000;
    font-size: 0.75rem;
}
.Header_alert {
    float: left;
}
.Header_alert b,.Header_alert .span_margin{
    margin: 0.53125rem;
}
.Header_alert span {
    color: #979aa2;
}
.Header_title:after {
    clear: both;
}
.Header_items {
    position: relative;
    width: 100%;
    z-index: 2;
}
.Header_item {
    float: left;
    width: 24.6%;
    margin: 0.75rem 0;
    padding: 0.25rem 0;
    border-right: 0.0625rem solid hsla(0,0%,100%,.2);
    line-height: 1;
    text-align: center;
}
.Header_item .Header_week {
    font-size: 0.875rem;
}
.Header_item span {
    display: block;
    padding: 0.25rem 0;
}
.Header_item .Header_date, .Header_item b{
    font-size: 0.5rem;
}  
.Header_item .Header_wind,.Header_wea{
    font-size: 0.8125rem;
}
.Header_temp,{
	font-size: 1.0rem;
}
#tou,.IndexWeather_weather{
	font-family: Microsoft YaHei,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
}
.Banner_banner {
    display: block;
    width: 100%;
    height: 11.25rem;
}
.Banner_banner img {
    width: 100%;
    height: 100%;
}
.IndexWeather_weather {
    width: 100%;
    height: 33.4375rem;
    color: #fff;
    background: url(../assets/0128c240.bg_weather.jpg) no-repeat;
    background-size: 100%;
}
.IndexWeather_title {
    display: block;
    width: 10.5rem;
    height:4.0rem;
    margin: 0 auto;
    padding: 2.375rem 0;
    background: url(../assets/3837ee30.t_weather.png) no-repeat 50%;
    background-size: 100%;
}
.IndexWeather_phone {
    display: block;
    width: 17.125rem;
    height: 16.75rem;
    margin: 0 auto;
    background: url(../assets/f0d2db12.phone.png) no-repeat 50%;
    background-size: 100%;
}
.IndexWeather_desc {
    padding: 0 0.75rem;
}
.IndexWeather_AI, .IndexWeather_KM, .IndexWeather_time, .IndexWeather_view {
    float: left;
    margin: 0.5rem 0 0;
    padding-left: 2.125rem;
    line-height: 1.5;
}
.IndexWeather_AI b, .IndexWeather_KM b, .IndexWeather_time b, .IndexWeather_view b {
    display: block;
    font-size: 0.9375rem;
    font-weight: 100;
}
.IndexWeather_AI span, .IndexWeather_KM span, .IndexWeather_time span, .IndexWeather_view span {
    display: block;
    font-size: 0.625rem;
}
.IndexWeather_time {
    width: 6.375rem;
    background: url(../assets/f6c85bd7.i_time.png) no-repeat 0;
    background-size: 1.625rem 1.75rem;
}
.IndexWeather_KM {
    background: url(../assets/6f6b2541.i_KM.png) no-repeat 0;
    background-size:1.5625rem 1.75rem;
}
.IndexWeather_AI {
    width: 6.375rem;
    background: url(../assets/306e4fa0.i_AI.png) no-repeat 0;
    background-size:1.6875rem 1.5rem;
}
.IndexWeather_view {
    background: url(../assets/aeca5e03.i_view.png) no-repeat 0;
    background-size:1.875rem 1.75rem;
}
.IndexWeather_desc:after {
    clear: both;
}
.cssrk{
	float: none !important;
	margin:0 auto;
	width: 200px; 
}
.cssrk .el-input__inner{
	height: 30px;
}
</style>
