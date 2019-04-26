<template>
  <div class="inner-head">
    <img class="logo" src="../../assets/images/LOGO-188X56.png">
    <i v-if="showMenu" class="el-icon-fontcaidan1 pointer menu-icon" @click="collapseAside"></i>
    <!-- <el-button class="fr exit-btn" size="mini" type="primary" icon="el-icon-circle-plus-outline">退出</el-button> -->
    <el-dropdown trigger="click" class="pointer fr">
      <span class="el-dropdown-link">
        Newton<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="width: 250px">
        <el-dropdown-item>Profile</el-dropdown-item>
        <el-dropdown-item>Settings</el-dropdown-item>
        <el-dropdown-item>Help</el-dropdown-item>
        <el-dropdown-item>Log out<i class="el-icon-error" style="margin-left: 128px"></i></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="avatar fr">
      <img src="../../assets/images/shouquan.png">
    </div>
    <el-badge v-if="messageCount" :value="messageCount" class="item fr pointer" type="danger">
      <i class="el-icon-fontziyuan"></i>
    </el-badge>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'vHead',
  data() {
    return {
      routename: this.$route.name,
      isShow: true
    }
  },
  props: {
    messageCount: {
      type: Number,
      default: 2
    },
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapMutations([
      'SET_ASIDECOLLAPSE'
    ]),
    collapseAside() {
      if (this.isShow && this.asideCollapse) {
        this.SET_ASIDECOLLAPSE({ asideCollapse: false })
        return
      }
      if (this.isShow) {
        $('.el-aside').addClass('el-collapse--none')
      } else {
        $('.el-aside').removeClass('el-collapse--none')
      }
      this.SET_ASIDECOLLAPSE({ asideCollapse: !this.asideCollapse })
      this.isShow = !this.isShow
    }
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
  background-color: #fff;
  border-bottom: 1px solid #D9DEE4;
  color: #333;
  line-height: 60px;

  .inner-head {
    padding: 0 20px 0 0;

    .logo {
      width: 132px;
      margin-top: -8px;
    }

    .favicon-wrapper {
      display: inline-block;
      font-size: 22px;
    }

    .menu-icon {
      color: #5A738E;
      font-size: 25px;
      vertical-align: middle;
      margin-left: 10px;
    }

    .avatar {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px 20px 0 0;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    .el-badge {
      display: flex;
      margin-right: 30px;
      margin-top: 20px;

      i {
        color: #c6c6c6;
        font-size: 24px;
      }
    }

    .exit-btn {
      margin-top: 15px;
      margin-left: 30px;

      * {
        font-size: 14px;
      }
    }
  }
}

</style>
