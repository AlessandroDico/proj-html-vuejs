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
                write: 'Copyright 2012 - 2020 Avada theme by',
            },
            {
                write: 'theme fusion',
                link: 'https://theme-fusion.com/'
            },
            {
                write: 'All rights reserved',
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
        logoHeaderMobile: 'avada-charity-mobile-logo-retina.png',
        headerRightClass: 'header-right',
        changeHeader: null,
        hiddenMenu: false,
    },
    methods: {
    // creo una funzione che allo scroll cambia le classi all header e all header right
    // quando lo scroll nella 'window' è maggiore di 20px (window.scrollY)
    //quando la larghezza della window è sopra si 972px (window.innerWidth)
        changeOnScroll(){
            if (this.headerRightClass = 'header-right' && window.scrollY > 20 && window.innerWidth > 972) {
                this.headerRightClass = 'header-right-scroll';
                this.changeHeader = 'header-scroll';
                this.logoHeader = this.logoHeaderMobile;
            } else if (window.innerWidth < 972) {
                this.headerRightClass = 'header-right';
                this.changeHeader = 'null';
                this.logoHeader = this.logoHeaderMobile;
            } else {
                this.headerRightClass = 'header-right';
                this.changeHeader = 'null';
                this.logoHeader = 'avada-charity-logo.png';
            }
        },
        //cambio logo a seconda della larghezza
        changeLogoOnWidth(){
            if (window.innerWidth < 972) {
                this.logoHeader = this.logoHeaderMobile;
            } else if (window.scrollY < 20){
                this.logoHeader = 'avada-charity-logo.png';
            }
        },
        // al click rendo visibile o meno l'hamburger menu
        getMenuVisible(){
            if (this.hiddenMenu == false) {
                this.hiddenMenu = true;
            } else {
                this.hiddenMenu = false;
            }
        }

    },
    mounted(){

//evento che rimane in ascolto allo scroll della pagina
        window.addEventListener('scroll', this.changeOnScroll);

//richiamo la funzione in modo che sia pronta quando carica la pagina e inoltre dovrò invocarla al ridimensionamento della pagina
        this.changeLogoOnWidth();
//evento che rimane in ascolto al ridimensionamento della pagina
        window.addEventListener('resize', this.changeLogoOnWidth);
        // this.$nextTick(function(){
        //     if (window.innerWidth < 972) {
        //         this.logoHeader = this.logoHeaderMobile;
        //     } else {
        //         this.logoHeader = 'avada-charity-logo.png';
        //     }
        // })
    },


})
