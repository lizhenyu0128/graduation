<template>
  <div>
    <div class="header">
      <i class="fa fa-angle-left back-icon" aria-hidden="true" @click="back()"></i>
      {{ headerName }}
    </div>

    <div class="list">
      <div
        class="item"
        v-for="(item, index) in drugsList"
        :key="index"
        @click="toDrugDetail(item.id)"
      >{{item.name}}</div>
      <div class="item" v-show="drugsList.length==0">暂无药品...</div>
    </div>
    <!-- <mt-spinner v-show="loading" type="snake"></mt-spinner> -->
  </div>
</template>

<script>
import http from '@/utils/http';
import { Spinner } from 'mint-ui';
export default {
  components: {
    Spinner
  },
  data () {
    return {
      headerName: '',
      drugsList: [],
      loading: true
    }
  },
  mounted () {
    let type = this.$route.params.type
    if (type === '1') {
      this.headerName = '家庭常备药';
    }
    if (type === '2') {
      this.headerName = '儿童安全用药';
    }
    if (type === '3') {
      this.headerName = '老人常用药';
    }
    if (type === '4') {
      this.headerName = '两性妇科用药';
    }
    this.loading = true
    http
      .get(`/drug/drug/type/${type}/?begin=1&size=20`)
      .then(res => {
        let drugsList = []
        res.page.list.forEach(v => {
          drugsList.push({
            id: v.id,
            name: v.name
          })
        })
        this.drugsList = drugsList
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        return err
      })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toDrugDetail (id) {
      this.$router.push({
        path: '/drugDetail/' + id
      })
    }
  }
}
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
}

.back-icon {
  position: absolute;
  left: 10px;
  font-size: 22px;
}

.list {
  background-color: white;
  padding: 0 20px;
}

.list .item {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  font-size: 14px;
}

.list .item:last-child {
  border: none;
}
</style>
