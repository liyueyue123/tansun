<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 15px;"
  >
    <el-table-column
      label="OrderID"
      min-width="200"
    >
      <template slot-scope="{row}">
        {{ row.orderId | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="195"
      align="center"
    >
      <template slot-scope="{row}">
        ¥{{ row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="Status"
      width="100"
      align="center"
    >
      <template slot-scope="{row}">
        <el-tag :type="row.status | transactionStatusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {getTransactions} from '@/api/transactions'

export default {
  name: 'TransactionTable',
  filters: {
    transactionStatusFilter: (status) => {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter: (str) => str.substring(0, 30),
    // Input 10000 => Output "10,000"
    toThousandFilter: (num) => {
      return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }
  },
  data() {
    return {
      list: []

    }
  },

  created() {
    this.fetchData()
  },
  methods: {

    async fetchData() {
      const {data} = await getTransactions({ /* Your params here */})
      this.list = data.items.slice(0, 8)
    }
  }

}
</script>
