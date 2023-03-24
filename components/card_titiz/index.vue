<template>
  <div class="cards_titiz">
    <div class="img">
      <img :src="require(`~/assets/image/${info.img}`)" alt=""/>
    </div>
   <div class="text">
    <p class="text"><b>{{ $tt(info.name_tm, info.text_ru, info.text_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.code_tm, info.code_ru, info.text_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.nype_tm, info.type_ru, info.text_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.net_weight_tm, info.net_weight_ru, info.net_weight_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.gross_weight_tm, info.gross_weight_ru, info.gross_weight_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.barcode_tm, info.barcode_ru, info.barcode_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.box_parameters_tm, info.box_parameters_ru, info.box_parameters_en) }}</b></p>
    <p class="text"><b>{{ $tt(info.box_in_package_tm, info.box_in_package_ru, info.box_in_package_en) }}</b></p>
    <!-- <div class="active"></div> -->

   </div>
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