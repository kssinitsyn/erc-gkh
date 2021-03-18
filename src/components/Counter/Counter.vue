<template lang="pug">
.counter
  h1 Количество посещений
    br
    span {{ this.$store.getters.CURRENT(title) }}
</template>

<script>
import Modal from "@/components/Modal/Modal";

export default {
  name: "Counter",
  components: {
    Modal,
  },
  props: ["title"],
  mounted() {
    this.$store.commit("SET_COUNT", this.title);
  },
};
</script>

<style lang="scss" scoped>
@import "counter";
</style>