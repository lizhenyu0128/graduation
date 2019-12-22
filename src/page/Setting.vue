<template>
  <div>
    <header-bar title="设置" />
    <list-panel>
      <list-item title="昵称" :value="personalInfo.name" @click="verifyInfo('name')"></list-item>
      <list-item title="账号" :value="personalInfo.phone" @click="verifyInfo('phone')"></list-item>
      <list-item title="微信" :value="personalInfo.w_chart"></list-item>
    </list-panel>
    <list-panel>
      <list-item title="去好评"></list-item>
      <list-item title="推荐给朋友"></list-item>
      <list-item title="关于我们"></list-item>
    </list-panel>
    <list-panel>
      <list-item title="退出登录" :next="false" @click="logout()"></list-item>
    </list-panel>
  </div>
</template>
<script>
import HeaderBar from './components/header';
import ListPanel from './components/list';
import ListItem from './components/item';
import { mapGetters, mapMutations } from 'vuex';
import { MessageBox, Toast } from 'mint-ui';
import axios from 'axios';
export default {
  components: {
    HeaderBar,
    ListPanel,
    ListItem
  },
  computed: {
    ...mapGetters(['personalInfo'])
  },
  methods: {
    ...mapMutations(['LOGOUT', 'setLoginInfo']),
    logout () {
      this.LOGOUT()
      this.$router.push('/login')
    },
    verifyInfo (info) {
      try {
        let name = this.personalInfo.name
        let id = this.personalInfo.id
        MessageBox.prompt(`确认修改信息`)
          .then(({ value }) => {
            axios
              .post('http://149.129.33.213:8082/uaa/user/' + id, {
                name,
                [info]: value
              })
              .then(result => {
                if (result.data.msg === 'success') {
                  this.setLoginInfo({ info, value })
                  Toast({
                    message: `修改成功`,
                    position: 'bottom',
                    duration: 1800
                  })
                }
              })
              .catch(err => err)
          })
          .catch(er => er)
      } catch (error) {
        Toast({
          message: `修改出错，请重试`,
          position: 'bottom',
          duration: 1800
        })
      }
    }
  }
}
</script>
<style scoped>
</style>
