<template lang="pug">
header.header
  router-link.header__link(to="/")
    img.header__logo(
      src="https://erc-gkh.ru/local/templates/gkh/img/logo.svg",
      alt="Logo"
    )
  .header__row
    .header__public-back(v-if="settingPage()")
      router-link.header__btn(to="/")
        span.material-icons.header__btn_back-icon arrow_back
        | Вернуться к публичной части

    .header__search(v-else)
      SearchSelect

    .header__logout
      button.header__btn.header__btn_logout(@click="logout()") Выход
        span.material-icons.header__btn_logout-icon logout
      input#humburger(type="checkbox")
      label.material-icons.humburger__label(
        for="humburger",
        @click="openNavigation()"
      )
  Modal
</template>

<script>
import SearchSelect from "@/components/SearchSelect/SearchSelect";
import Modal from "@/components/Modal/Modal";
export default {
  name: "Header",
  components: {Modal, SearchSelect },
  data() {
    return {
      testData: ["массив", "либо", "можно", "fetch"],
    };
  },
  methods: {
    settingPage() {
      if (this.$route.path == "/settings") {
        return true;
      } else {
        return false;
      }
    },
    openNavigation() {
      const navigationContainer = document.querySelector(".navigation");
      navigationContainer.classList.toggle("navigation__open");
    },
    logout() {
      const modal = document.querySelector('.modal')
      modal.classList.toggle('modal_hide')
      setTimeout(()=>{
        modal.classList.toggle('modal_hide')
      }, 1500)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "header";
</style>