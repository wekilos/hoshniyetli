<template>
  <div class="nav_bar">
    <nav>
      <nuxt-link to="/">
        <div class="logo">
          <img src="./../assets/image/logo.svg" alt="" />
        </div>
      </nuxt-link>
      <ul>
        <li v-for="(e, i) in nav_links" :key="i">
          <nuxt-link :to="e.href">
            {{ $tt(e.name_tm, e.name_ru, e.name_en) }}
          </nuxt-link>
        </li>
      </ul>
      <div class="right">
        <div class="search">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#04319C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#04319C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="lang" v-for="(e,i) in locales" :key="i">
          <svg
            @click="$i18n.setLocale(e.code)"
            v-if="e.code != lang"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 31C24.2841 31 31 24.2841 31 16C31 7.71591 24.2841 1 16 1C7.71591 1 1 7.71591 1 16C1 24.2841 7.71591 31 16 31ZM16 31C20.0909 31 21.4545 24.1818 21.4545 16C21.4545 7.81818 20.0909 1 16 1C11.9091 1 10.5455 7.81818 10.5455 16C10.5455 24.1818 11.9091 31 16 31ZM2.36364 10.5455H29.6364H2.36364Z"
              fill="#04319C"
            />
            <path
              d="M16 31C24.2841 31 31 24.2841 31 16C31 7.71591 24.2841 1 16 1M16 31C7.71591 31 1 24.2841 1 16C1 7.71591 7.71591 1 16 1M16 31C20.0909 31 21.4545 24.1818 21.4545 16C21.4545 7.81818 20.0909 1 16 1M16 31C11.9091 31 10.5455 24.1818 10.5455 16C10.5455 7.81818 11.9091 1 16 1M2.36364 21.4545H29.6364M2.36364 10.5455H29.6364"
              stroke="#ffffff"
              stroke-width="3"
            />
          </svg>
          <p class="active" v-if="e.code != lang">
            {{ e.name }}
          </p>
    
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_links: [
        {
          href: "#main",
          name_tm: "Baş sahypa",
          name_ru: "Главное",
          name_en: "Home",
        },
        {
          href: "#about",
          name_tm: "Biz barada",
          name_ru: "О Нас",
          name_en: "About Us",
        },
        {
          href: "#services",
          name_tm: "Hyzmatlar",
          name_ru: "Дистрибюция",
          name_en: "Distribution",
        },
        {
          href: "#contact",
          name_tm: "Habarlaşmak",
          name_ru: "Связаться с нами",
          name_en: "Contact Us",
        },
      ],
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
    locales() {
      return this.$i18n.locales;
    },
  }
};
</script>

<style>

</style>