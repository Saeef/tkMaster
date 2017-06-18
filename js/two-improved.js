//if(window.GPT_jstiming.Ab) {
  //  window.document.querySelector('.maincontent--discovery').style.opacity = 0;
(function(andRedEyelikeTicketMaster, undefined) {
    var $ = window.jQuery;
    var w = window.innerWidth;
    var SL = {};
    var message; 
    SL.andRedEyelikeTicketMaster = {
        init: function() {
            this.pgCssDesktop();
            this.removeToggle();
            this.lights();
            
        },
        //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = "#btog {display:none;} a#modeIsm.cButton.cButton--primary.cButton--outlined.cButton--icontext.bloc {display:block;} .edp__section_header .cButton--primary {display:none;}  @media screen and (max-width:650px) { #noseats {display:none;} .mainfooter {margin-top:0;} .edpcontent {min-height:160px;}        }";

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
            var lan, says1,says2;
            //language change ui
            var lanhe = document.querySelectorAll('.header__language__button');
            var la = document.getElementById('head');
            var lis = document.querySelectorAll('.header__language__item');
            if(window.location.hostname === 'www.ticketmaster.de') { 
                if (document.querySelectorAll('.ticketpriceinfo__actions').length > 0) {
                    la.addEventListener('click', function(e) {
                        console.log(e);
                        if(e.target.tagName == 'SPAN') {
                            for(var i=0; i<lis.length; i++) {
                            if(lis[i].classList.contains('is-active')) {
                                if(lis[i].textContent.indexOf('D') != -1) {
                                    message = this.language1();
                                }//if 'DEUTSCH'
                                else if(lis[i].textContent.indexOf('E') != -1) {
                                    message = this.language1();
                                }//if 'ENGLISCH'

                            }//if active
                        }//for

                        }//if SPAN
                
                    },false);//la

                    var tickets1 = function() { 
                       lan = document.querySelectorAll('.ticketpriceinfo__actions')[0].children[0].children[0]; 
                        lan.innerHTML =  ' <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="icon__search2 "> <g stroke-width="1.6" stroke="currentColor" fill="none"> <path d="M12.52 6.76A5.76 5.76 0 1 0 1 6.76a5.76 5.76 0 0 0 11.52 0z" style="fill-rule: evenodd;"></path> <path d="M16.214 16.214L11 11" stroke-linecap="round" style="fill-rule: evenodd;"></path> </g> </svg> ';
                    };//fn 
                    tickets1();
                    message = this.language1();
                    lan.innerHTML += message;

                }//if ..actions  

                else if (document.body.classList[0] == "onResponsiveCheckout") {
                    //language change ui
                    la.addEventListener('click', function(e) {
                        console.log(e);
                        if(e.target.tagName == 'SPAN') {
                            for(var i=0; i<lis.length; i++) {
                            if(lis[i].classList.contains('is-active')) {
                                if(lis[i].textContent.indexOf('D') != -1) {
                                    message = this.language1();
                                }//if 'DEUTSCH'
                                else if(lis[i].textContent.indexOf('E') != -1) {
                                    message = this.language1();
                                }//if 'ENGLISCH'

                            }//if active
                        }//for

                        }//if SPAN
                
                    },false);//la
                    
                     var tickets2 = function() {
                        says2 = document.querySelectorAll("#modeIsm.cButton--icontext")[0].children[0];
                        says2.innerHTML = '<a id="modeIsm" href="#" class="cButton cButton--primary cButton--outlined cButton--icontext"><div><svg width="25" height="18" viewBox="0 0 25 18" class="icon__seatmap"><path style="fill-rule:evenodd;" d="M17.433 16.26a.047.047 0 0 1-.047.048H7.729a.036.036 0 0 1-.036-.036V13.88a.03.03 0 0 1 .03-.03h9.682c.016 0 .029.012.029.028v2.384zM5.906 11.183a18.06 18.06 0 0 1 3.78-1.133l.84 3.107h-2.94a.055.055 0 0 1-.045-.021l-1.635-1.953zM7.624 2.42v.001l.852 3.154c-2.824.647-4.759 1.789-5.41 2.214l-1.374-1.64C2.328 5.407 4.24 3.48 7.624 2.42zm9.216-.192c-.001.005-.005.009-.006.013l-.855 3.195a18.029 18.029 0 0 0-3.416-.325c-1.23 0-2.371.125-3.408.321l-.863-3.191c-.001-.005-.005-.008-.006-.013a16.703 16.703 0 0 1 4.277-.535c1.612 0 3.034.207 4.277.535zm6.6 3.903l-1.427 1.707c-.554-.38-2.464-1.582-5.357-2.256l.846-3.162c3.385 1.06 5.298 2.983 5.938 3.71zm-3.837 4.59a.337.337 0 0 0-.098-.08c-.087-.046-1.592-.82-3.865-1.262l.835-3.121c2.688.63 4.515 1.733 5.09 2.115l-1.962 2.348zM9.338 6.108a17.112 17.112 0 0 1 6.46.005l-.843 3.149a15.822 15.822 0 0 0-2.37-.184c-.844 0-1.647.072-2.395.183l-.852-3.153zM3.515 8.325c.672-.424 2.517-1.472 5.144-2.075l.845 3.125c-2.31.432-3.921 1.19-4.059 1.256l-1.93-2.306zm7.728 4.831l-.87-3.22a15.5 15.5 0 0 1 2.211-.165c.776 0 1.509.065 2.19.166l-.861 3.219h-2.67zm6.339-.017a.065.065 0 0 1-.047.017H14.63l.83-3.102c2.127.41 3.572 1.123 3.705 1.19l-1.577 1.887-.006.008zm6.396-6.572a.679.679 0 0 0-.02-.87C23.013 4.595 19.396 1 12.563 1 5.728 1 2.113 4.596 1.167 5.698a.68.68 0 0 0-.013.876l5.849 6.997c.014.018.032.031.048.048a.712.712 0 0 0-.05.26v2.393a.73.73 0 0 0 .728.728h9.657a.74.74 0 0 0 .74-.74v-2.383a.717.717 0 0 0-.05-.26c.015-.015.032-.028.046-.045l5.856-7.005z" stroke-width=".4" stroke="currentColor" fill="currentColor">';
                    };//fn
                    tickets2();
                    message = this.language2();
                    says2.innerHTML = '</path></svg><span><font><font class="">' + message + '</font></font></span></div></a>';      
                        var bringBack = function() {
                            if(document.getElementById('modeIsm')) {
                                    var brin = document.getElementById('modeIsm');
                                    brin.style.display = 'block';    
                            }//if
                        };//bringBack
                        bringBack();    
     
                }//elseif responsiveChkout
                                
            }//if germany and hostname/path match

           

           
        },//removeToggle 


        language1: function() {
            console.info('%c language \u221a', 'background:blue;color:white;');
            //language attribute changes url
            switch(window.document.children[0].attributes[1].value) {
                case 'de-DE':
                window.document.children[0].setAttribute('lang', 'de-DE');
                message = "Plätze vorschlagen lassen";
                console.log('german');
                break;

                case 'fi-FI':
                window.document.children[0].setAttribute('lang', 'fi-FI');
                message = "Hae minulle paikat";
                console.log('finnish');
                break;
                
                default:
                window.document.children[0].setAttribute('lang', 'en-EN');
                message = "Find Seats For Me";
                console.log('english default');
                break;

            }//switch off
            return message;
        },

        language2: function(message) {
            console.info('%c language \u221a', 'background:blue;color:white;');
            switch(window.document.children[0].attributes[1].value) {
                case 'de-DE':
                window.document.children[0].setAttribute('lang', 'de-DE');
                message = "Im Saalplan kaufen";
                console.log('german');
                break;

                case 'fi-FI':
                window.document.children[0].setAttribute('lang', 'fi-FI');
                message = "Osta pohjakartalta";
                console.log('finnish');
                break;

                default:
                window.document.children[0].setAttribute('lang', 'en-EN');
                message = "Buy on Map";
                console.log('default english');
                break;

            }//switch off
            return message;
        },

        lights: function() {
            console.info('%c lightsOn \u221a', 'background:blue;color:white;');
            if(window.GPT_jstiming.Ab) {
                var l,r;
                var lightsOn = function() {
                    if(window.document.querySelector('.maincontent--discovery')) {
                        l = window.document.querySelector('.maincontent--discovery');
                        l.style.opacity = 1;
                    }//if l
                    else if(window.document.getElementById('wrap')) {
                        r = window.document.getElementById('wrap');
                        r.style.opacity = 1;
                    }//else r
                    
                };lightsOn();
                //lightsOn               
             }//if GPT_jstiming.AB
        } //lights

    };
    //SL.andRedEyelikeTicketMaster

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
//}//GPT_jstiming.Ab