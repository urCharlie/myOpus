/* utility.js J */
document.write('<style type="text/css" id="index-support-stylesheet"> .indexes-a1 { visibility:hidden; } .local-lv3 { visibility:hidden; } .local-lv4 { visibility:hidden; } </style>');
/*
<style type="text/css" id="index-support-stylesheet">
.indexes-a1 { visibility:hidden; }
.local-lv3 { visibility:hidden; }
.local-lv4 { visibility:hidden; }
</style>
*/
$(function(){
	accesskeyEnable(5);
	accesskeyEnable(6);
	searchControlInit();
	smoothMove();
	idxA1Assistance();
	idxA2Assistance();
	idxC1Assistance();
	ie6check();
	$('#index-support-stylesheet').remove();
	whiteEffectImg();
});

// accessible interface utility
function accesskeyEnable(t) {
	if($($('#header ul.accessible-utility li a[accesskey="'+t+'"]').attr("href")).length === 0) {
		$('#header ul.accessible-utility a[accesskey="'+t+'"]').parent().remove();
	}
}

// keyword search initialize
function searchControlInit() {
	$('#MF_form_phrase').attr( 'autocomplete', 'off' );
}

//scrollTo
function smoothMove(){
	$("a:not(.js-positive a,#footer .sitemap a)").filter(function(){
		var attr = $(this).attr('href');
		if( typeof attr === 'string' ){
			return attr.match(/^#[a-zH-Z]/);
		}
		return false;
	}).click(function(){
		var target,point,maxpoint;
		var cw = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;

		target = $( $(this).attr('href') );
		if (target.length == 0) return;
		maxpoint = $(document).height()-cw;
		point = $(target).offset().top;
		if(maxpoint-point < 0) point = maxpoint;
		$('html,body').animate({scrollTop: point }, 900, "easeOutQuart");
		return false;
	});
}


// index assistance
// A-1
function idxA1Assistance(){
	var $idx = $('.indexes-a1 > .group'),
		spanHeight;
	if( $idx.length === 0 ) return false;

	$idx.each(function(){
		spanHeight = 0;
		var $spn = $(this).find('.panel > a > span'),
			flg = false;

		$spn.each(function(){
			if( $(this).height() > spanHeight ){
				if( spanHeight === 0) flg = true;
				spanHeight = $(this).height();
			}
		});

		if( flg ) $spn.css( "min-height", spanHeight );
		$spn = null;
	});
}

// A-2
function idxA2Assistance(){
	var $idx = $('.local-lv3 > .group'),
		aHeight;
	if( $idx.length === 0 ) return false;

	$idx.each(function(){
		aHeight = 0;
		var $a  = $(this).find('div.btn > a.type-s4'),
			flg = false;
		$a.each(function(){
			if( $(this).height() > aHeight ){
				if( aHeight === 0) flg = true;
				aHeight = $(this).height();
			}
		});
		if( flg ) $a.css( "min-height", aHeight );
		$a = null;
	});
}

// C-1
function idxC1Assistance(){
	var $idx = $('.local-lv4 > .group'),
		aHeight;
	if( $idx.length === 0 ) return false;

	$idx.each(function(){
		aHeight = 0;
		var $a  = $(this).find('.slice > div.btn > a.type-sb'),
			flg = false;
		$a.each(function(){
			if( $(this).height() > aHeight ){
				if( aHeight === 0) flg = true;
				aHeight = $(this).height();
			}
		});
		if( flg ) $a.css( "min-height", aHeight );
		$a = null;
	});
}

function ie6check(){
	if(!__ie6()) return;
	var forIE6Message = '';
	forIE6Message += '<div style="padding:10px;">';
	forIE6Message += '<div style="padding:10px; border:2px solid #A72E34 text-align:center;">';
	forIE6Message += '銇婁娇銇勩伄銉栥儵銈︺偠銇従鍦ㄣ偟銉濄兗銉堛仌銈屻仸銇勩伨銇涖倱銆�<br />鏈€鏂般伄銉栥儵銈︺偠銇偄銉冦儣銈般儸銉笺儔銇椼仸銇忋仩銇曘亜銆�';
	forIE6Message += '</div>';
	forIE6Message += '</div>';
	$('body').css( 'backgroundPosition', '0 141px' ).prepend( forIE6Message );
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
}

function writeSocialButtons(){
	var html = "";
	html += '<div class="social-buttons-launcher group">';
	html +=    '<div class="addthis_toolbox addthis_default_style">';
	html +=       '<a class="mixi" href="javascript:void(0);" onclick="window.open(\'http://mixi.jp/share.pl?u=' + location.href.replace(/#.*/,'') + '&k=84be0df49b7e645632e3bcfa8827f7f3bdfda533\',\'share\',[\'width=632\',\'height=456\',\'location=yes\',\'resizable=yes\',\'toolbar=no\',\'menubar=no\',\'scrollbars=no\',\'status=no\'].join(\',\'));"><img src="/cmn/img/mixi.png" width="17" height="17" alt="Mixi check" /></a>';
	html +=       '<a class="addthis_button_google_plusone" g:plusone:size="small" g:plusone:annotation="none"></a>';
	html +=       '<a class="addthis_button_facebook"></a>';
	html +=       '<a class="addthis_button_twitter"></a>';
	html +=       '<a class="addthis_button_compact"></a>';
	html +=    '</div>';
	html += '</div>';
	document.write( html );
}
function whiteEffectImg(){
	$(".whiteEffectImg").mouseenter(function(){
		$(this).stop().fadeTo(120 , 0.4);
	});
	$(".whiteEffectImg").mouseleave(function(){
		$(this).stop().fadeTo(500 , 1);
	});
}

function RTmetricsSend(value){
	var rand = Math.ceil(Math.random()*100000000);
	var rtURL = value+"&rnd="+rand;
	var imageObject = new Image();
    imageObject.src = rtURL;
}