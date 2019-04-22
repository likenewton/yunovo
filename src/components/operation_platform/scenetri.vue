<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="设备筛选器">
          <el-input v-model="formInline.eq_filter" placeholder="设备筛选器"></el-input>
        </el-form-item>
        <el-form-item label="使用状态">
          <el-select v-model="formInline.use_status" placeholder="使用状态">
            <el-option label="全部" value="0"></el-option>
            <el-option label="使用中" value="1"></el-option>
            <el-option label="空闲" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" icon="el-icon-search" size="mini">重置</el-button>
          <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card clearfix" shadow="never">
      <el-button-group style="margin-bottom: 10px">
        <el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="triCreate">新建触发器</el-button>
        <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="batchDelete">批量删除</el-button>
      </el-button-group>
      <el-table ref="multipleTable" @selection-change="changeFun" :data="curTableData" border :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column fixed="left" type="selection" width="55"></el-table-column>
        <el-table-column show-overflow-tooltip label="DOI场景触发器名称" min-width="200">
          <template slot-scope="scope">
            <el-button type="text" size="mini">{{scope.row.doi_name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip prop="use_status" label="使用状态" min-width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="op_p" label="操作人" min-width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="up_date" label="更新时间" show-overflow-tooltip min-width="150" sortable></el-table-column>
        <el-table-column fixed="right" label="操作" width="260">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="createDoiApp(scope.$index, scope.row)">新建DOI应用</el-button>
            <el-button type="text" size="mini">编辑</el-button>
            <el-button type="text" size="mini" @click="singleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" class="clearfix">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import Api from 'assets/js/api.js'

export default {
  name: 'Home',
  data() {
    return {
      routeName: this.$route.name,
      pagesize: 10,
      currentPage: 1,
      choiceTableDate: [],
      tableData: Api.STATIC.tableData6,
      formInline: {

      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    changeFun(val) {
      this.choiceTableDate = val // 将选中的表格数据存储
    },
    triCreate() {
      this.$router.push({
        name: 'TRICREATE'
      })
    },
    // 单项删除
    singleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '还不能删除~哈哈'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 批量删除
    batchDelete() {
      if (!this.choiceTableDate.length) {
        // 啥也没有选中
        this.$message({
          type: 'warning',
          message: '您还没有选中任何内容'
        });
      } else {
        this.$confirm(`此操作将永久删除${this.choiceTableDate.length}项内容, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '还不能删除~哈哈'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    createDoiApp() {
      this.$router.push({
        name: 'DOICREATE'
      })
    },
  },
  computed: {
    curTableData() {
      return this.tableData.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    }
  }
}

</script>
<style lang="scss">
.el-pagination {
  float: right;
  margin: 25px 40px 0 0;
}

.el-table {
  .table-head {
    font-size: 14px !important;
  }

  td {
    * {
      font-size: 14px;
    }
  }
}

.el-date-editor .el-range-separator {
  width: auto;
}



// .el-dialog__header {
//   border-bottom: 1px solid #EBEEF5;
// }

</style>
