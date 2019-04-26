<template>
  <div class="el-main-inner">
    <el-card shadow="never">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="输入框：" class="input-item" size="small">
          <el-col :span="4">
            <el-input size="small" v-model="form.name" placeholder="请输入内容" :maxlength="5"></el-input>
          </el-col>
          <el-col :span="0.5"><span> - </span></el-col>
          <el-col :span="4">
            <el-input size="small" v-model="form.name" placeholder="禁用的" :disabled="true"></el-input>
          </el-col>
          <el-col :span="0.5"><span> - </span></el-col>
          <el-col :span="10">
            <el-input size="small" placeholder="请输入内容" v-model="form.input" class="input-with-select">
              <el-select size="small" v-model="form.select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button size="small" slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="下拉菜单：" size="small">
          <el-select size="small" v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择日期：" size="small">
          <el-col>
            <div>
              <el-date-picker size="small" v-model="form.value1" type="date" placeholder="开始时间"></el-date-picker>
              <span> - </span>
              <el-date-picker size="small" v-model="form.value5" type="date" placeholder="结束时间"></el-date-picker>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="选择时间：" size="small">
          <el-col>
            <div>
              <el-time-picker size="small" v-model="form.time" :picker-options="{}" placeholder="任意时间点">
              </el-time-picker>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="日期时间：" size="small">
          <el-col>
            <div>
              <el-date-picker size="small" v-model="form.value4" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="开关：" size="small">
          <el-switch size="small" v-model="form.delivery"></el-switch>
          </el-switch>
        </el-form-item>
        <el-form-item label="标签：" size="small">
          <el-tag size="small" type="success">标签二</el-tag>
          <el-tag size="small" type="info">标签三</el-tag>
          <el-tag size="small" type="warning">标签四</el-tag>
          <el-tag size="small" type="danger">标签五</el-tag>
        </el-form-item>
        <el-form-item label="复选框：" size="small">
          <el-checkbox-group size="small" v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="选中且禁用" name="type" disabled></el-checkbox>
            <el-checkbox label="禁用的" name="type" disabled></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框：" size="small">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            <el-radio label="禁用的" disabled></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="多行文本：" size="small">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="图片上传：" size="small">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="beforeAvatarUpload">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="拖拽上传：" size="small">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="数据转移：" size="small">
          <el-transfer v-model="value" :data="data"></el-transfer>
        </el-form-item>
        <el-form-item label="计数器：" size="small">
          <el-input-number size="small" v-model="form.num1"></el-input-number>
          <el-input-number size="small" v-model="form.num1" controls-position="right" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="按钮：" size="small">
          <el-button size="small">返回</el-button>
          <el-button size="small" type="primary">新增</el-button>
          <el-button size="small" type="success">新建</el-button>
          <el-button size="small" type="danger">删除</el-button>
          <el-button size="small" class="editer" type="primary">编辑</el-button>
          <el-button size="small" type="warning">验证</el-button>
          <el-button size="small" class="purple" type="primary">栅格化</el-button>
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
      dialogImageUrl: '',
      dialogVisible: false,
      data: this.generateData(),
      value: [1, 4],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: ['地推活动', '选中且禁用'],
        resource: '线下场地免费',
        desc: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: true,
        num1: 1,
        time: '',
        input: '',
        select: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }
  },
  methods: {
    generateData() {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data;
    },
    onSubmit() {
      console.log('submit!');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}

</script>
<style lang="scss">
.el-pagination {
  float: right;
  margin: 25px 40px 0 0;
}

.el-form {

  .input-item {
    .el-select .el-input {
      width: 100px;
    }
  }

}

</style>
