<template lang="pug">
div
  multiselect(
    v-model="selected",
    :options="options",
    :close-on-select="true",
    placeholder="Поиск",
    selectLabel="",
    deselectLabel="",
    selectedLabel="Выбрано"
  )
    span(slot="noResult").
      Результат не найден, попробуйте изменить запрос.
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: ["Москва", "Самара", "Анапа"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
</style>