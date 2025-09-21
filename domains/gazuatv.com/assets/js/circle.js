	 function App() {
        var _this = this;

        this.Cloud = ko.observable();
        this.Valutes = ko.observableArray();


        this.Valutes.push({
            name: "USD",
            price: currentPrices[0],
        });

        this.Valutes.push({
            name: "BTC",
            price: currentPrices[1],
        });

        this.Valutes.push({
            name: "LTC",
            price: currentPrices[2],
        });

        this.Valutes.push({
            name: "DOGE",
            price: currentPrices[3],
        });

        this.Cloud({
            name: "GH",
            price: currentPrices[4],


        });


        this.ListLevel = ko.observableArray([

            {
                name: 0,
                from: 0E-10,
                to: 149.0000000000,
                width: 12
            },

            {
                name: 1,
                from: 150.0000000000,
                to: 399.0000000000,
                width: 18
            },

            {
                name: 2,
                from: 400.0000000000,
                to: 1199.0000000000,
                width: 25
            },

            {
                name: 3,
                from: 1200.0000000000,
                to: 2499.0000000000,
                width: 34
            },

            {
                name: 4,
                from: 2500.0000000000,
                to: 4999.0000000000,
                width: 43
            },

            {
                name: 5,
                from: 5000.0000000000,
                to: 9999.0000000000,
                width: 53
            },

            {
                name: 6,
                from: 10000.0000000000,
                to: 19999.0000000000,
                width: 62
            },

            {
                name: 7,
                from: 20000.0000000000,
                to: 29999.0000000000,
                width: 72
            },

            {
                name: 8,
                from: 30000.0000000000,
                to: 49999.0000000000,

                width: 82
            },

            {
                name: 9,
                from: 50000.0000000000,
                to: 10000000.0000000000,
                width: 100
            },

            {
                name: 10,
                from: 150000.0000000000,
                to: 10000000.0000000000,
                width: 100
            }

        ]);

        this.countMoney = ko.observable(0);

        this.index = 0;

        this.activaValute = ko.observable(this.Valutes()[this.index]);

        // calculate count GH
        this.countGH = ko.computed(function () {
            return parseFloat(_this.countMoney() * _this.activaValute().price / _this.Cloud().price).toFixed(2)
        }, this);

        this.countDay = ko.observable(0);


        this.changeM = function () {
            var level = 0;

            $.each(_this.ListLevel(), function (i, e) {

                if (e.from <= _this.countGH() && e.to >= _this.countGH()) {


                    $.each($('.table-levels .item-lvl'), function (ii, ee) {

                        var doo = $(ee).data("amount");


                        if (doo == e.to) {


                            var b = $('#page-calculation .line-lvl .current-lvl-line');
                            if (b.length > 0) {

                                var t = new TimelineLite();
                                t.to(b, 0.5, {width: e.width +'%'})

                            } else {
                                $("#page-calculation .line-lvl ").append("<div class='current-lvl-line'></div>");
                                $("#page-calculation .line-lvl .current-lvl-line").css({
                                    width: '1%'
                                });
                            }

                            _this.countDay(parseFloat($(ee).find("div.t3").text()));
                            level = e.name;
                        }
                    })



                }
            })

        }
        this.countMoney.subscribe(function (e) {
            _this.changeM()
        }, this);

        this.setcountMoney = function (argument) {


        }

        this.day = ko.computed(function () {
            return parseFloat(_this.countMoney() * parseFloat(_this.countDay()) / 100).toFixed(6)
        }, this)

        this.day14 = ko.computed(function () {
            return parseFloat(_this.countMoney() * parseFloat(_this.countDay()) * 10 / 100).toFixed(6)
        }, this)
        this.day30 = ko.computed(function () {
            return parseFloat(_this.countMoney() * parseFloat(_this.countDay()) * 30 / 100).toFixed(6)
        }, this)
        this.day180 = ko.computed(function () {
            return parseFloat(_this.countMoney() * parseFloat(_this.countDay()) * 100 / 100).toFixed(6)
        }, this)
        this.day360 = ko.computed(function () {
            return parseFloat(_this.countMoney() * parseFloat(_this.countDay()) * 365 / 100).toFixed(6)
        }, this)
        this.getUs = function () {
            return parseFloat(_this.activaValute().price / 0.01).toFixed(2)
        }
        var t4 = new TimelineLite();

        this.selectPage = function(indx) {

            _this.index = indx;
            _this.activaValute(_this.Valutes()[_this.index]);
            _this.changeM();
            return false;
        }


        this.activaValute.subscribe(function (e) {

        }, this)


    }

		var app = new App();
		ko.applyBindings(app,$("#main .container")[0]);

			
			


			var tl = new TimelineLite();
			var tl2 = new TimelineLite();
			var tl3 = new TimelineLite();
			var tl4 = new TimelineLite();

		function animationMainMenu() {
				tl.to($('#header'),0.8,{y:0,opacity:1});
                tl.from($('#header .auth .header-text-site'),0.8,{x:-100,opacity:0});
                tl.from($('#header .auth .header-block-wrap'),0.8,{x:100,opacity:0},'-=0.4');

                tl.to($('#right-column'), 0.5, {opacity: 1},"-=0.5");

				tl.from($('.main-menu li').eq(0), 0.8, {x: 250, opacity: 0})
					.from($('.main-menu li').eq(1), 0.8, {x: 220, opacity: 0},"-=0.5")
					.from($('.main-menu li').eq(2), 0.8, {x: 240, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(3), 0.8, {x: 260, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(4), 0.8, {x: 280, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(5), 0.8, {x: 300, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(6), 0.8, {x: 300, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(7), 0.8, {x: 300, opacity: 0},"-=0.6")
					.from($('.main-menu li').eq(8), 0.8, {x: 300, opacity: 0},"-=0.6");


			}

			function animationMainPage() {

				tl.to($('.main-page-header-text '),1, {y:0,opacity:1},"-=0.5");

                tl.to($('.block-currency'), 1, {y: 0, opacity: 1},"-=0.5");
                tl.to($('.block-currency').eq(0), 1, {left:150,top:-75})
					.to($('.block-currency').eq(1), 1, {left:362,top:45},"-=0.5")
					.to($('.block-currency').eq(2), 1, {right:361,top:-75},"-=1")
					.to($('.block-currency').eq(3), 1, {right:152,top:45},"-=1.5");

				tl.to($('.main-page-advantages'),0.5,{opacity:1})
                	.from($('.main-page-advantages li:nth-child(1) i'), 0.5, {x:-100, opacity: 0},"-=0.2")
                	.from($('.main-page-advantages li:nth-child(1) span'), 0.5, {x:100, opacity: 0},"-=0.2")
                	.from($('.main-page-advantages li:nth-child(2) i'), 0.5, {x:-100, opacity: 0},"-=0.1")
                	.from($('.main-page-advantages li:nth-child(2) span'), 0.5, {x:100, opacity: 0},"-=0.1")
                	.from($('.main-page-advantages li:nth-child(3) i'), 0.5, {x:-100, opacity: 0},"-=0.1")
                	.from($('.main-page-advantages li:nth-child(3) span'), 0.5, {x:100, opacity: 0},"-=0.1")

			}



			function animateCirclesBg() {
                var tc1 = new TimelineLite();
                var tc2 = new TimelineLite();
                var tc3 = new TimelineLite();
                var tc4 = new TimelineLite();

                tc1.to($('#main-circle1'), 20, {
                    rotation: 360,
                    repeat: -1
                    , transformOrigin: 'center center', delay: 0.9, ease: Linear.easeNone
                });

                tc2.to($('#main-circle2'), 15, {
                    rotation: -360,
                    repeat: -1
                    , transformOrigin: 'center center', delay: 0.9, ease: Linear.easeNone
                });

                 tc3.to($('#main-circle3 img'), 12, {
                    rotation: 360,
                    repeat: -1
                    , transformOrigin: 'center center', delay: 0.9, ease: Linear.easeNone
                });

                tc4.to($('#main-circle-center img'), 30, {
                    rotation: -360,
                    repeat: -1
                    , transformOrigin: 'center center', delay: 0.9, ease: Linear.easeNone
                });
			}


            var anim0 = function() {
		       
				animationMainPage();
			}

			var anim1 = function() {
				tl4.from($('#page-calculation .table-calc,#page-calculation .form-calc,#page-calculation .form-result-calc'), 0.5, {opacity: 0,ease: Power3.easeInOut})
			}

			var anim4 = function() {
				tl4.from($('#page-stat .block-curses,#page-stat .last-dep'), 0.5, {opacity: 0,ease: Power3.easeInOut})

			}

			var anim5 = function() {
				var bz = 200;
				$('#page-news .news-item').each(function(indx,el){

					bz +=20;
					tl3.from($(this),0.8,{y: bz,opacity:0},"-=0.5")

				});
			}

			var anim2 = function() {

                tl2.to($('#page-partners .page-name'), 0.5, {y:0,opacity: 1,ease: Power3.easeInOut});
                tl2.to($('#page-partners .advantages>div'), 0.5, {opacity: 1,ease: Power3.easeInOut});
                tl2.from($('#page-partners .advantages div:nth-child(1) h1'), 0.6, {y:-200,opacity: 0,ease: Power3.easeInOut})
               		.from($('#page-partners .advantages div:nth-child(1) p'), 0.6, {y:200,opacity: 0,ease: Power3.easeInOut})
               		.from($('#page-partners .advantages div:nth-child(2) h1'), 0.6, {y:-200,opacity: 0,ease: Power3.easeInOut})
               		.from($('#page-partners .advantages div:nth-child(2) p'), 0.6, {y:200,opacity: 0,ease: Power3.easeInOut})
               		.from($('#page-partners .advantages div:nth-child(3) h1'), 0.6, {y:-200,opacity: 0,ease: Power3.easeInOut})
               		.from($('#page-partners .advantages div:nth-child(3) p'), 0.6, {y:200,opacity: 0,ease: Power3.easeInOut});

			}

			var anim3 = function() {
				var bz = 200;
				$('#page-faq .question').each(function(indx,el){

					bz +=20;
					tl3.from($(this),0.8,{y: bz,opacity:0},"-=0.5")

				});

			}


$(document).ready(function(){

			setTimeout(function () {app.changeM()}, 100);


			var cur_page = 0;
			var curFunc = 'anim';
			
	


    animateCirclesBg();
    animationMainMenu();


			$('.main-menu li a').click(function(e){

				if ($('meta[name="authorised"]').length==0) {
						e.preventDefault();
					var that = $(this);
					var cur = Number(that.attr('data-page'));
					cur_page = cur;
			
					$('.main-menu li').removeClass('active');
					that.parent().addClass('active');
					var cont = $('#templ'+cur).html();
					$("#main .container").html(cont);
					$('body').attr('id',that.attr('data-id'));

					if (cur==1) {

						ko.cleanNode($("#main .container")[0]);
						app = new App();
						ko.applyBindings(app,$("#main .container")[0]);
						setTimeout(function () {
							app.changeM()
						}, 100);

					}

			

					window[curFunc+cur_page]();
				
				}
				

			});
			
			window[curFunc+cur_page]();


		});


$(document).ready(function(){

    $(document).on('click','#page-faq .question h4',function(){

        $(this).find('i').stop().toggleClass('fa-angle-down fa-angle-up');
        $(this).parent().find('.answer').stop().slideToggle();
    });

    $(document).on('click','#mobile-menu',function(){
		$('#right-column').toggleClass('hidden-menu');
        $('#right-column .menu').fadeToggle();
    });

});




$(function(){


$('.selectpicker').selectpicker({size: 4,style: 'btn-primary'});

$('.header-site-language ul.dropdown-menu a').click(function(e){
		e.preventDefault();

		if ($(this).attr('name')!=$('form#lang-site input[name="lang"]').val())
		{
			$('form#lang-site input[name="lang"]').val($(this).attr('name'));
			$('form#lang-site').submit();
		}


	});
});