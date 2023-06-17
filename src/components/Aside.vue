<template>
  <el-menu :default-openeds="[]" style="min-height:100%;
      overflow-x:hidden"
           background-color=#5C258D
           text-color=white
           active-text-color=#ccc
  >
    <div style="height:60px; line-height:60px; text-align:center">
      <img src="../assets/logo.png" style="width:20px;position:relative;top:5px;margin-right:5px"/>
      <b style="color:white">寄存柜管理系统</b>

    </div>



    <el-menu-item index="0">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title"@click="menu('/homepage')">主页</span>

      </template>
    </el-menu-item>


    <el-submenu index="1">
      <template slot="title"><i class="el-icon-s-check"></i>用户管理</template>

      <el-menu-item index="1-1"@click="menu('/client')">客户信息</el-menu-item>
      <el-menu-item index="1-2"@click="menu('/admin')">管理员信息</el-menu-item>
    </el-submenu>



    <el-menu-item index="2">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span slot="title"@click="menu('/leaseorder')">订单管理</span>

      </template>
    </el-menu-item>


    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-map-location">

      </i>门店管理</template>

        <el-menu-item index="3-1"@click="menu('/shop')">寄存点管理</el-menu-item>

    </el-submenu>

    <el-submenu index="4">
      <template slot="title"><i class="el-icon-suitcase-1"></i>寄存柜管理</template>

        <el-menu-item index="4-1"@click="menu('/lockerinfor')">寄存柜信息管理</el-menu-item>
        <el-menu-item index="4-2"@click="menu('/shoplocker')">门店寄存柜管理</el-menu-item>
    </el-submenu>

    <el-submenu index="6">
      <template slot="title"><i class="el-icon-menu"></i>数据管理</template>

      <el-menu-item index="6-1">选项1</el-menu-item>
      <el-menu-item index="6-2">选项2</el-menu-item>
    </el-submenu>

  </el-menu>

</template>

<script>
export default {
  //输出组件
  name: "Aside",

  methods:{
    menu(commentName){
      this.$router.push(commentName);
    }
  }
}
</script>

<style scoped>
</style>
