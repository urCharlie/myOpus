if (typeof window.console != 'object'){
    window.console = {log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){}};
    }
    

var SHISEIDO = SHISEIDO || {};

(function($){
    var doc = document;
    var _ua = window.navigator.userAgent.toLowerCase(),
        _IE, _IEver,
        _Chrome, _ChromeVer,
        _FireFox, _FireFoxVer,
        _Safari, _SafariVer,
        _Opera, _OperaVer,
        _Mac, _iPhone, _iPad, _iPod, _iOSver,
        _Android, _AndroidMobile, _AndroidTablet, _AndroidVer,
        _WindowsPhone,
        _bot;

    // 銉栥儵銈︺偠鍒ゅ畾
    if (_ua.indexOf("msie") != -1){
        _IE = true;
        _ua.match(/msie (\d+\.\d)/);
        _IEver = parseFloat(RegExp.$1);

    }else if (_ua.indexOf("chrome")  != -1){
        _Chrome = true;
        _ua.match(/chrome[\/ ]?(\d+\.\d+)/);
        _ChromeVer = parseFloat(RegExp.$1);

    }else if (_ua.indexOf("firefox") != -1){
        _FireFox = true;
        _ua.match(/firefox[\/ ]?(\d+\.\d+)/);
        _FireFoxVer = parseFloat(RegExp.$1);

    }else if (_ua.indexOf("opera")   != -1){
        _Opera = true;
        _ua.match(/opera[\/ ]?(\d+\.\d+)/);
        _OperaVer = parseFloat(RegExp.$1);

    }else if (_ua.indexOf("safari")  != -1){
        _Safari = true;
        _ua.match(/version[\/ ]?(\d+\.\d+)/);
        _SafariVer = parseFloat(RegExp.$1);
    }

    // 鎼哄腐绔湯
    if (_ua.indexOf("iphone") != -1){
        _iPhone = true;
        _ua.match(/iphone os (\d+)_(\d+)/);
        _iOSver = RegExp.$1*1 + RegExp.$2*0.1;

    }else if (_ua.indexOf("ipad") != -1){
        _iPad = true;
        _ua.match(/cpu os (\d+)_(\d+)/);
        _iOSver = RegExp.$1*1 + RegExp.$2*0.1;

    }else if (_ua.indexOf("ipod") != -1){
        _iPod = true;
        _ua.match(/os (\d+)_(\d+)/);
        _iOSver = RegExp.$1*1 + RegExp.$2*0.1;

    }else if (_ua.indexOf("android")       != -1){
        _Android = true;
        _ua.match(/android (\d+\.\d)/);
        _AndroidVer = parseFloat(RegExp.$1);

        if(_ua.indexOf('mobile') != -1){
            _AndroidMobile = true;
        }else{
            _AndroidTablet = true;
        }
    }else if (_ua.indexOf("windows phone") != -1) {
        _WindowsPhone = true;
    }
    if(_ua.indexOf('mac os') != -1){
        _Mac = true;
    }

    // 銈儹銉笺儵銉肩郴
    if(_ua.indexOf('googlebot') != -1 || _ua.indexOf('yahoo') != -1 || _ua.indexOf('msnbot') != -1){
        _bot = true;
    }

    var ua = {
        isIE     : (_IE),
        isIE6    : (_IEver == 6.0),
        isIE7    : (_IEver == 7.0),
        isIE8    : (_IEver == 8.0),
        isIE9    : (_IEver == 9.0),
        isIE10   : (_IEver == 10.0),
        isIEgt6  : (_IEver > 6),
        isIEgt7  : (_IEver > 7),
        isIEgt8  : (_IEver > 8),
        isIEgt9  : (_IEver > 9),
        isIEgt10 : (_IEver > 10),
        isIElt6  : (_IE && _IEver < 6),
        isIElt7  : (_IE && _IEver < 7),
        isIElt8  : (_IE && _IEver < 8),
        isIElt9  : (_IE && _IEver < 9),
        isIElt10 : (_IE && _IEver < 10),

        isiPhone        : _iPhone ,
        isiPad          : _iPad,
        isiPod          : _iPod,
        isiOS           : (_iPhone || _iPad || _iPod),
        isAndroid       : _Android,
        isAndroidMobile : _AndroidMobile,
        isAndroidTablet : _AndroidTablet,
        isWindowsPhone  : _WindowsPhone,
        isSmartPhone    : (_iPhone || _iPad || _iPod || _Android || _WindowsPhone),

        isMobile : (_iPhone || _iPod || _AndroidMobile || _WindowsPhone),
        isTablet : (_iPad || _AndroidTablet),

        isSafari  : _Safari,
        isChrome  : _Chrome,
        isOpera   : _Opera,
        isFireFox : _FireFox,
        isMac     : _Mac,

        verIE      : _IEver,
        verFireFox : _FireFoxVer,
        verChrome  : _ChromeVer,
        verSafari  : _SafariVer,
        verOpera   : _OperaVer,
        verAndroid : _AndroidVer,
        veriOS     : _iOSver,

        isBot : _bot
    };

    SHISEIDO.ua = ua;

    var _getDisplayArea = function(){
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    SHISEIDO.getDisplayArea = _getDisplayArea;


    var _getFileName = function(path){
        var fileName = path.substring(path.lastIndexOf("/")+1,path.length);
        if(!fileName){
            fileName = "index.html";
        }
        
        fileName = fileName.substring(0,fileName.indexOf("."));
        return fileName;
    }

    var _trimCategoryName = function(categoryNames){
        categoryNames.splice(0,1);
        categoryNames.splice(categoryNames.length-1,1);
    }

    var _getCategories = function(path){
        
        var categories = {};
        var categoryNames = path.split("/");
        _trimCategoryName(categoryNames);

        var len = categoryNames.length;
        for (var i = 0; i < len; i++) {
            categories["level-"+(i+1)] = categoryNames[i];
        };
        categories["level-"+(len+1)] = _getFileName(path);

        return categories;
    }

    var _getShuffleArray = function(arr){
        var tmpArr = arr.concat();
        var i = tmpArr.length;
        while(i){
            var j = Math.floor(Math.random()*i);
            var t = tmpArr[--i];
            tmpArr[i] = tmpArr[j];
            tmpArr[j] = t;
        }
        return tmpArr;
    };

    var _setHoverEffect = function(container){
        jQuery(".whiteEffectImg",container).mouseenter(function(){
            jQuery(this).stop().fadeTo(120 , 0.4);
        });
        jQuery(".whiteEffectImg",container).mouseleave(function(){
            jQuery(this).stop().fadeTo(500 , 1);
        });
    };

    SHISEIDO.getCategories = _getCategories;
    SHISEIDO.getShuffleArray = _getShuffleArray;
    SHISEIDO.setHoverEffect = _setHoverEffect;

})(jQuery);


var RTmetricsSend = RTmetricsSend || function(value){
    var rand = Math.ceil(Math.random()*100000000);
    var rtURL = value+"&rnd="+rand;
    var imageObject = new Image();
    imageObject.src = rtURL;
};