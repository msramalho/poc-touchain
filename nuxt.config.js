import colors from 'vuetify/es5/util/colors'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/poc-touchain/'
    }
} : {}

export default {
    mode: 'spa',
    ...routerBase,
    /*
     ** Headers of the page
     */
    head: {
        // titleTemplate: '%s - ' + process.env.npm_package_name,
        // title: process.env.npm_package_name || '',
        title: "Touchain",
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }, {
                property: 'og:image',
                content: "https://msramalho.github.io/poc-touchain/favicon.ico"
            }, {
                property: 'og:title',
                content: "Touchain"
            }, {
                property: 'og:description',
                content: process.env.npm_package_description || ''
            }, {
                property: 'og:url',
                content: "https://msramalho.github.io/poc-touchain"
            }, {
                property: 'og:locale',
                content: "pt"
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/poc-touchain/favicon.ico' : '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@plugins/vuetify-toast',
        'plugins/i18n.js',
        'plugins/lowdb.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        ['cookie-universal-nuxt', {
            alias: 'cookies'
        }],
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.DEPLOY_ENV === 'GH_PAGES' ? "https://msramalho.github.io/poc-touchain/api" : "http://localhost:5000/"
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            themes: {
                light: {
                    primary: colors.blue.base,
                    accent: colors.yellow.accent1,
                    secondary: colors.deepPurple.base
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}