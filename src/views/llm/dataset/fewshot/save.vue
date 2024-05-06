<template>
  <el-dialog v-model="visible" :title="titleMap[mode]" size="70%" destroy-on-close @closed="$emit('closed')">
    <el-form ref="dialogForm" :model="form" :rules="rules" :disabled="mode == 'show'" label-width="6.25rem" label-position="left">
      <el-form-item prop="type" label="一级分类">
        <el-select v-model="form.firstCategory" placeholder="一级分类" clearable filterable style="width: 100%">
          <el-option v-for="item in firstOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item prop="label" label="二级分类">
        <el-select v-model="form.secondCategory" placeholder="二级分类" clearable filterable style="width: 100%">
          <el-option v-for="item in secondOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" label="Question">
        <el-input v-model="form.question" placeholder="Question" clearable type="textarea" :rows="6"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="Answer">
        <el-input v-model="form.answer" placeholder="Answer" clearable type="textarea" :rows="6"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="Explain">
        <el-input v-model="form.explain" placeholder="Explain" clearable type="textarea" :rows="3"></el-input>
      </el-form-item>
      <el-form-item prop="status" label="是否有效">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0" active-text="有效" inactive-text="无效" inline-prompt></el-switch>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取 消</el-button>
      <el-button v-if="mode !== 'show'" type="primary" :loading="isSaveing" @click="submit()">保 存</el-button>
    </template>
  </el-dialog>
</template>

<script>
import enums from '@/config/enums'

export default {
  name: 'fewshot-save',
  emits: ['success', 'closed'],
  components: {},
  data() {
    return {
      mode: 'add',
      titleMap: {
        add: '新增',
        edit: '编辑',
        show: '查看',
      },
      visible: false,
      isSaveing: false,
      //表单数据
      form: {
        id: '',
        firstCategory: '',
        secondCategory: '',
        question: '',
        answer: '',
        explain: '',
        status: 1,
        content: '',
      },
      //验证规则
      rules: {
        content: [{ required: true, message: '请输入角色名称' }],
      },
      //所需数据选项
      firstOptions: [],
      secondOptions: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    //显示
    open(mode = 'add') {
      this.mode = mode
      this.visible = true
      return this
    },
    //表单提交方法
    submit() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          this.isSaveing = true
          var res = await this.$API.demo.post.post(this.form)
          this.isSaveing = false
          if (res.code === 200) {
            this.$emit('success', this.form, this.mode)
            this.visible = false
            this.$message.success('操作成功')
          } else {
            this.$alert(res.message, '提示', { type: 'error' })
          }
        }
      })
    },
    //表单注入数据
    setData(data) {
      console.log(data)
      this.form.id = data.id
      this.form.firstCategory = data.firstCategory
      this.form.secondCategory = data.secondCategory
      this.form.question = data.question
      this.form.answer = data.answer
      this.form.explain = data.explain
      this.form.status = data.status
      this.form.content = data.content

      //可以和上面一样单个注入，也可以像下面一样直接合并进去
      //Object.assign(this.form, data)
    },
    formatJson(cellValue) {
      return JSON.stringify(cellValue, null, 2)
    },
    async getData() {
      var params = {
        groupId: 1,
      }
      var res = await this.$API.category.getCategoryByType.get(params)
      this.firstOptions = res.data

      var params = {
        groupId: 2,
      }
      var res = await this.$API.category.getCategoryByType.get(params)
      this.secondOptions = res.data
    },
  },
}
</script>

<style></style>
