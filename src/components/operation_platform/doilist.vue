<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-form class="search-form" :inline="true" :model="formInline">
        <el-form-item label="DOI应用">
          <el-input size="small" v-model="formInline.doi" placeholder="DOI应用"></el-input>
        </el-form-item>
        <el-form-item label="使用状态">
          <el-select size="small" v-model="formInline.status" placeholder="使用状态">
            <el-option label="全部" value="0"></el-option>
            <el-option label="空闲" value="1"></el-option>
            <el-option label="使用中" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item class="fr">
          <el-button size="small" type="primary" @click="createDoiApp">新建DOI应用</el-button>
          <el-button size="small" type="success" @click="createXmlApp">新建XML应用</el-button>
        </el-form-item>
      </el-form>
      <el-tabs>
        <el-tab-pane>
          <span slot="label"></i>MVP应用</span>
          <el-row :gutter="15">
            <el-col v-for="(item, index) in curPicData" style="margin-bottom: 15px; width: 200px" :key="index">
              <el-card shadow="hover" :body-style="{padding: '10px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 10px 0">
                  <el-tooltip content="这里面有很长的文本，hover查看全部信息" placement="top">
                    <span class="ellipsis small">这里面有很长的文本，hover查看全部信息</span>
                  </el-tooltip>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="picNum.length">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">客制化应用</span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">业务应用</span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">系统应用</span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">自生成应用</span>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import Api from 'assets/js/api.js'

export default {
  data() {
    return {
      routeName: this.$route.name,
      currentDate: new Date(),
      picNum: new Array(125),
      pagesize: 20,
      currentPage: 1,
      formInline: {
        doi: '',
        status: ''
      },
    }
  },
  mounted() {

  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    createDoiApp() {
      this.$router.push({
        name: 'doicreate',
        query: {
          type: 'create'
        }
      })
    },
    createXmlApp() {
      this.$router.push({
        name: 'xmlcreate',
        query: {
          type: 'create'
        }
      })
    }
  },
  computed: {
    curPicData() {
      return this.picNum.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    }
  }
}

</script>
<style lang="scss">
.el-pagination {
  float: right;
  margin: 25px 40px 0 0;
}

.el-card__body {
  img {
    width: 100%;
  }

  .small {
    font-size: 12px;
  }

  .search-form {
    margin-bottom: 30px;
  }
}

</style>
