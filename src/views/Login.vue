<template>

  <div class="login_container">

    <div class="login_box">
      <div style="margin:20px 0; text-align:center; font-size:24px;color: #2b4b6b;"><b>存知己行李寄存管理平台</b></div>
      <!-- 用户名-->

      <el-form ref="LoginFormRef" :model="loginForm" :rules="LoginFormRules" >
        <el-form-item prop="username">
          <el-input size="medium" style="margin:10px 0px; width: 300px;margin-left:40px" v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <!-- 密码-->
        <el-form-item prop="password">
          <el-input size="medium" style="margin:10px 0px; width: 300px;margin-left:40px" show-password v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <div style="margin:10px 0; text-align:center">
          <el-button type="primary" size="small" @click="login" style="width:26%" >  登录  </el-button>
          <el-button type="success" size="small" @click="zhuce" style="width:26%">  注册  </el-button>
        </div>
        <div style="margin-top: 3px; text-align:center ">
          <el-button @click="menu('/AdminLogin')" type="primary" plain style="width: 100%;margin-top:10px;margin-bottom:20px;">前往管理员端</el-button>
        </div>

      </el-form>
    </div>
  </div>

</template>

<script>


export default {
  name: "Login",
  computed: {
    admin() {
      return admin
    }
  },
  data() {
    return {
      loginForm: {
        username:'',
        password:''
      },
      LoginFormRules:{
        username:[
          { required: true, message: '请输入手机号码', trigger: 'blur' },
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods:{
    

    menu(commentName){
      this.$router.push(commentName);
    }


  }
}
</script>

<style scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}

.login_box{
  width: 380px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%,-50%)
}


</style>
