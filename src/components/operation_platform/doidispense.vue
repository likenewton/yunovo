<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="DOI应用分发计划">
          <el-input v-model="formInline.doi_plan" placeholder="DOI应用分发计划"></el-input>
        </el-form-item>
        <el-form-item label="DOI应用">
          <el-input v-model="formInline.doi_app" placeholder="DOI应用"></el-input>
        </el-form-item>
        <el-form-item label="DOI应用类型">
          <el-select v-model="formInline.doi_type" placeholder="DOI应用类型">
            <el-option label="全部" value="0"></el-option>
            <el-option label="MVP应用" value="1"></el-option>
            <el-option label="客制化应用" value="2"></el-option>
            <el-option label="业务应用" value="3"></el-option>
            <el-option label="系统应用" value="4"></el-option>
            <el-option label="自生成应用" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分发状态">
          <el-select v-model="formInline.dis_status" placeholder="分发状态">
            <el-option label="全部" value="0"></el-option>
            <el-option label="待发布" value="1"></el-option>
            <el-option label="待分发" value="2"></el-option>
            <el-option label="分发中" value="3"></el-option>
            <el-option label="已结束" value="4"></el-option>
            <el-option label="暂停" value="5"></el-option>
            <el-option label="测试中" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分发时间">
          <el-date-picker v-model="formInline.dis_date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" icon="el-icon-search">重置</el-button>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card clearfix" shadow="never">
      <el-button-group style="margin-bottom: 10px">
        <el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="createDisPlan">新建分发计划</el-button>
        <el-button size="mini" type="primary" icon="el-icon-tickets">发布计划</el-button>
        <el-button size="mini" type="primary" icon="el-icon-info">启动/停用</el-button>
        <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="batchDelete">批量删除</el-button>
      </el-button-group>
      <el-table ref="multipleTable" @selection-change="changeFun" :data="curTableData" border :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column fixed="left" type="selection" width="55"></el-table-column>
        <el-table-column show-overflow-tooltip label="DOI应用分发计划" min-width="150">
          <template slot-scope="scope">
            <el-button type="text" size="mini">{{scope.row.doi_plan}}</el-button>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip prop="doi_app" label="DOI应用" min-width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="doi_type" label="DOI应用类型" min-width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="eq_filter" label="设备筛选器" min-width="120"></el-table-column>
        <el-table-column show-overflow-tooltip prop="dis_status" label="分发状态" min-width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="dis_date" label="发布时间" show-overflow-tooltip min-width="180" sortable></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="mini">灰度测试</el-button>
            <el-button type="text" size="mini">编辑</el-button>
            <el-button type="text" size="mini" @click="singleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" class="clearfix">
      </el-pagination>
    </el-card>
    <el-dialog :visible.sync="dialogFormVisible" width='33%'>
      <span slot="title">新增</span>
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="开关代码">
          <el-input v-model="addForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开关类型">
          <el-input v-model="addForm.oc_type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="值类型">
          <el-select v-model="addForm.val_type" placeholder="请选择">
            <el-option label="单值" value="0"></el-option>
            <el-option label="复合值" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开关值">
          <el-select v-model="addForm.oc_val" placeholder="请选择">
            <el-option label="开" value="1"></el-option>
            <el-option label="关" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewInfo">保 存</el-button>
      </div>
    </el-dialog>
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
      tableData: Api.STATIC.tableData4,
      formInline: {
        code: '',
        des: '',
        effect: ''
      },
      addForm: {

      },
      dialogFormVisible: false
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
    // 新增一条信息
    addNewInfo() {
      // 确定新增
      this.dialogFormVisible = false
    },
    // 新建分发计划
    createDisPlan() {
      this.$router.push({ name: 'displancreate' })
    }
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
