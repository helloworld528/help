<template>
  <div id="app">
    <el-cascader
        size="large"
        :options="options"
        v-model="selectedOptions"
        @change="addressChange">
    </el-cascader>
  </div>
</template>

<script>
import { regionData,CodeToText } from 'element-china-area-data'
export default {
  name:"City",
  data () {
    return {
      options: regionData,
      selectedOptions: []
    }
  },

  methods: {
    addressChange(arr) {
      console.log(arr);
      console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
    },
  }
}
</script>