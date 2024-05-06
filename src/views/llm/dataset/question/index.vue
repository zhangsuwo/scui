<template>
  <el-container>
    <el-header>
      <div class="left-panel">
        <el-button type="primary" icon="el-icon-upload">上传文件</el-button>
        <el-button type="primary" icon="el-icon-download">下载文件</el-button>
        <el-button type="danger" plain icon="el-icon-delete" :disabled="selection.length == 0" @click="batch_del"></el-button>
      </div>
      <div class="right-panel">
        <div class="right-panel-search">
          <el-input v-model="search.keyword" placeholder="角色名称" clearable></el-input>
          <el-button type="primary" icon="el-icon-search" @click="upsearch"></el-button>
        </div>
      </div>
    </el-header>
    <el-main class="nopadding">
      <scTable ref="table" :data="tableData" row-key="id" stripe @selection-change="selectionChange">
        <el-table-column label="id" prop="id" width="100"></el-table-column>
        <el-table-column label="fristCategory" prop="fristCategory"></el-table-column>
        <el-table-column label="secondCategory" prop="secondCategory"> </el-table-column>
        <el-table-column label="thirdCategory" prop="thirdCategory"> </el-table-column>
        <el-table-column label="type" prop="type"></el-table-column>
        <el-table-column label="question" prop="question" width="200"></el-table-column>
        <el-table-column label="options" prop="options"></el-table-column>
        <el-table-column label="answer" prop="answer"></el-table-column>
        <el-table-column label="createAt" prop="createAt"></el-table-column>
        <el-table-column label="状态" prop="status">
          <template #default="scope">
            <el-switch v-model="scope.row.status" :loading="scope.row.$switch_status" active-value="1" inactive-value="0" @change="changeSwitch($event, scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" align="right" width="170">
          <template #default="scope">
            <el-button-group>
              <el-button text type="primary" size="small" @click="table_show(scope.row, scope.$index)">查看</el-button>
              <el-button text type="primary" size="small" @click="table_edit(scope.row, scope.$index)">编辑</el-button>
              <el-popconfirm title="确定删除吗？" @confirm="table_del(scope.row, scope.$index)">
                <template #reference>
                  <el-button text type="primary" size="small">删除</el-button>
                </template>
              </el-popconfirm>
            </el-button-group>
          </template>
        </el-table-column>
      </scTable>
    </el-main>
  </el-container>

  <save-dialog v-if="dialog.save" ref="saveDialog" @success="handleSaveSuccess" @closed="dialog.save = false"></save-dialog>
</template>

<script>
import saveDialog from './save'

export default {
  name: 'question',
  components: {
    saveDialog,
  },
  data() {
    return {
      dialog: {
        save: false,
      },
      tableData: [
        {
          id: 2000001,
          fristCategory: '高阶能力-闲聊题',
          secondCategory: '无解问题',
          thirdCategory: 'search_poi',
          type: '单选题',
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          options: [{ A: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { B: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { C: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { D: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }],
          answer: 'A',
          status: '1',
          createAt: '2024/04/25 12:00:00',
        },
        {
          id: 2000002,
          fristCategory: '高阶能力-闲聊题',
          secondCategory: '无解问题',
          thirdCategory: 'search_poi',
          type: '单选题',
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          options: [{ A: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { B: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { C: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { D: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }],
          answer: 'A',
          status: '1',
          createAt: '2024/04/25 12:00:00',
        },
        {
          id: 2000003,
          fristCategory: '高阶能力-闲聊题',
          secondCategory: '无解问题',
          thirdCategory: 'search_poi',
          type: '单选题',
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          options: [{ A: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { B: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { C: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }, { D: 'As a pirate captain, what would you say to your crew to motivate them to search for hidden treasure?' }],
          answer: 'A',
          status: '1',
          createAt: '2024/04/25 12:00:00',
        },
      ],
      selection: [],
      search: {
        keyword: null,
      },
      groupData: [
        {
          id: 0,
          label: '基础能力-闲聊题.json',
        },
        {
          id: 1,
          label: '基础能力-基础题.json',
        },
        {
          id: 2,
          label: '基础能力-选择题.json',
        },
        {
          id: 3,
          label: '学科综合-mmlu.json',
        },
      ],
    }
  },
  methods: {
    //添加
    add() {
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open()
      })
    },
    //编辑
    table_edit(row) {
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open('edit').setData(row)
      })
    },
    //查看
    table_show(row) {
      this.dialog.save = true
      this.$nextTick(() => {
        this.$refs.saveDialog.open('show').setData(row)
      })
    },
    //删除
    async table_del(row) {
      var reqData = { id: row.id }
      var res = await this.$API.demo.post.post(reqData)
      if (res.code === 200) {
        this.$refs.table.refresh()
        this.$message.success('删除成功')
      } else {
        this.$alert(res.message, '提示', { type: 'error' })
      }
    },
    //批量删除
    async batch_del() {
      this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？如果删除项中含有子集将会被一并删除`, '提示', {
        type: 'warning',
      })
        .then(() => {
          const loading = this.$loading()
          this.$refs.table.refresh()
          loading.close()
          this.$message.success('操作成功')
        })
        .catch(() => {})
    },
    //表格选择后回调事件
    selectionChange(selection) {
      this.selection = selection
    },
    //表格内开关
    changeSwitch(val, row) {
      row.status = row.status === 1 ? '0' : '1'
      row.$switch_status = true
      setTimeout(() => {
        delete row.$switch_status
        row.status = val
        this.$message.success('操作成功')
      }, 500)
    },
    //搜索
    upsearch() {},
    //根据ID获取树结构
    filterTree(id) {
      var target = null
      function filter(tree) {
        tree.forEach((item) => {
          if (item.id === id) {
            target = item
          }
          if (item.children) {
            filter(item.children)
          }
        })
      }
      filter(this.$refs.table.tableData)
      return target
    },
    //本地更新数据
    handleSaveSuccess(data, mode) {
      if (mode === 'add') {
        this.$refs.table.refresh()
      } else if (mode === 'edit') {
        this.$refs.table.refresh()
      }
    },
  },
}
</script>

<style></style>
