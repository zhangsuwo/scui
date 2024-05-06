<template>
  <el-container>
    <el-header>
      <div class="left-panel">
        <el-button type="primary" icon="el-icon-upload">上传文件</el-button>
        <el-button type="primary" icon="el-icon-download">下载文件</el-button>
      </div>
    </el-header>
    <el-main class="nopadding">
      <scTable ref="table" :data="tableData" row-key="index" stripe highlightCurrentRow @row-click="rowClick">
        <el-table-column label="id" prop="id" width="100"></el-table-column>
        <el-table-column label="fristCategory" prop="fristCategory"></el-table-column>
        <el-table-column label="secondCategory" prop="secondCategory"> </el-table-column>
        <el-table-column label="question" prop="question" width="200"></el-table-column>
        <el-table-column label="answer" prop="answer"></el-table-column>
        <el-table-column label="explain" prop="explain"></el-table-column>
        <el-table-column label="status" prop="status"></el-table-column>
        <el-table-column label="createAt" prop="createAt"></el-table-column>
        <el-table-column label="操作" fixed="right" width="170">
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
  name: 'fewshot',
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
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          answer: 'A',
          explain: '解析:\n\n所求分配方案数为 $C_{5}^{2} A_{4}^{4}=240$.\n',
          status: 0,
          createAt: '2024/04/25 12:00:00',
        },
        {
          id: 2000002,
          fristCategory: '高阶能力-闲聊题',
          secondCategory: '无解问题',
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          answer: 'A',
          explain: '解析:\n\n所求分配方案数为 $C_{5}^{2} A_{4}^{4}=240$.\n',
          status: 0,
          createAt: '2024/04/25 12:00:00',
        },
        {
          id: 2000003,
          fristCategory: '高阶能力-闲聊题',
          secondCategory: '无解问题',
          question: '6. 将 5 名北京冬奥会志愿者分配到花样滑冰，短道速滑、冰球和冰显 4 个项目进行培训, 每名 志愿者只分配到 1 个项目, 每个项目至少分配 1 名志愿者, 则不同的分配方案共有（）\n\nA. 60 种\n\nB. 120 种\n\nC. 240 种\n\nD. 480 种\n',
          answer: '{\n  "name": "刘芳",\n  "age": 50,\n  "gender": "女",\n  "region": "郑州",\n  "interests": ["京剧", "股票"],\n  "behaviors": ["京剧沙家浜","查询腾讯股价"]\n}',
          explain: '解析:\n\n所求分配方案数为 $C_{5}^{2} A_{4}^{4}=240$.\n',
          status: 0,
          createAt: '2024/04/25 12:00:00',
        },
      ],
      groupData: [
        {
          id: 0,
          label: 'few_shot_examples.json',
        },
      ],
    }
  },
  methods: {
    groupClick(data) {
      this.form.content = this.tableData[0].content
    },
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
  },
}
</script>

<style></style>
