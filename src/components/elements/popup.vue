<template>
  <div class="el-main-inner">
    <el-card style="margin-bottom: 20px" shadow="never">
      <el-form ref="form" label-width="150px" size="small">
        <el-form-item label="加载动画">
          <el-button @click="openFullScreen">
            点我展示加载动画
          </el-button>
        </el-form-item>
        <el-form-item label="弹框消息">
          <el-button @click="open5">警告式弹框</el-button>
          <el-button @click="open6">确认式弹框</el-button>
        </el-form-item>
        <el-form-item label="右上角消息">
          <el-button plain @click="open7">成功</el-button>
          <el-button plain @click="open8">警告</el-button>
          <el-button plain @click="open9">消息</el-button>
          <el-button plain @click="open10">错误</el-button>
        </el-form-item>
        <el-form-item label="对话框">
          <el-button @click="dialogFormVisible = true">点我打开复杂弹框</el-button>
          <el-dialog title="标题" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="输入框" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="选择器" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </el-form-item>
        <el-form-item label="内容过多的显示hover">
          <el-tooltip content="Top center" placement="top">
            <el-button>简单的内容</el-button>
          </el-tooltip>
          <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">复杂的内容</el-button>
          </el-popover>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import Api from 'assets/js/api.js'

export default {
  name: 'Home',
  data() {
    return {
      routeName: this.$route.name,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted() {

  },
  methods: {
    openFullScreen() {
      const loading = Api.UNITS.loading(this)
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    open5() {
      this.$alert('您的流量已低于100M', '温馨提示', {
        confirmButtonText: '确定',
      })
    },
    open6() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    open7() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    open8() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    },
    open9() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },
    open10() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  }
}

</script>
<style lang="scss">
</style>
