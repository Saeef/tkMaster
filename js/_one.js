if(window.GPT_jstiming.Ab) {
    window.s.b.style.opacity = 0;
    window.tm_omn.b.style.opacity = 0;
    window.s.b.children[3].children[1].style.opacity = 0;
}
(function(andRedEyelikeTicketMaster, undefined) {
    console.log('var 1');
    debugger;
    
    var $ = window.jQuery;
    var w = window.innerWidth;
    var SL = {};
    SL.andRedEyelikeTicketMaster = {
        init: function() {
            this.pgCssDesktop();
            this.removeToggle();
            this.lights();
        },
        //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = "#btog {display:none;}  @media screen and (max-width:650px) { #noseats {display:none;} .mainfooter {margin-top:0;} .edpcontent {min-height:160px;}}";
            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        
        },//pgCssDesktop

        removeToggle: function() {
            console.info('%c removeToggle \u221a', 'background:blue;color:white;');
                var tog = document.querySelector('.ticketpriceinfo__actions');    
                tog.id = 'btog';
                //find seats mobile
                function doMobi() {
                    if (document.querySelectorAll('.cButton--icontext')[1]) {
                        document.querySelectorAll('.cButton--icontext')[1].id = 'noseats';
                    }//if
                }//doMobi

                //screen less than run doMobi
                if(w <= 650) {
                    doMobi();
                }
                   
            window.addEventListener('resize', doMobi,false);         

        },//removeToggle

        lights: function() {
             console.info('%c lights \u221a', 'background:blue;color:white;');
             if(window.GPT_jstiming.Ab) {
                window.s.b.style.opacity = 1;
                window.tm_omn.b.style.opacity = 1;
                window.s.b.children[3].children[1].style.opacity = 1;
             }
        }
       
    };//SL.andRedEyelikeTicketMaster

    (function() { 
            console.info('load event');
            SL.andRedEyelikeTicketMaster.init();
    })();

}.call(window.andRedEyelikeTicketMaster || {}));
