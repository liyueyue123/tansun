export default {
  data() {
    return {
      queryParams: {},
      addVisible: false,
      editVisible: false,
      viewVisible: false,
      loading: false,
      editComp: null,
      tableData: [],
      pagination: {
        currentPage: 1, pageSize: 10, total: 0
      }

    }
  },
  methods: {

    tableRowClassName(ss) {
      if (ss.rowIndex % 2 == 0) {
        return 'warning-row';
      }
      return '';
    },

    startSearch() {
      this.pagination.currentPage = 1
      this.loadData()
    },

    resetSearch() {
      this.queryParams = {}
      this.pagination.currentPage = 1
      this.loadData()
    },

    onAdd() {
      this.addVisible = true
    },

    onEdit(row) {
      this.editVisible = true
      this.$nextTick(() => {
        // @ts-ignore
        this.$refs.editComp.showInfo(row)
      })
    },

    onView(row) {
      this.viewVisible = true
      this.$nextTick(() => {
        // @ts-ignore
        this.$refs.viewComp.showInfo(row)
      })
    },

    onAdded() {
      this.$message(`添加成功`)
      this.addVisible = false
      this.loadData()
    },

    onEdited() {
      this.$message(`修改成功`)
      this.editVisible = false
      this.loadData()
    },

    onDel(row) {
      let _this = this;
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
      }).then(() => {
        // @ts-ignore
        _this.delete(row._id).then((res) => {
          this.$message({
            type: 'success', message: '操作成功!'
          });
          _this.loadData()
        }).catch(() => {
          this.$message.error('删除失败')
        })
      }).catch(() => {
        this.$message({
          type: 'info', message: '已取消删除'
        });
      });
    },

    loadData() {
    }
  }


}
