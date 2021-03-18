<template lang="pug">
div
  router-view
  notifications(classes="curent-page-notify")
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
@import "scss/main";
</style>
