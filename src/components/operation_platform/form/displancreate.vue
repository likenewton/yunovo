<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span>计划基础信息</span>
    </div>
    <el-form :inline="false" :model="formInline" ref="form" label-width="200px">
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用分发计划名称</span>
        <el-input v-model="formInline.name" placeholder="DOI应用分发计划名称"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 分发计划简介</span>
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="formInline.textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用</span>
        <el-select v-model="formInline.status" placeholder="DOI应用">
          <el-option label="应用1" value="0"></el-option>
          <el-option label="应用2" value="1"></el-option>
          <el-option label="应用3" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 分发时间区间</span>
        <el-date-picker v-model="formInline.dis_date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <div style="padding: 20px 15px;border-bottom: 1px solid #EBEEF5;margin-bottom: 20px">发布规则</div>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 服务内容</span>
        <el-select v-model="formInline.service" placeholder="服务内容">
          <el-option label="服务1" value="0"></el-option>
          <el-option label="服务2" value="1"></el-option>
          <el-option label="服务3" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 分发规则类型</span>
        <el-radio v-model="formInline.radio" label="0">设备筛选器 </el-radio>
        <el-radio v-model="formInline.radio" label="1">指定设备(SN)列表</el-radio>
      </el-form-item>
      <el-form-item v-show="formInline.radio === '0'">
        <span slot="label"> 选择设备筛选器</span>
        <el-select v-model="formInline.eq_filter" placeholder="设备筛选器" clearable>
          <el-option label="应用1" value="0"></el-option>
          <el-option label="应用2" value="1"></el-option>
          <el-option label="应用3" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-show="formInline.radio === '1'">
        <span slot="label"> 设备SN录入</span>
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="formInline.textarea" style="margin-bottom: 10px"></el-input>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="formInline.fileList">
          <el-button size="mini" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传文本文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button>返回</el-button>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      routeName: this.$route.name,
      formInline: {
        radio: '0',
        fileList: []
      }
    }
  },
  mounted() {

  },
  methods: {
    handleChange(file, fileList) {
      this.formInline.fileList = fileList.slice(-3);
    }
  }
}

</script>
<style lang="scss">
.red {
  color: #e92322;
}

.el-card__header {
  margin: 0 15px;
}

</style>
