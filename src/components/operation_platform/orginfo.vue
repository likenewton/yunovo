<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="机构名称">
          <el-input v-model="formInline.name" placeholder="机构名称"></el-input>
        </el-form-item>
        <el-form-item label="开关代码">
          <el-input v-model="formInline.code" placeholder="开关代码"></el-input>
        </el-form-item>
        <el-form-item label="开关状态">
          <el-select v-model="formInline.effect" placeholder="开关状态">
            <el-option label="全部" value="0"></el-option>
            <el-option label="有效" value="1"></el-option>
            <el-option label="无效" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card clearfix" shadow="never">
      <el-button-group style="margin-bottom: 10px">
        <el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="openDialog('ADD')">新增</el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="batchDelete">批量删除</el-button>
      </el-button-group>
      <el-table ref="multipleTable" @selection-change="changeFun" :data="curTableData" border :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column fixed="left" type="selection" width="55"></el-table-column>
        <el-table-column show-overflow-tooltip prop="name" label="机构名称" min-width="100"></el-table-column>
        <el-table-column show-overflow-tooltip prop="j_code" label="机构代码" min-width="100"></el-table-column>
        <el-table-column show-overflow-tooltip prop="oc_code" label="开关代码" min-width="100"></el-table-column>
        <el-table-column show-overflow-tooltip prop="oc_type" label="开关类型" min-width="100"></el-table-column>
        <el-table-column show-overflow-tooltip prop="val_type" label="值类型"></el-table-column>
        <el-table-column show-overflow-tooltip prop="oc_val" label="开关值"></el-table-column>
        <el-table-column show-overflow-tooltip prop="effect" label="是否有效" show-overflow-tooltip min-width="80"></el-table-column>
        <el-table-column show-overflow-tooltip prop="create" label="创建者"></el-table-column>
        <el-table-column show-overflow-tooltip prop="c_date" label="创建时间" sortable min-width="180"></el-table-column>
        <el-table-column show-overflow-tooltip prop="modi_p" label="最近一次修改者" min-width="140"></el-table-column>
        <el-table-column show-overflow-tooltip prop="modi_date" label="最近一次修改时间" sortable width="200"></el-table-column>
        <el-table-column show-overflow-tooltip fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="singleUpdate(scope.$index, scope.row)">修改</el-button>
            <el-button type="text" size="mini" @click="singleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" class="clearfix">
      </el-pagination>
    </el-card>
    <el-dialog title="新增" :visible.sync="dialogFormVisible" width='33%'>
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="机构名称">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开关代码">
          <el-input v-model="addForm.oc_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开关类型">
          <el-input v-model="addForm.oc_type" autocomplete="off" disabled></el-input>
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
      tableData: Api.STATIC.tableData2,
      formInline: {
        name: '',
        code: '',
        effect: ''
      },
      addForm: {}, // 新增中保存的数据 | 选中的列表的所有数据
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
      // 将选中的表格数据存储
      console.log(val)
      this.choiceTableDate = val
    },
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
    singleUpdate(index, row) {
      this.dialogFormVisible = true
      this.addForm = row
    },
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
    openDialog(status) {
      if(status === 'ADD') {
        // 如果是新增要清空addForm数据
        this.addForm = {}
      }
      this.dialogFormVisible = true
    },
    // 新增一条信息
    addNewInfo() {
      // 确定新增
      this.dialogFormVisible = false
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

</style>
