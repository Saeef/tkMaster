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
            var mainCss = "#btog {display:none;}  @media screen and (max-width:650px) { #noseats {display:none;} .mainfooter {margin-top:0;} .edpcontent {min-height:160px;}        }";

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

                if (document.querySelectorAll('.ticketpriceinfo__actions').length > 0) {
                    document.getElementById('ticketselection').addEventListener('click', tickets1,false);
                    function tickets1() { 
                       document.querySelectorAll('.ticketpriceinfo__actions')[0].children[0].children[0].innerHTML = ' <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="icon__search2 "> <g stroke-width="1.6" stroke="currentColor" fill="none"> <path d="M12.52 6.76A5.76 5.76 0 1 0 1 6.76a5.76 5.76 0 0 0 11.52 0z" style="fill-rule: evenodd;"></path> <path d="M16.214 16.214L11 11" stroke-linecap="round" style="fill-rule: evenodd;"></path> </g> </svg> Find Seats For Me ';  

                    }tickets1();

                } 

                else if (document.querySelectorAll('#modeIsm.cButton--icontext').length > 0) {
                    document.querySelector('.edp__section_header').addEventListener('click', tickets2,false);   
                    function tickets2() {
                         document.querySelectorAll('#modeIsm.cButton--icontext')[0].children[0].children[1].innerText = "Buy on Map";
                    }tickets2();   

                }
                                
            }//if germany and hostname/path match

            else if(window.location.hostname === 'www.ticketmaster.fi' && window.location.pathname === '/event/peppi-pitkatossu-tickets/203697') {
                
                if (document.querySelectorAll('.ticketpriceinfo__actions').length > 0) {
                    document.getElementById('ticketselection').addEventListener('click', tickets1,false);
                    function tickets1() { 
                       document.querySelectorAll('.ticketpriceinfo__actions')[0].children[0].children[0].innerHTML = ' <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="icon__search2 "> <g stroke-width="1.6" stroke="currentColor" fill="none"> <path d="M12.52 6.76A5.76 5.76 0 1 0 1 6.76a5.76 5.76 0 0 0 11.52 0z" style="fill-rule: evenodd;"></path> <path d="M16.214 16.214L11 11" stroke-linecap="round" style="fill-rule: evenodd;"></path> </g> </svg> Find Seats For Me ';  

                    }tickets1();

                } 

                else if (document.querySelectorAll('#modeIsm.cButton--icontext').length > 0) {
                    document.querySelector('.edp__section_header').addEventListener('click', tickets2,false);   
                    function tickets2() {
                         document.querySelectorAll('#modeIsm.cButton--icontext')[0].children[0].children[1].innerText = "Buy on Map";
                    }tickets2();   
                }                

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
