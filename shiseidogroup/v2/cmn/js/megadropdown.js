var SHISEIDO = SHISEIDO || {};
	
SHISEIDO.megadropdownContents = {};	


function Megadropdown(){
	var _self = this;
	var _mgddCssParameter = {};
	var _isTop = false;
	var _timerObject;

	if(jQuery('body').attr('id') == "index"){
		_isTop = true;
	}


	if(!__ie6()) jQuery(window).on('load',function(){ jQuery('body > .container').css( 'overflow-x' , 'hidden' ); });

		var timeId,
		current,
		prev,
		in_flg = false;
		op_flg = false;

	//define megadropdown_contents.js
	var html = SHISEIDO.megadropdownContents;
	jQuery('#nav-area .global-navi li.brands').append( html.brands  );
	jQuery('#nav-area .global-navi li.csr'     ).append( html.csr       );
	jQuery('#nav-area .global-navi li.rd'      ).append( html.rd        );
	jQuery('#nav-area .global-navi li.culture' ).append( html.culture   );
	jQuery('#nav-area .global-navi li.beauty-art').append( html.beautyArt  );
	jQuery('#nav-area .global-navi li.ir'      ).append( html.ir        );
	jQuery('#nav-area .global-navi li.company' ).append( html.company   );
	jQuery('#nav-area .global-navi li.recruit' ).append( html.recruit   );
	
	var css = {
		mgddIndex : {
			open : {
				height : 340,
				top:-340
			},
			close : {
				height : 0,
				top:0
			}
		},
		mgdd : {
			open : {
				height : 340
			},
			close : {
				height : 0
			}
		},
		mgsp : {
			open : {
				height : 29
			},
			close : {
				height : 29
			}
		}
	};

	if(_isTop){
		_mgddCssParameter = css.mgddIndex;
	}else{
		_mgddCssParameter = css.mgdd;
	}

	var intervals = {
		inCount : {
//			inWait  : 500,
			inWait  : 0,
			outWait : 100
		},
		dropdown : {
			open : {
				mgdd : {
					toggle : 600
				},
				mgsp : {
					toggle : 300
				}
			},
			close : {
				mgdd : {
					toggle : 100
				},
				mgsp : {
					toggle : 0
				}
			}
		}
	};

	var selecter = {
		globalNavi             : '#nav-area .global-navi',
		globalNaviLi           : '#nav-area .global-navi > li:not(.home) > a',
		megadropNaviSpan       : '#nav-area .global-navi > li:not(.home) span',
		megadropNaviDiv        : '#nav-area .global-navi > li div.mgdd-wrap',
		megadropNaviClassSpan  : function(_s){ return '#nav-area .global-navi .'+_s+' span'; },
		megadropNaviClassDiv   : function(_s){ return '#nav-area .global-navi .'+_s+' div.mgdd-wrap'; }
	};


	function inHandler(){

		var target = $(this).parents(".global-navi-item");
		
		if(jQuery('.mgdd-wrap').css('display') == 'none'){
			return;
		}
		clearInterval( timeId );

		if( !in_flg ) {
			timeId = setTimeout(function(){
				in_flg = true;

				open.call(target);
			}, intervals.inCount.inWait );
		}
	}

	function outHandler(){
		var target = $(this).parents(".global-navi-item");

		clearInterval( timeId );
		in_flg = false;
		timeId = setTimeout(function(){
			close.call(target);
		}, intervals.inCount.outWait );
	}

	function update_menu(){

		if( in_flg && typeof current !== undefined) open();
	}
	function close_menu(){
		var _t = current;

		jQuery( selecter.megadropNaviClassDiv( _t ) )
			.stop( true, false )
			.animate( _mgddCssParameter.close, intervals.dropdown.close.mgdd.toggle, "linear", function(){
					jQuery( selecter.megadropNaviClassSpan( _t ) )
						.stop( true, false )
						.animate( css.mgsp.close, intervals.dropdown.close.mgsp.toggle, "easeOutQuart" );
				});
		
	}
	function update(){
		prev = current;
		current =  jQuery(this).parents(".global-navi-item").attr('id').split("_")[1];
		
		if( in_flg && typeof current !== undefined ) open();
	}

	function close(){
		var _t = jQuery(this).attr('id').split("_")[1];
		closeByClassName(_t);
	}

	function closeByClassName(className){
		var _t = className;
		jQuery( selecter.megadropNaviClassDiv( _t ) )
			.stop( true, false )
			.animate( _mgddCssParameter.close, intervals.dropdown.close.mgdd.toggle, "linear", function(){
					jQuery( selecter.megadropNaviClassSpan( _t ) )
						.stop( true, false )
						.animate( _mgddCssParameter.close, intervals.dropdown.close.mgsp.toggle, "easeOutQuart" );
				});
	}

	function open(){
		closeByClassName(prev);
		var targetDiv = selecter.megadropNaviClassDiv( current );
		var targetHeight = jQuery(targetDiv).find(".mgdd-main").height();
		_mgddCssParameter.open.height = targetHeight;

		jQuery( selecter.megadropNaviClassDiv(current) )
			.stop( true, false )
//			.delay( intervals.dropdown.open.mgsp.toggle )
			.animate( _mgddCssParameter.open, intervals.dropdown.open.mgdd.toggle, "easeOutQuart" );

		var _sel = "."+current+" .mgdd-wrap";
//		var _w = jQuery(window).width();
		var _w = jQuery(".container").width();
		var _wk1_1 = jQuery("#header .wrap").css("margin-left");
		_wk1_1 = _wk1_1.substr(0, _wk1_1.length - 2);
		var _wk1_2 = jQuery("#header .wrap").css("margin-right");
		_wk1_2 = _wk1_2.substr(0, _wk1_2.length - 2);
		if(_wk1_1 == _wk1_2){
		_wk1_1 = _wk1_2 = 0;
		}
		var _wk2 = jQuery("#header .wrap").width();

		jQuery(_sel).css("left",-4);
		jQuery(_sel).width($("#nav-area").width());

	}

	function __ie6() {
		if(this.ie6 !== undefined) return this.ie6;
		if(!jQuery.support.opacity){
			if(!jQuery.support.style){
				if (typeof document.documentElement.style.maxHeight == "undefined") {
					this.ie6 = true;
					return true;
				}
			}
		}
		this.ie6 = false;
		return false;
	}

	function sp_init() {
		jQuery(document).on('touchstart', selecter.megadropNaviSpan, sp_touch );
		jQuery(document).on('click', selecter.megadropNaviSpan, sp_touch );
	}

	function sp_touch(){
		var touch =  jQuery(this).parent().parent().attr('class');
		if (current && op_flag) {
			jQuery( selecter.megadropNaviClassDiv( current ) )
			.stop( true, false )
			.animate( _mgddCssParameter.close, intervals.dropdown.close.mgdd.toggle, "linear", function(){
					jQuery( selecter.megadropNaviClassSpan( current ) )
						.stop( true, false )
						.animate( _mgddCssParameter.close, intervals.dropdown.close.mgsp.toggle, "easeOutQuart" );
						op_flag = false;
					if (current != touch) {
						current =  touch;
						open();
						op_flag = true;
					}
				});
			return false;
		} else {
			
			current =  jQuery(this).parent().parent().attr('class');
			open();
			op_flag = true;
			return false;
		}
	}

	function setEvents(){
		jQuery( selecter.globalNaviLi ).on( 'mouseenter' , inHandler );
		jQuery( selecter.globalNaviLi ).on( 'mouseenter' , update );
		jQuery(".mgdd-main-inner").on( 'mouseenter' , inHandler );
		jQuery( selecter.globalNaviLi ).on( 'mouseleave' , outHandler );
		jQuery(".mgdd-main-inner").on( 'mouseleave' , outHandler );
		if(_timerObject){
			clearInterval(_timerObject);
		}
		
	}

	function removeEvents(){
		jQuery( selecter.globalNaviLi ).off( 'mouseenter' , inHandler );
		jQuery( selecter.globalNaviLi ).off( 'mouseleave' , outHandler );
		jQuery( selecter.globalNaviLi ).off( 'mouseenter' , update );
		jQuery( selecter.globalNaviLi ).off( 'mouseleave' , close );
	}


	_self.init = function(){
		
		if(SHISEIDO.ua.isMobile || SHISEIDO.ua.isTablet) {
			sp_init();
		 }
		else {
			setEvents();
		}
		SHISEIDO.setHoverEffect(jQuery('.mgdd-wrap'));
	};

	
	_self.closeForcibly = function(){
		removeEvents();
		outHandler();		
		close.apply(jQuery('li.brands'));
		timerObject = setInterval(setEvents,800);
	};
}


SHISEIDO.MegadropdownPanelCtrl = function(){
    var _self = this;
    
    var categories = {
    	"2":"brands",
    	"3":"csr",
    	"4":"rd",
    	"5":"beauty-art",
    	"7":"ir",
    	"8":"company",
    	"9":"recruit"
    };

    _self.init = function(){
        jQuery.ajax({
            url: '/sys_asset/panel/json/mega.json',
            type: 'GET',
            dataType: 'json'
        })
        .done(function(data) {

            _show(data);
            SHISEIDO.setHoverEffect(".mgdd-wrap");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
           
        });
    };

    var _show = function(data){
        for(var key in categories){
        	if(categories[key] == "brands") continue;
        	var categoryData = data.category[key].mega;

        	var domClass = ".mgdd-wrap-"+categories[key]+" .image_block";
        	var html = "";

        	for (var i = 1; i <= 2; i++) {
        		if(!categoryData[String(i)]) break;
        		html += _domHelper(i,categoryData[String(i)]);
        	};
        	jQuery(domClass).html(html);
        }

    };

    var _domHelper = function(index,data){
        var html = '';
            html+= '<div class="img'+index+'">';
            if(data.link_type == 2){
                if(_isLinkToBusiness(data.mega_url)){
            		html+= '<a href="'+data.mega_url+'" onclick="RTmetricsSend(\''+data.rt+'\')">';	
            	}else{
            		html+= '<a href="'+data.mega_url+'" onclick="RTmetricsSend(\''+data.rt+'\')" target="_blank" class="external">';
            	}
            }else{
                html+= '<a href="'+data.mega_url+'?'+data.rt+'">';
            }

            html+= '<img class="whiteEffectImg" src="/'+data.image_url_1+'" alt="'+_getTextOnly(data.mega_title)+'">';
            html+= '</a>';
            html+= '<div class="image_title">'+data.mega_title+'</div>';
            html+= '</div>';
        return html;

    }

    var _isLinkToBusiness = function(url){
        if(url.indexOf("brands/search/#") != -1){
            return true;
        }
        return false;
    }

    var _getTextOnly = function(str){
    	return $('<div>').html(str).text();
    };
}
                                                                       

jQuery(document).ready(function(e) {
	if(!$('html').hasClass('lt-ie7')){
		

	    loadMegadropdownHtml(function(){
	    	SHISEIDO.mgdd = new Megadropdown();
			SHISEIDO.mgdd.init();
		    var megaPaneCtrl = new SHISEIDO.MegadropdownPanelCtrl();
		    megaPaneCtrl.init();
	    });
	}


	function loadMegadropdownHtml(callback){
		
		var loadHtmls = {
			"brands":"brands.html",
			"csr":"csr.html",
			"rd":"rd.html",
			"beautyArt":"beauty-art.html",
			"ir":"ir.html",
			"company":"company.html",
			"recruit":"recruit.html"
		}
		var path = "/v2/cmn/js/megadropdown-partial/";

		var count = 0;
		for(var key in loadHtmls){
			count++;
		}

		var loadCompCount = 0;
		for(var key in loadHtmls){
			loadPartial(key,path+loadHtmls[key],function(id,data){
				SHISEIDO.megadropdownContents[id] = data;
				loadCompCount++;
				if(loadCompCount>=count){
					callback();
				}
			});
		}
	}

	function loadPartial(id,url,callback){
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'html'
		})
		.done(function(data) {
			callback(id,data);
		})
		.fail(function() {
			
		})
		.always(function() {
			
		});
	}
});