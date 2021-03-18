<template lang="pug">
.root
  Header
  main
    Navigation
    section.content
      Breadcrumb
      Counter(title="claim")
</template>

<script>
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Counter from "@/components/Counter/Counter";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default {
  name: "Claim",
  data() {
    return {
      notifyTitle: "Заявки",
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