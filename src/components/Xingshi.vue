<template>
	<div class="beijing"> 
        <div class="Header_show"> 
            <div class="Header_title">
                <div class="Header_alert cssrk"> 
                    <input type="text" class="el-input__inner" v-model="xingshi" placeholder="请输入要查询姓氏" @change="getXs">
                </div>
            </div> 
        </div> 
        <header id="article-header">
            <h1 id="article-title">{{xing}}姓的来源</h1> 
        </header>
        <div id="article-content" v-if="xs.intro">
             {{xing}}<br>
             <div v-html="xs.intro"></div>  
        </div> 
        <div class="viewmore" v-else>
            <a href="javascript:;" class="get_more" target="">没有更多信息</a>
        </div>
	</div>
</template>
<script> 
 export default {
        data(){
            return {
                xingshi : '',
                xs:{},
                xing:''
            }
        },
        methods : {
            getXs(){
                // 调用函数
                if(!this.xingshi){
                    this.xingshi = '马'; 
                }
                // 请求姓氏
                this.$http.get('/afd/api/XingShiQiYuan/LookUp',{
                    params : {
                        key : '6ec5a426453b49ff8386510754b2ea9c',
                        xingshi: this.xingshi
                    }  
                }).then(function(msg){  
                    this.xs = msg.data.result;   
                    this.xing = this.xs.xing;   

                    //console.log(msg.data.result);
                }.bind(this)).catch(function(err){
                    //console.log(err);
                    if(err){
                        alert('参数错误');
                    }
                })
            }
        },
        created(){
            this.getXs() 
        }
    }
</script>

<style scoped>  
    .beijing{
        background: #f9f9f9;
    }
    #article-header {
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.25rem;
        display:block;
    }
    #article-title {
        font-size: 1.625rem;
        margin: 0.625rem 1.25rem 0.0rem 0.9375rem;
        font-weight: 600;
        line-height: 2.0rem;
    }
    #article-content {
        font-family: 'Microsoft YaHei',helvetica,arial,sans-serif;
        font-size: 1rem;
        line-height: 2.375rem;    
        color: #1a1a1a;
        padding: 0.5rem 0.75rem 0 0.75rem;
        word-wrap: break-word;
        overflow: hidden;
        text-align: justify;
        padding-bottom:5.625rem; 
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