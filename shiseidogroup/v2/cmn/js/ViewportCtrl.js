// "use strict";

// var SHISEIDO = SHISEIDO || {};

// SHISEIDO.ViewportCtrl = function(){
//     var metas = document.getElementsByTagName('meta');
//     var meta;
//     var _self = this;
//     var _viewport = SHISEIDO.config.viewport;

//     for(var i=0; i<metas.length; i++){
//         if(metas[i].name == 'viewport'){
//             meta = metas[i];
//             break;
//         }
//     }

//     var _set = function(content, override){
//         if(!meta || override === undefined || !!override){
//             if(!meta){
//                 meta = document.createElement('meta');
//                 meta.name = 'viewport';
//                 metas[0].parentNode.insertBefore(meta, metas[metas.length-1].nextSibling);
//             }
//             meta.content = content;
//         }
//     };

//     _self.init = function(){
//         if(SHISEIDO.ua.isMobile){
//             _set(_viewport.mobile, true);
//         }else if(SHISEIDO.ua.isTablet){
//             _set(_viewport.tablet, true);
//         }
//     };
// };

// var viewportCtrl = new SHISEIDO.ViewportCtrl();
//     viewportCtrl.init();
// $(document).ready(function() {
    
// });