<template>
  <el-aside style="width: auto">
    <el-menu :default-openeds="[asideFlag]" :collapse="asideCollapse" :collapse-transition="true" unique-opened router>
      <el-submenu :index="menuItem.title" v-for="menuItem in routes.children" :key="menuItem.name">
        <template slot="title">
          <i class="el-icon-message submenu-icon"></i>
          <span class="title-text">{{menuItem.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-if="submenuItem.title" v-for="submenuItem in menuItem.children" :index="submenuItem.path" :key="submenuItem.name" :class="{'is-active': routeName === submenuItem.name}">{{submenuItem.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <div class="collapse-control pointer" @click="SET_ASIDECOLLAPSE({asideCollapse: !asideCollapse})">
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
      routes: this.$router.options.routes[0] || [],
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
  mounted() {
    this.testFn()
  },
  methods: {
    ...mapMutations([
      'SET_ASIDEFLAG',
      'SET_ASIDECOLLAPSE'
    ]),
    testFn() {
      if (['OCINFO', 'ORGINFO', 'OCPUSH'].includes(this.routeName)) {
        this.SET_ASIDEFLAG({ asideFlag: '终端开关管理' })
      } else if (['DOILIST', 'DOICREATE', 'XMLCREATE', 'DOIDISPENSE', 'EQFILTER', 'FILTERCREATE', 'DISPLANCREATE', 'SCENETRI', 'TRICREATE'].includes(this.routeName)) {
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

  .title-text {
    margin-left: 8px;
  }

  .el-menu {
    width: 230px;
    border: none;
    height: 100%;

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
      height: 45px;
      line-height: 45px;
      &:hover {
        background: #20ba95 !important;
      }

      &.is-active {
        background: rgba(255, 255, 255, .05);
        color: #fff;
      }

    }

    &.el-menu--collapse {
      width: 68px;

      .title-text {
        display: none;
      }

      .submenu-icon {
        font-size: 26px;
      }
    }

  }

  .collapse-control {
    position: absolute;
    width: 100%;
    padding: 0 20px;
    bottom: 0;
    height: 50px;
    background: rgba(0, 0, 0, .3);
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
