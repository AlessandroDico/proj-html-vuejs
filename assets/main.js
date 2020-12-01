var app = new Vue ({
    el: '#root',
    data: {
        menuVoices: {
                home: '#',
                mission: '#',
                causes: '#',
                journal: '#',
            },
        footerVoices: {

        },
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
