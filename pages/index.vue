<template>
  <section id="home">
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
          <div class="lang">
            <button class="dropbtn">{{ lang }}</button>
            <div class="lang-content">
              <div v-for="(e, i) in locales" :key="i">
                <button @click="$i18n.setLocale(e.code)" v-if="e.code != lang">
                  {{ e.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hooper">
      <div class="action">
        <h1>
          {{
            $tt(
              "“Hoşniýetli hyzmatdaşlyk merkezi“ hojalyk jemgyýeti, Türkmenistanyň ähli söwda nokatlarynda ýokary hünär derejesinde sarp ediş harytlaryny (FMCG) mahabatlandyrmak üçin giň hyzmatlary hödürleýär.",
              "Дистрибьюторская компания “Хошниетли хызматдашлык меркези“ предоставляет широкий спектр услуг по продвижению товаров повседневного спроса (FMCG) на высоком профессиональном уровне во всех торговых точках Туркменистана.",
              "The distribution company “Hoşniýetli hyzmatdaşlyk merkezi“ provides a wide range of services for the promotion of consumer goods (FMCG) at a high professional level in all outlets of Turkmenistan."
            )
          }}
        </h1>
      </div>

      <hooper :settings="hooperSettings">
        <slide>
          <div class="slider1"></div>
        </slide>
        <slide>
          <div class="slider1 slider2"></div>
        </slide>
        <slide>
          <div class="slider1 slider3"></div>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-progress slot="hooper-addons"></hooper-progress>
      </hooper>
    </div>
    <section id="about">
      <div class="right">
        <div class="right_top">
          <h1>
            {{
              $tt(
                "Hoşniýetli hyzmatdaşlyk merkezi",
                "Хошниетли хызматдашлык меркези",
                "Hoşniýetli hyzmatdaşlyk merkezi"
              )
            }}
          </h1>
        </div>
        <p>
          {{
            $tt(
              '"Hoşniýetli hyzmatdaşlyk merkezi" hojalyk jemgyýeti, Türkmenistanyň ähli çäginde; Aşgabat şäheri we bäş welaýatlaryň ähli söwda nokatlaryna harydy ýerlemek boýunça mümkin bolan ähli oňaýly we döwrebap hyzmatlary hödürleýär. Ýurdumyzyň ähli künjeginde ýerleşýän lomay we bölek satuw zynjyrlaryny we marketlerini çalt, amatly we ygtybarly harytlar bilen üpjün etmekde tejribä gaty baý. Biz Şerbet, Halkmarket, Şazada, Desse ýaly öňdebaryjy söwda zynjyrlarynyň we marketleriniň ählisini ýokary hilli harytlar bilen üpjün edýäris. Şeýle hem Hyper, Ynamdar ýaly onlaýn platformalarynyň birnäçesi bilen hyzmatdaşlyk edýäris.',
              "Хозяйственное общество «Hoşniýetli hyzmatdaşlyk merkezi» на всей территории Туркменистана; предлагает все современные услуги для совершения покупок в городе Ашхабаде и пяти велаятах. Имеет большой опыт своевременной, удобной и надежной поставки товаров во все оптовые и розничные сети и рынки страны. Мы сотрудничаем и поставляем наш товар ведущим торговым сетям, таким как  Шербет, Халкмаркет, Шазада, Дессе и т.д., а также сотрудничаем с онлайн платформами как  Гипер, Ынамдар  и т.д.",
              'The economic society "Hoşniýetli hyzmatdaşlyk merkezi" across Turkmenistan; offers all possible convenient and modern services for distribution and marketing in Ashgabat city and five provinces. We have extensive experience in the implementation of fast, convenient and reliable delivery of goods to all wholesale and retail chains and markets of the country. We cooperate and supply our goods to leading retail chains such as Sherbet, Halkmarket, Shazada, Desse, etc., as well as partner with online platforms such as Hyper, Ynamdar, etc.'
            )
          }}
        </p>
        <p>
          {{
            $tt(
              "Biziň artykmaçlygymyz: Kompaniýanyň dolandyryş işgärleriniň söwda we telekeçiligi dolandyrmak ugrundaky 25 ýyldan gowrak tejribesi . 70-den gowrak ýokary hünärli işgärleriň bolmagy. Işgärleri dolandyrmak ulgamynyň bolmagy. Ähli iri şäherlerde öz ammarlarymyzyň, harytlaryň maddy-tehniki üpjünçiligi üçin 20-dan gowrak ulaglarymyz bolmagy. Ahli söwda nokatlarynyň ýerleşýän ýerinde maglumat bazasynyň,  harytlary hasaba almak we eltip bermek üçin döwrebap programmalar bilen üpjünçiligi. Türkmenistanda öndürijiler we söwda nokatlary bilen hyzmatdaşlyk şertnamalarymyz bar.",
              "Наши преимущества : Опыт работы управляющего персонала компании в сфере торговли и управления бизнесом более 25-ти лет. Наличие высококвалифицированного персонала более 70-ти человек, системы управления персоналом, собственных складских помещений во всех больших городах, автотранспорта более 20-ти единиц для доставки товара, огромная база данных о расположении всех торговых точек. А также программное обеспечение для оформления и доставки товара. Существуют договоренности о сотрудничестве  с производителями и торговыми точками по всей территории Туркменистана.",
              "Our advantages:  25+ years of experienced leadership team in the field of trade and business management. Availability of highly qualified personnel of 70+ people, personnel management systems, warehouses in all major cities, 20+ delivery trucks, complete database of outlet locations, as well as delivery fullfilment software. We have partnership agreements with manufacturers and retail outlets across Turkmenistan."
            )
          }}
        </p>
        <p>
          {{
            $tt(
              "Bazaryň zerurlyklaryny we aýratynlyklaryny doly bilýän köp ýyllyk tejribesi bolan hünärmenlerimiziň satuw menejerlerimiziň we satuw wekillerimiziň kömegi bilen, müşderiler bilen üstünlikli aragatnaşyk gurmak üçin uly tejribämiz bar.",
              "Благодаря большому штату профессиональных менеджеров по продажам и торговых представителей с многолетним опытом работы, которые досконально знают потребности и специфику рынка, у нас есть отработанная схема успешного взаимодействия с клиентами.",
              "We have a well-established system of productive client engagement thanks to our sizable workforce of skilled sales managers and sales representatives with years of expertise who thoroughly understand the needs of the industry."
            )
          }}
        </p>
        <p>
          {{
            $tt(
              "Şeýle hem, kompaniýamyz, harytlary import we eksport etmek boýunça halkara hyzmatlarynyň we ülňüleriniň talaplaryna doly laýyk gelýän ähli zerur resminamalaryň ýerine ýetirilmegi bilen haryt daşamagy öz içine alýan birnäçe hyzmatlary hödürleýär.",
              "Так же наша компания предоставляет спектр услуг в области импорта и экспорта грузов, в который входит перевозка грузов с оформлением всех необходимых сопроводительных документов в полном соответствии с требованиями международных норм и стандартов.",
              "Additionally, our company offers a variety of services in the import and export of commodities, including the transportation of goods in compliance with global documentation norms and standards."
            )
          }}
        </p>

        <h1>
          {{
            $tt(
              "Kompaniýamyzyň her geçen gün täzelenmegine, kämilleşmegine we ösmegine goşant goşýan esasy dolandyryş strategiýalarymyz:",
              "Наши основные стратегии управления, которые день за днем ​​способствуют обновлению, повышению профессионализма и росту нашей компании:",
              "Our main management strategies that contribute to the renewal, professionalization and growth of our company day by day:"
            )
          }}
        </h1>

        <h2>
          {{
            $tt(
              "Marka, önüm, kanal, bazara girmek we müşderi gatnaşyklaryny dolandyrmak (CRM);",
              "Бренд, продукт, канал, выход на рынок и управление взаимоотношениями с клиентами (CRM);",
              "Brand, product, channel, go-to-market and customer relationship management (CRM);"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Sanly marketing we marketing awtomatizasiýasy;",
              "Цифровой маркетинг и автоматизация маркетинга;",
              "Digital marketing and marketing automation;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Marketing çykdajylaryny dolandyrmak;",
              "Управление расходами на маркетинг;",
              "Marketing spend management;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Marketing strategiýasy we çäreleri;",
              "Маркетинговая стратегия и мероприятия;",
              "Marketing strategy and activities;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Satyş awtomatizasiýasy;",
              "Автоматизация продаж;",
              "Sales automation;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Satyş we kanal strategiýasy;",
              "Стратегия продаж и каналов;",
              "Sales and channel strategy;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Satyş toparynyň okuwy, strategiýasy we netijeliligi;",
              "Стратегия и эффективность отдела продаж;",
              "Sales team strategy and effectiveness;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Satyş guramasynyň dizaýny we deňleşdirilmegi;",
              "Планирование и согласование организации продаж;",
              "Sales organization design and alignment;"
            )
          }}
        </h2>
        <h2>
          {{
            $tt(
              "Satyş - ýerlemek targedi, strategiýa we analizi;",
              "Продажи - таргет распространения(дистрибуция), стратегия и анализ;",
              "Sales - distribution target, strategy and analysis;"
            )
          }}
        </h2>
      </div>
    </section>
    <section id="contact">
      <div class="h1">
        <h1>{{ $tt("Hyzmatdaşlarymyz", "Наши партнёры", "Our partner") }}</h1>
      </div>
      <div class="text">
        <div class="left_content">
          <img src="./../assets/image/image 6.svg" alt="" />
        </div>
        <div class="right_content">
          <nuxt-link to="/distributor">
            <img src="./../assets/image/logo2.svg" alt="" />
            <h1>
              {{ $tt("Titiz katalog", "Каталог Titiz", "Titiz catalog") }}
            </h1>
          </nuxt-link>
          <p>
            {{
              $tt(
                'Uzak wagtdan bäri kompaniýamyz “Titiz” markasynyň resmi distribýuteri bolup durýar. "Titiz" markasy bolsa öz gezeginde  arassalaýjy we ýuwujy serişdeler harytlaryny öndürmekde Türkiýede öňdebaryjy kompaniýalarynyň biridir.',
                "На протяжении долгого времени наша компания является официальным дистрибютором компании Titiz, которая в свою очередь является одним из лидеров в Турции по производству чистящих и моющих средств.",
                "Our business has been a long-term authorized distributor of Titiz company, one of top manufacturers of cleaning supplies and detergents in Turkiye "
              )
            }}
          </p>
        </div>
      </div>
    </section>
    <footer id="footer">
      <img src="./../assets/image/image 26.svg" alt="" />
      <div class="footer">
        <div class="text">
          <h1>
            {{
              $tt(
                "«Hoşniýetli hyzmatdaşlyk merkezi» siziň hyzmatyňyzda",
                "«Hoşniýetli hyzmatdaşlyk merkezi» к вашим услугам",
                "«Hoşniýetli hyzmatdaşlyk merkezi» is at your service"
              )
            }}
          </h1>
        </div>
        <div class="contacts">
          <h1>
            {{ $tt("Habarlaşmak üçin:", "Cвязаться с нами:", "Contact us:") }}
          </h1>
          <div class="svg">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6769 5.20833C16.6943 5.40684 17.6294 5.90443 18.3624 6.63743C19.0954 7.37043 19.593 8.30548 19.7915 9.32291M15.6769 1.04166C17.7907 1.27649 19.7619 2.2231 21.2667 3.72605C22.7716 5.229 23.7207 7.19897 23.9582 9.3125M22.9165 17.625V20.75C22.9177 21.0401 22.8582 21.3273 22.742 21.5931C22.6258 21.8589 22.4554 22.0975 22.2416 22.2936C22.0278 22.4897 21.7754 22.639 21.5006 22.732C21.2258 22.8249 20.9346 22.8594 20.6457 22.8333C17.4403 22.485 14.3613 21.3897 11.6561 19.6354C9.13923 18.0361 7.00539 15.9023 5.40608 13.3854C3.64564 10.6679 2.55008 7.57395 2.20816 4.35416C2.18213 4.06611 2.21636 3.77579 2.30868 3.50169C2.401 3.22759 2.54938 2.97572 2.74438 2.7621C2.93937 2.54849 3.17671 2.37782 3.44128 2.26096C3.70585 2.1441 3.99185 2.0836 4.28108 2.08333H7.40608C7.91161 2.07836 8.4017 2.25737 8.785 2.58701C9.1683 2.91665 9.41866 3.37442 9.48941 3.875C9.62131 4.87507 9.86592 5.857 10.2186 6.80208C10.3587 7.17492 10.3891 7.58012 10.306 7.96966C10.2229 8.35921 10.0299 8.71678 9.74983 9L8.42691 10.3229C9.90978 12.9308 12.0691 15.09 14.6769 16.5729L15.9998 15.25C16.283 14.9699 16.6406 14.7769 17.0302 14.6938C17.4197 14.6108 17.8249 14.6411 18.1977 14.7812C19.1428 15.1339 20.1248 15.3785 21.1248 15.5104C21.6308 15.5818 22.093 15.8367 22.4233 16.2266C22.7536 16.6164 22.9292 17.1141 22.9165 17.625Z"
                stroke="#232834"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>+99365668354</p>
          </div>
          <div class="svg">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.875 10.4167C21.875 17.7083 12.5 23.9583 12.5 23.9583C12.5 23.9583 3.125 17.7083 3.125 10.4167C3.125 7.93026 4.11272 5.54569 5.87087 3.78754C7.62903 2.02939 10.0136 1.04167 12.5 1.04167C14.9864 1.04167 17.371 2.02939 19.1291 3.78754C20.8873 5.54569 21.875 7.93026 21.875 10.4167Z"
                stroke="#232834"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 13.5417C14.2259 13.5417 15.625 12.1426 15.625 10.4167C15.625 8.69078 14.2259 7.29167 12.5 7.29167C10.7741 7.29167 9.375 8.69078 9.375 10.4167C9.375 12.1426 10.7741 13.5417 12.5 13.5417Z"
                stroke="#232834"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              {{
                $tt(
                  "Aşgabat ş., G.Bäşimow köçesi,j. 93",
                  "г. Ашхабад, улица Г. Башимова, в. 93",
                  "apt. 93 G.Bashimow street, Ashgabat"
                )
              }}
            </p>
          </div>
          <div class="svg">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16683 4.16667H20.8335C21.9793 4.16667 22.9168 5.10417 22.9168 6.25V18.75C22.9168 19.8958 21.9793 20.8333 20.8335 20.8333H4.16683C3.021 20.8333 2.0835 19.8958 2.0835 18.75V6.25C2.0835 5.10417 3.021 4.16667 4.16683 4.16667Z"
                stroke="#232834"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.9168 6.25L12.5002 13.5417L2.0835 6.25"
                stroke="#232834"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              <a href="mailto:gurban@hoshniyetli.com.tm"
                >gurban@hoshniyetli.com.tm</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="year">
        <strong
          >&#169;2023{{
            years.year.getFullYear() > 2023 ? -years.year.getFullYear() : ""
          }}</strong
        >
      </div>
    </footer>
  </section>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";
import Card from "@/components/card/index.vue";
import { getYear } from "../store";

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
    Card,
  },
  data() {
    return {
      nav_links: [
        {
          href: "#main",
          name_tm: "Baş sahypa",
          name_ru: "Главное",
          name_en: "Main",
        },
        {
          href: "#about",
          name_tm: "Biz barada",
          name_ru: "О Нас",
          name_en: "About Us",
        },
        {
          href: "#contact",
          name_tm: "Distribýutor",
          name_ru: "Дистрибюция",
          name_en: "Distribution",
        },
        {
          href: "#footer",
          name_tm: "Habarlaşmak",
          name_ru: "Связаться с нами",
          name_en: "Contact Us",
        },
      ],
      years: {
        year: new Date(),
      },
    };
  },
  computed: {
    hooperSettings() {
      const settings = {
        itemsTOShow: 1,
        centerMode: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1100,
        hoverPause: false,
        infiniteScroll: true,
        wheelControl: false,
        breakpoints: {
          600: {
            itemsToShow: 1,
          },
          500: {
            itemsToShow: 2,
          },
        },
      };
      return settings;
    },
    showRegState() {
      return this.$store.getters.showReg;
    },
    lang() {
      return this.$i18n.locale;
    },
    locales() {
      return this.$i18n.locales;
    },
  },
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
