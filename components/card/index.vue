<template>
  <div class="cards">
    <div class="img">
      <img :src="require(`~/assets/image/${info.img}`)" alt="" />
    </div>
    <div class="text">{{$tt(info.text_tm,info.text_ru, info.text_en) }}</div>
    <button class="btn1">{{$tt('Bronla','Бронь')}}</button>
  </div>
</template>

<script>
export default {
 
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>