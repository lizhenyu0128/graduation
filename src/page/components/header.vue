<template>
  <div>
    <div :class="[!back?'title_bar_one':'title_bar','bg-white']">
      <div @click="$router.go(-1)" v-show="back">
        <i class="fa fa-angle-left back-icon"></i>
      </div>
      <div>{{title}}</div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    back: {
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
.back-icon {
  display: inline-block;
  width: 11px;
}
.title_bar {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
  border-bottom: 1px solid #f4f4f4;
}
.title_bar_one {
  display: flex;
  padding: 10px;
  justify-content: center;
  font-size: 16px;
  color: black;
  border-bottom: 1px solid #f4f4f4;
}
.title_bar :nth-child(2) {
  font-size: 16px;
  color: black;
}
</style>
