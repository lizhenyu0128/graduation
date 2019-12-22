<template>
  <div :class="['bg-white',!next?'item':'item_more']" @click="eventListener()">
    <div class="item_left">{{title}}</div>
    <div class="item_right">
      <div class="info">{{value}}</div>
      <div class="icon_next" v-show="next">&nbsp;&nbsp;&nbsp;&gt;</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: {
      type: String,
      require: false
    },
    next: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  created () {
    this.clickEvent = this.$listeners ? this.$listeners.click : null
  },
  data () {
    return {
      clickEvent: null
    }
  },
  methods: {
    eventListener () {
      if (this.clickEvent) this.clickEvent()
      else console.log('该项未绑定事件')
    }
  }
}
</script>
<style scoped>
.item_more {
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid #e7e7e7;
  justify-content: space-between;
}
.item {
  display: flex;
  color: red;
  padding: 16px 20px;
  border-bottom: 1px solid #e7e7e7;
  justify-content: center;
}
.item_left {
  text-align: center;
}
.item_right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
