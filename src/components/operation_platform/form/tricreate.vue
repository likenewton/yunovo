<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span>新建场景触发器</span>
    </div>
    <el-form :inline="false" :model="formInline" ref="form" label-width="200px">
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI场景触发器名称</span>
        <el-input v-model="formInline.name" placeholder="DOI场景触发器名称"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI场景简介</span>
        <el-input type="textarea" :rows="3" placeholder="DOI场景简介" v-model="formInline.textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> DOI场景定义</span>
        
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 场景触发频率</span>
        <el-select v-model="formInline.frequency" placeholder="场景触发频率">
          <el-option label="立即触发" value="0"></el-option>
          <el-option label="按时间间隔触发  " value="1"></el-option>
          <el-option label="按次数间隔触发" value="2"></el-option>
          <el-option label="仅触发一次" value="3"></el-option>
        </el-select>
        <el-row style="margin-top: 18px">
          <el-col v-show="formInline.frequency === '2'">
            <span class="comment">每隔场景触发器事件满足&nbsp;</span>
            <el-input-number size="small" v-model="formInline.count" :min="1"></el-input-number>
            <span class="comment">&nbsp;次,触发一次</span>
          </el-col>
          <el-col v-show="formInline.frequency === '1'">
            <span class="comment">每隔&nbsp;</span>
            <el-input-number size="small" v-model="formInline.count" :min="1" :step="10"></el-input-number>
            <el-select v-model="formInline.time" placeholder="场景触发频率">
              <el-option label="秒" value="0"></el-option>
              <el-option label="分" value="1"></el-option>
              <el-option label="时" value="2"></el-option>
              <el-option label="天" value="3"></el-option>
              <el-option label="周" value="4"></el-option>
              <el-option label="月" value="5"></el-option>
              <el-option label="年" value="6"></el-option>
            </el-select>
            <span class="comment">&nbsp;触发一次</span>
          </el-col>
        </el-row>
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
        frequency: '0',
        time: '1',
        count: 1,
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
