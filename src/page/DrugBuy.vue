<template>
  <div>
    <header-bar title="支付" />

    <div class="top-container">
      <img :src="drug.imageUrl" alt />
      <div class="content">
        <div class="title">
          <div class="f20">{{drug.name}}</div>
          <div class="price">￥{{drug.price}}</div>
        </div>
        <div class="st">{{drug.character}}。</div>
      </div>
    </div>

    <div class="form">
      <mt-field label="收货地址" placeholder="收获地址" v-model="address"></mt-field>
      <mt-field label="数量" placeholder="请输入数量" type="number" v-model="count"></mt-field>
      <mt-field label="备注" placeholder="还有什么话给商家" v-model="comment"></mt-field>
    </div>

    <div class="buy-container">
      <mt-button type="primary" style="width: 90%;" class="gr-btn f16" @click="buy()">购买</mt-button>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header';
import { mapGetters } from 'vuex';
import axios from 'axios';
import { Toast } from 'mint-ui';
import qs from 'qs';
export default {
  components: {
    HeaderBar
  },
  mounted () {
    this.http
      .get('/drug/drug/' + this.$route.params.id)
      .then(data => {
        this.drug = data
      })
      .catch(err => err)
  },
  data () {
    return {
      drug: {},
      address: null,
      count: null,
      comment: null,
      ...mapGetters(['personalInfo'])
    }
  },
  methods: {
    buy () {
      try {
        let userId = this.personalInfo().id
        axios
          .post(
            'http://149.129.33.213:8082/drug/drugOrder',
            {
              userId,
              drugId: ~~this.$route.params.id,
              count: ~~this.count,
              address: this.address,
              comment: this.comment
            }
          )
          .then(result => {
            // TODO:result
            if (result.data.msg === 'success') {
              Toast({
                message: `支付成功`,
                position: 'bottom',
                duration: 1800
              })
              this.$router.go(-1)
            } else {
              Toast({
                message: `支付失败`,
                position: 'bottom',
                duration: 1800
              })
            }
          })
          .catch(err => err)
      } catch (err) {
        Toast({
          message: `支付失败`,
          position: 'bottom',
          duration: 1800
        })
      }
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

.top-container {
  display: flex;
  background-color: white;
  padding-bottom: 20px;
}

.top-container img {
  width: 120px;
  height: 120px;
}

.top-container .content {
  padding: 20px;
  flex: 1;
}

.top-container .content .title {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
}

.top-container .content .title .price {
  font-size: 18px;
  color: rgb(54, 182, 195);
}

.top-container .content .st {
  margin-top: 20px;
  font-size: 14px;
}

.form {
  background-color: white;
  padding: 0 20px;
}

.buy-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0;
}
</style>
