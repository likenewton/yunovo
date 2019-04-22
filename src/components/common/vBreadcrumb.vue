<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/operation_platform' }">DOI应用管理</el-breadcrumb-item>
    <el-breadcrumb-item>DOI应用列表</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'vBreadcrumb',
  data() {
    return {

    }
  }
}

</script>
<style lang="scss">

.el-breadcrumb {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  height: 46px;
  min-height: 46px;
  padding: 0 20px;
  border-bottom: 1px solid $borderColor;
  background: #fff;
  * {
    font-size: 14px;
  }
}
</style>
