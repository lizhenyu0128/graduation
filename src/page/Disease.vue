<template>
  <div>
    <header-bar title="疾病库" />
    <search
      placeholder="请输入要搜索的病症"
      :showIcon="false"
      @keyup.enter.native="$router.push('/answer')"
    />
    <mt-index-list>
      <mt-index-section index="A">
        <div @click="$router.push('/answer')">
          <mt-cell title="艾滋病"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="阿尔兹海默症"></mt-cell>
        </div>
      </mt-index-section>
      <mt-index-section index="B">
        <div @click="$router.push('/answer')">
          <mt-cell title="扁桃体"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="扁桃体炎"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="白化病"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="白癜风"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="白血病"></mt-cell>
        </div>
        <div @click="$router.push('/answer')">
          <mt-cell title="白塞病"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import HeaderBar from './components/header';
import Search from './components/search';
export default {
  components: {
    HeaderBar,
    Search
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
