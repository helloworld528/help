<template>
  <div>

<!--    <div style="padding:10px">-->
<!--      <el-input style="width:250px;margin-left:40px " suffix-icon="el-icon-search" placeholder="请输入账号搜索" v-model="admin_id"></el-input>-->
<!--      <el-input style="width:250px;margin-left:40px " suffix-icon="el-icon-search" placeholder="请输入门店搜索"v-model="admin_shop"></el-input>-->
<!--      <el-button style="margin-left:30px" type="primary" @click="load">搜 索</el-button>-->
<!--      <el-button style="margin-left:30px" type="warning" @click="reset">重 置</el-button>-->
<!--    </div>-->


    <div style="margin:10px">
      <el-button type="primary" style="margin-left:40px " @click="hanleAdd">新 增<i class="el-icon-circle-plus"></i></el-button>

    </div>


    <el-table :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>


      <el-table-column prop="Sort_id" label="型号ID" text-align:center  width="160">
      </el-table-column>
      <el-table-column prop="sort" label="类型" text-align:center width="160">
      </el-table-column>
      <el-table-column prop="capacity" label="容量" text-align:center width="120">
      </el-table-column>
      <el-table-column prop="length" label="长度" text-align:center width="120">
      </el-table-column>
      <el-table-column prop="width" label="宽度" text-align:center width="120">
      </el-table-column>
      <el-table-column prop="high" label="高度" text-align:center width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" text-align:center width="140">
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


    <el-dialog title="寄存柜信息" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="80px" size="small">
        <el-form-item label="类型">
          <el-input v-model="form.sort"  autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="容量">
          <el-input v-model="form.capacity" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="长度">
          <el-input v-model="form.length" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="宽度">
          <el-input v-model="form.width" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="高度">
          <el-input v-model="form.high" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price" autocomplete="off" style="width:85%" prefix-icon="el-icon-user"></el-input>
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
  name: 'LockerInfor',
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