"use strict";

var SHISEIDO = SHISEIDO || {};

SHISEIDO.PagetopButtonCtrl = function(options){
    var _self = this;
    var _visible = false;
    var _$pagetopButton;
    var _isTransitionEnable = false;
    var _smallBrakePoint = SHISEIDO.config.breakPoint.small;
    var _isFix = false;
    var _$pagetopButtonTxt;

    //var _$contentsWrap = jQuery('#contents > .wrap.group');
    var _settings = {
        fadeSpeed:100,
        marginRight:30,
        marginBottom:10,
        fixPoint: 70,
        container:undefined,
        scrollSpeed:1000,
        //pageTopDom:'<div id="float-pagetop"><a href="#"><img id="float-pagetop-txt" src="/v2/cmn/img/btn_pagetop_txt.png"><img src="/v2/cmn/img/btn_pagetop.png"></a></div>'
        pageTopDom:'<div id="float-pagetop"><a href="#"><span id="float-pagetop-txt"></span><span id="float-pagetop-arrow"></span></a></div>'
    }
    
    jQuery.extend(_settings, options);
    
    _self.init = function(){
        _settings.container.append(jQuery(_settings.pageTopDom));
        _$pagetopButton = jQuery('#float-pagetop');
        _$pagetopButtonTxt = jQuery('#float-pagetop-txt');
        _setEvent();
        _setStyle();
        _checkDisplay();
        _setAnimationStyle();

        if(_isActive()){
            _active();
        }
        jQuery(window).resize(function(event) {
            _checkDisplay();
            //_setStyle();
            _scrollHandler();
        });
    };

    var _checkDisplay = function(){
        var sw = SHISEIDO.getDisplayArea().width;
        if(sw <= _smallBrakePoint){
            //_$pagetopButton.css('display','none');
            _kill();
        }else{
            //_$pagetopButton.css('display','block');
            _active();
        }
    };

    var _setEvent = function(){
        _$pagetopButton.bind('click',function(){
            jQuery('body,html').stop().animate({
                scrollTop: 0
            }, _settings.scrollSpeed,'swing');
            return false;
        });

        jQuery('#fix-pagetop').bind('click',function(){
            jQuery('body,html').stop().animate({
                scrollTop: 0
            }, _settings.scrollSpeed,'swing');
            return false;
        });

    };

    var _setStyle = function(){
        // var w = jQuery(window).width() - 164 - _settings.marginRight;
        // var minW = _$contentsWrap.offset().left + _$contentsWrap.width() - 82;
        // var left = Math.max(w,minW);
        _$pagetopButton.css({
            position:"fixed",
            bottom:_settings.marginBottom,
            right:_settings.marginRight
        });
    };

    var _scrollHandler = function(){
        if(_isTop()){
            _fadeOut();
            _visible = false;
            
        }else{

            if(!_visible){
                _fadeIn();
                _visible = true;
                
            }

            if(!_isBottom()){
                if(_isFix){
                    _setStyle();
                    
                }
                _isFix = false;
                
                _$pagetopButtonTxt.css({
                        opacity:0
                    });
            }else{
                if(!_isFix){
                    
                    _$pagetopButton.css({
                        position:'absolute',
                        bottom:3
                    });
                    _$pagetopButtonTxt.css({
                        opacity:1
                    });
                    
                }
                _isFix = true;
            }
            // _$pagetopButton.css({
            //     left:_$contentsWrap.width()
            // });
        }
    };

    var _active = function(){
        jQuery(window).bind('scroll', _scrollHandler);
    };

    var _kill = function(){
        jQuery(window).unbind('scroll', _scrollHandler);
    };

    var _isBottom = function(){
        var isBottom = false;
        if(jQuery(document).scrollTop()>=(jQuery(document).height()-jQuery(window).height() - 74)){
            isBottom = true;
        }else{
            isBottom = false;
        }
        return isBottom;
    };

    var _setAnimationStyle = function(){
        _isTransitionEnable = jQuery('html').hasClass('csstransitions');
        var transtionProp = 'opacity '+_settings.fadeSpeed/1000+'s linear 0 ,bottom 0.04s ease-out 0'
        _$pagetopButton.css({
            "-moz-transition": transtionProp,
            "-webkit-transition": transtionProp,
            "-o-transition": transtionProp,
            "-ms-transition": transtionProp,
            "transition": transtionProp
        });
    };

    var _fadeOut = function(){
        if(_isTransitionEnable){
            _$pagetopButton.css({
                opacity: 0
            });
            _$pagetopButton.delay(_settings.fadeSpeed).queue(function(next){
                jQuery(this).stop().css('display','none');
                 next();
            });
        }else{
            _$pagetopButton.stop().animate({opacity: 0}, _settings.fadeSpeed,function(){
                jQuery(this).css('display','none');
            });
        }
    };

    var _fadeIn = function(){
        _$pagetopButton.css('display','block');
        if(_isTransitionEnable){
            _$pagetopButton.css({
                opacity: 1
            });
        }else{
            _$pagetopButton.stop().animate({opacity: 1}, _settings.fadeSpeed,function(){
               
            });
        }
    };

    var _isActive = function(){
        var isActive = true;
        if(SHISEIDO.config.breakPoint.small >= SHISEIDO.getDisplayArea()){
            isActive = false;
        }
        return isActive;
    };

    var _isTop = function(){
        var isTop;
        if(jQuery(window).scrollTop()>0){
            isTop = false;
        }else{
            isTop = true;
        }
        return isTop;
    };
};
                                                                    
jQuery(document).ready(function(e) {
	var pagetopCtrl = new SHISEIDO.PagetopButtonCtrl({
        container:jQuery('#contents')
    });
    pagetopCtrl.init();
});