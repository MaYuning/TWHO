<template>
	<div> 
        <div class="Header_show"> 
            <div class="Header_title">
                <div class="Header_alert cssrk"> 
                    <input type="text" class="el-input__inner" v-model="xzname" placeholder="请输入要查询星座" @change="getXZcx">
                </div>
            </div> 
        </div>
        <div class="article-detail">
            <i class="icon icon-ic-ac-00"></i>
            <i class="icon icon-ic-ac-01"></i>
            <i class="icon icon-ic-ac-10"></i>
            <i class="icon icon-ic-ac-11"></i>
            <h1 class="article-title">{{xz.name}}今日运势{{xz.datetime}}</h1>
            <div class="article-info">
                <span class="text-date">时间：{{xz.datetime}}</span>
                <span class="text-author">来源：阿凡达api</span>
            </div>
            <div class="article-content"> 
                <p class='sjt_s'>总运势：</p><el-progress :percentage="xz.all"></el-progress><br>
                <p class='sjt_s'>财运：</p><el-progress :percentage="xz.money"></el-progress><br>
                <p class='sjt_s'>健康：</p><el-progress :percentage="xz.health"></el-progress><br>
                <p class='sjt_s'>爱情：</p><el-progress :percentage="xz.love"></el-progress><br>
                <p class='sjt_s'>事业：</p><el-progress :percentage="xz.work"></el-progress><br>

                <p><strong>运势短评</strong><br>心情不错，适合与朋友谈心。</p>
                <p><strong>今日开运</strong><br>幸运数字：{{xz.number}}<br>幸运颜色：{{xz.color}}<br>贵人星座：{{xz.QFriend}}</p>
                <p><strong>今日总结</strong><br>{{xz.summary}}</p>
                 
            </div>
        </div> 
	</div>
</template>
<script>
    export default {
        data(){
            return {
                xzname : '',
                xz:{}
            }
        },
        methods : {
            getXZcx(){
                // 调用函数
                if(!this.xzname){
                    this.xzname = '金牛座'
                }
                // 请求星座
                this.$http.get('/afd/api/Constellation/Query',{
                    params : {
                        key : '8de99db390174a1684d28961bd70207e',
                        consName: this.xzname,
                        type : 'today'
                    }
                }).then(function(msg){
                    // console.log(msg.data.result1);
                    this.xz = msg.data.result1; 
                    this.xz.all=this.xz.all.replace(/%/, ""); 
                    this.xz.all = parseInt(this.xz.all); 
                    this.xz.money=this.xz.money.replace(/%/, "");
                    this.xz.money = parseInt(this.xz.money); 
                    this.xz.health=this.xz.health.replace(/%/, "");
                    this.xz.health = parseInt(this.xz.health); 
                    this.xz.love=this.xz.love.replace(/%/, "");
                    this.xz.love = parseInt(this.xz.love); 
                    this.xz.work=this.xz.work.replace(/%/, "");
                    this.xz.work = parseInt(this.xz.work); 
                     //console.log(this.xz.all);
                }.bind(this)).catch(function(err){
                    //console.log(err);
                    if(err){
                        alert('参数错误');
                    }
                })
            }
        },
        created(){
            this.getXZcx() 
        }
    }

</script>

<style scoped> 
    .xzname{
        color:green
    } 
    .article-detail {
        position: relative;
        overflow: hidden;
        margin: 0.625rem;
        padding: 0.625rem;
        background: #fefcf7;
        border: 0.0625rem solid #dfcdc0;
        margin-bottom:5.625rem; 
    }
    .icon {
        display: inline-block;
        padding: 0;
        background-image: url(../assets/sprite-2x.png);
        background-size: 70px 56px;
        width: 0.5rem;
        height: 0.5rem;
    }
    .article-detail .icon-ic-ac-00 {
        margin: 0;
        position: absolute;
        left: 0.5625rem;
        top: 0.625rem;
        background-position: -60px -24px;
    }
    .article-detail .icon-ic-ac-01 {
        margin: 0;
        position: absolute;
        right: 0.5625rem;
        top: 0.625rem;
        background-position: 0 -48px;
    } 
    .article-detail .icon-ic-ac-10 {
        margin: 0;
        position: absolute;
        left: 0.5625rem;
        bottom: 0.625rem;
        background-position: -58px -35px;
    } 
    .article-detail .icon-ic-ac-11 {
        margin: 0;
        position: absolute;
        right: 0.5625rem;
        bottom: 0.625rem;    
        background-position: -48px -35px;
    }
    .article-detail .article-title {
        text-align: center;
        margin-top: 0.625rem;
        font-size: 0.9375rem;
        font-weight: normal;
        color: #000; 
        font-family: "Microsoft YaHei", "STHeiti", "Heiti SC", "SimHei", "SimSun", Arial, sans-serif;
    }
    .article-detail .article-info {
        text-align: center;
        padding: 0.3125rem 0;
        border-bottom: 0.0625rem dashed #d5d5d5;
        margin-bottom: 0.3125rem;
        color: #000;
        font-size: 0.75rem;
        font-family: "Microsoft YaHei", "STHeiti", "Heiti SC", "SimHei", "SimSun", Arial, sans-serif;
    }
    .article-detail .article-info .text-author, .article-detail .article-info .text-date {
        color: #b0b0b0;
        margin: 0 0.3125rem;
    }
    .article-detail .article-content {
        padding: 0 0.9375rem;
        text-align: justify;
    }
    .article-detail .article-content p, .article-detail .article-content h1, .article-detail .article-content h2, .article-detail .article-content span, .article-detail .article-content a {
        font-family: "Microsoft YaHei", "STHeiti", "Heiti SC", "SimHei", "SimSun", Arial, sans-serif!important;
    }
    .article-detail .article-content p, .article-detail .article-content span, .article-detail .article-content a {
        font-size: 14px!important;
        color: #282828!important; 
        line-height: 24px!important;
    }
    strong {
        font-weight: bold;
    }
    .sjt_s{
        display: inline-block;    
        width: 3.75rem;
    }
    .el-progress{
        width: 11.25rem;
        display: inline-block;
    }
    .Header_show{
        display: block;
        width: 100%;
        position: relative;
        top:0;
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
    .cssrk{
        float: none !important;
        margin:0 auto;
        width: 12.5rem; 
    }
    .cssrk .el-input__inner{
        height: 1.875rem;
    }
</style>