<template>
  <div class="login_content">
    <header-bar title="登录">
      <div @click="$router.push('/register')">注册</div>
    </header-bar>
    <div class="login_main bg-white">
      <div class="login_item">
        <div>账号</div>
        <div class="login_input">
          <input type="text" v-model="user_act" />
        </div>
      </div>
      <div class="login_item">
        <div>密码</div>
        <div class="login_input">
          <input type="password" v-model="user_pwd" />
        </div>
      </div>
      <div class="login_btn" @click="login()">立即登录</div>
      <span style="display:flex;justify-content:center;color:red;margin:10px auto;" ref="loginInfo"></span>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header';
import { Toast } from 'mint-ui';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      user_act: 1,
      user_pwd: null,
      ...mapGetters(['personalInfo'])
    }
  },
  computed: {},
  methods: {
    ...mapMutations(['LOGIN']),
    login () {
      this.http
        .post('/uaa/login', {
          phone: this.user_act.toString(),
          password: this.user_pwd.toString()
        })
        .then(data => {
          if (!data) {
            this.$refs.loginInfo.innerText = '登录失败, 请重试';
          } else {
            this.LOGIN({
              id: data.id,
              name: data.name,
              phone: data.phone,
              w_chart: data.w_chart
            })
            Toast({
              message: `欢迎${data.name}`,
              position: 'bottom',
              duration: 1800
            })
            this.$router.push('/')
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
.login_main {
  padding: 10px 0;
  margin-top: 20px;
}
.login_item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
}
.login_item > div:nth-child(1) {
  width: 60px;
}
.login_input > input {
  width: 170px;
  height: 30px;
  background: #f4f4f4;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
}
input:focus {
  outline: none;
}
.login_btn {
  width: 80vw;
  height: 20px;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
  background-color: rgb(40, 184, 161);
}
</style>
