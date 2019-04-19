<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span>新建XML应用</span>
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
        <span slot="label"><span class="red">*</span> DOI应用简介</span>
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="formInline.textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DoiAppXml</span>
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="formInline.xmlContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>返回</el-button>
        <el-button type="success" @click="formatXml">格式化XML</el-button>
        <el-button type="warning" @click="validateXml">验证XML</el-button>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import Api from 'assets/js/api.js'
import vkbeautify from 'vkbeautify'

export default {
  data() {
    return {
      routeName: this.$route.name,
      formInline: {
        xmlContent: `
          <App name="test_multipl_content" app_id="2019041918165600012" priority="101">
            <Scene frequency="immediate" trigger="$doc.acc_status==true" />
            <Content content_id="1"  background="#ff00ff" height="300" width="300" x="0" y="0">
                <Button onclick="$action.close" text="关闭" width="100" x="0" y="0" />
                <Text args="$doc.acc_status" text="第一个content获取到值为%s," x="0" y="120" />
                <Action name="close" type="@close" />
            </Content>
            <Content content_id="2" background="#00ff00" height="300" width="300" x="300" y="300">
                <Button onclick="$action.close" text="关闭" width="100" x="0" y="0" />
                <Text args="$doc.acc_status" text="第二个content获取到值为%s," x="0" y="120" />
                <Action name="close" type="@close" />
            </Content>
          </App>`,
        radio: '0'
      }
    }
  },
  mounted() {
    this.formatXml()
  },
  methods: {
    formatXml() {
      this.formInline.xmlContent = vkbeautify.xml(this.formInline.xmlContent).trim()
    },
    validateXml() {
      const result = Api.UNITS.validateXML(this.formInline.xmlContent)
      if (result.error_code === 1) {
        this.$notify.error({
          title: '错误',
          message: '您的xml格式有误'
        });
      } else if (result.error_code === 0) {
        this.$notify({
          title: '成功',
          message: '您的xml格式正确',
          type: 'success',
          duration: 2000
        });
      }
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
