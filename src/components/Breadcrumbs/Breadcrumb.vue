<template lang="pug">
.breadcrumb
  ul.breadcrumb__list
    li.breadcrumb__item(
      v-for="(breadcrumb, idx) in breadcrumbList",
      :key="idx",
      @click="routeTo(idx)",
      :class="{ breadcrumb__linked: !!breadcrumb.link }"
    )
      | {{ breadcrumb.name }}
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link)
        this.$router.push(this.breadcrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "breadcrumb";
</style>