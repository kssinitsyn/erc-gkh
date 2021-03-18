<template lang="pug">
nav.navigation(v-bind:class="{ navigation__open: test() }")
  .navigation__header
    p.navigation__title
      | ЕРЦ ЖКХ
    p.navigation__subtitle
      | Тестовое задание
  ul.navigation__body
    router-link.navigation__item(
      :to="item.path",
      v-if="isItSettingPage() === true",
      v-for="item in settings",
      :key="item.title"
    )
      span.material-icons.navigation__icon {{ item.icon }}
      span {{ item.title }}

    router-link.navigation__item(
      :to="item.path",
      v-if="isItSettingPage() === false",
      v-for="item in defaultMenu",
      :key="item.title"
    )
      span.material-icons.navigation__icon {{ item.icon }}
      span {{ item.title }}
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      defaultMenu: [
        {
          title: "Главная",
          path: "/",
          icon: "home",
        },
        {
          title: "Сайт",
          path: "/site",
          icon: "language",
        },
        {
          title: "Заявки",
          path: "/claim",
          icon: "assignment",
        },
        {
          title: "Настройки",
          path: "/settings",
          icon: "settings",
        },
      ],
      settings: [
        {
          title: "Группы пользователей",
          path: "/",
          icon: "group_add",
        },
        {
          title: "Пользователи",
          path: "/",
          icon: "group",
        },
      ],
    };
  },
  methods: {
    isItSettingPage() {
      if (this.$route.path == "/settings") {
        return true;
      } else {
        return false;
      }
    },
    test() {
      return this.$store.getters.NAVIGATION;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "navigation";
</style>