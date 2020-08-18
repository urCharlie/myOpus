"use strict";

var SHISEIDO = SHISEIDO || {};

SHISEIDO.NavigationCtrl = function(){

    var _navOpen = false;
    var _self = this;
    var _smallBrakePoint = SHISEIDO.config.breakPoint.small;
    var _$window = jQuery(window);

    _self.init = function(){
        _setInputID();
        jQuery("html").addClass('js-ready');
        jQuery('#nav-open-btn').bind("click",function(e){
            _self.toggle(e);
        });
        jQuery('#nav-close-btn').bind("click",function(e){
            _self.close(e);
        });

        _$window.resize(function(event) {
            var sw = SHISEIDO.getDisplayArea().width;
            if(sw <= _smallBrakePoint){
                //jQuery("html").addClass("js-nav");
            }else{
                jQuery("html").removeClass("js-nav");
                jQuery(".container").css('height','auto');
            }
        });
    };

    _self.close = function(e){
        if (jQuery("html").hasClass('js-nav')) {

        }
        _navOpen = false;
        jQuery(".container").css('height','auto');
        jQuery("html").removeClass('js-nav');

        //ie9
        if(!jQuery("html").hasClass('csstransitions')){
            jQuery('.js-ready .container_inner').animate({
                position:"relative",
                left: "0"
            },350,"swing");
        }
    };

    _self.open = function(e){
        if (jQuery("html").hasClass('js-nav')) {
            return;
        }
        jQuery("html").addClass('js-nav');
        jQuery(".js-nav .container").height(jQuery("#nav-header").height()+jQuery("#nav-area .nav-contents").height());
        
        //ie9
        if(!jQuery("html").hasClass('csstransitions')){
            jQuery('.js-nav .container_inner').animate({
                position:"relative",
                left: "-100%"
            },350,"swing");
        }

        _navOpen = true;
    };

    _self.toggle = function(e){
        if (_navOpen && jQuery("html").hasClass('js-nav')) {
            _self.close(e);
        } else {
            _self.open(e);
        }
        if (e) {
            e.preventDefault();
        }
    };

    function _setInputID(){
        
        jQuery('#nav-area input[type="text"]').attr('id',"MF_form_phrase");
        //jQuery(jQuery('.nav-contents:first-child input[type="text"]')[0]).attr('id',"MF_form_phras");
        
    }
};


                                                                        

jQuery(document).ready(function(e) {
	var navCtrl = new SHISEIDO.NavigationCtrl();
    navCtrl.init();
});