<template>
  <div id="app">
    <!-- 定义显示的区域 -->
    <router-view></router-view>
    <div class="footer">  
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link to="/home" class='db_a'>
              <span class="db_span db_home">
                <i class='db_tps db_i_home'></i><span class='home'>历史</span>
              </span>
            </router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link to="/Weather" class='db_a'>
              <span class="db_span db_tx">
                <i class='db_tps db_i_tx'></i><span>天气</span>
              </span>
            </router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link to="/qiwen" class='db_a'>
              <span class="db_span db_xz">
                <i class='db_tps db_i_xz'></i><span>星座</span>
              </span>
            </router-link>
          </div>
        </el-col> 
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link to="/xingshi" class='db_a'>
              <span class="db_span db_xs">
                <i class='db_tps db_i_xs'></i><span>姓氏</span>
              </span>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0px;     
    box-shadow: 0 0 0.625rem 0 rgba(155,143,143,0.6);
    -webkit-box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
    background: #fff;
    z-index: 999;
    font-family:微软雅黑; 
  } 
  .db_a{
    width: 100%;
    display: inline-block;
  }
  .db_span{
    width: 100%;
    height: 100%;
    text-align: center;
    display: inline-block;
  }
  .db_span span{
    display: inline-block;
    width: 100%;
    color: #000;
    font-size: 0.875rem; 
    position: relative;
    top: -2px;
  }
  .db_tps{ 
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.3125rem;
  } 
  .grid-content { 
    height: 3.125rem;
  }
  .db_i_home{
    background: url(./assets/ls.png) center center no-repeat;
    background-size: contain;
  }
  .router-link-active .db_i_home{
    background: url(./assets/ls1.png) center center no-repeat;
    background-size: contain;
  }  
  .router-link-active .db_home span{
    color: red !important;
  } 
  .db_i_tx{
    background: url(./assets/tq.png) center center no-repeat;
    background-size: contain;
  }
  .router-link-active .db_i_tx{
    background: url(./assets/tq1.png) center center no-repeat;
    background-size: contain;
  }  
  .router-link-active .db_tx span{
    color: #1296db !important;
  } 
  .db_i_xz{
    background: url(./assets/xz.png) center center no-repeat;
    background-size: contain;
  }
  .router-link-active .db_i_xz{
    background: url(./assets/xz1.png) center center no-repeat;
    background-size: contain;
  }  
  .router-link-active .db_xz span{
    color: #DA4041 !important;
  } 
  .db_i_xs{
    background: url(./assets/xs.png) center center no-repeat;
    background-size: contain;
  }
  .router-link-active .db_i_xs{
    background: url(./assets/xs1.png) center center no-repeat;
    background-size: contain;
  }  
  .router-link-active .db_xs span{
    color: #dad12a !important;
  } 
</style>