<template>
  <section class="titiz">
    <nav>
      <nuxt-link to="/">
        <div class="logo">
          <img src="./../../assets/image/logo2.svg" alt="" />
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
        <!-- <div class="search">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#04319C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="lang" v-for="(e, i) in locales" :key="i">
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
              fill="#ffffff"
            />
            <path
              d="M16 31C24.2841 31 31 24.2841 31 16C31 7.71591 24.2841 1 16 1M16 31C7.71591 31 1 24.2841 1 16C1 7.71591 7.71591 1 16 1M16 31C20.0909 31 21.4545 24.1818 21.4545 16C21.4545 7.81818 20.0909 1 16 1M16 31C11.9091 31 10.5455 24.1818 10.5455 16C10.5455 7.81818 11.9091 1 16 1M2.36364 21.4545H29.6364M2.36364 10.5455H29.6364"
              stroke="#04319C"
              stroke-width="2"
            />
          </svg>
          <p class="active" v-if="e.code != lang">
            {{ e.name }}
          </p>
        </div> -->
        <div class="lang">
      <button class ="dropbtn"> {{ lang }}</button>
      <div class ="lang-content">
        <div v-for="(e, i) in locales"
        :key="i">
<button @click="$i18n.setLocale(e.code)" v-if="e.code != lang">{{ e.name }}</button>
</div>

      </div>
     </div>
      </div>
    </nav>
    <!-- <section class="distribyutor">
      <h1>{{ $tt("Biziň Assortimentimiz","Наш Ассортимент") }}</h1>
      <div class="img">
        <img src="./../../assets/image/0962bead3fddb10b7592ba56873d7ed2_1 1.svg" alt="">
        <img src="./../../assets/image/image 15.svg" alt="">
        <img src="./../../assets/image/image 16.svg" alt="">
        <img src="./../../assets/image/image 20.svg" alt="">
        <img src="./../../assets/image/0962bead3fddb10b7592ba56873d7ed2_1 1.svg" alt="">
        <img src="./../../assets/image/image 16.svg" alt="">
      </div>

    </section> -->
    <div id="washing_powder">
      <h1>{{ $tt("Ýuwujy serişdeler", "Стиральные порошки", "Washing powders") }}</h1>
      <img src="./../../assets/image/image 29 (3).svg" alt="">
      <img src="./../../assets/image/image 30 (1).svg" alt="">
      <img src="./../../assets/image/image 31 (1).svg" alt="">
      <img src="./../../assets/image/image 32 (1).svg" alt="">
      <img src="./../../assets/image/image 33.svg" alt="">
      <img src="./../../assets/image/image 34.svg" alt="">
      <img src="./../../assets/image/image 35.svg" alt="">
      <img src="./../../assets/image/image 36.svg" alt="">
      <img src="./../../assets/image/image 37.svg" alt="">
      <img src="./../../assets/image/image 38.svg" alt="">
      <img src="./../../assets/image/image 39.svg" alt="">
      <img src="./../../assets/image/image 40.svg" alt="">
      
      <!-- <nuxt-link to="/card"> -->
        <!-- <div class="card_titiz">
        <Card_titiz v-for="(e, i) in titiz_card" :key="i" :info="e" />
      </div> -->
      <!-- </nuxt-link> -->
    </div>
    <footer>
      <div class="footer">
        <div class="img_f">
          <img src="./../../assets/image/logo2.svg" alt="" />
        </div>
        <div class="contacts">
          <h1>{{ $tt("Habarlaşmak üçin:", "Cвязаться с нами:", "Contact us:") }}</h1>
          <p>
            <svg
              width="35"
              height="35"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6769 5.20833C16.6943 5.40684 17.6294 5.90443 18.3624 6.63743C19.0954 7.37043 19.593 8.30548 19.7915 9.32291M15.6769 1.04166C17.7907 1.27649 19.7619 2.2231 21.2667 3.72605C22.7716 5.229 23.7207 7.19897 23.9582 9.3125M22.9165 17.625V20.75C22.9177 21.0401 22.8582 21.3273 22.742 21.5931C22.6258 21.8589 22.4554 22.0975 22.2416 22.2936C22.0278 22.4897 21.7754 22.639 21.5006 22.732C21.2258 22.8249 20.9346 22.8594 20.6457 22.8333C17.4403 22.485 14.3613 21.3897 11.6561 19.6354C9.13923 18.0361 7.00539 15.9023 5.40608 13.3854C3.64564 10.6679 2.55008 7.57395 2.20816 4.35416C2.18213 4.06611 2.21636 3.77579 2.30868 3.50169C2.401 3.22759 2.54938 2.97572 2.74438 2.7621C2.93937 2.54849 3.17671 2.37782 3.44128 2.26096C3.70585 2.1441 3.99185 2.0836 4.28108 2.08333H7.40608C7.91161 2.07836 8.4017 2.25737 8.785 2.58701C9.1683 2.91665 9.41866 3.37442 9.48941 3.875C9.62131 4.87507 9.86592 5.857 10.2186 6.80208C10.3587 7.17492 10.3891 7.58012 10.306 7.96966C10.2229 8.35921 10.0299 8.71678 9.74983 9L8.42691 10.3229C9.90978 12.9308 12.0691 15.09 14.6769 16.5729L15.9998 15.25C16.283 14.9699 16.6406 14.7769 17.0302 14.6938C17.4197 14.6108 17.8249 14.6411 18.1977 14.7812C19.1428 15.1339 20.1248 15.3785 21.1248 15.5104C21.6308 15.5818 22.093 15.8367 22.4233 16.2266C22.7536 16.6164 22.9292 17.1141 22.9165 17.625Z"
                stroke="#04319C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            +99365668354
          </p>
          <p>
            <svg
              width="35"
              height="35"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.875 10.4167C21.875 17.7083 12.5 23.9583 12.5 23.9583C12.5 23.9583 3.125 17.7083 3.125 10.4167C3.125 7.93026 4.11272 5.54569 5.87087 3.78754C7.62903 2.02939 10.0136 1.04167 12.5 1.04167C14.9864 1.04167 17.371 2.02939 19.1291 3.78754C20.8873 5.54569 21.875 7.93026 21.875 10.4167Z"
                stroke="#04319C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 13.5417C14.2259 13.5417 15.625 12.1426 15.625 10.4167C15.625 8.69078 14.2259 7.29167 12.5 7.29167C10.7741 7.29167 9.375 8.69078 9.375 10.4167C9.375 12.1426 10.7741 13.5417 12.5 13.5417Z"
                stroke="#04319C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{
              $tt(
                "Aşgabat ş., G.Bäşimow köçesi,j. 93",
                "г. Ашхабад, улица Г. Башимова, в. 93",
                "apt 93 G.Bashimov street, Ashgabat ş. "
              )
            }}
          </p>
          <p>
            <svg
              width="35"
              height="35"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16683 4.16667H20.8335C21.9793 4.16667 22.9168 5.10417 22.9168 6.25V18.75C22.9168 19.8958 21.9793 20.8333 20.8335 20.8333H4.16683C3.021 20.8333 2.0835 19.8958 2.0835 18.75V6.25C2.0835 5.10417 3.021 4.16667 4.16683 4.16667Z"
                stroke="#04319C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.9168 6.25L12.5002 13.5417L2.0835 6.25"
                stroke="#04319C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            hosh.hyzmat@gmail.com
          </p>
        </div>
      </div>
      <div class="hr"></div>
      <p class="p">©2023 Hoşniýetli hyzmatdaşlyk merkezi.</p>
    </footer>
  </section>
</template>

<script>
// import Card_titiz from "@/components/card_titiz/index.vue";

export default {
  components: {
    // Card_titiz,
  },
  data() {
    // const titiz_card = [
    //   {
    //     id: 1,
    //     img: "image 10.svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     text_ru: "Наименование: Powder Detergent (ручная стирка)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //     active: true,
    //   },
    //   {
    //     id: 2,
    //     img: "image 12.svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     text_ru: "Наименование: Powder Detergent (ручная стирка)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //     active: false,
    //   },
    //   {
    //     id: 3,
    //     img: "image 11 (1).svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     text_ru: "Наименование: Powder Detergent (ручная стирка)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    //   {
    //     id: 4,
    //     img: "image 12.svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     text_ru: "Наименование: Powder Detergent (ручная стирка)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    //   {
    //     id: 5,
    //     img: "image 11 (1).svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     name_ru: "Наименование: Powder Detergent (Hand wash)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    //   {
    //     id: 6,
    //     img: "image 10.svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     name_ru: "Наименование: Powder Detergent (Hand wash)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    //   {
    //     id: 5,
    //     img: "image 11 (1).svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     name_ru: "Наименование: Powder Detergent (Hand wash)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    //   {
    //     id: 6,
    //     img: "image 10.svg",
    //     name_tm: "Ady: Powder Detergent (Hand wash)",
    //     name_ru: "Наименование: Powder Detergent (Hand wash)",
    //     code_tm: "Kod: 890100505.01",
    //     code_ru: "Kод: 890100505.01",
    //     type_tm: "Tipy: Kutu",
    //     type_ru: "Тип: Kutu",
    //     net_weight_tm: "NEtto agramy: 300gr",
    //     net_weight_ru: "Вес нетто: 300gr",
    //     gross_weight_tm: "Brutto agramy: 6000kg",
    //     gross_weight_ru: "Вес брутто: 6000kg",
    //     barcode_tm: "Bar kod: 8691262709354",
    //     barcode_ru: "Бар код: 8691262709354",
    //     box_parameters_tm: "Karobkanyň razmery: 290x385x205",
    //     box_parameters_ru: "Параметры упаковки:290x385x205",
    //     box_in_package_tm: "Karobka sany: 18",
    //     box_in_package_ru: "Количество в упаковке: 18",
    //   },
    // ];

    return {
      // titiz_card,
      nav_links: [
        {
          href: "/distributor",
          name_tm: "Ýuwujy serişdeler",
          name_ru: "Стиральные порошки",
          name_en: "Washing powders"
        },
        {
          href: "/kitchen",
          name_tm: "Aşhana üçin serişdeler",
          name_ru: "Средства для кухни",
          name_en: "Kitchen supplies"
        },
        {
          href: "/dishwasher",
          name_tm: "Kagyz önümleri",
          name_ru: "Бумажные изделия",
          name_en: "Paper products"
        },
        {
          href: "/cleaners",
          name_tm: "Arassaçylyk serişdeleri",
          name_ru: "Чистящие средства",
          name_en: "Cleaning products"
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
  },
};
</script>

<style>
</style>