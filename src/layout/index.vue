<template>
  <div>
    <mt-tab-container v-model="page" style="padding-bottom: 55px;">
      <mt-tab-container-item id="首页">
        <keep-alive>
          <IndexPage v-if="page === '首页'"></IndexPage>
        </keep-alive>
      </mt-tab-container-item>
      <mt-tab-container-item id="问诊">
        <keep-alive>
          <InterrogationPage v-if="page === '问诊'"></InterrogationPage>
        </keep-alive>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <keep-alive>
          <MinePage v-if="page === '我的'"></MinePage>
        </keep-alive>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="page">
      <mt-tab-item id="首页">
        <div class="tab-icon">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>首页
      </mt-tab-item>
      <mt-tab-item id="问诊">
        <div class="tab-icon">
          <i class="fa fa-list-alt" aria-hidden="true"></i>
        </div>问诊
      </mt-tab-item>
      <mt-tab-item id="我的">
        <div class="tab-icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>个人
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
    IndexPage: () => import('../page/index'),
    InterrogationPage: () => import('../page/Interrogation'),
    MinePage: () => import('../page/Mine')
  },
  created () {
    if (this.$route.params.type) {
      this.page = this.$route.params.type
    }
  },
  data () {
    return {
      page: '首页'
    }
  }
}
</script>

<style>
.mint-tabbar {
  position: fixed !important;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: rgb(40, 184, 161);
}

.tab-icon {
  font-size: 20px;
  margin-bottom: 5px;
}
</style>

<style scoped>
</style>
