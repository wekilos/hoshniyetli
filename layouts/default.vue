<template>
  <div class="main">
    <div class="header">
      <nuxt />
    </div>
    <Questionnaire v-if="showRegState" />
  </div>
</template>
  
  <script>
import Header from "@/components/header.vue";
import Questionnaire from "@/components/questionnaire/index.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Questionnaire,

  },
  computed:{
    router_path(){
      return this.$route.path
    },
    showRegState(){
      return this.$store.getters.showReg;
    },
    // getYear(){
    //   return this.$store.getFullYear();
    // }
  },
};
</script>

<style>
</style>