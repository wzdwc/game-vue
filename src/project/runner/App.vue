<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
System.import('../../assets/iconfont-color-green/iconfont.js') // 带颜色的图标文件
</script>
<style lang="less" rel="stylesheet/less">
@import '~vux/src/styles/reset.less';
@import "../../assets/less/reset.less";
@import "../../assets/less/global.less";
@import "../../assets/less/components.less";
@import "../../assets/less/vux-overwrite.less";
@import "assets/base.less";
</style>
