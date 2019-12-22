<template>
  <div>
    <div class="title_bar">
      <div @click="$router.push('/')">取消</div>
      <div>快速提问</div>
      <div @click="submitForm()">完成</div>
    </div>
    <div class="info_bar">
      <div>
        <img src="../assets/image/医院.png" alt />
        <span>全三甲医院医师</span>
      </div>
      <div>
        <img src="../assets/image/回复.png" alt />
        <span>三小时专业回复</span>
      </div>
      <div>
        <img src="../assets/image/隐私.png" alt />
        <span>隐私保护</span>
      </div>
    </div>
    <div>
      <textarea
        name="introduction"
        :placeholder="introduction"
        v-model="content"
        id="introduction"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="upload_content">
      <input type="file" name ref="photots" multiple hidden @change="addFiles" />
      <div class="upload_file" @click="selectPhotos"></div>

      <span class="upload_info">
        你上传的附件仅对解答问题的医生可见
        上传九张
      </span>
    </div>
    <ul ref="filesList"></ul>
  </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      content: '',
      introduction:
        '请描述你的年龄、 性别、症状及就诊经历，便于医生进行准确分析，我们会保证你的隐私安全'
    }
  },
  created () {},
  methods: {
    ...mapGetters(['personalInfo']),
    selectPhotos () {
      this.$refs.photots.click()
    },
    addFiles (event) {
      [...event.srcElement.files].forEach(file => {
        let li = document.createElement('li')
        li.innerText = file.name
        this.$refs.filesList.appendChild(li)
      })
    },
    submitForm () {
      try {
        let userId = this.personalInfo().id
        axios
          .post('http://149.129.33.213:8082/question/question', {
            userId,
            content: this.content
          })
          .then(result => {
            if (result.data.msg === 'success') {
              Toast({
                message: `提交成功`,
                position: 'bottom',
                duration: 1800
              })
              this.$router.push({
                name: 'HelloWorld',
                params: { type: '问诊' }
              })
            } else {
              Toast({
                message: `提交失败`,
                position: 'bottom',
                duration: 1800
              })
            }
          })
          .catch(err => err)
      } catch (error) {
        Toast({
          message: `提交失败`,
          position: 'bottom',
          duration: 1800
        })
      }
    }
  }
}
</script>

<style scoped>
div {
  background-color: #fff;
}
ul {
  padding: 0 20px 10px 20px;
  margin: 0px 20px;
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
.info_bar {
  display: flex;
  font-size: 14px;
  align-items: center;
  color: gray;
  padding: 10px;
  justify-content: space-between;
}
.info_bar img {
  width: 14px;
}
#introduction {
  background: #f4f4f4;
  resize: none;
  width: 92%;
  display: block;
  margin: 0 auto;
}
.upload_content {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.upload_info {
  display: inline-block;
  width: 55vw;
  font-size: 12px;
  color: gray;
}
.upload_file {
  display: inline-block;
  position: relative;
  width: 30vw;
  height: 30vw;
  background: rgb(244, 244, 244);
}
.upload_file::after {
  content: "添加照片/视频";
  font-size: 12px;
  color: gray;
  height: 20px;
  position: absolute;
  top: 80px;
  left: 18px;
}
.upload_file::before {
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(187, 187, 187);
  position: absolute;
  top: 24px;
  left: 36px;
  outline: 20px solid rgb(187, 187, 187);
  outline-offset: -38px;
}
</style>
