"use strict";

var SHISEIDO = SHISEIDO || {};

SHISEIDO.NavigationStateCtrl = function(){
    var _self = this;
    var _pathname = window.location.pathname;
    var _mainCategory = "";
    var _subCategories = [];
    
    _self.init = function(){
        _mainCategory = jQuery('body').attr('id');
        _mainCategory = _checkArtAndBeauty(_mainCategory);
        var subCategoriesStr = jQuery('#contents-area').attr('class');

        if(subCategoriesStr != undefined && subCategoriesStr != ""){
            _subCategories = subCategoriesStr.split(' ');
            _setLocalNaviState();
        }
        _setGlobalNaviState();
        
    };

    function _checkArtAndBeauty(cat){
        if(cat == "creative" || cat == "culture"){
            cat = "beauty-art";
        }
        return cat;
    }

    function _setGlobalNaviState(){
        var imgSrc;
        try{
            imgSrc = jQuery('.global-navi .'+_mainCategory + " img").attr('src');
        }catch(e){
           return;     
        }
        
        if(imgSrc){
            var name = imgSrc.substr(0,imgSrc.lastIndexOf("."))+"_r";
            var fileType = imgSrc.substr(imgSrc.lastIndexOf("."));
            var currentImgSrc = name + fileType;
            jQuery('.global-navi .'+_mainCategory + " img").attr('src',currentImgSrc);
        }
    }

    function _setLocalNaviState(){
        for(var i = 0; i<_subCategories.length;i++){

            jQuery('#aside .'+_subCategories[i]).addClass('current');
        }
    }

};
                                                                    

jQuery(document).ready(function(e) {
	var navStateCtrl = new SHISEIDO.NavigationStateCtrl();
    navStateCtrl.init();
    var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();
    if (appVersion.indexOf("msie 6.") != -1) {
        if(!$('html').hasClass('lt-ie7')){
            $('html').addClass('lt-ie7')
        }
    }
});