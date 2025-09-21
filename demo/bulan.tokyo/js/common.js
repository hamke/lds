/*--------フルページ【.fullPage】--------*/
$(function() {
	$('.fullPage').fullpage({
		/***** ナビゲーション *****/
		menu: '.slide_menu',/*メニューの場所の指定。初期値はfalse*/
		anchors:['top', 'consept', 'gallery', 'about', 'contact'],/*ページ内リンクの設定。初期値は[]*/
		navigation: true,/*垂直方向のナビゲーションの表示。初期値はfalse*/
		navigationPosition: 'right',/*垂直方向のナビゲーションの位置指定。初期値はnone*/
		navigationTooltips: ['TOP', 'CONCEPT', 'GALLERY', 'ABOUT', 'CONTACT'],/*垂直方向のナビゲーションのツールチップ表示。初期値は[]*/
		slidesNavigation: true,/*水平方向のナビゲーションの表示。初期値はfalse。*/
		slidesNavPosition: 'bottom',/*水平方向のナビゲーションの位置指定。初期値はbottom。*/

		/***** スクロール *****/
		css3: false,/* 	動作にcss3を使用するかどうか。初期値はfalse。*/
		scrollingSpeed: 1000,/*スクロール速度。初期値は700。*/
		autoScrolling: true,/*セクション毎の自動スクロール(スクロール後の画面位置調整)をさせるかどうか。初期値はtrue。*/
		scrollBar: false,/*スクロールバーを表示するかどうか。スクロールバーを表示しても、autoScrollingの機能は残る。初期値はfalse。*/
		fitToSection: true,/*scrollBarをtrueにした時などに、中途半端な位置で画面を止められるようになるが、その時にコンテンツを画面に合わせて自動で位置調整するかどうか。初期値はtrue。*/
		easing: 'easeInOutExpo',/*イージング。別途設定する場合はプラグインが必要になります。jQuery Easing Plugin初期値はeaseInOutCubic。*/
		easingcss3: 'ease',/*CSS3を使う際のイージング。初期値はease。*/
		loopBottom: false,/*最後のセクションでスクロールした時に先頭へ移動するかどうか。初期値はfalse。*/
		loopTop: false,/*最初のセクションでスクロールした時に最後へ移動するかどうか。初期値はfalse。*/
		loopHorizontal: false,/*水平方向のナビゲーションをループさせるかどうか。初期値はtrue。*/
		normalScrollElements: '.slide_menu',/*特定の要素上で自動スクロールを切りたい場合に設定。#scrollなど。初期値はnull。*/
		scrollOverflow: true,/* セクションが画面高さより大きいときに、スクロールを作成するかどうか。初期値はfalse。*/
		touchSensitivity: 5,/*ブラウザの縦横比を定義して、スワイプ量によって次のセクションへ移動するかどうかの判別？初期値は5。*/

		/***** アクセシビリティ *****/
		keyboardScrolling: true,/*キーボードに対応するかどうか。初期値はtrue。*/
		animateAnchor: true,/*ページアクセス時にアンカーがついていた時、移動をアニメーションにするかどうか。初期値はtrue。*/
		recordHistory: true,/*スクロールした時にブラウザに履歴を残すかどうか。autoScrolling: falseの時は自動的にfalseになる。初期値はtrue。*/

		/***** デザイン *****/
		controlArrows: true,/*スライダーの矢印を表示するかどうか。初期値はtrue。*/
		verticalCentered: true,/*上下中央揃えにするかどうか。初期値はtrue。*/
		resize : false,/*ウインドウサイズ変更時に、テキストサイズを変更するかどうか。初期値はtrue。*/
		/*sectionsColor : ['#ff8080', '#ffbf80', '#fff480', '#eaff80', '#aaff80'],/*パネルの背景色。初期値はnone。*/
		paddingTop: 0,/*上方向のパディング設定。初期値は0。*/
		paddingBottom: 0,/*下方向のパディング設定。初期値は0。*/
		fixedElements: null,/*不明。初期値はnull。*/
		responsive: 0,/*特定の横幅以下で通常のスクロール(autoScrolling: false)にする。初期値は0。*/

		/***** カスタムセレクタ *****/
		sectionSelector: '.section',/**/
		slideSelector: '.slide',/**/
		
		/***** コールバック *****/
		onLeave: function(){ /*スクロール開始時*/
			$('.icon-bg.bg1').removeClass("active");
			$('.icon-bg.bg2').removeClass("active");
			$('.anmation_container').removeClass("active");
		},
		afterLoad: function(){ /*スクロール完了時*/
			$('.icon-bg.bg2').addClass("active");
		}
		
		
	});

});


/*--------タブ切り替え【.tab】--------*/
$(function(){
	
	/*** CONCEPT ***/
    $('.tab_container01 .tab_menu ul li').on('click touchend', function() {
		
		$('.tab_container01 .tab_menu ul li').removeClass("active");
		$(this).addClass('active');
		
        var index = $('.tab_container01 .tab_menu ul li').index(this);
		$('.tab_container01 .tab_content .tab').removeClass("active");
        $('.tab_container01 .tab_content .tab').eq(index).addClass('active');
    });
	
	/*** ABOUT ***/
	$('.tab_container02 .tab_menu ul li').on('click touchend', function() {
		
		$('.tab_container02 .tab_menu ul li').removeClass("active");
		$(this).addClass('active');
		
        var index = $('.tab_container02 .tab_menu ul li').index(this);
		$('.tab_container02 .tab_content .tab').removeClass("active");
        $('.tab_container02 .tab_content .tab').eq(index).addClass('active');
    });
	
});

/*--------ナビアイコン（ハンバーガーメニュー）【.n_hamburger】--------*/
$(function(){	
	$('.nav_icon a').on('click touchend', function() {
		$('.n_hamburger').toggleClass('active');
		$('.n_hamburger').removeClass("hover");
		$('.icon-bg').toggleClass('active');
		return false;
	});
	
	$('.nav_icon a').on({'mouseenter touchstart': function() {// マウスオーバー時の処理	
		if($('.n_hamburger').hasClass("active")){}else{ $('.n_hamburger').addClass("hover");return false; }
	  },
	  'mouseleave touchend': function() {// マウスアウト時の処理
	  	$('.n_hamburger').removeClass("hover");
		return false;
	  }
	});
});

/*--------ホバーアニメ【.border_anm01】--------*/
$(function(){	
	$('.border_anm01 a').on({'mouseenter touchstart': function() {// マウスオーバー時の処理	
		$('.border_anm01').addClass("hover");
		return false;
	  },
	  'mouseleave touchend': function() {// マウスアウト時の処理
	  	$('.border_anm01').removeClass("hover");
		return false;
	  }
	});
});

/*--------スライドメニュー【.slide_menu】--------*/
$(function(){	
	$('.slide_btn a').on('click touchend', function() {
		$('.slide_menu').toggleClass('active');
		return false;
	});
	
	$('.slide_menu a').on('click touchend', function() {
		$('.slide_menu').removeClass('active');
		$('.n_hamburger').removeClass('active');
	});
});

/*--------インビュー【inView】--------*/
$(function() {
	$('.top.anmation_container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {//要素が見えたとき		
			if (visiblePartX == 'both' && visiblePartY == 'both'){//要素の上下両方が表示域に入ってるとき
				
				$(".icon-bg.bg1").css("display","inline");
				$(".icon-bg.bg2").css("display","none");			
				$(".top.anmation_container").addClass("active");
				
				$(".icon-bg.bg1").stop(true, false).animate({"opacity":1},1500, function () {
					// アニメーションが完了した後に実行される
					$(".icon-bg.bg1").addClass("active");
					
					$("#fp-nav").stop(true, false).animate({"opacity":1},{duration:1500}, function () {
						
					});
					$(".nav_icon").stop(true, false).animate({"opacity":1},{duration:1500}, function () {
						
					});
				});
				
            }else{
				$(this).removeClass("active");
				$(".icon-bg.bg1").removeClass("active");
			}
		}
    });
	
	$('.concept.anmation_container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {//要素が見えたとき		
			if (visiblePartY == 'both'){//要素の上下両方が表示域に入ってるとき
				$(".icon-bg.bg2").css("display","inline");
				$(".icon-bg.bg1").css("display","none");
				$(this).addClass("active");
				
            }else{
				$(this).removeClass("active");
				
			}
		}
    });
	
	$('.gallery.anmation_container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {//要素が見えたとき		
			if (visiblePartY == 'both'){//要素の上下両方が表示域に入ってるとき
				$(".icon-bg.bg2").css("display","inline");
				$(".icon-bg.bg1").css("display","none");
				$(this).addClass("active");
				
            }else{
				$(this).removeClass("active");
				
			}
		}
    });

	
	
	$('.about.anmation_container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {//要素が見えたとき		
			if (visiblePartY == 'both'){//要素の上下両方が表示域に入ってるとき
				$(".icon-bg.bg2").css("display","inline");
				$(".icon-bg.bg1").css("display","none");
				$(this).addClass("active");
				
            }else{
				$(this).removeClass("active");
				
			}
		}
    });
	$('.contact.anmation_container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {//要素が見えたとき		
			if (visiblePartY == 'both'){//要素の上下両方が表示域に入ってるとき
				$(".icon-bg.bg2").css("display","inline");
				$(".icon-bg.bg1").css("display","none");
				$(this).addClass("active");
				
            }else{
				$(this).removeClass("active");
				
			}
		}
    });
});



$(window).resize(function() {
	
	//現在の情報を取得
	windowW = $(window).width();
	windowH = $(window).height();
	$(".title").css("width",windowW);$(".title").css("height",windowH);
	
});


/*--------ページ読み込み時の設定--------*/
$(window).load(function () {
	
	/*--------ウィンドウリサイズの監視--------*/
	var windowW = $(window).width();
	var windowH = $(window).height();
	$(".title").css("width",windowW);$(".title").css("height",windowH);
	
	$(".icon-bg.bg1").css("opacity",0);
	$(".icon-bg.bg1").css("display","none");
	$(".icon-bg.bg2").css("display","none");
	$("#fp-nav").css("opacity",0);
	$(".nav_icon").css("opacity",0);
	

	
});

