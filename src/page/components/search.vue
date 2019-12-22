<template>
  <div class="search-container bg-white center-box">
    <i class="fa fa-search search-icon" aria-hidden="true"></i>
    <input class="search" type="text" :placeholder="placeholder" />
    <img v-show="showIcon" class="search-img" src="../../assets/image/消息铃铛.png" alt />
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: function () {
        return '搜索症状/疾病/药品/医生';
      }
    },
    showIcon: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.search-container {
  padding: 5px 0;
  position: relative;
}
.search-icon {
  position: absolute;
  margin-left: 10%;
  font-size: 15px;
  line-height: 30px;
  color: rgb(40, 186, 173);
}
.search {
  margin-left: 7%;
  width: 80%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: rgb(235, 235, 235);
  padding: 0;
  outline: none;
  padding-left: 10%;
  box-sizing: border-box;
}
.search-img {
  margin-right: 2.5%;
}
</style>
