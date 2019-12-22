<template>
  <div>
    <search-bar />
    <div class="bg-white">
      <div class="center-box" style="padding: 20px 40px;">
        <div class="column-center-box" @click="toFindDrugs()">
          <img src="../assets/image/找药品.png" alt />
          <div class="f14 f-lgray">找药品</div>
        </div>
        <div class="column-center-box" @click="$router.push('/disease')">
          <img src="../assets/image/查疾病.png" alt />
          <div class="f14 f-lgray">查疾病</div>
        </div>
        <div class="column-center-box" @click="toFindOrder()">
          <img src="../assets/image/我的订单.png" alt />
          <div class="f14 f-lgray">我的订单</div>
        </div>
      </div>
      <p class="center-text">身体有问题，快速问医生</p>

      <mt-button
        type="primary"
        style="width: 90%;margin: 20px 0 20px 5%;"
        class="gr-btn f16"
        @click="$router.push('/askQuestion')"
      >快速咨询</mt-button>
    </div>

    <mt-swipe :show-indicators="false" class="swiper">
      <mt-swipe-item>
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1054854377,3721758655&fm=26&gp=0.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567497804450&di=9268603b401fc283a2c26a6ba362edca&imgtype=0&src=http%3A%2F%2Ffiles.cn-healthcare.com%2Fupload%2F20180819%2F61651534676768536.jpg"
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567497814663&di=5900a2f0996469a0d0ec31d74b008d7c&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140216%2F330636-14021620150474.jpg"
        />
      </mt-swipe-item>
    </mt-swipe>
    <!-- tab-container -->
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="type in articalType" :key="type" :id="type">
        <div @click="getArtical(type)">{{type}}</div>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="selected">
        <div v-for="artical in articals" :key="artical.id">
          <div style="padding: 20px 15px;" class="bg-white" @click="articalDetail(artical.id)">
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
              <h3>暂无文章...</h3>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import SearchBar from './components/search';
import { Navbar, TabItem } from 'mint-ui';
import { mapMutations } from 'vuex';
export default {
  components: {
    SearchBar,
    Navbar,
    TabItem
  },
  data () {
    return {
      articalType: [],
      articals: [],
      selected: '热门'
    }
  },
  async mounted () {
    await this.http
      .get('/adv/articleType')
      .then(data => {
        data.forEach(v => {
          this.articalType.push(v.type)
        })
        this.articalType.reverse()
      })
      .catch(err => err)
    await this.getArtical(this.selected)
  },
  methods: {
    ...mapMutations(['storeArticals']),
    getArtical (type) {
      this.http
        .get('/adv/articles', { type })
        .then(data => {
          if (!data) {
            this.articals = []
          } else {
            this.storeArticals(data)
            this.articals = [data]
          }
        })
        .catch(err => err)
    },
    articalDetail (id) {
      this.$router.push('/artical/' + id)
    },
    toFindDrugs () {
      this.$router.push({
        path: '/findDrugs'
      })
    },
    toFindOrder () {
      this.$router.push('/mineOrder')
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 120px;
  margin: 10px 0;
}
.swiper img {
  width: 100%;
  height: 120px;
}
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
