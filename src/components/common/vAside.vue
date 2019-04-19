<template>
  <el-menu :default-openeds="[asideFlag]" :collapse="asideCollapse" :collapse-transition="false" unique-opened router>
    <div class="logo-title"><i class="el-icon-info"></i><span class="title-text">Yunovo</span></div>
    <el-submenu :index="menuItem.title" v-for="menuItem in routes.children" :key="menuItem.name">
      <template slot="title">
        <i class="el-icon-message submenu-icon"></i>
        <span class="title-text">{{menuItem.title}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-if="submenuItem.title" v-for="submenuItem in menuItem.children" :index="submenuItem.path" :key="submenuItem.name" :class="{'is-active': routeName === submenuItem.name}">{{submenuItem.title}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'vAside',
  data() {
    return {
      routes: this.$router.options.routes[0] || [],
      routeName: this.$route.name
    }
  },
  props: ['activeItem'],
  mounted() {
    this.testFn()
  },
  computed: {
    ...mapState({
      asideCollapse: 'asideCollapse',
      asideFlag: 'asideFlag'
    })
  },
  methods: {
    ...mapMutations([
      'SET_ASIDEFLAG'
    ]),
    testFn() {
      if (['OCINFO', 'ORGINFO', 'OCPUSH'].includes(this.routeName)) {
        this.SET_ASIDEFLAG({ asideFlag: '终端开关管理' })
      } else if (['DOILIST', 'DOICREATE'].includes(this.routeName)) {
        this.SET_ASIDEFLAG({ asideFlag: 'DOI应用管理' })
      }
    }
  },
  watch: {
    '$route': function(newVal, oldVal) {
      this.routeName = newVal.name
      this.testFn()
    }
  }
}

</script>
<style lang="scss">
.el-aside {
  background: #2A3F54;
  color: #333;

  * {
    background: #2A3F54;
    color: #fff;
  }

  i {
    color: #fff;
  }

  .logo-title {
    text-align: center;
    color: #fff;
    margin: 20px 0;

    .title-text {
      font-size: 24px;
    }

    i {
      font-size: 35px;
      vertical-align: sub;
    }
  }

  .title-text {
    margin-left: 8px;
  }

  .el-menu {
    width: 250px;
    border: none;

    .el-submenu {
      border-right: 5px solid #2A3F54;

      .el-submenu__title {
        background: #2A3F54;
      }

      &.is-opened {
        border-right: 5px solid #1ABB9C;

        .el-submenu__title {
          text-shadow: rgba(0, 0, 0, .25) 0 -1px 0;
          background: linear-gradient(#334556, #2C4257), #2A3F54;
          box-shadow: rgba(0, 0, 0, .25) 0 1px 0, inset rgba(255, 255, 255, .16) 0 1px 0;
        }
      }
    }

    .el-menu-item {
      &:hover {
        background: rgba(255, 255, 255, .05);
      }

      &.is-active {
        background: rgba(255, 255, 255, .05);
        color: #fff;
      }

    }

    &.el-menu--collapse {
      width: auto !important;

      .title-text {
        display: none;
      }

      .submenu-icon {
        font-size: 26px;
      }
    }
  }

}

</style>
