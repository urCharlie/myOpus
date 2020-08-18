//rollover.js
/* 20111121 jun fujimura -- targetElement->//input[@class=className and @type='image'] //img[@class=className] */
(function(){
	function initRollovers() { if (!document.getElementById && document.createElement) return; var thc = document.getElementsByTagName('img'); setEvent(thc, 'img'); thc = document.getElementsByTagName('input'); setEvent(thc, 'input'); thc=null; }
	function setEvent(hc, el){ var loader = new Array(); var n = hc.length; for (var i = 0; i < n; i++) { if (hc[i].className.match(/(^imgover\s|^imgover$|\simgover\s|\simgover$)/)) { switch(el){ case 'input': if(hc[i].getAttribute('type')!=='image') return; hc[i].onfocus = function (){ this.setAttribute('src', this.getAttribute('data-osrc')); }; hc[i].onblur  = function (){ this.setAttribute('src', this.getAttribute('data-osrc')); }; case 'img': var src = hc[i].getAttribute('src'); var hsrc = src.replace(/^(.*)(\.[^.]*)$/,function(str, path, extension){ return path+"_r"+extension;}); loader[loader.length] = new Image(); loader[loader.length-1].src = hsrc; hc[i].setAttribute('data-osrc', src); hc[i].setAttribute('data-hsrc', hsrc); hc[i].onmouseover = function (){ this.setAttribute('src', this.getAttribute('data-hsrc')); }; hc[i].onmouseout  = function (){ this.setAttribute('src', this.getAttribute('data-osrc')); }; break; } } } n = null; }
	if(window.addEventListener) window.addEventListener("load",initRollovers,false);
	else if(window.attachEvent) window.attachEvent("onload",initRollovers);
	else window.onload = initRollovers;
})();