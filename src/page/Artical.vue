<template>
  <div>
    <header-bar title="文章详情">
      <img v-show="!collFlag" src="../assets/image/收藏.png" @click="toggleCollect" alt />
      <img v-show="collFlag" src="../assets/image/收藏1.png" @click="toggleCollect" alt />
    </header-bar>
    <div class="artical_wrap bg-white">
      <div class="artical_title f18">{{artical.name}}</div>
      <div class="artical_author f16">-- {{artical.creator}}</div>
      <div class="artical_img">
        <img :src="artical.imageUrl" alt />
      </div>
      <div class="artical_content">{{artical.content}}</div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/header'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    HeaderBar
  },
  data () {
    return { artical: {}, collFlag: false, ...mapGetters(['personalInfo']) }
  },
  async created () {
    await this.http
      .get('/adv/article/' + this.$route.params.id)
      .then(data => {
        this.artical = data.pop()
      })
      .catch(e => e)

    let exist = this.personalInfo().collectArticals.some(art => {
      console.log(~~art.id === ~~this.$route.params.id)
      return ~~art.id === ~~this.$route.params.id
    })
    if (!exist) {
      this.collFlag = false
    } else {
      this.collFlag = true
    }
  },
  methods: {
    ...mapMutations(['collectArticals', 'cancelArticals']),
    toggleCollect () {
      this.collFlag = !this.collFlag
      if (this.collFlag) {
        this.collectArticals(this.artical)
      } else {
        this.cancelArticals(this.$route.params.id)
      }
    }
  }
}
</script>
<style scoped>
.artical_wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.artical_title {
  align-self: flex-start;
  font-weight: 550;
}
.artical_author {
  align-self: flex-end;
}
.artical_img img {
  width: 90%;
  display: block;
  margin: 10px auto;
  margin-bottom: 30px;
  border-radius: 6px;
}
.artical_content {
  line-height: 26px;
}
</style>
