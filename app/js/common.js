$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>

	$(function(){
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});
	});

	//WOW ANIMATION
		wow = new WOW(
	  {
	  boxClass:     'wow',
	  animateClass: 'animated',
	  offset:       0,
	  mobile:       false,
	  live:         true
	}
	)
	wow.init();

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
$('.owl-carousel').owlCarousel({
	center: true,
	items: 1,
	nav:true,
  loop:true,
  navText : ["<",">"],
  dotClass: "dot",
});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
    var theForm = $(this);
    var validation = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (!(
      (theForm.find('input[name="name"]').val().length > 0)
      && (theForm.find('input[name="phone"]').val().length > 0)
      )){
      theForm.find(".announce-block").text('Заполните все поля формы!');
      return false;
    };

    $.ajax({
      type: "POST",
      url: "mail.php",
      data: theForm.serialize()

    }).done(function() {
      theForm.find(".announce-block").text('Сообщение успешно отправлено!');
      theForm.find("input[type='submit']").hide();

    }).fail(function() {
      theForm.find(".announce-block").text('При отправке сообщения возникла ошибка. Пожалуйста, свяжитесь с нами по телефону.');
    });

    return false;
  });


});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);
