(function(andRedEyelikeTicketMaster, undefined) {
    var $ = window.jQuery;
    var w = window.innerWidth;
    var SL = {};
    SL.andRedEyelikeTicketMaster = {
        init: function() {
            this.pgCssDesktop();
            this.removeToggle();
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
            if(window.location.hostname === 'www.ticketmaster.de' && window.location.pathname === '/event/starlight-express-tickets/190419') {
                //toggle button desktop
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

            }//if germany and hostname/path match

            else if(window.location.hostname === 'www.ticketmaster.fi' && window.location.pathname === '/event/peppi-pitkatossu-tickets/203697') {
                //toggle button desktop
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

            }//if finland and hostname/path match


        }//removeToggle
       

        

    };
    //SL.andRedEyelikeTicketMaster

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeTicketMaster.init();
        }, 10);

    })();

}.call(window.andRedEyelikeTicketMaster || {}));
