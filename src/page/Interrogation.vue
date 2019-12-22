<template>
  <div class="interrogation">
    <search-bar />
    <div class="header" @click="askQuestions()">
      <div class="img">
        <img src="../assets/image/问号.png" alt />
      </div>
      <div>
        <div class="text">快速提问</div>
        <div class="text">描述症状 自动匹配医生解答</div>
      </div>
    </div>
    <div class="question">
      <div class="title">
        <div>最新问答</div>
        <div @click="getQuestions()">
          <div>刷新</div>
          <img src="../assets/image/换一批.png" alt />
        </div>
      </div>
      <div>
        <div class="com" v-for="qa in QA" :key="qa.id">
          <div class="com_txt">患者问：{{qa.content}}</div>
          <div class="com_txt_doc">{{qa.reply}}</div>
          <div class="com_footer">
            <div class="com_footer_doc">
              <img :src="qa.headImage" alt />
              <span class="com_footer_info">{{qa.name}}</span>
            </div>
            <div class="com_footer_type">优质回答</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/search';
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      QA: []
    }
  },
  created () {
    this.getQuestions()
  },
  methods: {
    askQuestions () {
      this.$router.push('/askQuestion')
    },
    getQuestions () {
      this.http.get('/question/questions').then(data => {
        this.QA = data
      })
    }
  }
}
</script>

<style scoped>
div {
  background-color: #fff;
}
.interrogation {
  background-color: #f4f4f4;
}
.header {
  display: flex;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3px;
}
.img {
  margin-left: 8%;
  margin-right: 8%;
}
.text:nth-child(2) {
  font-size: 14px;
  margin-top: 5px;
  color: gray;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 3%;
  font-size: 14px;
}
.title img {
  width: 16px;
  height: 16px;
}
.title :nth-child(2) {
  width: 20%;
  display: flex;
  color: #28b8a1;
  justify-content: space-between;
  align-items: center;
}
.com {
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
}
.com_txt,
.com_txt_doc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 6px;
}
.com_txt_doc {
  color: gray;
  font-size: 14px;
}
.com_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.com_footer img {
  width: 40px;
  margin: auto 10px;
  border-radius: 50%;
}
.com_footer_info {
  color: gray;
  font-size: 12px;
}
.com_footer_doc {
  display: flex;
  align-items: center;
}
.com_footer_type {
  height: 24px;
  width: 60px;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  background-color: #ebebeb;
  color: gray;
}
</style>
