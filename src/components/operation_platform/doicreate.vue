<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span>DOI应用基础信息</span>
    </div>
    <el-form :inline="false" :model="formInline" ref="form" label-width="200px">
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用名称</span>
        <el-input v-model="formInline.code" placeholder="DOI应用名称"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用图标</span>
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用类型</span>
        <el-select v-model="formInline.status" placeholder="DOI应用类型">
          <el-option label="MVP应用" value="0"></el-option>
          <el-option label="客制化应用" value="1"></el-option>
          <el-option label="业务应用" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用优先级</span>
        <el-col style="width: 230px">
          <el-select v-model="formInline.pri" placeholder="DOI应用优先级">
            <el-option label="被动触发" value="0"></el-option>
            <el-option label="主动触发" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col style="width: 215px">
          <el-popover placement="top-start" title="数值优先级" width="600" trigger="hover" content="填写的数值越大优先级越高，可重复，优先级划分用于解决DOI应用场景触发冲突问题主动触发DOI（如：微信接人）将强制覆盖被动触发DOI（如：流量预警），并关闭被动触发DOI弹窗 ">
            <el-input v-model="formInline.num" placeholder="填写0~9999区间的值" slot="reference"></el-input>
          </el-popover>
        </el-col>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI应用简介</span>
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="formInline.textarea"></el-input>
      </el-form-item>
      <div style="padding: 20px 15px;border-bottom: 1px solid #EBEEF5;margin-bottom: 20px">DOI应用定义</div>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 场景触发器</span>
        <el-select v-model="formInline.cj" placeholder="场景触发器">
          <el-option label="场景1" value="0"></el-option>
          <el-option label="场景2" value="1"></el-option>
          <el-option label="场景3" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 服务内容</span>
        <el-select v-model="formInline.service" placeholder="服务内容">
          <el-option label="服务1" value="0"></el-option>
          <el-option label="服务2" value="1"></el-option>
          <el-option label="服务3" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> ACC OFF弹窗关闭状态</span>
        <el-radio v-model="formInline.radio" label="0">关闭</el-radio>
        <el-radio v-model="formInline.radio" label="1">不关闭</el-radio>
        <span style="color: #606266; font-size: 14px">用于配置设备触发DOI后未关闭弹窗时ACC OFF是否强制关闭弹窗</span>
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
        radio: '0'
      }
    }
  },
  mounted() {

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
