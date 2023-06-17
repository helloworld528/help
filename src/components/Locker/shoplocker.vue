<template>
  <div>

    <div style="padding:10px">

      <el-input style="width:250px;margin-left:40px " suffix-icon="el-icon-search" placeholder="请输入门店搜索"v-model="shop_shop"></el-input>
      <el-button style="margin-left:30px" type="primary" @click="load">搜 索</el-button>
      <el-button style="margin-left:30px" type="warning" @click="reset">重 置</el-button>
    </div>


    <div style="margin:10px">
      <el-button type="primary" style="margin-left:40px " @click="hanleAdd">新 增<i class="el-icon-circle-plus"></i></el-button>

    </div>


    <el-table :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>



      <el-table-column prop="Locker_id" label="寄存柜ID" text-align:center  width="140">
      </el-table-column>
      <el-table-column prop="Sort_id" label="型号" text-align:center  width="140">
      </el-table-column>
      <el-table-column prop="Shop_id" label="门店ID" text-align:center width="150">
      </el-table-column>
      <el-table-column prop="Shop_name" label="门店名称" text-align:center width="220">
      </el-table-column>
      <el-table-column prop="state" label="使用状态" text-align:center width="170">
      </el-table-column>


      <el-table-column fixed="right" label="操作" text-align:center width="200">

        <template slot-scope="scope">
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


    <el-dialog title="寄存柜添加" :visible.sync="dialogFormVisible" width="26%">
      <el-form label-width="90px" size="small">
        <el-form-item label="门店ID">
          <el-input v-model="form.username"  autocomplete="off" style="width:85%" prefix-icon="el-icon-plus"></el-input>
        </el-form-item>
        <el-form-item label="型号ID">
          <el-input v-model="form.username"  autocomplete="off" style="width:85%" prefix-icon="el-icon-plus"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.username" autocomplete="off" style="width:85%" prefix-icon="el-icon-plus"></el-input>
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
  name: 'ShopLocker',
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