<template>
  <div>
    <el-row :gutter="10" style="margin-bottom:60px">
      <el-col :span="6">
        <el-card style="color:#409EFF">
          <div><i class="el-icon-user-solid"/>用户总量</div>
          <div style="padding:10px 0;text-align:center;font-weight:bold">{{total}}</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color:#F56C6C">
          <div><i class="el-icon-money"/>销售总量</div>
          <div style="padding:10px 0;text-align:center;font-weight:bold">￥1000000</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card  style="color:#67C23A">
          <div><i class="el-icon-bank-card"/>收益总额</div>
          <div style="padding:10px 0;text-align:center;font-weight:bold">￥30003</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card  style="color:#409EFF">
          <div style="color:#409EFF"><i class="el-icon-s-shop"/>门店总数</div>
          <div style="padding:10px 0;text-align:center;font-weight:bold">100</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="main" style="width:500px; height:400px"></div>
      </el-col>
      <el-col :span="12">
        <div id="pie" style="width:500px; height:400px"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name:"HomePage",
  data(){
    return{
      total:0
    }
  },
  mounted(){       //使用mounted的目的是为了等页面元素渲染之后再触发

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var charOption;
    charOption = {
      title: {
        text: '各季度会员统计',
        subtext: '趋势图',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ["第一季度","第二季度","第三季度","第四季度"]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: 'line'
        },
        {
          data: [],
          type: 'bar'
        }
      ]
    };
    var pieDom = document.getElementById('pie');
    var pieChart = echarts.init(pieDom);
    var pieOption;

    pieOption = {
      title: {
        text: '各季度会员统计',
        subtext: '比例图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          type: 'pie',
          radius: '70%',
          label: {
            normal: {
              show: true,
              position: 'inner',
              textStyle:{
                fontWeight:300,
                fontSize:16,
                color:"#fff"
              },
              formatter: '{d}%' //自定义显示格式(b:name, c:value, d:百分比)
            }
          },
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.request("http://localhost:8084/echarts/members").then(res=>{
      console.log(res.data);
      charOption.series[0].data=res.data;
      charOption.series[1].data=res.data;
      this.total=res.data[4];
      myChart.setOption(charOption);

      pieOption.series[0].data=[
        {name:"第一季度",value:res.data[0]},
        {name:"第二季度",value:res.data[1]},
        {name:"第三季度",value:res.data[2]},
        {name:"第四季度",value:res.data[3]}
      ];
      pieChart.setOption(pieOption);
    })

  }
}
</script>

<style scoped>

</style>