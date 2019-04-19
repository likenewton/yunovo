<template>
  <el-container style="height: 100%">
    <el-aside style="width: auto">
      <v-aside activeItem="终端开关管理"></v-aside>
    </el-aside>
    <el-container>
      <el-header>
        <v-head></v-head>
      </el-header>
      <el-main class="small-scroll">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>

export default {
  name: 'OPERATIONPLATFORM',
  data() {
    return {

    }
  }
}

</script>
<style lang="scss">
  .el-main {
    background: #f9f9f9;
  }
</style>
