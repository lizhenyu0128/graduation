<template>
  <div class="login_content">
    <header-bar title="注册" />
    <div class="login_main bg-white">
      <div class="login_item">
        <div>用户名</div>
        <div class="login_input">
          <input type="text" v-model="user_name" />
        </div>
      </div>
      <div class="login_item">
        <div>密码</div>
        <div class="login_input">
          <input type="password" v-model="user_pwd" />
        </div>
      </div>
      <div class="login_item">
        <div>账号</div>
        <div class="login_input">
          <input type="password" v-model="user_act" />
        </div>
      </div>
      <div class="login_item">
        <div>微信</div>
        <div class="login_input">
          <input type="password" v-model="user_wchat" />
        </div>
      </div>
      <div class="login_btn" @click="register()">立即注册</div>
      <span style="display:flex;justify-content:center;color:red;margin:10px auto;" ref="loginInfo"></span>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header';
import { Toast } from 'mint-ui';
import axios from 'axios';
export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      user_act: null,
      user_pwd: null,
      user_name: null,
      user_wchat: null
    }
  },
  methods: {
    register () {
      axios
        .post('http://149.129.33.213:8082/uaa/signUp', {
          name: this.user_name.toString(),
          phone: this.user_act.toString(),
          wChart: this.user_wchat.toString(),
          password: this.user_pwd.toString()
        })
        .then(result => {
          if (result.data.msg === 'success') {
            Toast({
              message: `注册成功`,
              position: 'bottom',
              duration: 1800
            })
            this.$router.push('/login')
          } else {
            this.$refs.loginInfo.innerText = '注册失败, 请重试';
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
