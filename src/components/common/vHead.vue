<template>
  <div class="inner-head">
    <i class="el-icon-menu pointer" @click="SET_ASIDECOLLAPSE({asideCollapse: !asideCollapse})"></i>
    <el-dropdown trigger="click" class="pointer fr">
      <span class="el-dropdown-link">
        Newton<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="width: 250px">
        <el-dropdown-item>Profile</el-dropdown-item>
        <el-dropdown-item>Settings</el-dropdown-item>
        <el-dropdown-item>Help</el-dropdown-item>
        <el-dropdown-item>Log out<i class="el-icon-error" style="margin-left: 148px"></i></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="avatar fr"></div>
    <el-badge :value="12" class="item fr pointer" type="success">
      <i class="el-icon-message"></i>
    </el-badge>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'vHead',
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'SET_ASIDECOLLAPSE'
    ])
  },
  computed: {
    ...mapState({
      asideCollapse: 'asideCollapse'
    }),
    choiceArticleTitle() {
      return this.titleList[this.TYPE].filter((v) => v.ID === this.ID)[0]
    }
  },
  mounted() {

  }
}

</script>
<style lang="scss">
.el-header {
  font-size: 12px;
  background-color: #EDEDED;
  border-bottom: 1px solid #D9DEE4;
  color: #333;
  line-height: 60px;

  .inner-head {
    .el-icon-menu {
      color: #5A738E;
      font-size: 25px;
      vertical-align: sub;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: pink;
      margin: 10px 10px 0 0;
    }

    .el-badge {
      display: flex;
      margin-right: 30px;
      margin-top: 20px;

      i {
        font-size: 20px;
      }
    }
  }
}

</style>
