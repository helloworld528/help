<template>
  <div style="height:100%;">
    <el-container style="height: 100%; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Aside></Aside>
      </el-aside>

      <el-container>


        <el-header style="text-align: right; font-size: 12px; border-bottom: 4px solid #4389A2; line-height:60px">
          <Header name="欢迎登录"/>
        </el-header>


        <el-main>
          <!--当前页面的子路由将在<router-view/>中展示-->
        <router-view></router-view>
        </el-main>



      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Manage',
  components:{
    Aside,
    Header
  },
  //  以下<script>中代码不变，略。
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data(){
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(7).fill(item)
    }
  }
}
</script>
<style>
.el-main {
  text-align: left;
}
</style>
