<template>
  <div>
    <div class="header column-center-box bg-white f16">我的</div>

    <div class="head-container bg-white" @click="toSetting()">
      <img
        v-show="personalInfo.name"
        src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3904945964,3619292289&fm=85"
        alt
      />
      <img v-show="personalInfo.name==null" src alt />
      <div class="f18">{{personalInfo.name?personalInfo.name:"请登录"}}</div>
    </div>

    <div class="item-container">
      <div class="item">
        <img src="../assets/image/我的问诊.png" alt />
        <div class="f14">我的问诊</div>
      </div>
      <div class="line"></div>
      <div class="item" @click="toMineOrder()">
        <img src="../assets/image/购买的药品.png" alt />
        <div class="f14">购买的药品</div>
      </div>
    </div>

    <div class="item-container">
      <div class="item">
        <img src="../assets/image/工具箱.png" alt />
        <div class="f14">工具箱</div>
      </div>
    </div>

    <div class="item-container">
      <div class="item">
        <img src="../assets/image/关注的医生.png" alt />
        <div class="f14">关注的医生</div>
      </div>
      <div class="line"></div>
      <div class="item" @click="$router.push('/collections')">
        <img src="../assets/image/我的收藏.png" alt />
        <div class="f14">我的收藏</div>
      </div>
    </div>

    <div class="item-container">
      <div class="item">
        <img src="../assets/image/我的病史.png" alt />
        <div class="f14">我的病史</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['personalInfo'])
  },
  methods: {
    toMineOrder () {
      this.$router.push({
        path: '/mineOrder'
      })
    },
    toSetting () {
      if (this.personalInfo.name) {
        this.$router.push('/setting')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.header {
  height: 50px;
}

.head-container {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
}

.head-container img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.item-container {
  margin-top: 10px;
  background-color: white;
  padding: 0 20px;
}

.item-container .line {
  width: 100%;
  height: 1px;
  background-color: rgb(235, 235, 235);
}

.item-container .item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

.item img {
  margin-right: 20px;
}
</style>
