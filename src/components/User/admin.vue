<template>
  <div>

    <div style="padding:10px">
      <el-input style="width:250px;margin-left:40px " suffix-icon="el-icon-search" placeholder="请输入账号搜索" v-model="admin_id"></el-input>
      <el-input style="width:250px;margin-left:40px " suffix-icon="el-icon-search" placeholder="请输入门店搜索"v-model="admin_shop"></el-input>
      <el-button style="margin-left:30px" type="primary" @click="load">搜 索</el-button>
      <el-button style="margin-left:30px" type="warning" @click="reset">重 置</el-button>
    </div>


    <div style="margin:10px">
      <el-button type="primary" style="margin-left:40px " @click="hanleAdd">新 增<i class="el-icon-circle-plus"></i></el-button>

    </div>


    <el-table :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>



      <el-table-column prop="admin_id" label="员工账号" text-align:center  width="170">
      </el-table-column>
      <el-table-column prop="admin_name" label="员工姓名" text-align:center width="170">
      </el-table-column>

      <el-table-column prop="admin_shop" label="所属门店" text-align:center width="210">
      </el-table-column>

      <el-table-column prop="status" label="员工状态" width="150">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" @change="change(scope.row)" active-value="1"
                     inactive-value="0" active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="admin_password" label="员工密码" text-align:center width="170">
    </el-table-column>
      <el-table-column prop="admin_create_time" label="注册时间" text-align:center width="190">
      </el-table-column>


      <el-table-column fixed="right" label="操作" text-align:center width="200">

        <template slot-scope="scope">
          <el-button type="success" size="small" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm style="margin-left:5px"
                         confirm-button-text='确定'
                         cancel-button-text='再想想'
                         icon="el-icon-info"
                         icon-color="red"
                         title="您确定删除吗？"
                         @confirm="handleDelete(scope.row.id)"
          >

            <el-button type="danger" size="small" slot="reference" icon="el-icon-delete" >删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog title="管理员信息" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="80px" size="small">
        <el-form-item label="账号">
          <el-input v-model="form.username"  autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.username" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.username" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insert">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Client',
  data(){
    return {
      tableData:[

      ],
      total:0,
      pageNum:1,
      pageSize:5,
      username:"",
      nickname:"",
      address:"",
      dialogFormVisible:false,
      form:{},
      multipleSelection:[]
    }
  },
  created(){
    //请求分页查询数据
    //  this.load();
  },
  methods: {
    handleEdit(row){
      console.log(row);
      this.form=row;//把当前行的数据赋值给form
      this.dialogFormVisible=true;
    },

    //将请求数据封装为一个方法
    load() {
      //请求分页查询数据
      //fetch("http://localhost:8084/user/page?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"").then(res=>res.json()).then(res=>{
      //使用axios封装的request
      //使用地址this.request.get("http://localhost:8084/user/page",{
      //使用baseURL
      alert("eee");
      this.request.get("/customers").then((res)=>{
        alert("hello");
        console.log(res.data);
        this.roles=res.data
      }),(error)=>{
        console.log(err);
      }
    },

    reset(){
      this.username="";
      this.nickname="";
      this.address="";
      this.load();
    },
    hanleAdd(){
      this.dialogFormVisible = true;
      this.form={};//如果之前有填过值，可以置空
    },
    insert(){
      this.form.password="123456"
      this.request.post("/user",this.form).then(res=>{
        if(res){
          this.$message.success("保存成功");
          this.dialogFormVisible=false;
          this.load();
        }else{
          this.$message.error("保存失败");
        }
      })
    },
    handleDelete(id){
      this.request.delete("http://localhost:8084/user/"+id+"").then(res=>{
        if(res){
          this.$message.success("删除成功");
          this.load();
        }else{
          this.$message.error("删除失败");
        }
      })
    },
    handleSelectionChange(val){
      console.log(val);
      this.multipleSelection =val;
    },

  }

}
</script>