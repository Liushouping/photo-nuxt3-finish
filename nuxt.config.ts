// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
	    [
	      '@nuxtjs/i18n',
	      {
	        locales: ['en','tw', 'fr'],
	        defaultLocale: 'en',
	        vueI18n: {
	          // fallbackLocale: 'en',
	        legacy: false,
       		locale: 'en',
	          messages: {
	          	en: {
	              greeting: 'en show'
	            },
	            tw: {
	              greeting: 'tw show'
	            },
	            fr: {
	              greeting: 'fr show'
	            }
	          }
	        }
	      }
	    ]
	],
	css: ['~/assets/css/main.css'],
	postcss: {
	    plugins: {
	      tailwindcss: {},
	      autoprefixer: {},
	    },
	},
	app: {
	    head: {
		    charset: 'utf-16',
		    viewport: 'width=device-width, initial-scale=1.0',
		    title: 'Web',
		    meta: [
		        // <meta name="description" content="My amazing site">
		        { name: 'description', content: 'My amazing site.' }
		 	],
		 	link: [
			    { rel: 'icon', type: 'image/png', href: 'https://madmanga.io/favicon.png' }
			],
		},
	    // pageTransition: {
	    //  	name: 'rotate',
	    //  	mode: 'out-in' // default
	    // },
	},
})
