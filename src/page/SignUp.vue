<template>
  <div>
    <div class="title">注册</div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="微信号" placeholder="请输入微信号" v-model="wchat"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <button class="btn" @click="signUp">注册</button>
  </div>
</template>

<script>
import http from '@/utils/http';
export default {
  data () {
    return {
      username: '',
      phone: '',
      wchat: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      http
        .post('/uaa/signUp', {
          name: this.username,
          phone: this.phone,
          wChart: this.wchat,
          password: this.password
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: rgb(40, 184, 161);
}

.btn {
  width: 90%;
  margin-left: 5%;
  background-color: rgb(40, 184, 161);
  margin-top: 30px;
  outline: none;
  border: none;
  color: white;
  border-radius: 10px;
  height: 40px;
}
</style>
