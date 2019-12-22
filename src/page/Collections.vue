<template>
  <div>
    <header-bar title="我的收藏" />
    <div v-for="artical in articals" :key="artical.id">
      <div
        style="padding: 20px 15px;"
        class="bg-white"
        @click="$router.push('/artical/'+artical.id)"
      >
        <div class="between-box article">
          <div>
            <div style="padding:6px 0px;" class="f14">{{artical.name}}...</div>
            <div style="padding:6px 0px;" class="f12 f-lgray">{{artical.creator}}</div>
          </div>
          <div>
            <img class="article-img" :src="artical.imageUrl" alt />
          </div>
        </div>
      </div>
    </div>
    <div v-show="!articals.length">
      <div style="padding: 20px 15px;" class="bg-white">
        <div class="between-box">
          <h3>暂无收藏的文章...</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/header';
import { mapGetters } from 'vuex';
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      articals: [],
      ...mapGetters(['personalInfo'])
    }
  },
  created () {
    this.articals = this.personalInfo().collectArticals
  }
}
</script>
<style scoped>
.article {
  margin-top: 20px;
}
.article-img {
  width: 120px;
  height: 80px;
  margin-left: 20px;
  border-radius: 10px;
}
</style>
