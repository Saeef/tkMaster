if(window.GPT_jstiming.Ab) {
    window.document.querySelector('.maincontent--discovery').style.opacity = 0;
(function(andRedEyelikeTicketMaster, undefined) {
    console.log('var 1');
    var $ = window.jQuery;
    var w = window.innerWidth;
    var SL = {};
    SL.andRedEyelikeTicketMaster = {
        init: function() {
            this.pgCssDesktop();
            this.removeToggle();
            this.lights();
            this.language();
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
            if(window.location.hostname === 'www.ticketmaster.de') { 
                    var tog = document.querySelector('.ticketpriceinfo__actions');    
                    tog.id = 'btog';
                    this.language();
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
            }//if germany 

            else if(window.location.hostname === 'www.ticketmaster.fi') { 
                    var tog = document.querySelector('.ticketpriceinfo__actions');    
                    tog.id = 'btog';
                    this.language();
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
            }//if germany              

        },//removeToggle

        language: function() {
            console.info('%c language \u221a', 'background:blue;color:white;');
            switch(window.document.children[0].attributes[1].value) {
                case 'de-DE':
                window.document.children[0].setAttribute('lang', 'de-DE');
                console.log('german');
                break;
                case 'fi-FI':
                window.document.children[0].setAttribute('lang', 'fi-FI');
                console.log('finnish');
                break;
                default:
                window.document.children[0].setAttribute('lang', 'en-EN');
                console.log('default english');
                break;
            }//switch off
        },

        lights: function() {
            console.info('%c lightsOn \u221a', 'background:blue;color:white;');
            if(window.GPT_jstiming.Ab) {
                var lightsOn = function() {
                    var l = window.document.querySelector('.maincontent--discovery');
                    l.style.opacity = 1;   
                };lightsOn();
                //lightsOn               
             }//if GPT_jstiming.AB
        } //lights

       
    };//SL.andRedEyelikeTicketMaster

    (function pfjQ() {
        if (document.getElementsByClassName('logo__media') !== null) {
            try {
                SL.andRedEyelikeTicketMaster.init();
            } 
            catch (err) {
                  console.log('TRY ERROR: '+ err);
            }
        }//if 
        else { 
            setTimeout(pfjQ, 25); 
        }//else
           
    })();//pfjQ

}.call(window.andRedEyelikeTicketMaster || {}));
}//GPT_jstiming.Ab