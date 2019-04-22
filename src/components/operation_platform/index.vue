<template>
  <el-container style="height: 100%">
    <el-header>
      <v-head></v-head>
    </el-header>
    <el-container>
      <v-aside></v-aside>
      <el-container>
        <el-main class="small-scroll">
<!--           <v-breadcrumb></v-breadcrumb> -->
          <div class="main-inner">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer height="50px">
          <v-footer></v-footer>
        </el-footer>
      </el-container>
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
  padding: 0;
  background: #f5f5f5;
  .main-inner {
    padding: 20px;
    height: 100%;
  }
}

</style>
