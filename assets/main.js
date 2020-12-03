var app = new Vue ({
    el: '#root',
    data: {
        menuVoices:[
            {
                write: 'home',
                link: '#',
            },
            {
                write: 'mission',
                link: '#',
            },
            {
                write: 'causes',
                link: '#',
            },
            {
                write: 'journal',
                link: '#',
            },
        ],
        footerVoices: [
            {
                write: 'Copyright 2012 - ',
            },
            {
                write: '2020 Avada theme by',
            },
            {
                write: 'theme fusion',
                link: 'https://theme-fusion.com/'
            },
            {
                write: '| All rights reserved | ',
            },
            {
                write: 'Powered by wordpress',
                link: 'https://www.wordpress.com/'
            },
        ],
        footerIcons: [
            {
                icon: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                icon: 'fab fa-instagram',
                link: 'https://www.instagram.com/',
            },
            {
                icon: 'fab fa-twitter',
                link: 'https://www.twitter.com/',
            },
            {
                icon: 'fab fa-youtube',
                link: 'https://www.youtube.com/',
            },
        ],
        headerButton: 'donate',
        logoHeader: 'avada-charity-logo.png',
    },

})
