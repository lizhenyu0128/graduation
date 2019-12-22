<template>
  <div class="listPanel bg-white">
    <slot></slot>
  </div>
</template>
<script>
import ListItem from './item';
export default {
  components: {
    ListItem
  },
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.listPanel {
  margin: 20px auto;
}
</style>
