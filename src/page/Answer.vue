<template>
  <div>
    <header-bar title="推荐回答" />
    <div class="doc_info">
      <div class="doc_img"></div>
      <div>
        <div class="doc_name">
          王医生&nbsp;&nbsp;
          <span>
            <img src="../assets/image/star.png" />&nbsp;4.8
          </span>
        </div>
        <div class="doc_job">xx医院 xx科 主治医生</div>
      </div>
      <div class="doc_agr">
        <img src="../assets/image/点赞.png" alt /> 666
      </div>
    </div>
    <div>
      <div class="md" v-for="anwser in anwsers" :key="anwser.id">
        <div class="md_title">{{anwser.title}}</div>
        <div class="md_spec">{{anwser.spec}}</div>
      </div>
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
      anwsers: [
        {
          title: '症状分析',
          spec:
            '此症状属于XXXXXX,应该XXXXXXXX和XXXXXXXXXXXX,不能XXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXX。'
        },
        {
          title: '治疗方法',
          spec:
            '平时XXXXXX, XXXXXXXXX,应当XXX,多注意XXXXXXXX, XXXXXX, XXXX,XXXXXXXXXXXXXXXXXXXXXXX.'
        },
        {
          title: '注意事项',
          spec:
            '平时XXXXXX, XXXXXXXXX,应当XXX,多注意XXXXXXXX, XXXXXX, XXXX,XXXXXXXXXXXXXXXXXXXXXXX.'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped>
div {
  background-color: #fff;
}
.interrogation {
  background-color: #f4f4f4;
}
.title_bar {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
  border-bottom: 1px solid #f4f4f4;
}
.title_bar :nth-child(2) {
  font-size: 16px;
  color: black;
}
.doc_info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #f4f4f4;
}
.doc_img {
  width: 60px;
  height: 60px;
  border: 1px gray solid;
  border-radius: 50%;
  position: relative;
}
.doc_img::after {
  content: "医";
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 13px;
  left: 17px;
}
.md {
  border: 1px solid #f4f4f4;
  width: 94%;
  padding: 10px;
}
.md_title {
  font-size: 20px;
  color: rgb(40, 184, 161);
  padding-bottom: 10px;
}
.md_spec {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
