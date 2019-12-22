<template>
  <div>
    <header-bar title="我的订单" />

    <div>
      <div class="tt">已购买</div>
      <div class="item" v-for="drug in drugs" :key="drug.id">
        <div class="left-container">
          <img :src="drug.image_url" alt />
        </div>
        <div class="right-container">
          <div class="buy_success">购买成功</div>
          <!-- <div class="name-container">
            <div>急支糖浆</div>
          </div>-->
          <div>地址：{{drug.address}}</div>
          <div>备注：{{drug.comment}}</div>
          <div class="amount">数量：X {{drug.count}}</div>
          <div class="total">
            <span>合计：￥{{drug.total_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header';
import { Toast } from 'mint-ui';
import { mapGetters } from 'vuex';
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      drugs: {},
      ...mapGetters(['personalInfo'])
    }
  },
  created () {
    this.http
      .get(`/drug/drugOrders/${this.personalInfo().id}?begin=1&size=20`)
      .then(data => {
        if (data.list.length === 0) {
          Toast({
            message: `暂无订单`,
            position: 'bottom',
            duration: 1800
          })
          this.$router.go(-1)
        } else {
          this.drugs = data.list
        }
      })
      .catch(err => err)
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
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

.tt {
  margin-left: 20px;
  color: rgb(40, 184, 161);
  font-size: 18px;
  font-weight: bolder;
  margin-top: 20px;
}

.item {
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}

.item .title {
  font-size: 14px;
  color: rgb(150, 150, 150);
}
.left-container {
  display: flex;
  align-items: center;
}
.item .left-container img {
  width: 100px;
  height: 100px;
}

.item .right-container {
  flex: 1;
  padding-left: 20px;
  font-size: 14px;
}

.item .right-container > div {
  margin-bottom: 10px;
}

.item .right-container .buy_success {
  font-size: 14px;
  color: #ff9800;
  text-align: right;
}

.item .right-container .name-container {
  display: flex;
  justify-content: space-between;
}

.item .right-container .amount {
  font-size: 12px;
  color: rgb(150, 150, 150);
  text-align: right;
}

.item .right-container .total {
  font-size: 13px;
  text-align: right;
}
</style>
