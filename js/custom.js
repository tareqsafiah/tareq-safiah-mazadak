/**
Core script to handle the entire theme and core functions
**/
var Rama = function () {
	/* Search Bar ============ */
	siteUrl = '';

	var screenWidth = $(window).width();

	var homeSearch = function () {
		'use strict';
		/* Quik search in header on click function */
		var quikSearch = $("#quik-search-btn");
		var quikSearchRemove = $("#quik-search-remove");

		quikSearch.on('click', function () {
			$('.dez-quik-search').animate({ 'width': '100%' });
			$('.dez-quik-search').delay(500).css({ 'left': '0' });
		});

		quikSearchRemove.on('click', function () {
			$('.dez-quik-search').animate({ 'width': '0%', 'right': '0' });
			$('.dez-quik-search').css({ 'left': 'auto' });
		});
		/* Quik search in header on click function End*/
	}

	var cartButton = function () {
		$(".item-close").on('click', function () {
			$(this).closest(".cart-item").hide('500');
		});
		$('.cart-btn').unbind().on('click', function () {
			$(".cart-list").slideToggle('slow');
		})

	}

	/* One Page Layout ============ */
	var onePageLayout = function () {
		'use strict';
		var headerHeight = parseInt($('.onepage').css('height'), 10);
		$(".scroll").unbind().on('click', function (event) {
			event.preventDefault();

			if (this.hash !== "") {
				var hash = this.hash;
				var seactionPosition = $(hash).offset().top;
				var headerHeight = parseInt($('.onepage').css('height'), 10);


				$('body').scrollspy({ target: ".navbar", offset: headerHeight + 2 });

				var scrollTopPosition = seactionPosition - (headerHeight);

				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function () {

				});
			}
		});
		$('body').scrollspy({ target: ".navbar", offset: headerHeight + 4 });
	}

	/* Header Height ============ */
	var handleResizeElement = function () {
		$('.header').css('height', '');
		var headerHeight = $('.header').height();
		$('.header').css('height', headerHeight);
	}

	/* Load File ============ */
	var dzTheme = function () {
		'use strict';
		var loadingImage = '<img src="images/loading.gif">';
		jQuery('.dzload').each(function () {
			var dzsrc = siteUrl + $(this).attr('dzsrc');
			//jQuery(this).html(loadingImage);
			jQuery(this).hide(function () {
				jQuery(this).load(dzsrc, function () {
					jQuery(this).fadeIn('slow');
				});
			})

		});
		//alert(screenWidth);
		if (screenWidth < 991) {
			if ($('.mo-left .header-nav').children('div').length == 0) {
				var logoData = jQuery('<div>').append($('.mo-left .logo-header').clone()).html();
				jQuery('.mo-left .header-nav').prepend(logoData);
				jQuery('.mo-left .header-nav .logo-header > a > img').attr('src', 'images/logo.png');
				jQuery('.mo-left.lw .header-nav .logo-header > a > img').attr('src', 'images/logo-white.png');
				jQuery('.header-style-4.mo-left.style-1 .header-nav .logo-header > a > img').attr('src', 'images/logo-white.png');
			}
		} else {
			jQuery('.mo-left .header-nav div').empty();
			jQuery('.mo-left.lw .header-nav div').empty();
		}

		if (screenWidth <= 991) {
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function (e) {
				//e.preventDefault();
				if (jQuery(this).parent().hasClass('open')) {
					jQuery(this).parent().removeClass('open');
				}
				else {
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
	}

	/* Magnific Popup ============ */
	var MagnificPopup = function () {
		'use strict';
		/* magnificPopup function */
		$('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
		/* magnificPopup function end */

		/* magnificPopup for paly video function */
		$('.video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'<div class="mfp-title">Some caption</div>' +
					'</div>'
			},
			callbacks: {
				markupParse: function (template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});
		/* magnificPopup for paly video function end*/
		/* magnificPopup for paly video function end*/
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}


	/* Scroll To Top ============ */
	var scrollTop = function () {
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */
		scrollTop.on('click', function () {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function () {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}

	/* handle Accordian ============ */
	var handleAccordian = function () {
		/* accodin open close icon change */
		jQuery('#accordion').on('hidden.bs.collapse', function (e) {
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		jQuery('#accordion').on('shown.bs.collapse', function (e) {
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		/* accodin open close icon change end */
	}

	/* handle Placeholder ============ */
	var handlePlaceholder = function () {
		/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/

		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").focus(function () {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").submit(function () {
				jQuery(this).find('[placeholder]').each(function () {
					if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
						jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}

	/* Equal Height ============ */
	var equalHeight = function (container) {

		if (jQuery(container).length == 0) {
			return false
		}

		var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el, topPosition = 0;

		$(container).each(function () {
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}

	/* Footer Align ============ */
	var footerAlign = function () {
		'use strict';
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
	}


	/* Header Fixed ============ */
	var headerFix = function () {
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */
		jQuery(window).on('scroll', function () {
			var menu = jQuery('.sticky-header');
			if ($(window).scrollTop() > menu.offset().top) {
				menu.addClass('is-fixed');
				$('.header-style-5 .container > .logo-header .logo').attr('src', 'images/logo.png');
			} else {
				menu.removeClass('is-fixed');
				$('.header-style-5 .container > .logo-header .logo').attr('src', 'images/logo-white.png')
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}

	/* Masonry Box ============ */
	var masonryBox = function () {
		'use strict';
		/* masonry by  = bootstrap-select.min.js */
		var self = $("#masonry");
		self.imagesLoaded(function () {
			self.masonry({
				gutterWidth: 15,
				isAnimated: true,
				itemSelector: ".card-container"
			});
		});

		$(".filters").on('click', 'li', function (e) {
			e.preventDefault();
			var filter = $(this).attr("data-filter");
			self.masonryFilter({
				filter: function () {
					if (!filter) return true;
					return $(this).attr("data-filter") == filter;
				}
			});
		});
		/* masonry by  = bootstrap-select.min.js end */
	}



	/* Set Div Height ============ */
	var setDivHeight = function () {
		'use strict';
		var allHeights = [];
		jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
			allHeights.push(jQuery(this).height());
		})

		jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
			var maxHeight = Math.max.apply(Math, allHeights);
			jQuery(this).css('height', maxHeight);
		})

		allHeights = [];
		/* Removice */
		//var screenWidth = $( window ).width();
		if (screenWidth < 991) {
			jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
				jQuery(this).css('height', '');
			})
		}
	}

	/* Counter Number ============ */
	var counter = function () {
		if (jQuery('.counter').length > 0) {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}
	}

	/* Video Popup ============ */
	var handleVideo = function () {
		/* Video responsive function */
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		/* Video responsive function end */
	}

	/* Gallery Filter ============ */
	var handleFilterMasonary = function () {
		/* gallery filter activation = jquery.mixitup.min.js */
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if (jQuery('.gallery-filter.masonary').length) {
			jQuery('.gallery-filter.masonary').on('click', 'span', function () {
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}

	/* handle Bootstrap Select ============ */
	var handleBootstrapSelect = function () {
		/* Bootstrap Select box function by  = bootstrap-select.min.js */
		if (jQuery('select').length) {
			jQuery('select').selectpicker();
		}
		/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	}

	/* handle Bootstrap Touch Spin ============ */
	var handleBootstrapTouchSpin = function () {
		jQuery("input[name='demo_vertical2']").TouchSpin({
			verticalbuttons: true,
			verticalupclass: 'fa fa-plus',
			verticaldownclass: 'fa fa-minus'
		});

	}
	/* Resizebanner ============ */
	var handleBannerResize = function () {
		$(".full-height").css("height", $(window).height());
	}

	/* Countdown ============ */
	var handleCountDown = function (WebsiteLaunchDate) {
		/* Time Countr Down Js */
		if ($(".countdown").length > 0) {
			$('.countdown').countdown({ date: WebsiteLaunchDate + ' 23:5' }, function () {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}

	/* Content Scroll ============ */
	var handleCustomScroll = function () {
		/* all available option parameters with their default values */
		if ($(".content-scroll").length > 0) {
			$(".content-scroll").mCustomScrollbar({
				setWidth: false,
				setHeight: false,
				axis: "y"
			});
		}
	}

	/* Left Menu ============ */
	var handleSideBarMenu = function () {
		$('.openbtn').on('click', function (e) {
			e.preventDefault();
			//document.getElementById("mySidenav").style.width = "280px";
			//document.getElementById("main").style.marginLeft = "280px";
			if ($('#mySidenav').length > 0) {
				document.getElementById("mySidenav").style.right = "0";
			}

			if ($('#mySidenav1').length > 0) {
				document.getElementById("mySidenav1").style.right = "0";
			}
		})

		$('.closebtn').on('click', function (e) {
			e.preventDefault();
			//document.getElementById("mySidenav").style.width = "0";
			//document.getElementById("main").style.marginLeft= "0";
			if ($('#mySidenav').length > 0) {
				document.getElementById("mySidenav").style.right = "-300px";
			}

			if ($('#mySidenav1').length > 0) {
				document.getElementById("mySidenav1").style.right = "-820px";
			}
		})
	}


	/* BGEFFECT ============ */
	var handleBGElements = function () {

		if (screenWidth > 1023) {
			if (jQuery('.bgeffect').length) {
				var s = skrollr.init({
					edgeStrategy: 'set',
					easing: {
						WTF: Math.random,
						inverted: function (p) {
							return 1 - p;
						}
					}
				});
			}
		}
	}

	var boxHover = function () {
		'use strict';
		jQuery('.box-hover').on('mouseenter', function () {
			jQuery('.box-hover').removeClass('active');
			jQuery(this).addClass('active');

		})
	}

	var reposition = function () {
		'use strict';
		var modal = jQuery(this),
			dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');

		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}

	var handleResize = function () {
		'use strict';
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function () {
			jQuery('.modal:visible').each(reposition);
			equalHeight('.equal-wraper .equal-col');
			footerAlign();
		});
	}

	var handleSetHeight = function () {
		windowHeight = jQuery(window).innerHeight();
		jQuery('.content-admin-wraper , .aon-custo-map-iner , .full-screen-content').css('min-height', windowHeight);
	}


	var wow_animation = function () {
		if ($('.wow').length > 0) {
			var wow = new WOW(
				{
					boxClass: 'wow',      // animated element css class (default is wow)
					animateClass: 'animated', // animation css class (default is animated)
					offset: 100,        // distance to the element when triggering the animation (default is 0)
					mobile: false       // trigger animations on mobile devices (true is default)
				});
			wow.init();
		}
	}


	/* Website Launch Date */
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate = WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	/* Website Launch Date END */


	/* Function ============ */
	return {
		init: function () {
			boxHover();
			wow_animation();
			dzTheme();
			handleResizeElement();
			homeSearch();
			MagnificPopup();
			handleAccordian();
			scrollTop();
			handlePlaceholder();
			footerAlign();
			headerFix();
			setDivHeight();
			handleVideo();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handleCustomScroll();
			handleSideBarMenu();
			cartButton();
			handleBannerResize();
			handleResize();
			handleSetHeight();
			jQuery('.modal').on('show.bs.modal', reposition);
		},


		load: function () {
			handleBGElements();
			handleBootstrapSelect();
			handleBootstrapTouchSpin();
			onePageLayout();
			counter();
			masonryBox();
		},

		resize: function () {
			screenWidth = $(window).width();
			dzTheme();
			handleResizeElement();
			setDivHeight();
			handleSetHeight();
		}
	}

}();



/* Document.ready Start */
jQuery(document).ready(function () {

	Rama.init();
	jQuery('.tp-bgimg').after("<div class='overlay-row'></div>");

	jQuery('.navicon').on('click', function () {
		$(this).toggleClass('open');
	});
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on("load", function (e) {
	Rama.load();
	setTimeout(function () {
		jQuery('#loading-area').remove();
	}, 0);
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize', function () {
	'use strict';
	Rama.resize();
});
/*  Window Resize END */

// language for nav-bar

$(function () {

	$("#arabic").click(function () {
		localStorage.setItem("Lang", "arabic");
		if (localStorage.getItem("Lang") == "arabic") {
			// start nav bar
			$("#home").text('الصفحة الرئيسية');
			$('#about').text('من نحن');
			$("#auction").text('المزادات');
			$("#log-in").text("تسجيل الدخول");
			$("#langu").text("اللغة");
			$("#arabic").text("العربية");
			$("#english").text("الأنكليزية");
			// end nav bar
			
			// start home content
			$("#slid-1").text("مجتمع لمحبي الأنتيكا والعقارات التراثية");
			$("#slid-2").text("اهلا بك في مزادك");
			$("#read-1").text("اقرأ المزيد");
			$("#read-2").text("اقرأ المزيد");
			$("#read-3").text("اقرأ المزيد");
			$("#slid-3").text("ستجدون كل ما هو ثمين وعتيق");
			$("#slid-4").text("بخطوت سهلة وبسيطة");
			$("#slid-5").text("نحن نضمن امان وسرعة الأجراءات القانونية");
			$("#slid-6").text("حريصون على ثقتكم");
			$("#happy").text("عملاء سعيدون");
			$("#auct-num").text("اعداد المزادات");
			$("#sec-off").text("اقسامنا وعروضنا");
			$("#sec-off-desc").text("يمكنك معرفة المزيد عن اقسامنا وعروضنا واختيار ما يناسبك بسهولة كبيرة");
			$("#box-1").text("المزاد الحالي");
			$("#box-1-desc").text("المزادات المفتوحة الان");
			$("#box-2").text("مزاد العقارات");
			$("#box-2-desc").text("عقارات تراثية متاحة الآن")
			$("#box-3").text("مزاد سيارات");
			$("#box-3-desc").text("السيارات الكلاسيكية متاحة الان");
			$("#box-4").text("مزاد مقتنيات ثمينة ");
			$("#box-4-desc").text("الأكسسوارات و الأثاث العتيق متاح الآن");
			$("#box-5").text("خدماتنا");
			$("#box-5-desc").text("لمعرفة المزيد عن الخدمات التي نقدمها اضغط على الأيقونة ");
			$("#box-6").text("شروط و أحكام المزاد");
			$("#box-6-desc").text("لمعرفة المزيد عن الشروط والأحكام اضغط على الأيقونة");
			$("#company").text("ادارة الشركة");
			$("#company-desc").text("اعضاء مجلس الأدارة في مزادك");

			$("#tariq").text("طارق صفية");
			$("#raghad").text("رغد خشانة");
			$("#raham").text("رحمة الشعلان");
			$("#sameh").text("سامح السيوف");
			$("#opada").text("عبادة صالح");
			$("#farah").text("فرح العارف");
			$("#hala").text("هلا فزع");
			$("#nour").text("نور الهدى");
			$("#karam").text("كرم سالم");

			// end home content

			//start about content
			$("#whoo").text('من نحن');
			$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
			يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
			ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
			 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
			 $("#our-vision").text('رؤيتنا');
			 $("#vision-1").text('نطمح لنكون منصة عالمية تجمع محبي المقتنيات التراثية, العتيقة, الثمينة والنادرة');
			 $("#learn-1").text("لمعرفة المزيد");
			 $("#learn-2").text("لمعرفة المزيد");
			 $("#learn-3").text("لمعرفة المزيد");
			 $("#mission").text("مهامنا");
			 $("#mission-1").text(".نعمل على تطوير مفهوم المزاد التقليدي");
			 $("#mission-2").text(".نسعى لإتاحة فرصة التواصل الأسرع بين مالكي المقتنيات الثمينة والتراثية العتيقة وأصحاب الذوق الرفيع الباحثين عن التميز");
			 $("#our-values").text("قيمنا");
			 $("#value-1").text("نلبي رغباتكم في الحصول على مختلف أنواع المقتنيات سواء القديمة العتيقة أو الحديثة المعتّقة ");
			 $("#value-2").text("نمنحكم الفرصة لتقييم مقتنياتكم من قبل خبراء مختصين ");
			 $("#value-3").text("نحرص على أن تتمتعوا بتجربة سهلة, سريعة وآمنة");
			 $("#value-4").text("نضمن وصول مشترياتكم  بسرعة وأمان");
			

			// end about content

			// start auction
			$("#pi6").text('عقد بوهيمي من الذهب ')
			$("#pi66").text('المرصع بأحجار الفيروز الأزرق الذي يعود لعام 1970 . سيكون الاجمل ضمن مجموعة المجوهرات الخاصة بكِ')
			$("#pi5").text('منزل  عربي مبني على الطراز العثماني  ')
			$("#pi55").text('في مدينة حلب  حي الجلوم, مبني من الحجارة السوداء البازلتية ويتكون من طابق واحد يحوي 10 غرف بالاضافة إلى فسحة سماوية يتوسطها بئر ماء .')
			$("#pi4").text('سيارة امريكية كلاسيكية  ')
			$("#pi44").text('باللون الازرق اللامع ذات مقدمة منفوخة, تعود لخمسينيات القرن الماضي ستكون إضافة رائعة لكراجك الراقي')
			$("#pi3").text('كاميرا فوتوغرافية ماركة "ليكا" ')
			$("#pi33").text('مصنوعة من النحاس والجلد الطبيعي. تعود لستينيات القرن الماضي. وجدت خصيصاً لمحبي اقتناء كل ما هو مميز في عالم التصوير والفن')
			$("#pi2").text('كرسي هزاز ')
			$("#pi22").text('مصنوع من خشب الزان ومغطى بالقماش الاغباني على المسند والاطراف. عمره بما يقارب 100 عام. يؤمن لك الراحة والتميز')
			$("#pi1").text(' ساعة حائط مع بندول  ')
			$("#pi11").text('مصنوعة من خشب السنديان والذهب الخالص مزينة بنقوش اسلامية تعود للعصر العثماني وعمرها ما يقارب 1000 سنة. إن كنت تبحث عن التميز فهذا العرض خصيصاً لك')
			$('#pi7').text('خاتم مصنوع من الفضة الخالصة ومرصّع بالالماس');
			$('#pi77').text('سيضفي على يدك مظهر لامع وساحر');
			$('#pi8').text('طبنجة');
			$('#pi88').text('مصنوعة من الخشب والحديد ذات لون بني تعود للعهد العثماني. عمرها بما يقارب 400 سنة. خصيصاً لمحبي جمع الاسلحة التقليدية');
			$('#pi9').text('سيارة شيفروليه');
			$('#pi99').text('باللون السماوي الفخم بتصميم مميز تعود لعام 1976 ');
		// end auction
// start shopping
$("#shiop").text('المزادات');
$("#shiopp").text('شارك في المزادات واستمتع بالتجربة الآن');
$("#1").text('عرض الكل');
$("#2").text('مقتنيات ثمينة');
$("#3").text('مزاد حالي');
$("#4").text('عقارات وسيارات');

// end shopping
			// start log in
		$('#contact-us').text('تواصل معنا');
		$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
		$("#name").attr("placeholder", "اسمك");
		$("#phone").attr("placeholder", "ايميلك");
		$("#email").attr("placeholder", "رقم هاتفك");
		$("#address").attr("placeholder", "عنوانك");
		$("#message").attr("placeholder", "اترك تعليقا");
		$('#submit').text('ارسل');
		$('#our-phone').text('رقمنا');
		$('#our-email').text('ايميلنا');
		$('#our-address').text('عنواننا');
			// end log in
			
			// add the ids
			$("#pi7,#pi77,#pi8,#pi88,#pi99,#pi9,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").addClass("font1");

		}

		else if (localStorage.getItem("Lang") == "english") {
			// start nav bar
			$("#home").text('Home');
			$('#about').text('about');
			$("#auction").text('auction');
			$("#log-in").text("log in");
			$("#langu").text("language");
			$("#arabic").text("Arabic");
			$("#english").text("English");
			// end nav bar

			// start home content
			$("#slid-1").text("A society for antiques and Heritage properties lovers.");
			$("#slid-2").text("Welcome to Mazadak");
			$("#read-1").text("Read more");
			$("#read-2").text("Read more");
			$("#read-3").text("Read more");
			$("#slid-3").text("You will find everything that is precious and hoary.");
			$("#slid-4").text("In easy and simple stips");
			$("#slid-5").text("We guarantee safty and speed in your Legal procedures.");
			$("#slid-6").text("We care about your trust");
			$("#happy").text("Happy Clients");
			$("#auct-num").text("Auctions number");
			$("#sec-off").text("Our Sections and offers");
			$("#sec-off-desc").text("you can learn about our Sections and offers and choose what suits you very easly.");
			$("#box-1").text("Current Auction");
			$("#box-1-desc").text("Auctions are now open ");
			$("#box-2").text("Real Estate Auction");
			$("#box-2-desc").text("Heritage properties are now available ");
			$("#box-3").text("Car Auction");
			$("#box-3-desc").text("Classic cars are now available");
			$("#box-4").text("Valuable collectibles auction");
			$("#box-4-desc").text("antique furniture and accessories are now available  ");
			$("#box-5").text("Our services");
			$("#box-5-desc").text("To learn more about the services we provide click the icon above. ");
			$("#box-6").text("Terms and conditions");
			$("#box-6-desc").text("To learn more about the Terms and conditions click the icon above. ");
			$("#company").text("Company management");
			$("#company-desc").text("The bord of management at Mazadak company");
			$("#tariq").text("Tareq Safia");
			$("#raghad").text("Raghad Khashana");
			$("#raham").text("Rahma Shaalan");
			$("#sameh").text("Sameh Al-Saiof");
			$("#opada").text("Obada Salha");
			$("#farah").text("Farah Al-Aref");
			$("#hala").text("Hala Fazaa");
			$("#nour").text("Nour Al-Hoda");
			$("#karam").text("Karam Salem");
			// end home content

			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
			$("#our-vision").text('Ouer Vision');
			$("#vision-1").text('We aspire to be a global platform that brings together lovers of heritage, antique, precious and rare collectibles');
			$("#learn-1").text("Learn more");
			$("#learn-2").text("Learn more");
			$("#learn-3").text("Learn more");
			$("#mission").text("Our missions");
			$("#mission-1").text("Working on developing the concept of the traditional auction.");
			$("#mission-2").text("We seek to provide the opportunity for faster communication between the owners of valuable and antique collectibles and those with high taste who are looking for excellence.");
			$("#our-values").text("Our values");
			$("#value-1").text("We satisfy your desires to acquire various types of collectibles, whether antique or modern");
			$("#value-2").text("We give you the opportunity to evaluate your collectibles by specialized experts");
			$("#value-3").text("We make sure that you enjoy an easy, fast and secure experience");
			$("#value-4").text("We ensure that your purchases arrive quickly and safely");
			// end about content

			// start auction
			$("#pi7").text('Ring made of sterling silver and studded with diamonds. ')
			$("#pi77").text('It will give your hand a glossy and charming look ')
			$("#pi8").text('A pistol ')
			$("#pi88").text('made of wood and iron, brown in color, dating back to the Ottoman era. It is about 400 years old. Especially for lovers of collecting traditional weapons ')
			$("#pi6").text('Bohemian gold necklace')
			$("#pi66").text('studded with blue turquoise stones dating back to 1970. It will be the prettiest in your jewelry collection')
			$("#pi5").text('An Arab house built in the Ottoman style ')
			$("#pi55").text('in the city of Aleppo, Al-Jalloum neighborhood. It is built of black basalt stones. It consists of one floor and contains 10 rooms, in addition to a heavenly space with a water well in the middle.')
			$("#pi4").text('A classic American car ')
			$("#pi44").text('in glossy blue color with a blown front, dating back to the fifties of the last century, will be a great addition to your upscale garage')
			$("#pi3").text('A "Leica" camera')
			$("#pi33").text('made of copper and natural leather. It dates back to the sixties of the last century. Found specifically for lovers of acquiring everything that is special in the world of photography and art')
			$("#pi2").text('A rocking chair ')
			$("#pi22").text('made of beech wood and covered with Ighbany cloth on the backrest and the edges. He is nearly 100 years old. It provides you with comfort and distinction')
			$("#pi1").text(' A wall clock with a pendulum ')
			$("#pi11").text('made of oak wood and pure gold decorated with Islamic inscriptions dating back to the Ottoman era and about 1000 years old. If you are looking for excellence, this offer is especially for you')
		// end auction

			// start log in
			$('#contact-us').text('contact us');
			$('#add-auction').text('if you want to sell something in the auction please log in.');
			$("#name").attr("placeholder", "Your Name");
			$("#phone").attr("placeholder", "Your Email id");
			$("#email").attr("placeholder", "phone");
			$("#address").attr("placeholder", "Address");
			$("#message").attr("placeholder", "Leave a comment");
			$('#submit').text('Submit');
			$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
			// end log in
				// start shopping
				$("#shiop").text('Auactions');
				$("#shiopp").text('Join in the auctions and enjoy the experience now');
				$("#1").text('Show All');
				$("#2").text('Valuable collectibles');
				$("#3").text('Current Auction');
				$("#4").text('Real estate And Car');
	
				// end shopping
			// add the ids
						$("#pi7,#pi77,#pi8,pi88,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").removeClass("font1");
			
		}
	})

	$("#english").click(function () {
		localStorage.setItem("Lang", "english");
		if (localStorage.getItem("Lang") == "arabic") {
			// start nav bar
			$("#home").text('الصفحة الرئيسية');
			$('#about').text('من نحن');
			$("#auction").text('المزادات');
			$("#log-in").text("تسجيل الدخول");
			$("#langu").text("اللغة");
			$("#arabic").text("العربية");
			$("#english").text("الأنكليزية");
			// end nav bar

			// start home content
			$("#slid-1").text("مجتمع لمحبي الأنتيكا والعقارات التراثية");
			$("#slid-2").text("اهلا بك في مزادك");
			$("#read-1").text("اقرأ المزيد");
			$("#read-2").text("اقرأ المزيد");
			$("#read-3").text("اقرأ المزيد");
			$("#slid-3").text("ستجدون كل ما هو ثمين وعتيق");
			$("#slid-4").text("بخطوت سهلة وبسيطة");
			$("#slid-5").text("نحن نضمن امان وسرعة الأجراءات القانونية");
			$("#slid-6").text("حريصون على ثقتكم");
			$("#happy").text("عملاء سعيدون");
			$("#auct-num").text("اعداد المزادات");
			$("#sec-off").text("اقسامنا وعروضنا");
			$("#sec-off-desc").text("يمكنك معرفة المزيد عن اقسامنا وعروضنا واختيار ما يناسبك بسهولة كبيرة");
			$("#box-1").text("المزاد الحالي");
			$("#box-1-desc").text("المزادات المفتوحة الان");
			$("#box-2").text("مزاد العقارات");
			$("#box-2-desc").text("عقارات تراثية متاحة الآن");
			$("#box-3").text("مزاد سيارات");
			$("#box-3-desc").text("السيارات الكلاسيكية متاحة الان");
			$("#box-4").text("مزاد مقتنيات ثمينة ");
			$("#box-4-desc").text("الأكسسوارات و الأثاث العتيق متاح الآن");
			$("#box-5").text("خدماتنا");
			$("#box-5-desc").text("لمعرفة المزيد عن الخدمات التي نقدمها اضغط على الأيقونة");
			$("#box-6").text("شروط و أحكام المزاد");
			$("#box-6-desc").text("لمعرفة المزيد عن الشروط والأحكام اضغط على الأيقونة ");
			$("#company").text("ادارة الشركة");
			$("#company-desc").text("اعضاء مجلس الأدارة في مزادك");
			$("#tariq").text("طارق صفية");
			$("#raghad").text("رغد خشانة");
			$("#raham").text("رحمة الشعلان");
			$("#sameh").text("سامح السيوف");
			$("#opada").text("عبادة صالح");
			$("#farah").text("فرح العارف");
			$("#hala").text("هلا فزع");
			$("#nour").text("نور الهدى");
			$("#karam").text("كرم سالم");
			// end home content
// start shopping
			$("#shiop").text('المزادات');
			$("#shiopp").text('شارك في المزادات واستمتع بالتجربة الآن');
			$("#1").text('عرض الكل');
			$("#2").text('مقتنيات ثمينة');
			$("#3").text('مزاد حالي');
			$("#4").text('عقارات وسيارات');

			// end shopping
		//start about content
		$("#whoo").text('من نحن');
		$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
		يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
		ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
		 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
		 $("#our-vision").text('رؤيتنا');
		 $("#vision-1").text('نطمح لنكون منصة عالمية تجمع محبي المقتنيات التراثية, العتيقة, الثمينة والنادرة');
		 $("#learn-1").text("لمعرفة المزيد");
		 $("#learn-2").text("لمعرفة المزيد");
		 $("#learn-3").text("لمعرفة المزيد");
		 $("#mission").text("مهامنا");
		 $("#mission-1").text(".نعمل على تطوير مفهوم المزاد التقليدي");
		 $("#mission-2").text(".نسعى لإتاحة فرصة التواصل الأسرع بين مالكي المقتنيات الثمينة والتراثية العتيقة وأصحاب الذوق الرفيع الباحثين عن التميز");
		 $("#our-values").text("قيمنا");
		 $("#value-1").text("نلبي رغباتكم في الحصول على مختلف أنواع المقتنيات سواء القديمة العتيقة أو الحديثة المعتّقة ");
		 $("#value-2").text("نمنحكم الفرصة لتقييم مقتنياتكم من قبل خبراء مختصين ");
		 $("#value-3").text("نحرص على أن تتمتعوا بتجربة سهلة, سريعة وآمنة");
		 $("#value-4").text("نضمن وصول مشترياتكم  بسرعة وأمان");
		// end about content
			// start auction
			$("#pi6").text('عقد بوهيمي من الذهب ')
			$("#pi66").text('المرصع بأحجار الفيروز الأزرق الذي يعود لعام 1970 . سيكون الاجمل ضمن مجموعة المجوهرات الخاصة بكِ')
			$("#pi5").text('منزل  عربي مبني على الطراز العثماني  ')
			$("#pi55").text('في مدينة حلب  حي الجلوم, مبني من الحجارة السوداء البازلتية ويتكون من طابق واحد يحوي 10 غرف بالاضافة إلى فسحة سماوية يتوسطها بئر ماء .')
			$("#pi4").text('سيارة امريكية كلاسيكية  ')
			$("#pi44").text('باللون الازرق اللامع ذات مقدمة منفوخة, تعود لخمسينيات القرن الماضي ستكون إضافة رائعة لكراجك الراقي')
			$("#pi3").text('كاميرا فوتوغرافية ماركة "ليكا" ')
			$("#pi33").text('مصنوعة من النحاس والجلد الطبيعي. تعود لستينيات القرن الماضي. وجدت خصيصاً لمحبي اقتناء كل ما هو مميز في عالم التصوير والفن')
			$("#pi2").text('كرسي هزاز ')
			$("#pi22").text('مصنوع من خشب الزان ومغطى بالقماش الاغباني على المسند والاطراف. عمره بما يقارب 100 عام. يؤمن لك الراحة والتميز')
			$("#pi1").text(' ساعة حائط مع بندول  ')
			$("#pi11").text('مصنوعة من خشب السنديان والذهب الخالص مزينة بنقوش اسلامية تعود للعصر العثماني وعمرها ما يقارب 1000 سنة. إن كنت تبحث عن التميز فهذا العرض خصيصاً لك')
			$('#pi7').text('خاتم مصنوع من الفضة الخالصة ومرصّع بالالماس');
			$('#pi77').text('سيضفي على يدك مظهر لامع وساحر');
			$('#pi8').text('طبنجة');
			$('#pi88').text('مصنوعة من الخشب والحديد ذات لون بني تعود للعهد العثماني. عمرها بما يقارب 400 سنة. خصيصاً لمحبي جمع الاسلحة التقليدية');
			$('#pi9').text('سيارة شيفروليه');
			$('#pi99').text('باللون السماوي الفخم بتصميم مميز تعود لعام 1976 ');
		// end auction
			// start shopping
			$("#shiop").text('المزادات');
			$("#shiopp").text('شارك في المزادات واستمتع بالتجربة الآن');
			$("#1").text('عرض الكل');
			$("#2").text('مقتنيات ثمينة');
			$("#3").text('مزاد حالي');
			$("#4").text('عقارات وسيارات');

			// end shopping
		// start log in
		$('#contact-us').text('تواصل معنا');
		$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
		$("#name").attr("placeholder", "اسمك");
		$("#phone").attr("placeholder", "ايميلك");
		$("#email").attr("placeholder", "رقم هاتفك");
		$("#address").attr("placeholder", "عنوانك");
		$("#message").attr("placeholder", "اترك تعليقا");
		$('#submit').text('ارسل');
		$('#our-phone').text('رقمنا');
		$('#our-email').text('ايميلنا');
		$('#our-address').text('عنواننا');
			// end log in
			// add the ids
			$("#pi7,#pi77,#pi8,#pi88,#pi99,#pi9,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").addClass("font1");

		}

		else if (localStorage.getItem("Lang") == "english") {
			// start nav bar
			$("#home").text('Home');
			$('#about').text('about');
			$("#auction").text('auction');
			$("#log-in").text("log in");
			$("#langu").text("language");
			$("#arabic").text("Arabic");
			$("#english").text("English");
			// end nav bar
			
			// start home content
			$("#slid-1").text("A society for antiques and Heritage properties lovers.");
			$("#slid-2").text("Welcome to Mazadak");
			$("#read-1").text("Read more");
			$("#read-2").text("Read more");
			$("#read-3").text("Read more");
			$("#slid-3").text("You will find everything that is precious and hoary.");
			$("#slid-4").text("In easy and simple stips");
			$("#slid-5").text("We guarantee safty and speed in your Legal procedures.");
			$("#slid-6").text("We care about your trust");
			$("#happy").text("Happy Clients");
			$("#auct-num").text("Auctions number");
			$("#sec-off").text("Our Sections and offers");
			$("#sec-off-desc").text("you can learn about our Sections and offers and choose what suits you very easly.");
			$("#box-1").text("Current Auction");
			$("#box-1-desc").text("Auctions are now open ");
			$("#box-2").text("Real Estate Auction");
			$("#box-2-desc").text("Heritage properties are now available ");
			$("#box-3").text("Car Auction");
			$("#box-3-desc").text("Classic cars are now available");
			$("#box-4").text("Valuable collectibles auction");
			$("#box-4-desc").text("antique furniture and accessories are now available  ");
			$("#box-5").text("Our services");
			$("#box-5-desc").text("To learn more about the services we provide click the icon above. ");
			$("#box-6").text("Terms and conditions");
			$("#box-6-desc").text("To learn more about the Terms and conditions click the icon above. ");
			$("#company").text("Company management");
			$("#company-desc").text("The bord of management at Mazadak company");
			$("#tariq").text("Tareq Safia");
			$("#raghad").text("Raghad Khashana");
			$("#raham").text("Rahma Shaalan");
			$("#sameh").text("Sameh Al-Saiof");
			$("#opada").text("Obada Salha");
			$("#farah").text("Farah Al-Aref");
			$("#hala").text("Hala Fazaa");
			$("#nour").text("Nour Al-Hoda");
			$("#karam").text("Karam Salem");
			// end home content

			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
			$("#our-vision").text('Our Vision');
			$("#vision-1").text('We aspire to be a global platform that brings together lovers of heritage, antique, precious and rare collectibles');
			$("#learn-1").text("Learn more");
			$("#learn-2").text("Learn more");
			$("#learn-3").text("Learn more");
			$("#mission").text("Our missions");
			$("#mission-1").text("Working on developing the concept of the traditional auction.");
			$("#mission-2").text("We seek to provide the opportunity for faster communication between the owners of valuable and antique collectibles and those with high taste who are looking for excellence.");
			$("#our-values").text("Our values");
			$("#value-1").text("We satisfy your desires to acquire various types of collectibles, whether antique or modern");
			$("#value-2").text("We give you the opportunity to evaluate your collectibles by specialized experts");
			$("#value-3").text("We make sure that you enjoy an easy, fast and secure experience");
			$("#value-4").text("We ensure that your purchases arrive quickly and safely");
			// end about content
			
			// start auction
			$("#pi7").text('Ring made of sterling silver and studded with diamonds. ')
			$("#pi77").text('It will give your hand a glossy and charming look ')
			$("#pi8").text('A pistol ')
			$("#pi88").text('made of wood and iron, brown in color, dating back to the Ottoman era. It is about 400 years old. Especially for lovers of collecting traditional weapons ')
			$("#pi6").text('Bohemian gold necklace')
			$("#pi66").text('studded with blue turquoise stones dating back to 1970. It will be the prettiest in your jewelry collection')
			$("#pi5").text('An Arab house built in the Ottoman style ')
			$("#pi55").text('in the city of Aleppo, Al-Jalloum neighborhood. It is built of black basalt stones. It consists of one floor and contains 10 rooms, in addition to a heavenly space with a water well in the middle.')
			$("#pi4").text('A classic American car ')
			$("#pi44").text('in glossy blue color with a blown front, dating back to the fifties of the last century, will be a great addition to your upscale garage')
			$("#pi3").text('A "Leica" camera')
			$("#pi33").text('made of copper and natural leather. It dates back to the sixties of the last century. Found specifically for lovers of acquiring everything that is special in the world of photography and art')
			$("#pi2").text('A rocking chair ')
			$("#pi22").text('made of beech wood and covered with Ighbany cloth on the backrest and the edges. He is nearly 100 years old. It provides you with comfort and distinction')
			$("#pi1").text(' A wall clock with a pendulum ')
			$("#pi11").text('made of oak wood and pure gold decorated with Islamic inscriptions dating back to the Ottoman era and about 1000 years old. If you are looking for excellence, this offer is especially for you')
		// end auction

			// start log in
			$('#contact-us').text('contact us');
			$('#add-auction').text('if you want to sell something in the auction please log in.');
			$("#name").attr("placeholder", "Your Name");
			$("#phone").attr("placeholder", "Your Email id");
			$("#email").attr("placeholder", "phone");
			$("#address").attr("placeholder", "Address");
			$("#message").attr("placeholder", "Leave a comment");
			$('#submit').text('Submit');
			$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
			// end log in
			// start shopping
			$("#shiop").text('Auactions');
			$("#shiopp").text('Join in the auctions and enjoy the experience now');
			$("#1").text('Show All');
			$("#2").text('Valuable collectibles');
			$("#3").text('Current Auction');
			$("#4").text('Real estate And Car');

			// end shopping
			// add the ids
			$("#pi7,#pi77,#pi8,pi88,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").removeClass("font1");

		}
	})


	if (localStorage.getItem("Lang") == "arabic") {
			// start nav bar
			$("#home").text('الصفحة الرئيسية');
			$('#about').text('من نحن');
			$("#auction").text('المزادات');
			$("#log-in").text("تسجيل الدخول");
			$("#langu").text("اللغة");
			$("#arabic").text("العربية");
			$("#english").text("الأنكليزية");
			// end nav barx
		
			// start home content
			$("#slid-1").text("مجتمع لمحبي الأنتيكا والعقارات التراثية");
			$("#slid-2").text("اهلا بك في مزادك");
			$("#read-1").text("اقرأ المزيد");
			$("#read-2").text("اقرأ المزيد");
			$("#read-3").text("اقرأ المزيد");
			$("#slid-3").text("ستجدون كل ما هو ثمين وعتيق");
			$("#slid-4").text("بخطوت سهلة وبسيطة");
			$("#slid-5").text("نحن نضمن امان وسرعة الأجراءات القانونية");
			$("#slid-6").text("حريصون على ثقتكم");
			$("#happy").text("عملاء سعيدون");
			$("#auct-num").text("اعداد المزادات");
			$("#sec-off").text("اقسامنا وعروضنا");
			$("#sec-off-desc").text("يمكنك معرفة المزيد عن اقسامنا وعروضنا واختيار ما يناسبك بسهولة كبيرة");
			$("#box-1").text("المزاد الحالي");
			$("#box-1-desc").text("المزادات المفتوحة الان");
			$("#box-2").text("مزاد العقارات");
			$("#box-2-desc").text("عقارات تراثية متاحة الآن");
			$("#box-3").text("مزاد سيارات");
			$("#box-3-desc").text("السيارات الكلاسيكية متاحة الان");
			$("#box-4").text("مزاد مقتنيات ثمينة ");
			$("#box-4-desc").text("الأكسسوارات و الأثاث العتيق متاح الآن");
			$("#box-5").text("خدماتنا");
			$("#box-5-desc").text("لمعرفة المزيد عن الخدمات التي نقدمها اضغط على الأيقونة ");
			$("#box-6").text("شروط و أحكام المزاد");
			$("#box-6-desc").text("لمعرفة المزيد عن الشروط والأحكام اضغط على الأيقونة ");
		
			$("#company").text("ادارة الشركة");
			$("#company-desc").text("اعضاء مجلس الأدارة في مزادك");
			$("#tariq").text("طارق صفية");
			$("#raghad").text("رغد خشانة");
			$("#raham").text("رحمة الشعلان");
			$("#sameh").text("سامح السيوف");
			$("#opada").text("عبادة صالح");
			$("#farah").text("فرح العارف");
			$("#hala").text("هلا فزع");
			$("#nour").text("نور الهدى");
			$("#karam").text("كرم سالم");
			// end home content

			//start about content
			$("#whoo").text('من نحن');
			$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
			يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
			ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
			 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
			 $("#our-vision").text('رؤيتنا');
			 $("#vision-1").text('نطمح لنكون منصة عالمية تجمع محبي المقتنيات التراثية, العتيقة, الثمينة والنادرة');
			 $("#learn-1").text("لمعرفة المزيد");
			 $("#learn-2").text("لمعرفة المزيد");
			 $("#learn-3").text("لمعرفة المزيد");
			 $("#mission").text("مهامنا");
			 $("#mission-1").text(".نعمل على تطوير مفهوم المزاد التقليدي");
			 $("#mission-2").text("نسعى لإتاحة فرصة التواصل الأسرع بين مالكي المقتنيات الثمينة والتراثية العتيقة وأصحاب الذوق الرفيع الباحثين عن التميز");
			 $("#our-values").text("قيمنا");
			 $("#value-1").text("نلبي رغباتكم في الحصول على مختلف أنواع المقتنيات سواء القديمة العتيقة أو الحديثة المعتّقة ");
			 $("#value-2").text("نمنحكم الفرصة لتقييم مقتنياتكم من قبل خبراء مختصين ");
			 $("#value-3").text("نحرص على أن تتمتعوا بتجربة سهلة, سريعة وآمنة");
			 $("#value-4").text("نضمن وصول مشترياتكم  بسرعة وأمان");
			// end about content
// start shopping
$("#shiop").text('المزادات');
$("#shiopp").text('شارك في المزادات واستمتع بالتجربة الآن');
$("#1").text('عرض الكل');
$("#2").text('مقتنيات ثمينة');
$("#3").text('مزاد حالي');
$("#4").text('عقارات وسيارات');

// end shopping
			// start auction
			$("#pi6").text('عقد بوهيمي من الذهب ')
			$("#pi66").text('المرصع بأحجار الفيروز الأزرق الذي يعود لعام 1970 . سيكون الاجمل ضمن مجموعة المجوهرات الخاصة بكِ')
			$("#pi5").text('منزل  عربي مبني على الطراز العثماني  ')
			$("#pi55").text('في مدينة حلب  حي الجلوم, مبني من الحجارة السوداء البازلتية ويتكون من طابق واحد يحوي 10 غرف بالاضافة إلى فسحة سماوية يتوسطها بئر ماء .')
			$("#pi4").text('سيارة امريكية كلاسيكية  ')
			$("#pi44").text('باللون الازرق اللامع ذات مقدمة منفوخة, تعود لخمسينيات القرن الماضي ستكون إضافة رائعة لكراجك الراقي')
			$("#pi3").text('كاميرا فوتوغرافية ماركة "ليكا" ')
			$("#pi33").text('مصنوعة من النحاس والجلد الطبيعي. تعود لستينيات القرن الماضي. وجدت خصيصاً لمحبي اقتناء كل ما هو مميز في عالم التصوير والفن')
			$("#pi2").text('كرسي هزاز ')
			$("#pi22").text('مصنوع من خشب الزان ومغطى بالقماش الاغباني على المسند والاطراف. عمره بما يقارب 100 عام. يؤمن لك الراحة والتميز')
			$("#pi1").text(' ساعة حائط مع بندول  ')
			$("#pi11").text('مصنوعة من خشب السنديان والذهب الخالص مزينة بنقوش اسلامية تعود للعصر العثماني وعمرها ما يقارب 1000 سنة. إن كنت تبحث عن التميز فهذا العرض خصيصاً لك')
			$('#pi7').text('خاتم مصنوع من الفضة الخالصة ومرصّع بالالماس');
			$('#pi77').text('سيضفي على يدك مظهر لامع وساحر');
			$('#pi8').text('طبنجة');
			$('#pi88').text('مصنوعة من الخشب والحديد ذات لون بني تعود للعهد العثماني. عمرها بما يقارب 400 سنة. خصيصاً لمحبي جمع الاسلحة التقليدية');
			$('#pi9').text('سيارة شيفروليه');
			$('#pi99').text('باللون السماوي الفخم بتصميم مميز تعود لعام 1976 ');
		// end auction

				// start log in
			$('#contact-us').text('تواصل معنا');
			$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
			$("#name").attr("placeholder", "اسمك");
			$("#phone").attr("placeholder", "ايميلك");
			$("#email").attr("placeholder", "رقم هاتفك");
			$("#address").attr("placeholder", "عنوانك");
			$("#message").attr("placeholder", "اترك تعليقا");
			$('#submit').text('ارسل');
			$('#our-phone').text('رقمنا');
			$('#our-email').text('ايميلنا');
			$('#our-address').text('عنواننا');
					// end log in
			// add the ids
			$("#pi7,#pi77,#pi8,#pi88,#pi99,#pi9,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").addClass("font1");
			}

			else if (localStorage.getItem("Lang") == "english") {
			// start nav bar
			$("#home").text('Home');
			$('#about').text('about');
			$("#auction").text('auction');
			$("#log-in").text("log in");
			$("#langu").text("language");
			$("#arabic").text("Arabic");
			$("#english").text("English");
			// end nav bar

			// start home content
			$("#slid-1").text("A society for antiques and Heritage properties lovers.");
			$("#slid-2").text("Welcome to Mazadak");
			$("#read-1").text("Read more");
			$("#read-2").text("Read more");
			$("#read-3").text("Read more");
			$("#slid-3").text("You will find everything that is precious and hoary.");
			$("#slid-4").text("In easy and simple stips");
			$("#slid-5").text("We guarantee safty and speed in your Legal procedures.");
			$("#slid-6").text("We care about your trust");
			$("#happy").text("Happy Clients");
			$("#auct-num").text("Auctions number");
			$("#sec-off").text("Our Sections and offers");
			$("#sec-off-desc").text("you can learn about our Sections and offers and choose what suits you very easly.");
			$("#box-1").text("Current Auction");
			$("#box-1-desc").text("Auctions are now open ");
			$("#box-2").text("Real Estate Auction");
			$("#box-2-desc").text("Heritage properties are now available ");
			$("#box-3").text("Car Auction");
			$("#box-3-desc").text("Classic cars are now available");
			$("#box-4").text("Valuable collectibles auction");
			$("#box-4-desc").text("antique furniture and accessories are now available  ");
			$("#box-5").text("Our services");
			$("#box-5-desc").text("To learn more about the services we provide click the icon above. ");
			$("#box-6").text("Terms and conditions");
			$("#box-6-desc").text("To learn more about the Terms and conditions click the icon above. ");
			$("#company").text("Company management");
			$("#company-desc").text("The bord of management at Mazadak company");
			$("#tariq").text("Tareq Safia");
			$("#raghad").text("Raghad Khashana");
			$("#raham").text("Rahma Shaalan");
			$("#sameh").text("Sameh Al-Saiof");
			$("#opada").text("Obada Salha");
			$("#farah").text("Farah Al-Aref");
			$("#hala").text("Hala Fazaa");
			$("#nour").text("Nour Al-Hoda");
			$("#karam").text("Karam Salem");
			// end home content
		
			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
			$("#our-vision").text('Our Vision');
			$("#vision-1").text('We aspire to be a global platform that brings together lovers of heritage, antique, precious and rare collectibles');
			$("#learn-1").text("Learn more");
			$("#learn-2").text("Learn more");
			$("#learn-3").text("Learn more");
			$("#mission").text("Our missions");
			$("#mission-1").text("Working on developing the concept of the traditional auction.");
			$("#mission-2").text("We seek to provide the opportunity for faster communication between the owners of valuable and antique collectibles and those with high taste who are looking for excellence.");
			$("#our-values").text("Our values");
			$("#value-1").text("We satisfy your desires to acquire various types of collectibles, whether antique or modern");
			$("#value-2").text("We give you the opportunity to evaluate your collectibles by specialized experts");
			$("#value-3").text("We make sure that you enjoy an easy, fast and secure experience");
			$("#value-4").text("We ensure that your purchases arrive quickly and safely");
			// end about content
				// start shopping
				$("#shiop").text('Auactions');
				$("#shiopp").text('Join in the auctions and enjoy the experience now');
				$("#1").text('Show All');
				$("#2").text('Valuable collectibles');
				$("#3").text('Current Auction');
				$("#4").text('Real estate And Car');
	
				// end shopping
			// start auction
			$("#pi7").text('Ring made of sterling silver and studded with diamonds. ')
			$("#pi77").text('It will give your hand a glossy and charming look ')
			$("#pi8").text('A pistol ')
			$("#pi88").text('made of wood and iron, brown in color, dating back to the Ottoman era. It is about 400 years old. Especially for lovers of collecting traditional weapons ')
			$("#pi6").text('Bohemian gold necklace')
			$("#pi66").text('studded with blue turquoise stones dating back to 1970. It will be the prettiest in your jewelry collection')
			$("#pi5").text('An Arab house built in the Ottoman style ')
			$("#pi55").text('in the city of Aleppo, Al-Jalloum neighborhood. It is built of black basalt stones. It consists of one floor and contains 10 rooms, in addition to a heavenly space with a water well in the middle.')
			$("#pi4").text('A classic American car ')
			$("#pi44").text('in glossy blue color with a blown front, dating back to the fifties of the last century, will be a great addition to your upscale garage')
			$("#pi3").text('A "Leica" camera')
			$("#pi33").text('made of copper and natural leather. It dates back to the sixties of the last century. Found specifically for lovers of acquiring everything that is special in the world of photography and art')
			$("#pi2").text('A rocking chair ')
			$("#pi22").text('made of beech wood and covered with Ighbany cloth on the backrest and the edges. He is nearly 100 years old. It provides you with comfort and distinction')
			$("#pi1").text(' A wall clock with a pendulum ')
			$("#pi11").text('made of oak wood and pure gold decorated with Islamic inscriptions dating back to the Ottoman era and about 1000 years old. If you are looking for excellence, this offer is especially for you')
		// end auction

			// start log in
			$('#contact-us').text('contact us');
			$('#add-auction').text('if you want to sell something in the auction please log in.');
			$("#name").attr("placeholder", "Your Name");
			$("#phone").attr("placeholder", "Your Email id");
			$("#email").attr("placeholder", "phone");
			$("#address").attr("placeholder", "Address");
			$("#message").attr("placeholder", "Leave a comment");
			$('#submit').text('Submit');
			$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
			// end log in
			// add the ids
			$("#pi7,#pi77,#pi8,pi88,#shiop,#value-4,#who,#whoo,#our-address,#our-email,#our-phone,#submit,#message,#address,#email,#phone,#name,#add-auction,#contact-us,#home ,#about ,#auction ,#log-in ,#langu ,#arabic ,#english ,#slid-1 ,#slid-2 , #read-1 ,#read-2 ,#read-3 ,#slid-3 ,#slid-4 ,#slid-5 ,#slid-6 ,#happy ,#auct-num ,#sec-off ,#sec-off-desc ,#box-1 ,#box-1-desc ,#box-2 ,#box-2-desc ,#box-3 ,#box-3-desc ,#box-4 ,#box-4-desc ,#box-5 ,#box-5-desc ,#box-6 ,#box-6-desc ,#company ,#company-desc ,#tariq ,#raghad ,#raham ,#sameh ,#opada ,#farah ,#hala ,#nour ,#karam ,#our-vision ,#vision-1 ,#learn-1 ,#learn-2 ,#learn-3 ,#mission ,#mission-1 ,#mission-2 ,#our-values ,#value-1 ,#value-2 ,#value-3 ,#value-4 #shiop ,#shiopp ,#1 ,#2 ,#3 ,#4 ,#pi6 ,#pi66 ,#pi5 ,#pi55 ,#pi4 ,#pi44 ,#pi3 ,#pi33 ,#pi2 ,#pi22 ,#pi1 ,#pi11").removeClass("font1");

			}

});







// language for side nav-bar
$(function () {

	$("#arabic2").click(function () {
		localStorage.setItem("Lang2", "arabic2");
		if (localStorage.getItem("Lang2") == "arabic2") {
			// start nav bar
			$("#home2").text('الصفحة الرئيسية');
			$('#about2').text('من نحن');
			$("#auction2").text('المزادات');
			$("#log-in2").text("تسجيل الدخول");
			$("#arabic2").text("العربية");
			$("#english2").text("الأنكليزية");
			// end nav bar

			// start log in
			$('#contact-us').text('تواصل معنا');
			$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
			$("#name").attr("placeholder", "اسمك");
			$("#phone").attr("placeholder", "ايميلك");
			$("#email").attr("placeholder", "رقم هاتفك");
			$("#address").attr("placeholder", "عنوانك");
			$("#message").attr("placeholder", "اترك تعليقا");
			$('#submit').text('ارسل');
			$('#our-phone').text('رقمنا');
			$('#our-email').text('ايميلنا');
			$('#our-address').text('عنواننا');

			
			// end log in

			//start about content
			$("#whoo").text('من نحن');
			$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
			يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
			ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
			 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
			// end about content

			// add the ids
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit ,#our-phone ,#our-email ,#our-address").addClass("font1");
		}

		else if (localStorage.getItem("Lang2") == "english2") {
			// start nav bar
			$("#home2").text('Home');
			$('#about2').text('about');
			$("#auction2").text('auction');
			$("#log-in2").text("log in");
			$("#arabic2").text("Arabic");
			$("#english2").text("English");
			// end nav bar

			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
			// end about content
			
			// start log in
			$('#contact-us').text('contact us');
			$('#add-auction').text('if you want to sell something in the auction please log in.');
			$("#name").attr("placeholder", "Your Name");
			$("#phone").attr("placeholder", "Your Email id");
			$("#email").attr("placeholder", "phone");
			$("#address").attr("placeholder", "Address");
			$("#message").attr("placeholder", "Leave a comment");
			$('#submit').text('Submit');
			$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
			// end log in

// 			// add the ids
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit ,#our-phone ,#our-email ,#our-address").removeClass("font1");
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit ,#our-phone ,#our-email ,#our-address").addClass("font2");
		}
	})

	$("#english2").click(function () {
		localStorage.setItem("Lang2", "english2");
		if (localStorage.getItem("Lang2") == "arabic2") {
// 			// start nav bar
		$("#home2").text('الصفحة الرئيسية');
		$('#about2').text('من نحن');
		$("#auction2").text('المزادات');
		$("#log-in2").text("تسجيل الدخول");
		$("#arabic2").text("العربية");
		$("#english2").text("الأنكليزية");
// 		// end nav bar

// 		//start about content
		$("#whoo").text('من نحن');
		$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
		يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
		ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
		 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
// 		// end about content

// 		// start log in
		$('#contact-us').text('تواصل معنا');
		$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
		$("#name").attr("placeholder", "اسمك");
		$("#phone").attr("placeholder", "ايميلك");
		$("#email").attr("placeholder", "رقم هاتفك");
		$("#address").attr("placeholder", "عنوانك");
		$("#message").attr("placeholder", "اترك تعليقا");
		$('#submit').text('ارسل');
		$('#our-phone').text('رقمنا');
		$('#our-email').text('ايميلنا');
		$('#our-address').text('عنواننا');
// 			// end log in

// 			// add the ids
			$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit ,#our-phone ,#our-email ,#our-address").addClass("font1");
		}

		else if (localStorage.getItem("Lang2") == "english2") {
// 			// start nav bar
			$("#home2").text('Home');
			$('#about2').text('about');
			$("#auction2").text('auction');
			$("#log-in2").text("log in");
			$("#arabic2").text("Arabic");
			$("#english2").text("English");
// 			// end nav bar

// 			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
// 			// end about content
			
// 			// start log in
			$('#contact-us').text('contact us');
			$('#add-auction').text('if you want to sell something in the auction please log in.');
			$("#name").attr("placeholder", "Your Name");
			$("#phone").attr("placeholder", "Your Email id");
			$("#email").attr("placeholder", "phone");
			$("#address").attr("placeholder", "Address");
			$("#message").attr("placeholder", "Leave a comment");
			$('#submit').text('Submit');
			$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
			// end log in

			// add the ids
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit ,#our-phone ,#our-email ,#our-address").removeClass("font1");
		}
	})


	if (localStorage.getItem("Lang2") == "arabic2") {
// 		// start nav bar
		$("#home2").text('الصفحة الرئيسية');
		$('#about2').text('من نحن');
		$("#auction2").text('المزادات');
		$("#log-in2").text("تسجيل الدخول");
		$("#arabic2").text("العربية");
		$("#english2").text("الأنكليزية");
// 		// end nav bar

// 		//start about content
		$("#whoo").text('من نحن');
		$('#who').text(`منصة الكترونية مرخصة من وزارة العدل في سوريا تأسست في أواخر عام ٢٠٢٠ لسدّ حاجة السوق بوجود مزاد افتراضي يحاكي المزادات التي تقام على أرض الواقع, وذلك بعد سلسلة الإجراءات التي حدت من التجمع و السفر .
		يضم مزادك نخبة من الخبراء المختصين في مجال تقييم المقتنيات العتيقة والنادرة وفي مجال إدارة عمليات البيع و الشراء ليكون الجسر الآمن بين مالكي المقتنيات الثمينة والتراثية و أصحاب الذوق الرفيع الباحثين عن التميز.
		ما يميز منصة مزادك وجود فريق قانوني متكامل يحرص على إتمام كافة الإجراءات من لحظة فتح المزاد و لغاية إتمام عملية نقل الملكية .
		 نحن في مزادك نضمن لكم السعر الافضل وأمان و سرعة الإجراءات.`);
// 		// end about content
		
// 		// start log in
		$('#contact-us').text('تواصل معنا');
		$('#add-auction').text('.اذا اردت بيع شيء في المزاد قم بتسجيل الدخول');
		$("#name").attr("placeholder", "اسمك");
		$("#phone").attr("placeholder", "ايميلك");
		$("#email").attr("placeholder", "رقم هاتفك");
		$("#address").attr("placeholder", "عنوانك");
		$("#message").attr("placeholder", "اترك تعليقا");
		$('#submit').text('ارسل');
		$('#our-phone').text('رقمنا');
		$('#our-email').text('ايميلنا');
		$('#our-address').text('عنواننا');
// 		// end log in

		// add the ids
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit").addClass("font1");
	}

	else if (localStorage.getItem("Lang2") == "english2") {
// 		// start nav bar
		$("#home2").text('Home');
		$('#about2').text('about');
		$("#auction2").text('auction');
		$("#log-in2").text("log in");
		$("#arabic2").text("Arabic");
		$("#english2").text("English");
// 		// end nav bar

// 			// start about content
			$("#whoo").text("Who We Are")
			$("#who").text(`An electronic platform licensed by the Ministry of Justice in Syria, which was established in late 2020 to meet the market's need for a virtual auction that simulates auctions that are held on the ground, after a series of procedures that limited gathering and travel.
			"Mzadak" includes a group of experts specialized in the field of evaluating antique and rare collectibles and in the management of buying and selling operations, to be a safe bridge between the owners of valuable and heritage collectibles and those with high taste who are looking for excellence.
			What distinguishes Mzadak platform is the presence of an integrated legal team that is keen to complete all procedures from the moment the auction is opened until the completion of the ownership transfer process.
			 We in "Mzadak" ensure you the best price, safety and speed of procedures
			`);
// 			// end about content
			
// 		// start log in
		$('#contact-us').text('contact us');
		$('#add-auction').text('if you want to sell something in the auction please log in.');
		$("#name").attr("placeholder", "Your Name");
		$("#phone").attr("placeholder", "Your Email id");
		$("#email").attr("placeholder", "phone");
		$("#address").attr("placeholder", "Address");
		$("#message").attr("placeholder", "Leave a comment");
		$('#submit').text('Submit');
		$('#our-phone').text('Phone');
			$('#our-email').text('Email');
			$('#our-address').text('Address');
		// end log in

		// add the ids
		$("#home2 ,#about2 ,#auction2 ,#log-in2 ,#arabic2 ,#english2 ,#contact-us ,#add-auction ,#name ,#phone ,#eamil ,#address ,#message ,#submit").removeClass("font1");
	}


})
