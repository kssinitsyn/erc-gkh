<template lang="pug">
.root
  Header
  main
    Navigation
    section.content
      Breadcrumb
      Counter(title="cite")
</template>

<script>
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Counter from "@/components/Counter/Counter";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default {
  name: "Site",
  data() {
    return {
      notifyTitle: "Сайт",
    };
  },
  components: {
    Breadcrumb,
    Counter,
    Navigation,
    Header,
  },
  created() {
    this.$notify({
      text: "Текушая страница: " + this.notifyTitle,
    });
  },
};
</script>