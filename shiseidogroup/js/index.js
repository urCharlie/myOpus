/* ----------------------------------------
 * JavaScript | SHISEIDO GROUP
 * index.js
 * ---------------------------------------- */

var SHISEIDOGROUP = SHISEIDOGROUP || {};
SHISEIDOGROUP.LOG = false;
var _mdl;

// preloadImages.min.js
if(typeof jQuery!="undefined"){(function($){$.preloadImages=function(d,s){if(s instanceof Function){s={all:s};}if(typeof d=="string"){d=[d];}var e=[];var t=d.length;for(var i=0;i<t;i++){var m=new Image();m.onload=function(){e.push(this);if(s.each instanceof Function){s.each.call(window,this);}if(e.length>=t&&s.all instanceof Function){s.all.call(window,e);}};m.src=d[i];}};$.fn.preloadImages=function(){};})(jQuery);}

// backgroundSize.min.js
!function(t,e,s,i,a){var o=t("<div>")[0],n=/url\(["']?(.*?)["']?\)/,r=[],h={top:0,left:0,bottom:1,right:1,center:.5};if(!("backgroundSize"in o.style)||t.debugBGS){t.cssHooks.backgroundSize={set:function(e,s){var i,a,o,n=!t.data(e,"bgsImg");t.data(e,"bgsValue",s),n?(r.push(e),t.refreshBackgroundDimensions(e,!0),a=t("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"}),o=t("<img>").css({position:"absolute"}).appendTo(a),a.prependTo(e),t.data(e,"bgsImg",o[0]),i=(t.css(e,"backgroundPosition")||t.css(e,"backgroundPositionX")+" "+t.css(e,"backgroundPositionY")).split(" "),t.data(e,"bgsPos",[h[i[0]]||parseFloat(i[0])/100,h[i[1]]||parseFloat(i[1])/100]),"auto"==t.css(e,"zIndex")&&(e.style.zIndex=0),"static"==t.css(e,"position")&&(e.style.position="relative"),t.refreshBackgroundImage(e)):t.refreshBackground(e)},get:function(e){return t.data(e,"bgsValue")||""}},t.cssHooks.backgroundImage={set:function(e,s){return t.data(e,"bgsImg")?t.refreshBackgroundImage(e,s):s}},t.refreshBackgroundDimensions=function(e,s){var i=t(e),a={width:i.innerWidth(),height:i.innerHeight()},o=t.data(e,"bgsDim"),n=!o||a.width!=o.width||a.height!=o.height;t.data(e,"bgsDim",a),n&&!s&&t.refreshBackground(e)},t.refreshBackgroundImage=function(e,s){var i=t.data(e,"bgsImg"),a=(n.exec(s||t.css(e,"backgroundImage"))||[])[1],o=i&&i.src,r=a!=o;r&&(i.style.height=i.style.width="auto",i.onload=function(){var s={width:i.width,height:i.height};(1!=s.width||1!=s.height)&&(t.data(e,"bgsImgDim",s),t.data(e,"bgsConstrain",!1),t.refreshBackground(e),i.style.visibility="visible",i.onload=null)},i.style.visibility="hidden",i.src=a,(i.readyState||i.complete)&&(i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i.src=a),e.style.backgroundImage="none")},t.refreshBackground=function(e){var s,a,o=t.data(e,"bgsValue"),n=t.data(e,"bgsDim"),r=t.data(e,"bgsImgDim"),h=t(t.data(e,"bgsImg")),d=t.data(e,"bgsPos"),g=t.data(e,"bgsConstrain"),c=n.width/n.height,u=r.width/r.height;"contain"==o?u>c?(t.data(e,"bgsConstrain",s="width"),a=i.floor((n.height-n.width/u)*d[1]),h.css({top:a}),s!=g&&h.css({width:"100%",height:"auto",left:0})):(t.data(e,"bgsConstrain",s="height"),a=i.floor((n.width-n.height*u)*d[0]),h.css({left:a}),s!=g&&h.css({height:"100%",width:"auto",top:0})):"cover"==o&&(u>c?(t.data(e,"bgsConstrain",s="height"),a=i.floor((n.height*u-n.width)*d[0]),h.css({left:-a}),s!=g&&h.css({height:"100%",width:"auto",top:0})):(t.data(e,"bgsConstrain",s="width"),a=i.floor((n.width/u-n.height)*d[1]),h.css({top:-a}),s!=g&&h.css({width:"100%",height:"auto",left:0})))};var d,g,c,u=t.event,l={_:0},f=0;d=u.special.throttledresize={setup:function(){t(this).on("resize",d.handler)},teardown:function(){t(this).off("resize",d.handler)},handler:function(e,s){var i=this,a=arguments;g=!0,c||(t(l).animate(l,{duration:1/0,step:function(){f++,(f>d.threshold&&g||s)&&(e.type="throttledresize",u.dispatch.apply(i,a),g=!1,f=0),f>9&&(t(l).stop(),c=!1,f=0)}}),c=!0)},threshold:1},t(e).on("throttledresize",function(){t(r).each(function(){t.refreshBackgroundDimensions(this)})})}}(jQuery,window,document,Math);

// ua
SHISEIDOGROUP.UserAgent=function(){var i,e,d,o,s,a,r,n,t,x,E,p,f,g,O,h,m,I,l,c,R,$=(document,window.navigator.userAgent.toLowerCase());-1!=$.indexOf("msie")?(i=!0,$.match(/msie (\d+\.\d)/),e=parseFloat(RegExp.$1)):-1!=$.indexOf("chrome")?(d=!0,$.match(/chrome[\/ ]?(\d+\.\d+)/),o=parseFloat(RegExp.$1)):-1!=$.indexOf("firefox")?(s=!0,$.match(/firefox[\/ ]?(\d+\.\d+)/),a=parseFloat(RegExp.$1)):-1!=$.indexOf("opera")?(t=!0,$.match(/opera[\/ ]?(\d+\.\d+)/),x=parseFloat(RegExp.$1)):-1!=$.indexOf("safari")&&(r=!0,$.match(/version[\/ ]?(\d+\.\d+)/),n=parseFloat(RegExp.$1)),-1!=$.indexOf("iphone")?(p=!0,$.match(/iphone os (\d+)_(\d+)/),O=1*RegExp.$1+.1*RegExp.$2):-1!=$.indexOf("ipad")?(f=!0,$.match(/cpu os (\d+)_(\d+)/),O=1*RegExp.$1+.1*RegExp.$2):-1!=$.indexOf("ipod")?(g=!0,$.match(/os (\d+)_(\d+)/),O=1*RegExp.$1+.1*RegExp.$2):-1!=$.indexOf("android")?(h=!0,$.match(/android (\d+\.\d)/),l=parseFloat(RegExp.$1),-1!=$.indexOf("mobile")?m=!0:I=!0):-1!=$.indexOf("windows phone")&&(c=!0),-1!=$.indexOf("mac os")&&(E=!0),(-1!=$.indexOf("googlebot")||-1!=$.indexOf("yahoo")||-1!=$.indexOf("msnbot"))&&(R=!0);var v={isIE:i,isIE6:6==e,isIE7:7==e,isIE8:8==e,isIE9:9==e,isIE10:10==e,isIEgt6:e>6,isIEgt7:e>7,isIEgt8:e>8,isIEgt9:e>9,isIEgt10:e>10,isIElt6:i&&6>e,isIElt7:i&&7>e,isIElt8:i&&8>e,isIElt9:i&&9>e,isIElt10:i&&10>e,isiPhone:p,isiPad:f,isiPod:g,isiOS:p||f||g,isAndroid:h,isAndroidMobile:m,isAndroidTablet:I,isWindowsPhone:c,isSmartPhone:p||f||g||h||c,isMobile:p||g||m||c,isTablet:f||I,isSafari:r,isChrome:d,isOpera:t,isFireFox:s,isMac:E,verIE:e,verFireFox:a,verChrome:o,verSafari:n,verOpera:x,verAndroid:l,veriOS:O,isBot:R};return v};


// construtor
$(function() {
	_mdl = new SHISEIDOGROUP.Module();
	_mdl.init();
});


/* ----------------------------------------
 * CLASS - Module
 * ----------------------------------------
 */
SHISEIDOGROUP.Module = function() {
	var _self = this;

	// ua
	this.ua = new SHISEIDOGROUP.UserAgent();

	// class
	this.scroller = null;
	this.mainview = null;
	this.news = null;
	this.whoweare = null;
	this.recommend = null;
	this.our_brands = null;
	this.feeds = null;

	// pannel management system
	this.pannel_json = '/sys_asset/panel/json/category_1.json';
	this.pannel_index = {
		// recommend : [ 5, 6, 7, 8 ]
		recommend : [ 1, 2, 3, 4 ]
	}
	this.pannel_data = null;

	// viewport
	this.breakpoint = [ 768 ];
	this.prev_viewmode = null;
	this.curr_viewmode = null;
	
	/* ------------------
	 * init
	 */
	this.init = function() {
		_log('Module.init()-----');

		// resize, scroll
		$(window).on({
			resize : $.proxy(this._resize, this)
		});
		this._resize();

		// scroller
		this.scroller = new SHISEIDOGROUP.Scroller();
		this.scroller.init({
			parent : this
		});

		// mainview
		this.mainview = new SHISEIDOGROUP.Mainview();
		this.mainview.init({
			parent : this,
			callback : this.next
		});

		// news
		this.news = new SHISEIDOGROUP.News();
		this.news.init({
			parent : this,
			callback : this.next
		});
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		var browserW = window.innerWidth ? window.innerWidth : $(window).width();
		// var winW = Math.max(_cmn.minW, document.body.clientWidth ? document.body.clientWidth : $(window).width());
		var winW = document.body.clientWidth ? document.body.clientWidth : $(window).width();
		var winH = window.innerHeight ? window.innerHeight : $(window).height();
		var bodyH = document.body.clientHeight;

		// viewport
		if(browserW < this.breakpoint[0]) {
			this.prev_viewmode = this.curr_viewmode;
			this.curr_viewmode = 0;
		} else {
			this.prev_viewmode = this.curr_viewmode;
			this.curr_viewmode = 1;
		}
	}
	
	/* ------------------
	 * next
	 */
	this.next = function() {
		_log('Module.next()-----');
		_log('Module.next | mainview.is_init : ' + _self.mainview.is_init + ' news.is_init : ' + _self.news.is_init);
		if(_self.mainview.is_init && _self.news.is_init) {

			// preload images
			var images = [
				'img/index/whoweare_ttl.png',
				'img/index/recommend_ttl.png',
				'img/index/btn_rss.png',
				'img/index/media_ttl.png'
			];
			// preload
			$.preloadImages(images, {
				all : function(imgs) {
					// init class
					_self.whoweare = new SHISEIDOGROUP.WhoWeAre();
					_self.recommend = new SHISEIDOGROUP.Recommend();
					_self.our_brands = new SHISEIDOGROUP.OurBrands();
					_self.feeds = new SHISEIDOGROUP.Feeds();

					// who we are
					_self.whoweare.init({
						parent : _self
					});

					// load json
					_self.loadJSON();
				}
			});
		}
	}
	
	/* ------------------
	 * loadJSON
	 */
	this.loadJSON = function() {
		_log('Module.loadJSON()-----');

		// load json
		jQuery.ajax({
			url : this.pannel_json,
			type: 'GET',
			dataType : 'json',
			cache: false,
			timeout: 20000,
			success: function(res) {
				_log('Module.loadJSON | SUCCESS | res : ', res);
				_self.pannel_data = res.frame[1];

				// add content
				_self.addContents();
			},
			error : function(error) {}
		});
	}
	
	/* ------------------
	 * addContents
	 */
	this.addContents = function() {
		_log('Module.addContents()-----');

		// our brands
		this.our_brands.init({
			parent : this
		});

		// recommend
		var data = [];
		var len = this.pannel_index.recommend.length;
		for(var i=0; i<len; i++) {
			data.push(this.pannel_data[String(this.pannel_index.recommend[i])]);
		}
		this.recommend.init({
			parent : this,
			data : data
		});

		// feeds
		this.feeds.init({
			parent : this
		});

		// ie
		if(this.ua.isIElt9) {
			$('#whoweare .section_header span').css('background-size', 'contain');
			$('#recommend .section_header span').css('background-size', 'contain');
			$('#media .section_container p.ttl span').css('background-size', 'contain');
			$('#feeds .section_footer .rss a').css('background-size', 'contain');
		}
	}
	
	/* ------------------
	 * utility
	 */
	this.utility = {
		// for Pannel Management System
		_getTextOnly : function(str) {
			return $('<div>').html(str).text();
		},
		_isLinkToBusiness : function(url) {
			if(url.indexOf('business/search/#') != -1) {
				return true;
			}
			return false;
		},
		// for Feed RSS
		_formatDate : function(str) {
			var objDate = new Date(str);
			var year    = objDate.getFullYear();
			var month   = objDate.getMonth() + 1;
			var date    = objDate.getDate();
			if ( month < 10 ){
				month = "0" + month;
			}
			if ( date < 10 ){
				date = "0" + date;
			}
			str = year + '/' + month + '/' + date;
			return str;
		}
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - Scroller
 * ----------------------------------------
 */
SHISEIDOGROUP.Scroller = function() {
	var _self = this;
	
	// parent
	this.parent;

	// dom
	this.container = $('body > .container');
	this.content = $('#contents');
	this.btn = null;
	this.btnLabel = null;
	
	// type
	this.type = 0;

	// defY
	this.defY;

	// flag
	this.is_active = true;
	this.is_bottom = false;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);

		// dom
		this.content.append('<div id="float-pagetop"><a href="#"><span id="float-pagetop-txt"></span><span id="float-pagetop-arrow"></span></a></div>');
		this.btn = $('#float-pagetop');
		this.btnLabel = $('#float-pagetop-txt');

		// dom
		this.btn.css({ opacity : 0 });
		this.btnLabel.css({ opacity : 0 });

		// defY
		this.defY = parseInt(_self.btn.css('bottom'));
		
		// scroll
		$(window).on({
			scroll : this._scroll
		});
		this._scroll();
	}

	/* ------------------
	 * _scroll
	 */
	this._scroll = function() {
		var scrlY = $(window).scrollTop();
		var winH = window.innerHeight ? window.innerHeight : $(window).height();
		var footH = $('#footer').outerHeight();
		var minY = 100;
		var maxY = _self.container.offset().top + _self.container.outerHeight() - winH - footH + _self.defY - 10;
		
		if(_self.is_active) {
			if(scrlY < minY) {
				if(_self.type > 0) {
					_self.hide();
				}
				_self.type = 0;
				_self.is_bottom = false;
			} else  {
				if(_self.type == 0) {
					_self.show();
				}
				if(maxY < scrlY) {
					var y = _self.defY + scrlY - maxY;
					_self.btn.css({ bottom : y });
					_self.type = 2;
					if(!_self.is_bottom) {
						_self.btnLabel.stop().animate({ opacity : 1 }, 100, 'linear');
						_self.is_bottom = true;
					}
				} else {
					_self.btn.css({ bottom : _self.defY });
					_self.type = 1;
					if(_self.is_bottom) {
						_self.btnLabel.stop().animate({ opacity : 0 }, 100, 'linear');
						_self.is_bottom = false;
					}
				}
			}
		}
	}

	/* ------------------
	 * show
	 */
	this.show = function() {
		this.btn.css({ display : 'block' }).stop().animate({ opacity : 1 }, 100, 'linear');
	}

	/* ------------------
	 * hide
	 */
	this.hide = function() {
		this.btn.stop().animate({ opacity : 0 }, 100, 'linear', function() {
			_self.btn.css({ display : 'none' });
		});
	}

	/* ------------------
	 * kill
	 */
	this.kill = function() {
		this.is_active = false;
		this.hide();
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - Mainview
 * ----------------------------------------
 */
SHISEIDOGROUP.Mainview = function() {
	var _self = this;

	// parent
	this.parent;

	// callback
	this.callback = null;

	// dom
	this.container = $('#mainview_container');
	this.items = [];
	this.blank = this.container.children('.blank');
	this.pager = $('#mainview_pager');
	this.pagerContainer = $('#mainview_pager ul');
	this.pagerItems = [];

	// is init
	this.is_init = false;

	// item
	this.prev_id = null;
	this.curr_id = 0;
	this.item_count;

	// timer
	this.timer = null;
	this.interval = 5000;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('Mainview.init()-----');

		// dom : item
		this.container.children('.item').each(function() {
			// if(!_self.parent.ua.isIElt9) {
				$(this).css({ opacity : 0 });
			// }
			_self.items.push($(this));
		});
		this.item_count = this.items.length;

		//dom : pager
		if(this.item_count > 1) {
			for(var i=0; i<this.item_count; i++) {
				this.pagerContainer.append('<li></li>');
				var target = this.pagerContainer.children('li:last-child');
				this.pagerItems.push(target);
			}
		}

		// resize
		$(window).on({
			resize : $.proxy(this._resize, this)
		});

		// start
		this.start();
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		var winW = document.body.clientWidth ? document.body.clientWidth : $(window).width();

		// item
		var len = this.items.length;
		for(var i=0; i<len; i++) {
			// sp
			if(this.parent.curr_viewmode == 0) {
				if(this.parent.curr_viewmode != this.parent.prev_viewmode) {
					this.items[i].children('.item_wrap').children('.content').css({ paddingTop : 0 });
				}
				var h = this.items[i].children('.item_wrap').children('.content').height() - 18;
				this.items[i].children('.item_wrap').children('.content').children('.context').children('.img_ttl').css({ height : h });

			// pc
			} else {
				var h1 = this.items[i].children('.item_wrap').children('.content').children('.context').height();
				var h2 = this.items[i].children('.item_wrap').children('.img').height();
				var y = Math.round((h2 - h1) / 2);
				this.items[i].children('.item_wrap').children('.content').css({ paddingTop : y });
				this.items[i].children('.item_wrap').children('.content').children('.context').children('.img_ttl').css({ height : 'auto' });
			}
		}

		if(this.parent.curr_viewmode == 0) {
			// blank
			var h1 = this.items[this.curr_id].outerHeight();
			var h2 = this.items[this.curr_id].children('.item_wrap').children('.img').height();
			var h3 = Math.max(100, h1 - h2 + 40);
			this.blank.css({ paddingBottom : h3 });
		} else {
			this.blank.css({ paddingBottom : 0 });
		}
	}
	
	/* ------------------
	 * start
	 */
	this.start = function() {
		// init
		var _init = function() {
			// show
			_self.items[_self.curr_id].stop().css({ display : 'block' }).animate({ opacity : 1 }, 500, 'linear', function() {
				// timer
				if(_self.item_count > 1) {
					_self.setTimer();
				}

				// get images
				var images = [];
				var len = _self.items.length;
				for(var i=0; i<len; i++) {
					var src = _self.items[i].children('.item_wrap').children('.img').children('img').attr('src');
					images.push(src);
				}
				// preload
				$.preloadImages(images, {
					all : function(imgs) {
						// is init
						_self.is_init = true;

						// callback
						if(typeof(_self.callback) == 'function') {
							_self.callback();
						}
					}
				});
			});
			
			// resize
			_self._resize();

			$.preloadImages('img/index/mainview_blank.gif', {
				all : function(imgs) {
					// resize
					_self._resize();
				}
			});

			// set pager
			if(_self.item_count > 1) {
				_self.setPager();
			}
		}

		_init();
	}
	
	/* ------------------
	 * change
	 */
	this.change = function() {
		_log('Mainview.change()-----');
		_log('Mainview.change | curr:' + this.curr_id + ' / prev:' + this.prev_id);
		this.clearTimer();
		this.clearPager();

		// ie
		// if(this.parent.ua.isIElt9) {
		// 	this.items[this.prev_id].hide();
		// 	this.items[this.curr_id].show();
		// 	this.setTimer();
		// 	this.setPager();
		// } else {
			// animation
			this.items[this.prev_id].stop().animate({ opacity : 0 }, 500, 'linear', function() {
				$(this).css({ display : 'none' });
			});
			this.items[this.curr_id].stop().css({ display : 'block' }).animate({ opacity : 1 }, 500, 'linear', function() {
				_self.setTimer();
				_self.setPager();
			});
		// }

		// resize
		this._resize();
	}
	
	/* ------------------
	 * setPager
	 */
	this.setPager = function() {
		// _log('Mainview.setPager()-----');
		var len = this.pagerItems.length;
		for(var i=0; i<len; i++) {
			var target = this.pagerItems[i];
			// _log('Mainview.setPager | i : ' + i + ' / curr_id : ' + _self.curr_id);
			if(i == this.curr_id) {
				target.addClass('focus');
			} else {
				target.off().css({ cursor : 'pointer' }).on({
					click: function(e) {
						_self.prev_id = _self.curr_id;
						_self.curr_id = parseInt(e.data.id);
						_self.change();
					}
				}, { id : i });
			}
		}
	}
	
	/* ------------------
	 * clearPager
	 */
	this.clearPager = function() {
		var len = this.pagerItems.length;
		for(var i=0; i<len; i++) {
			var target = this.pagerItems[i];
			if(target.hasClass('focus')) {
				target.removeClass('focus');
			}
			target.off().css({ cursor : 'default' });
		}
	}
	
	/* ------------------
	 * setTimer
	 */
	this.setTimer = function() {
		if(this.timer == null) {
			this.timer = setInterval(function() {
				_self.prev_id = _self.curr_id;
				_self.curr_id = _self.curr_id == _self.item_count - 1 ? 0 : _self.curr_id + 1;
				_self.change();
			}, this.interval);
		}
	}
	
	/* ------------------
	 * clearTimer
	 */
	this.clearTimer = function() {
		if(this.timer != null) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - News
 * ----------------------------------------
 */
SHISEIDOGROUP.News = function() {
	var _self = this;

	// parent
	this.parent;

	// callback
	this.callback = null;

	// dom
	this.container = $('#news_wrap');
	this.items = [];

	// is init
	this.is_init = false;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('News.init()-----');

		// dom
		this.container.children('.item').each(function() {
			_self.items.push($(this));
		});

		// resize
		$(window).on({
			resize : $.proxy(this._resize, this)
		});

		// get images
		var images = [];
		var len = _self.items.length;
		for(var i=0; i<len; i++) {
			var src = _self.items[i].children('.item_wrap').children('.img').children('img').attr('src');
			images.push(src);
		}
		// preload
		$.preloadImages(images, {
			each : function(img) {
				// resize
				_self._resize();
			},
			all : function(imgs) {
				// is init
				_self.is_init = true;
				
				// callback
				if(typeof(_self.callback) == 'function') {
					_self.callback();
				}
			}
		});
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		// sp
		if(this.parent.curr_viewmode == 0) {
			if(this.parent.curr_viewmode != this.parent.prev_viewmode) {
				var len = this.items.length;
				for(var i=0; i<len; i++) {
					this.items[i].children('.item_wrap').css({ height : 'auto' });
				}
			}

		// pc
		} else {
			var h = 0;
			var len = this.items.length;
			for(var i=0; i<len; i++) {
				h = Math.max(h, this.items[i].children('.item_wrap').css({ height : 'auto' }).height());
			}
			var len = this.items.length;
			for(var i=0; i<len; i++) {
				this.items[i].children('.item_wrap').height(h);
			}
		}
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - WhoWeAre
 * ----------------------------------------
 */
SHISEIDOGROUP.WhoWeAre = function() {
	var _self = this;

	// dom
	this.parent;

	// dom
	this.wrapper = $('#whoweare');
	this.outer = $('#whoweare_outer');
	this.header = this.outer.children('.section_header');
	this.ttl = this.header.children('span');
	this.container = $('#whoweare_wrap');
	this.karakusa = $('#whoweare_karakusa');

	// inc
	this.include = '/v2/inc/top/whoweare.html';
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('WhoWeAre.init()-----');

		// include
		this.container.empty().load(this.include, function() {
			// show
			_self.ttl.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
			_self.container.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
			_self.karakusa.css({ display : 'block' }).animate({ opacity : 1 }, 1000, 'linear');
		});
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - Recommend
 * ----------------------------------------
 */
SHISEIDOGROUP.Recommend = function() {
	var _self = this;

	// dom
	this.parent;

	// data
	this.data;

	// dom
	this.wrapper = $('#recommend');
	this.header = this.wrapper.children('.section_header');
	this.ttl = this.header.children('span');
	this.container = $('#recommend_wrap');
	this.items = [];

	// template
	this.tmpl = $('#recommend_tmpl .item').clone();
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('Recommend.init()-----');

		var preload_images = [];

		// dom
		var len = this.data.length;
		for(var i=0; i<len; i++) {

			// add item
			this.container.append(this.tmpl.clone());
			var target = this.container.children('.item:last-child');
			// _log('Recommend.init | ' + i + ' | data : ', this.data[i]);

			// title
			var str_ttl = this.parent.utility._getTextOnly(this.data[i].top_title);
			target.find('.ttl').children('i').text(str_ttl);

			// text
			var str_txt = this.parent.utility._getTextOnly(this.data[i].top_explanation);
			target.find('.txt').text(str_txt);

			// image
			var src = '/' + this.data[i].image_url_1;
			target.find('.img').children('img').attr('src', src).attr('alt', str_ttl);
			preload_images.push(src);

			// url
			if(this.data[i].link_type == 2) {
				var url = this.data[i].top_url;
				var _event = 'RTmetricsSend(\'' + this.data[i].rt + '\')';
				// link to same domain
				if(this.parent.utility._isLinkToBusiness(this.data[i].top_url)){
					target.children('.item_wrap').attr('href', url).attr('onclick', _event);
					// html+= '<a href="'+data.top_url+'" onclick="RTmetricsSend(\''+data.rt+'\')">'+ data.top_title +'</a>';

				// link to another site
				}else{
					target.children('.item_wrap').attr('href', url).attr('onclick', _event).attr('target', '_blank').addClass('external');
					// html+= '<a href="'+data.top_url+'" onclick="RTmetricsSend(\''+data.rt+'\')" target="_blank" class="external">'+ data.top_title +'</a>';    
				}

			} else {
				var url = this.data[i].top_url + '?' + this.data[i].rt;
				target.children('.item_wrap').attr('href', url);
				// html+= '<a href="'+ data.top_url +'?'+data.rt+'"></a>';
			}

			_self.items.push(target);
		}

		// show
		this.ttl.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
		this.container.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');

		// resize
		$(window).on({
			resize : $.proxy(this._resize, this)
		});
		this._resize();

		// preload
		$.preloadImages(preload_images, {
			each : function() {
				// resize
				_self._resize();
			}
		});
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		// sp
		if(this.parent.curr_viewmode == 0) {
			var h = 0;
			var len = this.items.length;
			for(var i=0; i<len; i++) {
				h = Math.max(h, this.items[i].children('.item_wrap').outerHeight());
				if(i % 2 == 1) {
					for(var ii=0; ii<2; ii++) {
						this.items[i - ii].height(h);
					}
					h = 0;
				}
			}

		// pc
		} else {
			var len = this.items.length;
			for(var i=0; i<len; i++) {
				this.items[i].css({ height : 'auto' });
			}
		}
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - OurBrands
 * ----------------------------------------
 */
SHISEIDOGROUP.OurBrands = function() {
	var _self = this;

	// dom
	this.parent;

	// dom
	this.wrapper = $('#brands');
	this.header = this.wrapper.children('.section_header');
	this.ttl = this.header.children('span');
	this.footer = this.wrapper.children('.section_footer');
	this.container = $('#brands_wrap');
	this.list = $('#brands_list');

	// inc
	this.include = '/v2/inc/top/our_brand.html';
	this.include_list = '/v2/inc/top/brand_list.html';
	
	// flag
	this.is_show_list = false;

	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('OurBrands.init()-----');

		// resize
		$(window).on({
			resize : $.proxy(this._resize, this)
		});

		// include
		this.container.empty().load(this.include, function() {
			_self.list.empty().load(_self.include_list, function() {
				_self._resize();

				// start
				_self.start();
			});
		});
	}
	
	/* ------------------
	 * start
	 */
	this.start = function() {
		// event
		this.set();

		// show
		this.header.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
		this.container.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
		this.footer.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');
	}
	
	/* ------------------
	 * set
	 */
	this.set = function() {
		// sp
		if(this.parent.curr_viewmode == 0) {
			$('.btn_open').each(function() {
				$(this).off().on({
					click : function() {
						// location.href = '/business/search/';
						// location.href = '/brands/';
					}
				});
			}).children('span').text('涓汇仾銉栥儵銉炽儔涓€瑕с倰銇裤倠');
		// pc
		} else {
			$('.btn_open').each(function() {
				$(this).off().on({
					click : function() {
						// _self.is_show_list = !_self.is_show_list;
						// _self.change();
					}
				});
			});
		}
	}
	
	/* ------------------
	 * change
	 */
	this.change = function() {
		if(this.is_show_list) {
			this.list.slideDown('fast');
			$('.btn_open').children('span').text('闁夈仒銈�');
		} else {
			this.list.slideUp('fast', function() {
				$('.btn_open').children('span').text('涓汇仾銉栥儵銉炽儔涓€瑕с倰銇裤倠');
			});
		}
		this._resize();
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		var o1 = this.list.find('.item:eq(3)');
		var o2 = this.list.find('.item:eq(4)');

		// sp
		if(this.parent.curr_viewmode == 0) {
			var h1 = o1.children('dl').height();
			var h2 = o2.children('dl').height();
			var h = Math.max(h1, h2);
			o1.height(h);
			o2.height(h);

		// pc
		} else {
			o1.css({ height : 'auto' });
			o2.css({ height : 'auto' });
		}

		if(this.parent.prev_viewmode != this.parent.curr_viewmode) {
			if(this.parent.curr_viewmode == 0) {
				this.is_show_list = false;
				this.list.stop().hide();
			} else {

			}
			this.set();
		}
	}
	
	return this;
}



/* ----------------------------------------
 * CLASS - Feeds
 * ----------------------------------------
 */
SHISEIDOGROUP.Feeds = function() {
	var _self = this;

	// parent
	this.parent;

	// dom
	this.wrapper = $('#feeds');

	// class
	this.feed_contents = null;
	this.feed_groupnews = null;
	this.feed_news = null;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('Feeds.init()-----');

		// class
		_self.feed_contents = new SHISEIDOGROUP.FeedContents();
		_self.feed_groupnews = new SHISEIDOGROUP.FeedGroupNews();
		_self.feed_news = new SHISEIDOGROUP.FeedNews();

		// feed contents
		this.feed_contents.init({
			parent : this,
			callback : this.initedFeed
		});

		// feed group news
		this.feed_groupnews.init({
			parent : this,
			callback : this.initedFeed
		});

		// feed news
		this.feed_news.init({
			parent : this,
			callback : this.initedFeed
		});

		// resize, scroll
		$(window).on({
			resize : $.proxy(this._resize, this)
		});
		this._resize();
	}
	
	/* ------------------
	 * _resize
	 */
	this._resize = function() {
		// feed
		if(this.feed_contents !== null && this.feed_news !== null) {
			// sp
			if(this.parent.curr_viewmode == 0) {
				this.feed_contents.wrapper.css({ height : 'auto' });
				this.feed_groupnews.wrapper.css({ height : 'auto' });
				this.feed_news.wrapper.css({ height : 'auto' });
				this.feed_contents.container.css({ height : 'auto' });
				this.feed_groupnews.container.css({ height : 'auto' });
				this.feed_news.container.css({ height : 'auto' });
				this.wrapper.css({ height : 'auto' });

			// pc
			} else {
				this.feed_contents.container.css({ height : 'auto' });
				this.feed_groupnews.container.css({ height : 'auto' });
				this.feed_news.container.css({ height : 'auto' });
				var h1 = Math.max(this.feed_contents.container.height(), this.feed_groupnews.container.height());
				h1 = Math.max(h1, this.feed_news.container.height());
				this.feed_contents.container.height(h1);
				this.feed_groupnews.container.height(h1);
				this.feed_news.container.height(h1);

				var h2 = Math.max(this.feed_contents.container.outerHeight(), this.feed_groupnews.container.outerHeight());
				h2 = Math.max(h2, this.feed_news.container.outerHeight());
				this.feed_contents.wrapper.height(h2);
				this.feed_groupnews.wrapper.height(h2);
				this.feed_news.wrapper.height(h2);
				this.wrapper.height(h2);
			}

			// reset
			if(this.parent.prev_viewmode != this.parent.curr_viewmode) {
				this.feed_contents.reset();
				this.feed_groupnews.reset();
				this.feed_news.reset();
			}
		}
	}
	
	/* ------------------
	 * initedFeed
	 */
	this.initedFeed = function() {
		_log('Module.initedFeed()-----');
		_log('Module.initedFeed | feed_contents.is_init : ' + _self.feed_contents.is_init + ' feed_news.is_init : ' + _self.feed_news.is_init);
		if(_self.feed_contents.is_init && _self.feed_news.is_init) {
			_self._resize();
		}

		_self.toggle('feeds_contents');
	}
	
	/* ------------------
	 * toggle
	 */
	this.toggle = function(id) {
		_log('Module.toggle()-----');
		_log('Module.toggle | id : ' + id);

		// open content
		if(id == this.feed_contents.id) {
			this.feed_contents.show();
			this.feed_groupnews.hide();

		// open group news
		} else {
			this.feed_contents.hide();
			this.feed_groupnews.show();
		}

		// resize
		this._resize();
	}

	return this;
}



/* ----------------------------------------
 * CLASS - FeedContents
 * ----------------------------------------
 */
SHISEIDOGROUP.FeedContents = function() {
	var _self = this;

	// parent
	this.parent;

	// callback
	this.callback = null;

	// id
	this.id = 'feeds_contents';

	// dom
	this.wrapper = $('#feeds_contents');
	this.container = this.wrapper.children('.section_wrap');
	this.content = this.container.children('.section_container');
	this.btnOpen = this.container.children('.section_header').children('.ttl');
	this.btnArchive = this.container.children('.section_footer').children('.link');
	this.btnRSS = this.container.children('.section_footer').children('.rss');

	// template
	this.tmpl = this.wrapper.children('.section_tmpl').children('.item').clone();

	// xml
	this.source = [
		{
			path : '/rss/base.xml',
			icon_name : 'icon_newsrelease.png',
			icon_label : 'NEWS RELEASE',
			icon_path : '/rss/index.xml',
			is_loaded : false,
			is_active : null
		},
		{
			path : '/rss/corp_ir/index2.xml',
			icon_name:'top_ir.png',
			icon_label:'IR',
			is_loaded : false,
			is_active : null
		},
		{
			path : '/rss/corp_recruit/index.xml',
			icon_name:'top_recruit.png',
			icon_label:'RECRUIT',
			is_loaded : false,
			is_active : null
		},
		{
			path : '/rss/corp_beauty_art/index.xml',
			icon_name:'top_beauty_art.png',
			icon_label:'BEAUTY-ART',
			is_loaded : false,
			is_active : null
		}
	];

	// icon
	this.icon_dir = "/rss/cmn/img3/";
	this.icon_width = 110;
	this.icon_height = 15;

	// formated data
	this.data = [];

	// max articles for pc
	this.max_article_count = 10;
	// max articles for sp
	this.max_article_count_sp = 5;

	// is init
	this.is_init = false;

	// is show
	this.is_show = false;

	// is focus
	this.is_focus = false;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('FeedContents.init()-----');

		// is focus
		this.is_focus = this.wrapper.hasClass('focus');

		// load
		this.load();
	}
	
	/* ------------------
	 * load
	 */
	this.load = function() {
		_log('FeedContents.load()-----');

		var len = this.source.length;
		for(var i=0; i<len; i++) {
			// load json
			jQuery.ajax({
				url: this.source[i].path,
				type: 'GET',
				dataType: 'xml',
				cache: false,
				timeout: 20000,
				success: _self._loadSuccess(i),
				error : _self._loadError
			});
		}
	}
	
	/* ------------------
	 * _loadSuccess
	 */
	this._loadSuccess = function(index) {
		return function(xml) {
			_log('FeedContents._loadSuccess()-----');
			_log('FeedContents._loadSuccess | index : ', index);
			_log('FeedContents._loadSuccess | xml : ', xml);

			// parse data
			$(xml).find("item").each(function(i){
				// max length
				if(i < _self.max_article_count) {

					// get vars
					var title = $(this).find("title").text();
					var title_head;
					if ( title.indexOf(" | ") != -1 ) {
						title_head = title.split(" | ")[0];
						title = title.split(" | ")[1];
					}
					var link     = $(this).find("link").text();
					var pubdate = $(this).find("pubDate").text();
					var publish  = _self.parent.parent.utility._formatDate(pubdate);
					var timestamp  = new Date(pubdate);

					// target
					var target_str = "";
					if($(this).find("shiseido\\:target").length != 0){
						//firefox
						target_str = "shiseido\\:target";
					}else{
						target_str = "target";
					}
					var target   = $(this).find(target_str).text();

					// icon
					var icon_str = "";
					if($(this).find("shiseido\\:icon").length != 0){
						//firefox
						icon_str = "shiseido\\:icon";
					}else{
						icon_str = "icon";
					}
					// var icon_file = $(this).find(icon_str).text();
					var icon_name = $(this).find(icon_str).text();
					var icon_label;
					if (!icon_name) {
						icon_name = _self.source[index].icon_name;
						icon_label = _self.source[index].icon_label;
						// icon_name = xml_ini[catId]["xml_file"][xml_num]["icon_name"];
						// icon_label = xml_ini[catId]["xml_file"][xml_num]["icon_label"];
					} else {
						icon_label = title_head;
					}
					
					// push data into array
					_self.data.push({
						ts : timestamp,
						th : title_head,
						t : title,
						l : link,
						p : publish,
						tg : target,
						i : icon_name,
						il : icon_label
					});
				}
			});
			
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = true;
			
			// check loading all data
			var is_check = true;
			var len = _self.source.length;
			for(var i=0; i<len; i++) {
				if(!_self.source[i].is_loaded) {
					is_check = false;
				}
			}

			if(is_check) {
				// sort
				_self.data.sort(function(a, b){
					var x = b.ts;
					var y = a.ts;
					if (x > y) return 1;
					if (x < y) return -1;
					return 0;
				});
				// _log('FeedContents.format | data : ', _self.data);

				// append
				_self.append();
			}
		}
	}
	
	/* ------------------
	 * _loadError
	 */
	this._loadError = function(index) {
		return function() {
			_log('FeedContents._loadError()-----');
				
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = false;

			var message = "Failed to read XML.";

			// $ul = $("<ul>").addClass("error");
			// $ul.append( $("<li>").text(message) ).appendTo($(area));
		}
	}
	
	/* ------------------
	 * append
	 */
	this.append = function() {
		_log('FeedContents.append()-----');

		var len = Math.min(this.data.length, this.max_article_count);
		// var len = this.data.length;
		for(var i=0; i<len; i++) {

			this.content.append(this.tmpl.clone());
			var target = this.content.children('.item:last-child');
			// date
			target.find('.date').text(this.data[i].p);
			// icon
			var icon_label = this.data[i].il.indexOf('锛�') < 0 ? this.data[i].il : this.data[i].il.split('锛�').join('&amp;');
			// var class_str = icon_label.indexOf('&amp;') < 0 ? icon_label : icon_label.split('&amp;').join('')
			// class_str = class_str.toLowerCase().split(' ').join('_');
			// target.find('.label').html(icon_label.toUpperCase()).addClass(class_str);
			var icon_file = this.icon_dir + this.data[i].i;
			var src = '<img src="' + icon_file + '" alt="' + icon_label + '" width="' + this.icon_width + '" height="' + this.icon_height + '">';
			target.find('.label').html(src);
			// text
			target.find('.txt').children('i').text(this.data[i].t);
			// link
			if(this.data[i].l == ""){
				target.children('.item_wrap').addClass('disable');
				target.children('.item_wrap').attr('href', "javascript:void(0)");
			}else{
				target.children('.item_wrap').attr('href', this.data[i].l);
			}
			
			// link target

			

			if(this.data[i].tg != '') {
				target.children('.item_wrap').attr('target', this.data[i].tg);
				if(this.data[i].tg == '_blank') {
					target.children('.item_wrap').addClass('external');
				}
			}
		}

		// show
		this.content.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');

		// callback
		this.is_init = true;
		if(typeof(this.callback) == 'function') {
			this.callback();
		}
	}
	
	/* ------------------
	 * reset
	 */
	this.reset = function() {
		_log('FeedContents.reset()-----');

		// sp
		var prev_mode = this.parent.parent.prev_viewmode;
		var curr_mode = this.parent.parent.curr_viewmode;
		if(prev_mode != curr_mode && curr_mode == 0) {
			this.is_show = true;
			this.content.css({ display : 'block' });
			this.btnArchive.css({ display : 'inherit' });
			this.btnRSS.css({ display : 'inherit' });
			if(!this.btnOpen.hasClass('focus')) {
				this.btnOpen.addClass('focus')
			}
			// button
			this.btnOpen.off().on({
				click : function() {
					_self.is_show = !_self.is_show;
					// show
					if(_self.is_show) {
						if(!$(this).hasClass('focus')) {
							$(this).addClass('focus')
						}
						_self.content.slideDown('normal', function() {
							_self.btnArchive.css({ display : 'inherit' });
							_self.btnRSS.css({ display : 'inherit' });
						});
					// hide
					} else {
						if($(this).hasClass('focus')) {
							$(this).removeClass('focus')
						}
						_self.content.slideUp('normal');
						_self.btnArchive.css({ display : 'none' });
						_self.btnRSS.css({ display : 'none' });
					}
				}
			});
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count_sp) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});

		// pc
		} else {
			this.is_show = true;
			// content
			if(this.is_focus) {
				this.content.css({ display : 'block' });
				this.btnArchive.css({ display : 'inherit' });
				this.btnRSS.css({ display : 'inherit' });
				this.btnOpen.off();
			} else {
				this.content.css({ display : 'none' });
				this.btnArchive.css({ display : 'none' });
				this.btnRSS.css({ display : 'none' });
				this.btnOpen.off().on({
					click : function() {
						_self.parent.toggle(_self.id);
					}
				});
			}
			if(this.btnOpen.hasClass('focus')) {
				this.btnOpen.removeClass('focus')
			}
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	}
	
	/* ------------------
	 * show
	 */
	this.show = function() {
		_log('FeedContents.show()-----');

		// wrapper
		this.is_focus = true;
		if(!this.wrapper.hasClass('focus')) {
			this.wrapper.addClass('focus')
		}

		// content
		this.content.css({ display : 'block' });
		this.btnArchive.css({ display : 'block' });
		this.btnRSS.css({ display : 'block' });

		// button
		this.btnOpen.off();
	}
	
	/* ------------------
	 * hide
	 */
	this.hide = function() {
		_log('FeedContents.hide()-----');

		// wrapper
		this.is_focus = false;
		if(this.wrapper.hasClass('focus')) {
			this.wrapper.removeClass('focus')
		}

		// content
		this.content.css({ display : 'none' });
		this.btnArchive.css({ display : 'none' });
		this.btnRSS.css({ display : 'none' });

		// button
		this.btnOpen.off().on({
			click : function() {
				_self.parent.toggle(_self.id);
			}
		});
	}

	return this;
}



/* ----------------------------------------
 * CLASS - FeedGroupNews
 * ----------------------------------------
 */
SHISEIDOGROUP.FeedGroupNews = function() {
	var _self = this;

	// parent
	this.parent;

	// callback
	this.callback = null;

	// id
	this.id = 'feeds_groupnews';

	// dom
	this.wrapper = $('#feeds_groupnews');
	this.container = this.wrapper.children('.section_wrap');
	this.content = this.container.children('.section_container');
	this.btnOpen = this.container.children('.section_header').children('.ttl');
	this.btnArchive = this.container.children('.section_footer').children('.link');
	this.btnRSS = this.container.children('.section_footer').children('.rss');

	// template
	this.tmpl = this.wrapper.children('.section_tmpl').children('.item').clone();

	// xml
	this.source = [
		{
			path : '/rss/corp_group/index.xml',
			icon_name : 'icon_corp_group.png',
			icon_label : '',
			is_loaded : false,
			is_active : null
		}
	];

	// icon
	this.icon_dir = "/rss/cmn/img3/";
	this.icon_width = 110;
	this.icon_height = 15;

	// formated data
	this.data = [];

	// max articles for pc
	this.max_article_count = 10;
	// max articles for sp
	this.max_article_count_sp = 5;

	// is init
	this.is_init = false;

	// is focus
	this.is_focus = false;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('FeedGroupNews.init()-----');

		// is focus
		this.is_focus = this.wrapper.hasClass('focus');

		// load
		this.load();
	}
	
	/* ------------------
	 * load
	 */
	this.load = function() {
		_log('FeedGroupNews.load()-----');

		var len = this.source.length;
		for(var i=0; i<len; i++) {
			// load json
			jQuery.ajax({
				url: this.source[i].path,
				type: 'GET',
				dataType: 'xml',
				cache: false,
				timeout: 20000,
				success: _self._loadSuccess(i),
				error : _self._loadError
			});
		}
	}
	
	/* ------------------
	 * _loadSuccess
	 */
	this._loadSuccess = function(index) {
		return function(xml) {
			_log('FeedGroupNews._loadSuccess()-----');
			_log('FeedGroupNews._loadSuccess | index : ', index);
			_log('FeedGroupNews._loadSuccess | xml : ', xml);

			// parse data
			$(xml).find("item").each(function(i){
				// max length
				if(i < _self.max_article_count) {

					// get vars
					var title = $(this).find("title").text();
					var title_head;
					if ( title.indexOf(" | ") != -1 ) {
						title_head = title.split(" | ")[0];
						title = title.split(" | ")[1];
					}
					var link     = $(this).find("link").text();
					var pubdate = $(this).find("pubDate").text();
					var publish  = _self.parent.parent.utility._formatDate(pubdate);
					var timestamp  = new Date(pubdate);

					// target
					var target_str = "";
					if($(this).find("shiseido\\:target").length != 0){
						//firefox
						target_str = "shiseido\\:target";
					}else{
						target_str = "target";
					}
					var target   = $(this).find(target_str).text();

					// icon
					var icon_str = "";
					if($(this).find("shiseido\\:icon").length != 0){
						//firefox
						icon_str = "shiseido\\:icon";
					}else{
						icon_str = "icon";
					}
					var icon_name = $(this).find(icon_str).text();
					var icon_label;
					if (!icon_name) {
						icon_name = _self.source[index].icon_name;
						icon_label = _self.source[index].icon_label;
						// icon_name = xml_ini[catId]["xml_file"][xml_num]["icon_name"];
						// icon_label = xml_ini[catId]["xml_file"][xml_num]["icon_label"];
					} else {
						icon_label = title_head;
					}
					
					// push data into array
					_self.data.push({
						ts : timestamp,
						th : title_head,
						t : title,
						l : link,
						p : publish,
						tg : target,
						i : icon_name,
						il : icon_label
					});
				}
			});
			
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = true;
			
			// check loading all data
			var is_check = true;
			var len = _self.source.length;
			for(var i=0; i<len; i++) {
				if(!_self.source[i].is_loaded) {
					is_check = false;
				}
			}

			if(is_check) {
				// sort
				_self.data.sort(function(a, b){
					var x = b.ts;
					var y = a.ts;
					if (x > y) return 1;
					if (x < y) return -1;
					return 0;
				});
				// _log('FeedGroupNews.format | data : ', _self.data);

				// append
				_self.append();
			}
		}
	}
	
	/* ------------------
	 * _loadError
	 */
	this._loadError = function(index) {
		return function() {
			_log('FeedGroupNews._loadError()-----');
				
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = false;

			var message = "Failed to read XML.";

			// $ul = $("<ul>").addClass("error");
			// $ul.append( $("<li>").text(message) ).appendTo($(area));
		}
	}
	
	/* ------------------
	 * append
	 */
	this.append = function() {
		var len = Math.min(this.data.length, this.max_article_count);
		// var len = this.data.length;
		for(var i=0; i<len; i++) {
			this.content.append(this.tmpl.clone());
			var target = this.content.children('.item:last-child');
			// date
			target.find('.date').text(this.data[i].p);
			// icon
			var icon_label = this.data[i].il.indexOf('锛�') < 0 ? this.data[i].il : this.data[i].il.split('锛�').join('&amp;');
			// var class_str = icon_label.indexOf('&amp;') < 0 ? icon_label : icon_label.split('&amp;').join('')
			// var class_str = class_str.toLowerCase().split(' ').join('_');
			// target.find('.label').html(icon_label.toUpperCase()).addClass(class_str);
			// target.find('.label').html(icon_label.toUpperCase());
			var icon_file = this.icon_dir + this.data[i].i;
			var src = '<img src="' + icon_file + '" alt="' + icon_label + '" width="' + this.icon_width + '" height="' + this.icon_height + '">';
			 target.find('.label').html(src);
			// text
			target.find('.txt').children('i').text(this.data[i].t);
			// link
			if(this.data[i].l == ""){
				target.children('.item_wrap').addClass('disable');
				target.children('.item_wrap').attr('href', "javascript:void(0)");
			}else{
				target.children('.item_wrap').attr('href', this.data[i].l);
			}
			
			
			// link target
			if(this.data[i].tg != '') {
				target.children('.item_wrap').attr('target', this.data[i].tg);
				if(this.data[i].tg == '_blank') {
					target.children('.item_wrap').addClass('external');
				}
			}
		}

		// show
		this.content.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');

		// callback
		this.is_init = true;
		if(typeof(this.callback) == 'function') {
			this.callback();
		}
	}
	
	/* ------------------
	 * reset
	 */
	this.reset = function() {
		_log('FeedGroupNews.reset()-----');

		// sp
		var prev_mode = this.parent.parent.prev_viewmode;
		var curr_mode = this.parent.parent.curr_viewmode;
		if(prev_mode != curr_mode && curr_mode == 0) {
			this.is_show = false;
			this.content.css({ display : 'none' });
			this.btnArchive.css({ display : 'none' });
			this.btnRSS.css({ display : 'none' });
			// this.is_show = true;
			// this.content.css({ display : 'block' });
			// this.btnArchive.css({ display : 'inherit' });
			// this.btnRSS.css({ display : 'inherit' });
			// if(!this.btnOpen.hasClass('focus')) {
				// this.btnOpen.addClass('focus')
			// }
			this.btnOpen.off().on({
				click : function() {
					_self.is_show = !_self.is_show;
					// show
					if(_self.is_show) {
						if(!$(this).hasClass('focus')) {
							$(this).addClass('focus')
						}
						_self.content.slideDown('normal', function() {
							_self.btnArchive.css({ display : 'inherit' });
							_self.btnRSS.css({ display : 'inherit' });
						});
					// hide
					} else {
						if($(this).hasClass('focus')) {
							$(this).removeClass('focus')
						}
						_self.content.slideUp('normal');
						_self.btnArchive.css({ display : 'none' });
						_self.btnRSS.css({ display : 'none' });
					}
				}
			})
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count_sp) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});

		// pc
		} else {
			this.is_show = true;
			// content
			if(this.is_focus) {
				this.content.css({ display : 'block' });
				this.btnArchive.css({ display : 'inherit' });
				this.btnRSS.css({ display : 'inherit' });
				this.btnOpen.off();
			} else {
				this.content.css({ display : 'none' });
				this.btnArchive.css({ display : 'none' });
				this.btnRSS.css({ display : 'none' });
				this.btnOpen.off().on({
					click : function() {
						_self.parent.toggle(_self.id);
					}
				});
			}
			if(this.btnOpen.hasClass('focus')) {
				this.btnOpen.removeClass('focus')
			}
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	}
	
	/* ------------------
	 * show
	 */
	this.show = function() {
		_log('FeedGroupNews.show()-----');

		// wrapper
		this.is_focus = true;
		if(!this.wrapper.hasClass('focus')) {
			this.wrapper.addClass('focus')
		}

		// content
		this.content.css({ display : 'block' });
		this.btnArchive.css({ display : 'inherit' });
		this.btnRSS.css({ display : 'inherit' });

		// button
		this.btnOpen.off();
	}
	
	/* ------------------
	 * hide
	 */
	this.hide = function() {
		_log('FeedGroupNews.hide()-----');

		// wrapper
		this.is_focus = false;
		if(this.wrapper.hasClass('focus')) {
			this.wrapper.removeClass('focus')
		}

		// content
		this.content.css({ display : 'none' });
		this.btnArchive.css({ display : 'none' });
		this.btnRSS.css({ display : 'none' });

		// button
		this.btnOpen.off().on({
			click : function() {
				_self.parent.toggle(_self.id);
			}
		});
	}

	return this;
}



/* ----------------------------------------
 * CLASS - FeedNews
 * ----------------------------------------
 */
SHISEIDOGROUP.FeedNews = function() {
	var _self = this;

	// parent
	this.parent;

	// callback
	this.callback = null;

	// id
	this.id = 'feeds_news';

	// dom
	this.wrapper = $('#feeds_news');
	this.container = this.wrapper.children('.section_wrap');
	this.content = this.container.children('.section_container');
	this.btnOpen = this.container.children('.section_header').children('.ttl');
	this.btnArchive = this.container.children('.section_footer').children('.link');
	this.btnRSS = this.container.children('.section_footer').children('.rss');

	// template
	this.tmpl = this.wrapper.children('.section_tmpl').children('.item').clone();

	// xml
	this.source = [
		{
			path : '/rss/corp_news/index.xml',
			icon_name : 'icon_corp_group.png',
			icon_label : '',
			is_loaded : false,
			is_active : null
		}
	];

	// icon
	this.icon_dir = "/rss/cmn/img3/";
	this.icon_width = 110;
	this.icon_height = 15;

	// formated data
	this.data = [];

	// max articles for pc
	this.max_article_count = 10;
	// max articles for sp
	this.max_article_count_sp = 5;

	// is init
	this.is_init = false;
	
	/* ------------------
	 * init
	 */
	this.init = function(options) {
		$.extend(this, options);
		_log('FeedNews.init()-----');

		// load
		this.load();
	}
	
	/* ------------------
	 * load
	 */
	this.load = function() {
		_log('FeedNews.load()-----');

		var len = this.source.length;
		for(var i=0; i<len; i++) {
			// load json
			jQuery.ajax({
				url: this.source[i].path,
				type: 'GET',
				dataType: 'xml',
				cache: false,
				timeout: 20000,
				success: _self._loadSuccess(i),
				error : _self._loadError
			});
		}
	}
	
	/* ------------------
	 * _loadSuccess
	 */
	this._loadSuccess = function(index) {
		return function(xml) {
			_log('FeedNews._loadSuccess()-----');
			_log('FeedNews._loadSuccess | index : ', index);
			_log('FeedNews._loadSuccess | xml : ', xml);

			// parse data
			$(xml).find("item").each(function(i){
				// max length
				if(i < _self.max_article_count) {

					// get vars
					var title = $(this).find("title").text();
					var title_head;
					if ( title.indexOf(" | ") != -1 ) {
						title_head = title.split(" | ")[0];
						title = title.split(" | ")[1];
					}
					var link     = $(this).find("link").text();
					var pubdate = $(this).find("pubDate").text();
					var publish  = _self.parent.parent.utility._formatDate(pubdate);
					var timestamp  = new Date(pubdate);

					// target
					var target_str = "";
					if($(this).find("shiseido\\:target").length != 0){
						//firefox
						target_str = "shiseido\\:target";
					}else{
						target_str = "target";
					}
					var target   = $(this).find(target_str).text();

					// icon
					var icon_str = "";
					if($(this).find("shiseido\\:icon").length != 0){
						//firefox
						icon_str = "shiseido\\:icon";
					}else{
						icon_str = "icon";
					}
					var icon_name = $(this).find(icon_str).text();
					var icon_label;
					if (!icon_name) {
						icon_name = _self.source[index].icon_name;
						icon_label = _self.source[index].icon_label;
						// icon_name = xml_ini[catId]["xml_file"][xml_num]["icon_name"];
						// icon_label = xml_ini[catId]["xml_file"][xml_num]["icon_label"];
					} else {
						icon_label = title_head;
					}
					
					// push data into array
					_self.data.push({
						ts : timestamp,
						th : title_head,
						t : title,
						l : link,
						p : publish,
						tg : target,
						i : icon_name,
						il : icon_label
					});
				}
			});
			
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = true;
			
			// check loading all data
			var is_check = true;
			var len = _self.source.length;
			for(var i=0; i<len; i++) {
				if(!_self.source[i].is_loaded) {
					is_check = false;
				}
			}

			if(is_check) {
				// sort
				_self.data.sort(function(a, b){
					var x = b.ts;
					var y = a.ts;
					if (x > y) return 1;
					if (x < y) return -1;
					return 0;
				});
				// _log('FeedNews.format | data : ', _self.data);

				// append
				_self.append();
			}
		}
	}
	
	/* ------------------
	 * _loadError
	 */
	this._loadError = function(index) {
		return function() {
			_log('FeedNews._loadError()-----');
				
			// flag
			_self.source[index].is_loaded = true;
			_self.source[index].is_active = false;

			var message = "Failed to read XML.";

			// $ul = $("<ul>").addClass("error");
			// $ul.append( $("<li>").text(message) ).appendTo($(area));
		}
	}
	
	/* ------------------
	 * append
	 */
	this.append = function() {
		var len = Math.min(this.data.length, this.max_article_count);
		// var len = this.data.length;
		for(var i=0; i<len; i++) {
			this.content.append(this.tmpl.clone());
			var target = this.content.children('.item:last-child');
			// date
			target.find('.date').text(this.data[i].p);
			// icon
			// var icon_label = this.data[i].il.indexOf('锛�') < 0 ? this.data[i].il : this.data[i].il.split('锛�').join('&amp;');
			// var class_str = icon_label.indexOf('&amp;') < 0 ? icon_label : icon_label.split('&amp;').join('')
			// var class_str = class_str.toLowerCase().split(' ').join('_');
			// target.find('.label').html(icon_label.toUpperCase()).addClass(class_str);
			// target.find('.label').html(icon_label.toUpperCase());
			// var icon_file = this.icon_dir + this.data[i].i;
			// var src = '<img src="' + icon_file + '" alt="' + icon_label + '" width="' + this.icon_width + '" height="' + this.icon_height + '">';
			// target.find('.label').html(src);
			// text
			target.find('.txt').children('i').text(this.data[i].t);
			// link

			if(this.data[i].l == ""){
				target.children('.item_wrap').addClass('disable');
				target.children('.item_wrap').attr('href', "javascript:void(0)");
			}else{
				target.children('.item_wrap').attr('href', this.data[i].l);
			}
			
			// link target
			if(this.data[i].tg != '') {
				target.children('.item_wrap').attr('target', this.data[i].tg);
				if(this.data[i].tg == '_blank') {
					target.children('.item_wrap').addClass('external');
				}
			}
		}

		// show
		this.content.css({ display : 'block', opacity : 0 }).animate({ opacity : 1 }, 1000, 'linear');

		// callback
		this.is_init = true;
		if(typeof(this.callback) == 'function') {
			this.callback();
		}
	}
	
	/* ------------------
	 * reset
	 */
	this.reset = function() {
		_log('FeedNews.reset()-----');

		// sp
		var prev_mode = this.parent.parent.prev_viewmode;
		var curr_mode = this.parent.parent.curr_viewmode;
		if(prev_mode != curr_mode && curr_mode == 0) {
			// this.is_show = false;
			// this.content.css({ display : 'none' });
			// this.btnArchive.css({ display : 'none' });
			// this.btnRSS.css({ display : 'none' });
			this.is_show = true;
			this.content.css({ display : 'block' });
			this.btnArchive.css({ display : 'inherit' });
			this.btnRSS.css({ display : 'inherit' });
			if(!this.btnOpen.hasClass('focus')) {
				this.btnOpen.addClass('focus')
			}
			this.btnOpen.off().on({
				click : function() {
					_self.is_show = !_self.is_show;
					// show
					if(_self.is_show) {
						if(!$(this).hasClass('focus')) {
							$(this).addClass('focus')
						}
						_self.content.slideDown('normal', function() {
							_self.btnArchive.css({ display : 'inherit' });
							_self.btnRSS.css({ display : 'inherit' });
						});
					// hide
					} else {
						if($(this).hasClass('focus')) {
							$(this).removeClass('focus')
						}
						_self.content.slideUp('normal');
						_self.btnArchive.css({ display : 'none' });
						_self.btnRSS.css({ display : 'none' });
					}
				}
			})
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count_sp) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});

		// pc
		} else {
			this.is_show = true;
			this.content.css({ display : 'block' });
			this.btnArchive.css({ display : 'inherit' });
			this.btnRSS.css({ display : 'inherit' });
			this.btnOpen.off();
			if(this.btnOpen.hasClass('focus')) {
				this.btnOpen.removeClass('focus')
			}
			// content
			this.content.children('.item').each(function(i) {
				if(i < _self.max_article_count) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	}

	return this;
}


/* _log */
var _log = function(value) {
	if(SHISEIDOGROUP.LOG) {
		if (this.console && typeof console.log != "undefined"){
			if(arguments.length == 1) {
				console.log(value);
			} else {
				console.log(value, arguments[1]);
			}
		}
	}
}