<template>
  <div class="inner-footer">
    <span>Copyright 2014-2019©</span>
    <el-button type="text">&nbsp;深圳市云智易联科技有限公司&nbsp;</el-button>
    <span>版权所有</span>
  </div>
</template>
<script>

export default {
  name: 'vHead',
  data() {
    return {

    }
  },
  mounted() {

  }
}

</script>
<style lang="scss">

.el-footer {
  position: relative;
  padding: 0;
  border: 1px solid #D9DEE4;
  background: #EDEDED;
}

.inner-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  .el-button {
    line-height: unset !important;
  }
}

</style>
