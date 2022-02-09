<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body{
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  background: #F5F5F5;
}
#app{
  max-width: 500px;
  margin: 0 auto;
}
</style>
