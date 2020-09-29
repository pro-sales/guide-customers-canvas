module.exports = {
    base: '/guide-customers-canvas/',
    dest: 'public',

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Customer\'s Canvas Web2Print',
            description: 'The most powerful web-to-print online editor ever made for Shopware 5 e-commerces.',          
        },
        '/de/': {
            lang: 'de-CH',
            title: 'Customer\'s Canvas Web2Print',
            description: 'Einer der modernsten Web-To-Print Online Editoren für Shopware 5 E-Commerces.',
        }
      },

    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }]
    ],

    themeConfig: {
        logo: '/svg/logo_ccw2p_plugin.svg',

        locales: {
            '/': {
                label: 'English',


                nav: [
                    { text: 'Showcase', link: '/showcase/' },
                    { text: 'Doc', items: [
                        { text: 'v1.0.0', link: '/guide/' }
                    ] },
                    { text: 'Digging Deeper', items: [
                        { text: '', items: [
                            { text: 'Support', link: '/support/' },
                        ]},
                        { text: '', items: [
                            { text: 'Contributing', link: '/contribute/' },
                            { text: 'Developing', link: '/develop/' },
                        ]},
                        { text: '', items: [
                            { text: 'FAQs', link: '/faq/' },
                            { text: 'Glossary', link: '/glossary/' }
                        ]},
                    ] },
                    { text: 'News', link: '/news/' },
                ],
            },
            '/de/': {
                selectText: 'Sprachen',
                label: 'Deutsch',

                nav: [
                    { text: 'Präsentation', link: '/de/showcase/' },
                    { text: 'Dokumentation', items: [
                        { text: 'v1.0.0', link: '/de/guide/' }
                    ] },
                    { text: 'Eintauchen', items: [
                        { text: '', items: [
                            { text: 'Unterstüztzung', link: '/de/support/' },
                        ]},
                        { text: '', items: [
                            { text: 'Mithilfe', link: '/de/contribute/' },
                            { text: 'Entwicklung', link: '/de/develop/' },
                        ]},
                        { text: '', items: [
                            { text: 'FAQs', link: '/de/faq/' },
                            { text: 'Glossar', link: '/de/glossary/' }
                        ]},
                    ] },
                    { text: 'Nachrichten', link: '/de/news/' },
                ],
            },
        },
        
        sidebar: {
            '/guide/master/': [
                { title: 'Getting Started', children: [
                    ['', 'Introduction'],
                    ['start/requirements/', 'Requirements'],
                    ['start/install/', 'Installation'],
                    ['start/config/', 'Configuration'],
                ] },

                { title: 'Fundamentals', children: [
                    ['base/customers-canvas/', 'Customer\'s Canvas'],
                    ['base/shopware/', 'Shopware'],
                    ['base/plugin/', 'Plugin'],
                ] },

                { title: 'Modules', children: [
                    ['modules/colors/', 'Colors'],
                    ['modules/fonts/', 'Fonts'],
                    ['modules/editor/', 'Editor'],
                    ['modules/print/templates/', 'Print Templates'],
                ] },

                { title: 'Examples', children: [
                    ['examples/page/single/', 'Single Page'],
                    ['examples/page/multi/', 'Multi Page'],
                    ['examples/product/shirt/', 'T-Shirt'],
                    ['examples/3d/mug/', '3D Mug'],
                ] },
            ], // /guide/master/

            '/de/guide/master/': [
                { title: 'Einführung', children: [
                    ['', 'Einleitung'],
                    ['start/requirements/', 'Anforderungen'],
                    ['start/install/', 'Installation'],
                    ['start/config/', 'Konfiguration'],
                ] },

                { title: 'Grundlegendes', children: [
                    ['base/customers-canvas/', 'Customer\'s Canvas'],
                    ['base/shopware/', 'Shopware'],
                    ['base/plugin/', 'Plugin'],
                ] },

                { title: 'Komponenten', children: [
                    ['modules/colors/', 'Farben'],
                    ['modules/fonts/', 'Schriften'],
                    ['modules/print/product/', 'Druckprodukte'],
                    ['modules/editor/', 'Editor'],
                    ['modules/print/templates/', 'Druckvorlagen'],
                ] },

                { title: 'Beispiele', children: [
                    ['examples/page/single/', 'Einzelseite'],
                    ['examples/page/multi/', 'Mehrseitig'],
                    ['examples/product/shirt/', 'T-Shirt'],
                    ['examples/3d/mug/', '3D Tasse'],
                ] },
            ], // /guide/master/
        }
    },


    extendMarkdown: md => {
        md.use(require('markdown-it-imsize'))
    },


    plugins: [
        [ '@vuepress/back-to-top' ],
        [ '@vuepress/medium-zoom' ],
    ],
    
};