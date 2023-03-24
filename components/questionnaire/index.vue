<template>
  <section class="questionnaire">
        <svg class="exit"
        @click="dontShow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      <div class="anketa">
    <h1>Anketa</h1>
  </div>
      <div class="content">
      <form action="">
        <label for="fname">{{ $tt('Ady', 'Имя') }}</label>
        <input type="text" class="fname" required /><br><br>
        <label for="lname">{{ $tt('Familiya','Фамилия') }}</label>
        <input type="text" class="lname" required /><br><br>
        <label for="datemin">Date after 2023-01-01:</label>
        <input type="date" id="datemin" name="datemin" min="2023-01-02"><br><br>
        <label for="datemax">Date before 2024-01-01:</label>
        <input type="date" id="datemax" name="datemax" max="2024-12-31"><br><br>
        <label for="email">{{ $tt('Email','Почта') }}</label>
        <input type="email" class="email" /><br><br>
        <label for="phone">{{$tt('Telefon','Телефон')}}</label>
        <input type="number" id="phone" name="phone">
</form>
<button class="btn">{{$tt('Ugrat','Отправить')}}</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showReg() {
      this.$store.dispatch("showReg");
    },
    dontShow() {
      this.$store.dispatch("dontShow");
    },
  },
};
</script>

<style>
</style>