// Переключатель стилів //
function loadCss(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
document.addEventListener('change', function () {
  var chk = event.target
  if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
    if(chk.checked != false){
      loadCss("css/white.css")
      loadCss("css/adaptation.css")
    }
    else {
      loadCss("css/style.css")
      loadCss("css/adaptation.css")
    }
  }
});
// Кінець //

// Прелоадер початок //
function preloader (){
	$(() => {
		setInterval(() =>{
			let p = $('.preloader');
			p.css('opacity',0);

			setInterval(
				() => p.remove(),
				parseInt(p.css('--duration')) * 1000
			);
		}, 1000)
	});
}
setInterval(() => preloader(), 500)
// Кінець //


// Progress //


// END //
