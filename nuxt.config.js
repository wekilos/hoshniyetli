export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    port: 3000, // default: 3000
    // host: '10.1.1.149', // default: localhost,
    host: 'localhost', // default: localhost,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },

  head: {
    title: 'Hoşniýetli',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/stylesheets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/language.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      "@nuxtjs/i18n",
      {
        strategy: 'no_prefix',
        defaultLocale: 'tm' ,
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'new_lang',
          onlyOnRoot: true,
        },
        locales: [
          {
            name: 'TM',
            code:'tm',
            file:'tm.js',
          },
          {
            name: 'RU',
            code: 'ru',
            file: 'ru.js',
          },
          {
            name: 'EN',
            code: 'en',
            file: 'en.js',
          },
        ]
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
