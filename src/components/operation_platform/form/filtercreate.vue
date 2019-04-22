<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span>设备筛选器</span>
    </div>
    <el-form :inline="false" :model="formInline" ref="form" label-width="200px">
      <el-form-item>
        <span slot="label"><span class="red">*</span> 设备筛选器名称</span>
        <el-input v-model="formInline.filter_name" placeholder="设备筛选器名称"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 设备类型</span>
        <el-checkbox-group v-model="formInline.eq_type">
          <el-checkbox label="大屏车机"></el-checkbox>
          <el-checkbox label="后视镜"></el-checkbox>
          <el-checkbox label="行车记录仪"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 绑定状态</span>
        <el-select v-model="formInline.bind_status" placeholder="绑定状态">
          <el-option label="全部" value="0"></el-option>
          <el-option label="绑定" value="1"></el-option>
          <el-option label="未绑定" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 设备所属机构</span>
        <el-radio v-model="formInline.inst" label="0">自定义</el-radio>
        <el-radio v-model="formInline.inst" label="1">不限</el-radio>
        <el-transfer  v-show="formInline.inst === '0'" filterable filter-placeholder="搜索" v-model="value" :data="data" :titles="['可选机构', '已选机构']"></el-transfer>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 投放区域</span>
        <el-radio v-model="formInline.area" label="0">自定义投放区域</el-radio>
        <el-radio v-model="formInline.area" label="1">不限</el-radio>
        <el-card class="box-card"  v-show="formInline.area === '0'">
          <div slot="header" class="clearfix">
            <span>选择区域</span>
          </div>
          <div class="choice-citys">
            <div class="fbs-left">已选择：</div>
            <div class="fbs-right">
              <el-tag v-for="tag in tags" :key="tag.id" closable>{{tag.name}}</el-tag>
            </div>
          </div>
          <el-row>
            <div class="fbs-left">
              <el-select v-model="formInline.choiceCitys" placeholder="请选择省份">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="fbs-right">
              <div class="second-choice">
                <el-tag class="pointer" v-for="city in citys" :key="city.name" :type="city.type">{{city.name}}</el-tag>
              </div>
            </div>
          </el-row>
        </el-card>
      </el-form-item>
      <el-form-item>
        <span slot="label"><span class="red">*</span> 高级筛选</span>
        <el-radio v-model="formInline.h_filter" label="0">筛选</el-radio>
        <el-radio v-model="formInline.h_filter" label="1">不筛选</el-radio>
      </el-form-item>
      <el-form-item v-show="formInline.h_filter === '0'">
        <span slot="label"> 出货日期</span>
        <el-date-picker v-model="formInline.dis_date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <el-form-item v-show="formInline.h_filter === '0'">
        <span slot="label"> 微信公众号主体</span>
        <el-transfer filterable filter-placeholder="搜索" v-model="value" :data="data" :titles="['可选公众号', '已选公众号']"></el-transfer>
      </el-form-item>
      <el-form-item>
        <el-button>返回</el-button>
        <el-button type="warning">筛选</el-button>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      routeName: this.$route.name,
      formInline: {
        inst: '0',
        area: '0',
        h_filter: '0',
        eq_type: ['大屏车机'],
        choiceCitys: ''
      },
      value: [],
      data: this.generateData(),
      options: [{
        value: 'Hunan',
        label: '湖南'
      }, {
        value: 'Guandong',
        label: '广东'
      }],
      tags: [
        { id: '1', name: '北京' },
        { id: '2', name: '上海' },
        { id: '3', name: '广州' },
        { id: '4', name: '深圳' },
        { id: '5', name: '齐齐哈尔' },
        { id: '6', name: '长沙' },
        { id: '7', name: '武汉' },
        { id: '8', name: '重庆' },
        { id: '9', name: '中山' },
        { id: '10', name: '衡阳' },
        { id: '11', name: '杭州' },
        { id: '12', name: '黑龙江' },
        { id: '13', name: '呼和浩特' },
        { id: '14', name: '桂林' },
        { id: '15', name: '张家界' }
      ],
      citys: [
        { type: 'info', id: '11', name: '北京' },
        { type: 'info', id: '12', name: '上海' },
        { type: 'info', id: '13', name: '广州' },
        { type: 'success', id: '14', name: '深圳' },
        { type: 'info', id: '15', name: '齐齐哈尔' },
        { type: 'info', id: '16', name: '长沙' },
        { type: 'info', id: '17', name: '武汉' },
        { type: 'info', id: '18', name: '重庆' },
        { type: 'success', id: '19', name: '中山' },
        { type: 'info', id: '110', name: '衡阳' },
        { type: 'info', id: '111', name: '杭州' },
        { type: 'success', id: '112', name: '黑龙江' },
        { type: 'info', id: '113', name: '呼和浩特' },
        { type: 'info', id: '114', name: '桂林' },
        { type: 'info', id: '115', name: '张家界' }
      ]
    }
  },
  mounted() {

  },
  methods: {
    generateData() {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    }
  }
}

</script>
<style lang="scss">
.red {
  color: #e92322;
}

.el-card__header {
  margin: 0 15px;
}

.el-transfer-panel {
  width: 30%;
  min-width: 250px;
}

.el-date-editor .el-range-separator {
  width: auto;
}

.box-card {

  .choice-citys {
    padding: 0 0 20px;

    .el-tag {
      margin: 4px;
    }
  }

  .display-citys {
    .el-tag {
      margin: 4px;
    }
  }

  .second-choice {
    padding: 0 20px 20px;

    .el-tag {
      margin: 4px;
    }
  }
}

</style>
