<template>
<div>
  <div class="header">
    <i class="fa fa-angle-left back-icon" aria-hidden="true" @click="back()"></i>
    找药品
  </div>

  <div class="search-container bg-white center-box" style="padding-bottom: 20px;">
    <i class="fa fa-search search-icon" aria-hidden="true"></i>
    <input class="search" type="text" placeholder="搜索药品">
  </div>

  <div class="classification-container">
    <div class="item rl bl" @click="toDrugsList(2)">
      <img src="../assets/image/儿童安全用药.png" alt="">
      <div class="content">
        <div class="f14">儿童安全用药</div>
        <div class="f10 ct">感冒、退烧止痛、止咳</div>
      </div>
    </div>
    <div class="item bl" @click="toDrugsList(1)">
      <img src="../assets/image/家庭常备用药.png" alt="">
      <div class="content">
        <div class="f14">家庭常备用药</div>
        <div class="f10 ct">消毒、伤口抗感染</div>
      </div>
    </div>
    <div class="item rl" @click="toDrugsList(4)">
      <img src="../assets/image/两性妇科用药.png" alt="">
      <div class="content">
        <div class="f14">两性妇科用药</div>
        <div class="f10 ct">痛经、阳痿、避孕药</div>
      </div>
    </div>
    <div class="item" @click="toDrugsList(3)">
      <img src="../assets/image/老人常用药.png" alt="">
      <div class="content">
        <div class="f14">老人常用药</div>
        <div class="f10 ct">高血压、糖尿病</div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    toDrugsList (type) {
      this.$router.push({
        path: '/drugsList/' + type
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

.search-container {
  padding: 5px 0;
  position: relative;
}
.search-icon {
  position: absolute;
  margin-left: 8%;
  font-size: 15px;
  line-height: 30px;
  color: rgb(40, 186, 173);
}
.search {
  margin-left: 5%;
  width: 90%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: rgb(235, 235, 235);
  padding: 0;
  outline: none;
  padding-left: 10%;
  box-sizing: border-box;
}

.classification-container {
  margin-top: 20px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
}

.classification-container .item {
  width: 50%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 5px;
}

.classification-container .item .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  margin-left: 5px;
}

.classification-container .item .content .ct {
  color: rgb(150, 150, 150);
}

.classification-container .item.rl {
  border-right: 1px solid rgb(235, 235, 235);
}

.classification-container .item.bl {
  border-bottom: 1px solid rgb(235, 235, 235);
}
</style>
