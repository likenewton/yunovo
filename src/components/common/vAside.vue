<template>
  <el-aside style="width: auto">
    <el-menu class="menu-container" :default-openeds="[asideFlag.title]" :collapse="asideCollapse" :collapse-transition="true" unique-opened router>
      <router-link :to="{name: 'sysmenu'}">
        <el-menu-item class="no-submenu">
            <i class="menu-icon el-icon-fontshouye"></i>
            <span class="title-text">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu :index="menuItem.title" v-for="menuItem in routes" :key="menuItem.title">
        <template slot="title">
          <i class="submenu-icon" :class="menuItem.icon"></i>
          <span class="title-text">{{menuItem.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name: submenuItem.name}" v-if="submenuItem.aside" v-for="submenuItem in menuItem.children" :key="submenuItem.name">
            <el-menu-item class="sub-item" :index="submenuItem.name" :class="{'is-active': routeName === submenuItem.name}">{{submenuItem.title}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <div class="collapse-control pointer" @click="setCollapse">
        <i v-show="!asideCollapse" class="el-icon-arrow-left"></i>
        <i v-show="asideCollapse" class="el-icon-arrow-right"></i>
      </div>
    </el-menu>
  </el-aside>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'vAside',
  data() {
    return {
      routes: this.$router.options.routes[0].children || [],
      routeName: this.$route.name
    }
  },
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
      'SET_ASIDEFLAG',
      'SET_ASIDECOLLAPSE'
    ]),
    setCollapse() {
      this.SET_ASIDECOLLAPSE({ asideCollapse: !this.asideCollapse })
    },
    testFn() {
      let routeName = this.routeName
      if (this.routes.length > 0) {
        this.routes.forEach((v1) => {
          let flag = false
          let child = {}
          v1.children.forEach((v2) => {
            if (v2.name === routeName) {
              flag = true
              child = Object.assign(child, v2)
              return false
            }
          })
          if (flag) {
            v1.child = child
            this.SET_ASIDEFLAG({ asideFlag: v1 })
          }
        })
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

.el-menu-item-group__title {
  padding-top: 0;
  padding-bottom: 0;
}

.no-submenu {
  padding-left: 20px;
  .menu-icon {
    font-size: 18px;
    color: #0eb78a;
  }
  .title-text {
    font-size: 16px;
  }
  &:hover {
    background: #163447;
  }
}

.el-aside.el-collapse--none {
  .el-menu--collapse {
    width: 0 !important;
  }
}

.el-aside {
  padding-top: 30px;
  background: #163447;
  color: #333;

  * {
    background: #163447;
    color: #fff;
  }

  i {
    color: #fff;
  }

  .title-text {
    margin-left: 8px;
  }

  .menu-container {
    padding-bottom: 70px;
  }

  .el-menu {
    width: 200px;
    border: none;
    min-height: 100%;

    .el-submenu {

      .el-submenu__title {
        background: #163447;

        i {
          font-size: 18px;
          color: #396f8b;
          margin-top: -2px;

          &.el-submenu__icon-arrow {
            color: #fff;
            margin-top: -9px;
          }
        }

        * {
          font-size: 16px;
        }
      }

      &.is-opened {

        .el-submenu__title {}
      }
    }

    .sub-item {
      height: 45px;
      line-height: 45px;
      padding-left: 50px !important;

      &:hover {
        background: #2c5067 !important;
      }

      &.is-active {
        background: #2c5067;
        color: #fff;
      }
    }

    &.el-menu--collapse {
      width: 60px;

      .title-text {
        display: none;
      }

      .submenu-icon {
        // font-size: 26px;
      }
    }

    &.el-menu--none {
      width: 0;
    }

  }

  .collapse-control {
    position: absolute;
    width: 100%;
    padding: 0 20px;
    bottom: 0;
    height: 50px;
    background: rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover {
      i {
        color: rgba(255, 255, 255, 1);
      }
    }

    i {
      font-weight: bold;
      background: transparent;
      color: rgba(255, 255, 255, 0.6);
    }
  }

}

</style>
