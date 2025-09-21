jQuery.extend({
	jFnModalPopupInit	: function(_id) {
		var popupWindow	= jQuery('#mlayer_'+_id);
		
		// Show Hide
		jQuery('#mpopup_'+_id).click(function() {
			popupWindow.addClass('open');
		});
		jQuery('#mdiv_'+_id+' .close').click(function() {
			popupWindow.removeClass('open');
		});
		
		// ESC Event
		jQuery(document).keydown(function(event) {
			if(event.keyCode != 27)				return true;

			if(popupWindow.hasClass('open'))	popupWindow.removeClass('open');

			return false;
		});
		
		// Hide Window
		popupWindow.find('>.bg').mousedown(function(event) {
			popupWindow.removeClass('open');
			return false;
		});
	},
	jFnModalPopupClassInit	: function(_id, _class) {
		var popupWindow	= jQuery('#mlayer_'+_id);
		
		jQuery('.'+_class).click(function() {
			popupWindow.addClass('open');
		});
		
		jQuery('#mdiv_'+_id+' .close').click(function() {
			popupWindow.removeClass('open');
		});
		
		// ESC Event
		jQuery(document).keydown(function(event) {
			if(event.keyCode != 27)				return true;
			
			if(popupWindow.hasClass('open'))	popupWindow.removeClass('open');
			
			return false;
		});
		
		// Hide Window
		popupWindow.find('>.bg').mousedown(function(event) {
			popupWindow.removeClass('open');
			return false;
		});
	},
	jFnModalPopupOpen	: function(_id) {
		
		var popupWindow	= jQuery('#mlayer_'+_id);
		popupWindow.addClass('open');
		
		jQuery('#mdiv_'+_id+' .close').click(function() {
			popupWindow.removeClass('open');
		});
		
		// ESC Event
		jQuery(document).keydown(function(event) {
			if(event.keyCode != 27)				return true;
			
			if(popupWindow.hasClass('open'))	popupWindow.removeClass('open');
			
			return false;
		});
		
		// Hide Window
		popupWindow.find('>.bg').mousedown(function(event) {
			popupWindow.removeClass('open');
			return false;
		});
	},
	defaultMethods		: function() {
		return eval("this."+arguments[0]+".apply(this, [arguments[1]])");
	},
	defaultAjaxSend		: function(_options) {
		jQuery.ajax({
			url			: _options.url,
			data		: _options.data,
			type        : 'POST',
			
			dataType	: 'json',
			contentType	: 'application/json; charset=euc-kr',
			cache		: false,
			async		: false,
			
			success		: function() {	_options.success.apply(null, arguments);	},
			error		: function() {	_options.error.apply(null, arguments);		}
		});
	}
});



jQuery(document).ready(function() {
	jQuery('#btnOpenSide, #btnCloseSide').click(function() {
		if(jQuery("#wrap").hasClass("side")) {
			jQuery("#wrap").removeClass("side");
			jQuery("#wrap > #body_edge").animate({
				left:"0px"
			});
		}
		else {
			jQuery("#wrap").addClass("side");
			jQuery("#wrap > #body_edge").animate({
				left:"-200px"
			});
		}

		jQuery.jFnWrapClassCtrl();
	});

	jQuery.jFnWrapClassCtrl();
	jQuery(window).resize(function() {
		jQuery.jFnWrapClassCtrl();
	});
});

jQuery.extend({
	jFnWrapClassCtrl	: function(_clientWidth) {
		var _clientWidth	= jQuery(window).width();
		var screenHeight = screen.availHeight;
		if(_clientWidth <= 768) {
			if(!jQuery("#wrap").hasClass("pad"))	jQuery("#wrap").addClass("pad");
			if(!jQuery("#wrap").hasClass("smart"))	jQuery("#wrap").addClass("smart");
		}
		else if(768 < _clientWidth && _clientWidth <= 1280) {
			if(!jQuery("#wrap").hasClass("pad"))	jQuery("#wrap").addClass("pad");
			if(jQuery("#wrap").hasClass("smart"))	jQuery("#wrap").removeClass("smart");
		}
		else {
			if(jQuery("#wrap").hasClass("pad"))		jQuery("#wrap").removeClass("pad");
			if(jQuery("#wrap").hasClass("smart"))	jQuery("#wrap").removeClass("smart");
		}

		if(768 < _clientWidth && _clientWidth <= 1400 && screenHeight < 769){
			if(!jQuery("#wrap").hasClass("pad"))	jQuery("#wrap").addClass("pad");
			if(jQuery("#wrap").hasClass("smart"))	jQuery("#wrap").removeClass("smart");
		}
		/*
		console.log("_clientWidth	: " + _clientWidth);
		console.log("pad			: " + jQuery("#wrap").hasClass("pad"));
		console.log("smart			: " + jQuery("#wrap").hasClass("smart"));
		*/
	}
});

$(document).ready(function() {
	$(".event_page, .port_page").click(function(){
		alert("준비중입니다.");
	});
});


$(document).ready(function(){
     $('.projectlist').css('background','red');
});
