<template>
  <div>
    <header-bar title="药品详情"></header-bar>

    <div class="top-container">
      <img :src="drug.imageUrl" alt />
      <div class="content">
        <div class="f18">{{drug.name}}</div>
        <div class="st">售价：￥{{drug.price}}</div>
        <div class="st">库存：{{drug.count}}</div>
        <div class="st">类型：{{drug.typeName}}</div>
      </div>
    </div>

    <div class="content-container">{{drug.comment}}</div>
    <div class="content-container">
      <div class="title">性状</div>
      {{drug.character}}。
    </div>

    <div class="content-container">
      <div class="title">成分</div>
      {{drug.ingredients}}
    </div>

    <div class="content-container">
      <div class="title">不良反应</div>
      {{drug.adrs}}。
    </div>

    <div class="buy-container">
      <mt-button type="primary" style="width: 90%;" class="gr-btn f16" @click="toDrugBuy()">去支付</mt-button>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header';
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      drug: {}
    }
  },
  mounted () {
    this.http
      .get('/drug/drug/' + this.$route.params.id)
      .then(data => {
        this.drug = data
      })
      .catch(err => err)
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toDrugBuy () {
      this.$router.push({
        path: '/drugBuy/' + this.$route.params.id
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

.top-container {
  display: flex;
  background-color: white;
  padding-bottom: 20px;
}

.top-container img {
  width: 150px;
  height: 150px;
}

.top-container .content {
  padding: 20px;
}

.top-container .content .st {
  margin-top: 14px;
  font-size: 14px;
  color: rgb(180, 180, 180);
}

.content-container {
  background-color: white;
  font-size: 14px;
  border-top: 1px solid rgb(235, 235, 235);
  padding: 10px 30px;
}

.content-container .title {
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: -5px;
}

.buy-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0;
}
</style>
