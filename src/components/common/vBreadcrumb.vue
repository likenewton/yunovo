<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in breadData" :key="item.name">{{getBranchTitle(item.text)}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'vBreadcrumb',
  data() {
    return {
      breadData: []
    }
  },
  methods: {
    getBreadData() {
      this.breadData = [{
        text: this.asideFlag.title,
        name: this.asideFlag.name
      }, {
        text: this.asideFlag.child.title
      }]
    },
    // 获取相应状态的标题
    getBranchTitle(data) {
      if (typeof data === 'string') {
        return data
      } else {
        if (this.$route.query) {
          return data[this.$route.query.type]
        } else {
          return data['create']
        }
      }
    }
  },
  computed: {
    ...mapState({
      asideFlag: 'asideFlag'
    })
  },
  mounted() {
    this.getBreadData()
  },
  watch: {
    '$route': function(newVal, oldVal) {
      this.getBreadData()
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
  height: 35px;
  min-height: 35px;
  padding: 0 20px;

  // border-bottom: 1px solid $borderColor;
  // background: #fff;
  * {
    font-size: 14px;
  }
}

</style>
