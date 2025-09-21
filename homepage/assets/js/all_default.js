
if( window.console == undefined ){ console = { log : function(){} }; }


var IE = false ;
if (window.navigator.appName.indexOf("Explorer") !=-1){
	IE = true;
}

//document.body.style.overflow='hidden';


var cate_00000000_code = new Array(); // 좌측 메뉴의 카테고리 목록
var board_list_code = new Array(); // 좌측 메뉴의 게시판 목록
var move_script_str  // 결제선택 페이지에서 배송료 종류

// 장바구니, 결제선택페이지, 주문서 확인에서 사용
var add_price_arr = new Array(); // 금액 추가 옵션을 위해 생성
var option_arr = new Array(); // 다중 일반 선택 옵션을 위해 생성
var option_img_arr = new Array(); // 다중 이미지 선택 옵션을 위해 생성
var option_user_arr = new Array(); // 직접 입력형 옵션을 위해 생성
var coupon_price_arr = new Array(); // 추가 할인 혜택을 선택시에 사용

// 최근 게시물 변수
var script_new_list = new Array();

function getFlash(src, width, height)
{
	if(!src || !width || !height)
	{
		return null;
	}
	var classid  = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
	var codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0";
	var wmode    = "transparent";
	var quality  = "high";
	var plugin   = "http://www.macromedia.com/go/getflashplayer";
	var type     = "application/x-shockwave-flash";
//	var allowScriptAccess     = "always";
	var html = "<object classid='" + classid + "' "
			 + "codebase='" + codebase + "' "
			 + "width='" + width + "' height='" + height + "'>"
			 + "<param name='wmode' value='" + wmode + "'>"
			 + "<param name='movie' value='" + src + "'>"
			 + "<param name='quality' value='" + quality + "'>"
//			 + "<param name='allowScriptAccess' value='" + quality + "'>"
			 + "<embed src='" + src + "' "
			 + "quality='" + quality + "' pluginspage='" + plugin + "' type='" + type + "' "
			 + "width='" + width + "' height='" + height + "'></embed></object>";
	getObject(html);
}

function flash(swf, width, height, bgcolor, id, flashvars, xml_path){
    var strFlashTag = new String();
    if(!id){
		var tmp_num = Math.random()*10000;
		tmp_num = Math.round(tmp_num);
		id = "flash_name"+tmp_num;
	}

    if (navigator.appName.indexOf("Microsoft") != -1)
    {
        strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
        strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
        strFlashTag += 'id="' + id + '" width="' + width + '" height="' + height + '" typ="swf">';
        strFlashTag += '<param name="movie" value="' + swf + '"/>';
        
        if(flashvars != null) {strFlashTag += '<param name="flashvars" value="' + flashvars + '"/>'};
        strFlashTag += '<param name="quality" value="high"/>';
		if(bgcolor != null) {strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>'};
        strFlashTag += '<param name="menu" value="false"/>';
        strFlashTag += '<param name="salign" value="LT"/>';
        // strFlashTag += '<param name="scale" value="noscale"/>';
        strFlashTag += '<param name="wmode" value="transparent"/>';
//        strFlashTag += '<param name="allowScriptAccess" value="always"/>';
		if(xml_path != null) {strFlashTag += '<param name="xml_path" value="'+xml_path+'"/>'};
        strFlashTag += '</object>';
    }
    else
    {
        strFlashTag += '<embed src="' + swf + '" ';
        strFlashTag += 'quality="high" ';
        if(bgcolor != null) {strFlashTag += 'bgcolor="' + bgcolor + '" '};
        strFlashTag += 'width="' + width + '" ';
        strFlashTag += 'height="' + height + '" ';
		if(xml_path != null) {strFlashTag += 'xml_path="' + xml_path + '" '};
        strFlashTag += 'menu="false" ';
        // strFlashTag += 'scale="noscale" ';
        strFlashTag += 'id="' + id + '" ';
        strFlashTag += 'salign="LT" ';
        strFlashTag += 'wmode="transparent" ';
//        strFlashTag += 'allowScriptAccess="always" ';
        if(flashvars != null) {strFlashTag += 'flashvars="' + flashvars + '" '};
        strFlashTag += 'type="application/x-shockwave-flash" ';
        strFlashTag += 'pluginspage="http://www.macromedia.com/go/getflashplayer" typ="swf">';
        strFlashTag += '</embed>';
    }

 document.write(strFlashTag);
}

function FlashObject(swf, width, height, bgcolor, id, flashvars,xml_path)
{
    var strFlashTag = new String();
    
    if (navigator.appName.indexOf("Microsoft") != -1)
    {
        strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
        strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
        strFlashTag += 'id="' + id + '" width="' + width + '" height="' + height + '">';
        strFlashTag += '<param name="movie" value="' + swf + '"/>';
        
        if(flashvars != null) {strFlashTag += '<param name="flashvars" value="' + flashvars + '"/>'};
        strFlashTag += '<param name="quality" value="high"/>';
        strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>';
        strFlashTag += '<param name="menu" value="false"/>';
        strFlashTag += '<param name="salign" value="LT"/>';
        // strFlashTag += '<param name="scale" value="noscale"/>';
        // strFlashTag += '<param name="wmode" value="transparent"/>';
//        strFlashTag += '<param name="allowScriptAccess" value="always"/>';
		if(xml_path != null) {strFlashTag += '<param name="xml_path" value="' + xml_path + '"/>'};
        strFlashTag += '</object>';
    }
    else
    {
        strFlashTag += '<embed src="' + swf + '" ';
        strFlashTag += 'quality="high" ';
        strFlashTag += 'bgcolor="' + bgcolor + '" ';
        strFlashTag += 'width="' + width + '" ';
        strFlashTag += 'height="' + height + '" ';
		if(xml_path != null) {strFlashTag += 'xml_path="' + xml_path + '" '};
        strFlashTag += 'menu="false" ';
        // strFlashTag += 'scale="noscale" ';
        strFlashTag += 'id="' + id + '" ';
        strFlashTag += 'salign="LT" ';
       //  strFlashTag += 'wmode="transparent" ';
//        strFlashTag += 'allowScriptAccess="always" ';
        if(flashvars != null) {strFlashTag += 'flashvars="' + flashvars + '" '};
        strFlashTag += 'type="application/x-shockwave-flash" ';
        strFlashTag += 'pluginspage="http://www.macromedia.com/go/getflashplayer">';
        strFlashTag += '</embed>';
    }

 document.write(strFlashTag);
}


function comma(str){	

	if(!str || str == '') return "0";
	
	var tmp_i=0;
	var i=0;
	var tt_p='';
	str = str+'';
	

	for(i=(str.length)-1,tmp_i=0;i>=0;i--,tmp_i++){
		if(tmp_i % 3 == 0 && tmp_i > 0){
			tt_p = str.charAt(i) + "," + tt_p;			
		}else{
			tt_p = str.charAt(i) + tt_p;
		}			
	}

	tt_p = tt_p.replace("-,","-");
	tt_p = tt_p.replace(",.",".");

	return tt_p;
}


function number_format(number, decimals, dec_point, thousands_sep) {
  //  discuss at: http://phpjs.org/functions/number_format/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: davook
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Michael White (http://getsprink.com)
  // bugfixed by: Benjamin Lupton
  // bugfixed by: Allan Jensen (http://www.winternet.no)
  // bugfixed by: Howard Yeend
  // bugfixed by: Diogo Resende
  // bugfixed by: Rival
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  //  revised by: Luke Smith (http://lucassmith.name)
  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
  //    input by: Jay Klehr
  //    input by: Amir Habibi (http://www.residence-mixte.com/)
  //    input by: Amirouche
  //   example 1: number_format(1234.56);
  //   returns 1: '1,235'
  //   example 2: number_format(1234.56, 2, ',', ' ');
  //   returns 2: '1 234,56'
  //   example 3: number_format(1234.5678, 2, '.', '');
  //   returns 3: '1234.57'
  //   example 4: number_format(67, 2, ',', '.');
  //   returns 4: '67,00'
  //   example 5: number_format(1000);
  //   returns 5: '1,000'
  //   example 6: number_format(67.311, 2);
  //   returns 6: '67.31'
  //   example 7: number_format(1000.55, 1);
  //   returns 7: '1,000.6'
  //   example 8: number_format(67000, 5, ',', '.');
  //   returns 8: '67.000,00000'
  //   example 9: number_format(0.9, 0);
  //   returns 9: '1'
  //  example 10: number_format('1.20', 2);
  //  returns 10: '1.20'
  //  example 11: number_format('1.20', 4);
  //  returns 11: '1.2000'
  //  example 12: number_format('1.2000', 3);
  //  returns 12: '1.200'
  //  example 13: number_format('1 000,50', 2, '.', ' ');
  //  returns 13: '100 050.00'
  //  example 14: number_format(1e-8, 8, '.', '');
  //  returns 14: '0.00000001'

  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}


function money_format(country,num){
	
	var ok_num ;

	num += "";
	num = num.replace(/,/gi,'');
	
	var symbol = '';

	if(country == 'USD'){
		symbol = '$';
	}else if(country == 'JPY'){
		symbol = 'Ұ';
	}else if(country == 'CNY'){
		symbol = '￥';
	}else if(country == 'HKD'){
		symbol = 'HK$';
	}else if(country == 'AED'){
		symbol = 'AED';
	}


	if(country == 'USD'
		|| country == 'CNY'
		){

		num *= 1;
		if(num < 0){
			ok_num = '-'+symbol+number_format(Math.abs(num),2);
		}else{
			ok_num = symbol+number_format(num,2);
		}

	}else{
		num *= 1;
		num = Math.floor(num);
		ok_num = symbol+number_format(num);
	}
	
	return ok_num;
}



function ok_frame_chk(){

	if(document.getElementById('tmp_id_win')){
		document.getElementById('tmp_id_win').style.display = 'block';
	}

	if(document.getElementById('ok_frame')){
		document.getElementById('ok_frame').style.height = '100px';
		document.getElementById('ok_frame').style.width = '600px';
	}
}

function goods_img_detail(goods_idx){
	if(!goods_idx) goods_idx = '';
	var w = 900;
	var h = 760;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	if(MOBILE_CONN_YN == true){
		x_popup('../shop_goods/goods_img_detail.htm?goods_idx='+goods_idx);
	}else{
		var add_data_win = window.open('../shop_goods/goods_img_detail.htm?goods_idx='+goods_idx,'add_data_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		add_data_win.focus();
	}
}

function goods_cart_reg(goods_idx){
	var sale_cnt = 1;
	var str = '';
	if(document.getElementsByName('goods_stock_arr['+goods_idx+']').length){
		sale_cnt = document.getElementsByName('goods_stock_arr['+goods_idx+']')[0].value;
		str = "&sale_cnt="+sale_cnt;
	}

	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="../shop_goods/goods_exec.php?mode=cart_add_one&goods_idx="+goods_idx+str;
}


function goods_direct_buy(goods_idx){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="../shop_goods/goods_exec.php?mode=direct_one&goods_idx="+goods_idx
}

function goods_direct_jjim(goods_idx){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="../shop_popup/wish_reg_exec.php?mode=main_one&goods_idx="+goods_idx
}


function num_chk(tar){	
	var str = tar.value;	

	if(!str) return true;

	for(i=0;i<str.length;i++){
		if ((tar.value.charAt(i) >= 0 && tar.value.charAt(i) <= 9) || tar.value.charAt(i) == '.' || tar.value.charAt(i) == '-'){
		}else{

			if(LAN == 'en'){
				var alert_str = "Please enter only numbers";
			}else if(LAN == 'cn'){
				var alert_str = "请输入数字";
			}else if(LAN == 'jp'){
				var alert_str = "数字のみを入力してください";
			}else{
				var alert_str = "숫자만 입력하세요.";
			}
			
			alert(alert_str);
			tar.focus();
			return false;
		}
	}
	return true;
}

function search_zip(){
	var window_left = (screen.width-640)/2;
	var window_top = (screen.height-480)/2;
	
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_popup/zipcode.htm');
	}else{
		var postcodefind = window.open('/shop_popup/zipcode.htm',"postcodefind",'resizable=yes,toolbar=no,width=430,height=500,scrollbars=yes,top=' + window_top + ',left=' + window_left + '');
		postcodefind.focus();	
	}
}

function memo_read(idx){
	if(!idx) idx = '';
	var w = 570;
	var h = 380;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;

	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/s_paper_read.htm?idx='+idx);
	}else{
		var memo_read = window.open('/shop_mypage/s_paper_read.htm?idx='+idx,'memo_read'+idx,'top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		memo_read.focus();
	}
}

function pwd_ch(){
	var w = 440;
	var h = 360;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;
	
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/pwd_ch_form.htm');
	}else{
		var pwd_ch_win = window.open('/shop_mypage/pwd_ch_form.htm','pwd_ch_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
		pwd_ch_win.focus();
	}
}

// 상품 검색
function top_goods_search_chk(){
	var form = document.top_goods_search_form;
	/*
	if(!form.search_keyword.value){
		alert('검색어를 입력해주세요.');
		form.search_keyword.focus();
		return;
	}
	*/
	form.method = 'get'
	form.target=''
	form.action = '/shop_goods/goods_search_list.htm';
	form.submit();
}

//이메일 무단 수집 거부
function no_email(){
	var w = 438;
	var h = 360;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	

	if(MOBILE_CONN_YN == true){
		x_popup('/shop_popup/no_email.htm');
	}else{
		var no_email_win = window.open('/shop_popup/no_email.htm','no_email_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
		no_email_win.focus();
	}
}

function loginbox_lan(type){
	if(type == 'id'){
		if(LAN == 'en'){
			var alert_str = "Please enter your ID";
		}else if(LAN == 'cn'){
			var alert_str = "请输入您的用户名";
		}else if(LAN == 'jp'){
			var alert_str = "IDを入力してください";
		}else{
			var alert_str = "아이디를 입력해주세요.";
		}

	}else if(type == 'pwd'){
		if(LAN == 'en'){
			var alert_str = "Please enter your Password";
		}else if(LAN == 'cn'){
			var alert_str = "请输入您的密码";
		}else if(LAN == 'jp'){
			var alert_str = "パスワードを入力してください";
		}else{
			var alert_str = "패스워드를 입력해주세요.";
		}
	
	}else if(type == 'site_id'){
		if(LAN == 'en'){
			var alert_str = "Please enter your Site ID";
		}else if(LAN == 'cn'){
			var alert_str = "请输入网站ID";
		}else if(LAN == 'jp'){
			var alert_str = "サイトIDを入力してください";
		}else{
			var alert_str = "사이트 아이디를 입력해주세요.";
		}
	
	}else if(type == 'bu_id'){
		if(LAN == 'en'){
			var alert_str = "Please enter the Administrator ID";
		}else if(LAN == 'cn'){
			var alert_str = "请输入管理员ID";
		}else if(LAN == 'jp'){
			var alert_str = "管理者IDを入力してください";
		}else{
			var alert_str = "관리자 아이디를 입력해주세요.";
		}
	}

	return alert_str;
}

// 좌측 로그인 박스
function loginbox(form){
	if(!form.id.value){
		var alert_str = loginbox_lan('id');
		alert(alert_str);
		form.id.focus();
		return false;
	}
	if(!form.pwd.value){
		var alert_str = loginbox_lan('pwd');
		alert(alert_str);
		form.pwd.focus();
		return false;
	}
	return true;
}

// SSL 보안 로그인 박스
function ssl_loginbox(form){
	if(!form.id.value){
		var alert_str = loginbox_lan('id');
		alert(alert_str);
		form.id.focus();
		return false;
	}
	if(!form.pwd.value){
		var alert_str = loginbox_lan('pwd');
		alert(alert_str);
		form.pwd.focus();
		return false;
	}
	
	var ssl_chk = 0;

	
	if(form.ssl_yn.type == 'checkbox'){
		if(form.ssl_yn.checked == true && form.ssl_yn.value == 1){
			ssl_chk = 1;
		}
	}else if(form.ssl_yn.type == 'hidden'){
		if(form.ssl_yn.value == 1){
			ssl_chk = 1;
		}

	}else if(form.ssl_yn[0].type == 'radio'){
		if(form.ssl_yn[0].checked == true && form.ssl_yn[0].value == 1){		
			ssl_chk = 1;
		}else if(form.ssl_yn[1].checked == true && form.ssl_yn[1].value == 1){
			ssl_chk = 1;
		}
	}

	var action_url;
	if(ssl_chk==1 && !MOBILE_CONN_YN){
		action_url = "https://"+ssl_host+"/ssl/mem_login_chk.php";
	}else{
		action_url = "/shop_login/login_ok.php";
	}

	form.action = action_url;
	form.this_domain.value = document.domain;
	form.target=create_iframe();

	return true;
}

// SSL 보안 사이트 로그인 박스
function ssl_shop_loginbox(form){
	if(!form.id.value){
		var alert_str = loginbox_lan('site_id');
		alert(alert_str);
		form.id.focus();
		return false;
	}
	if(!form.bu_id.value){
		var alert_str = loginbox_lan('bu_id');
		alert(alert_str);
		form.bu_id.focus();
		return false;
	}
	if(!form.pwd.value){
		var alert_str = loginbox_lan('pwd');
		alert(alert_str);
		form.pwd.focus();
		return false;
	}
	
	var ssl_chk = 0;

	
	if(form.ssl_yn.type == 'checkbox'){
		if(form.ssl_yn.checked == true && form.ssl_yn.value == 1){
			ssl_chk = 1;
		}
	}else if(form.ssl_yn.type == 'hidden'){
		if(form.ssl_yn.value == 1){
			ssl_chk = 1;
		}
	}else if(form.ssl_yn[0].type == 'radio'){
		if(form.ssl_yn[0].checked == true && form.ssl_yn[0].value == 1){		
			ssl_chk = 1;
		}else if(form.ssl_yn[1].checked == true && form.ssl_yn[1].value == 1){
			ssl_chk = 1;
		}
	}

	var action_url;
	if(ssl_chk==1 && !MOBILE_CONN_YN){
		action_url = "https://"+ssl_host+"/ssl/shop_login_chk.php";
	}else{
		action_url = "/admin/sub_login/login_ok.php";
	}

	form.action = action_url;
	form.this_domain.value = document.domain;
	form.target=create_iframe();

	return true;
}

//비밀번호 찾기
function pwd_search(){
	var w = 400;
	var h = 360;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_popup/pwd_search_form.htm');
	}else{
		var pwd_search_win = window.open('/shop_popup/pwd_search_form.htm','pwd_search_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
		pwd_search_win.focus();
	}
}

// 배경음악 설정
var dragapproved=false
function drag_dropie() {		
	if (dragapproved==true){		
		var mov = tempx+event.clientX-iex			
		if (mov > 0  && mov < 48) { 
			//alert(mov + "실행");
			document.all.showimage.style.pixelLeft=tempx+event.clientX-iex			
			var loudness =  mov - 50;
			if (loudness > 0 ) {
				top.bgm_frame.Player.Volume =  0 
			} else if (0 > loudness ) {
				top.bgm_frame.Player.Volume = loudness*55 
			}
			
		}
		return false
	}
}
function initializedragie() {
	iex=event.clientX
	iey=event.clientY
	tempx=showimage.style.pixelLeft
	tempy=showimage.style.pixelTop
	dragapproved=true 
	document.onmousemove=drag_dropie
	if (document.all) {
		document.onmouseup=new Function('dragapproved=false') 
	}
}

function bgm_time(){
	if(top.bgm_frame!=null){
		if (top.bgm_frame.load_ck!=null) {
			top.bgm_frame.load_ck.value="1";
			top.bgm_frame.load_ck2.value="0";
			top.bgm_frame.entryInfo();
		}
	}
}

function play() {
	if(top.bgm_frame.document.getElementById('Player_false').value == 1){
		if(top.bgm_frame.document.getElementById('Player2') != null){
			top.bgm_frame.document.getElementById('Player2').play();
			top.bgm_frame.load_ck.value="1";
			top.bgm_frame.load_ck2.value="0";
			if(top.frames[0].document.getElementById('song_nm')) top.frames[0].song_nm.innerHTML = "재생";
		}
		
	}else{
		top.bgm_frame.location.href="../shop_main/bgm_frame.htm?play_bt=1";
		if(top.frames[0].document.getElementById('song_nm')) top.frames[0].song_nm.innerHTML = "&nbsp;&nbsp;&nbsp;Buffering...";
		setTimeout("bgm_time()",1000);
	}
}

function stop() {
	if(top.bgm_frame.document.getElementById('Player_false').value == 1){
		if(top.bgm_frame.document.getElementById('Player2') != null){
			top.bgm_frame.document.getElementById('Player2').Stop();
			top.bgm_frame.load_ck.value="0";
			top.bgm_frame.load_ck2.value="0";
			if(top.frames[0].document.getElementById('song_nm')) top.frames[0].song_nm.innerHTML = "&nbsp;&nbsp;&nbsp;정지";
		}
	}else{
		if(top.bgm_frame.document.getElementById('Player') != null){
			top.bgm_frame.document.getElementById('Player').Stop();
			top.bgm_frame.load_ck.value="0";
			top.bgm_frame.load_ck2.value="0";
			if(top.frames[0].document.getElementById('song_nm')) top.frames[0].song_nm.innerHTML = "&nbsp;&nbsp;&nbsp;정지";
		}
	}
}

function bgm_list() {
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_popup/bgm_list.htm');
	}else{
		var bgm_list_win =  window.open('/shop_popup/bgm_list.htm','bgm_list_win','height=300,width=310,scrollbars=no,resizable=no');
		bgm_list_win.focus();
	}
}

function sms_call(w,h){
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;

	if(MOBILE_CONN_YN == true){
		x_popup('/shop_contents/sms_call_form.htm');
	}else{
		var sms_call_win = window.open('/shop_contents/sms_call_form.htm','sms_call_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		sms_call_win.focus();
	}
}

function popup_window(url,w,h,top,left,mobile_pop_mode){

	if(!w) w = 0;
	if(!h) h = 0;
	if(!top) top = 0;
	if(!left) left = 0;
	if(!mobile_pop_mode) mobile_pop_mode = 'x_pop';

	var window_left = ((screen.width-w)/2)-100;
	var window_top = ((screen.height-h)/2)-100;	

	if(left) window_left = left;
	if(top) window_top = top;

	if(window_left <=0 )window_left = 0;
	if(window_top <=0 )window_top = 0;
	
	var popup_name = url;
	popup_name = popup_name.replace(/\//gi,'');
	popup_name = popup_name.replace(/\?/gi,'');
	popup_name = popup_name.replace(/\&/gi,'');
	popup_name = popup_name.replace(/\=/gi,'');
	popup_name = popup_name.replace(/\:/gi,'');
	popup_name = popup_name.replace(/\./gi,'');
	popup_name = popup_name.replace(/\%/gi,'');
	popup_name = popup_name.replace(/-/gi,'');
	popup_name = popup_name.replace(/\#/gi,'');

	
	if(APP_CONN_YN == true){
		app_popup_window(url);

	}else if(MOBILE_CONN_YN == true){
		if(mobile_pop_mode == 'x_pop'){
			x_popup(url);
		}else if(mobile_pop_mode == 'win'){
			var popup_window_win = window.open(url,popup_name);
			popup_window_win.focus();
		}

	}else{
		if(w >0 && h > 0){	
			var popup_window_win = window.open(url,popup_name,'top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		}else{
			var popup_window_win = window.open(url,popup_name);
		}
		popup_window_win.focus();
	}
	
}

//모바일에서 x-popup 으로 열렸을 경우 팝업닫기가 다르다 2014-12-31 - 윤
function popup_window_close(){
	try{
		parent.x_pop_window.close();
	}catch(e){
		top.close();
	}
}

function img_view(url){	
	var img_view = window.open('/bbs_shop/inc/viewimage.htm?url='+url,'','top=0,left=0,width=100,height=100,scrollbars=yes,resizable=yes');
	img_view.focus();
}

function mgGetFileExt( szValue )
{
    var szExt = szValue.substr( szValue.length - 3, 3 ).toLowerCase();
	return szExt;
}

function Adminlogin_form_chk(){
form = document.Adminlogin_form;
	if(!form.id.value){
		var alert_str = loginbox_lan('site_id');
		alert(alert_str);
		form.id.focus();
		return false;
	}

	if(!form.bu_id.value){
		var alert_str = loginbox_lan('bu_id');
		alert(alert_str);
		form.bu_id.focus();
		return false;
	}

	if(!form.pwd.value){
		var alert_str = loginbox_lan('pwd');
		alert(alert_str);
		form.pwd.focus();
		return false;
	}
}



function getCookieVal(offset) { 
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
} 

// 쿠키 가겨오기
function GetCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) { //while open 
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	} //while close return null;
	return '';
} 

// 쿠키 저장하기
function SetCookie(name, value) { 
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (2 < argc) ? argv[2] : null;

	var path = (3 < argc) ? argv[3] : null;
	var domain = (4 < argc) ? argv[4] : null;
	var secure = (5 < argc) ? argv[5] : false;
	document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
} 


// 오늘 하루 안뜸 ----> 실행
function user_today_no(name,val){
	var ExpDate = new Date();
	//ExpDate.setTime(ExpDate.getTime() + 1000*60*60*24); // 24시간동안 팝업안뜨게...

	var tmp_today_date = Date.UTC(ExpDate.getYear(),ExpDate.getMonth(),ExpDate.getDate(),14,59,59); //UTC기준 +9시간이라 23시가 아니라 9를뺀 14시가 우리시간으로 23시다.
	ExpDate.setTime(tmp_today_date); // 그날 자정까지 팝업안뜨게...

	if(val==true){
		SetCookie(name, '1',ExpDate) ;
	}else{
		SetCookie(name, '0',ExpDate) ;
	}
}
// 레이어 닫기 함수
function user_layer_close(sel_name){
	eval(sel_name+".style.display='none';")
	
}

function dis_on(tar){
	try{
		tar.disabled = true;
		tar.style.backgroundColor='dddddd';
	}catch(e){
	}
}

function dis_off(tar){
	try{
		tar.disabled = false;
		tar.style.backgroundColor='ffffff';
	}catch(e){
	}	
}

// 구인 구직 마이페이지
function mypage_job2(reg_type){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/job2/mypage_chk.php?reg_type="+reg_type;
}

// 구인 구직 광고 신청
function biz_advertising(){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/job2/biz_chk.php";
}

// 채용공고 미리 보기 팝업
function job_biz_pop(idx,w,h){
	if(!idx){
		alert('채용공고 번호가 누락됬습니다.');
		return;
	}
	if(!w) w = 500;
	if(!h) h = 600;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	

	var job_biz_pop_win = window.open('/job2/biz_view_popup.htm?idx='+idx,'job_biz_pop_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
	job_biz_pop_win.focus();
}


function shuffle(array) { 
    var len = array.length; 
    for(var i=len ; i>0 ; i--) { 
        array[len-1] = array.splice(Math.floor(Math.random() * i),1)[0]; 
    } 
	return array;
} 



function admin_login_form_chk(form){
	if(!form.id.value){
		var alert_str = loginbox_lan('site_id');
		alert(alert_str);
		form.id.focus();
		return false;
	}

	if(!form.bu_id.value){
		var alert_str = loginbox_lan('bu_id');
		alert(alert_str);
		form.bu_id.focus();
		return false;
	}

	if(!form.pwd.value){
		var alert_str = loginbox_lan('pwd');
		alert(alert_str);
		form.pwd.focus();
		return false;
	}

	
	form.action='/admin/sub_login/login_ok.php';
	form.method='post';
	form.target=create_iframe();

	if(!document.all('back_login_form')){
		var str
		str = "<form name='back_login_form' action='' style='margin:0'>";
		str += "<input type='hidden' name='back_login' value=''>";
		str += "<input type='hidden' name='id' value=''>";
		str += "<input type='hidden' name='bu_id' value=''>";
		str += "<input type='hidden' name='pwd' value=''>";
		str += "<input type='hidden' name='referer' value=''>";
		str += "</form>";

		advertise_tmp.innerHTML = str;
	}

	return true;
}

function frame_resize(frame,chk,min_size){
	if(!min_size) min_size = 0;
	try{
		if(!chk)chk=0
		if(chk>0){
			var h = parent.document.frames(frame).document.body.scrollHeight;
			if(min_size > h) h = min_size;
			var obj = parent.document.getElementById(frame);
			obj.style.height = h+'px';
		}
		if(chk==0){
			frame_resize(frame,(chk+1),min_size);
		}else if(chk<5){
			setTimeout("frame_resize('"+frame+"',"+(chk+1)+","+min_size+")",400);
		}
	}catch(e){
	}
}


function auto_admin_login(shop_id){
	var w = 950;
	var h = 700;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var auto_admin_login_win = window.open('/admin/sub_login/auto_login.php?id='+shop_id,'auto_admin_login_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	auto_admin_login_win.focus();
}

function demo_admin_login(shop_id){
	var w = 950;
	var h = 700;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var demo_admin_login_win = window.open('/admin/sub_login/auto_login_form.htm?demo_id='+shop_id,'demo_admin_login_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	demo_admin_login_win.focus();
}

function smart_design_view(shop_id){
	var w = 1200;
	var h = 700;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var demo_admin_login_win = window.open('/admin/sub_login/auto_login_form.htm?smart_design_yn=1&smart_design_mode=pc&demo_id='+shop_id,'demo_admin_login_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	demo_admin_login_win.focus();
}

function m_smart_design_view(shop_id){
	var w = 1200;
	var h = 700;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var demo_admin_login_win = window.open('/admin/sub_login/auto_login_form.htm?smart_design_yn=1&smart_design_mode=m&demo_id='+shop_id,'demo_admin_login_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	demo_admin_login_win.focus();
}

function admin_login_pop(first_url){
	var w = (screen.width);
	var h = (screen.height);	
	var window_left = 0;
	var window_top = 0;	
	
	if(first_url){
		first_url = escape(first_url);
	}else{
		first_url = '';
	}

	var admin_login_pop_win = window.open('/admin/sub_login/login_form.htm?first_url='+first_url,'admin_login_pop_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,fullscreen=no,status=yes,menubar=no,location=no');
	admin_login_pop_win.focus();
}


function shop_link(shop_id,go_url){
	if(!go_url) go_url = '';
	if(go_url){

		//go_url = unescape(go_url);
		// 아래는 인터넷 주소일 경우 사용한다.

		go_url = escape(go_url);
		// 아래는 한글인경우 사용 한다.
		//go_url = encodeURIComponent(go_url);
		
	}

	window.open("/shop_admin/shop_link.php?shop_id="+shop_id+"&go_url="+go_url);
}


function shop_coupon_view(coupon_idx){
	if(!coupon_idx) coupon_idx = '';
	var w = 600;
	var h = 600;
	var window_left = 50;
	var window_top = 50;
	var coupon_view_win = window.open('/recom_site/coupon_view.htm?coupon_idx='+coupon_idx,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	coupon_view_win.focus();
}


function strpos(str, ch) {
   for (var i = 0; i < str.length; i++)
      if (str.substring(i, i+(ch.length)) == ch) return i;
   return -1;
}


function admin_seller_pop(){
	if(APP_CONN_YN){
		app_minishop_admin();
	}else{
		var w = 1100;
		var h = 800;	
		var window_left = 0;
		var window_top = 0;	
		var admin_seller_pop_win = window.open('/admin_om/','','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,fullscreen=no,status=yes,menubar=no,location=no');
		admin_seller_pop_win.focus();
	}
}

//2016-05-20 : 윤 : eeccy0601 - utongm 에서 앱으로 바로 열렸을때 정상적으로 작동 되지 않는 부분을 확인 시켜 줘야 할거 같다고 해도 임시로 만들어 놓음
function admin_seller_pop2(){
	var w = 1100;
	var h = 800;	
	var window_left = 0;
	var window_top = 0;	
	var admin_seller_pop_win = window.open('/admin_om/','','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,fullscreen=no,status=yes,menubar=no,location=no');
	admin_seller_pop_win.focus();
}

function mini_shop_go(seller_id,my_type){
	location.href="/openmarket/shop_main.htm?seller_mem_id="+seller_id+"&my_type="+my_type;
}

// ★★★ 라디오 + 셀렉트박스 자동 선택하게 하기
/*
function auto_chk(input_name,val){
	var obj = document.getElementsByName(input_name);
	if(!obj.length) return;	

	if(obj[0].type == 'radio' || obj[0].type == 'checkbox'){
		if(!obj.length) return;
		for(var i=0;i<obj.length;i++){
			if(obj[i].value == val){
				obj[i].checked = true;
				break;
			}
		}
	}else if(obj[0].type == 'select-one'){

		if(!obj[0].length) return;	
		for(var i=0;i<obj[0].length;i++){
			if(obj[0][i].value == val){
				obj[0][i].selected = true;
				break;
			}
		}
	}else if(obj[0].type == 'text'){
		obj[0].value = val;
	}
}
*/

function auto_chk(input_name,val,op_name){
	if(!op_name) op_name = '';

	var obj = document.getElementsByName(input_name);
	if(!obj) return;	

	if(obj[0].type == 'radio' || obj[0].type == 'checkbox'){
		if(!obj.length) return;
		for(var i=0;i<obj.length;i++){
			if(obj[i].value == val){
				obj[i].checked = true;
				break;
			}
		}
	}else if(obj[0].type == 'select-one'){
		if(!obj[0].length) return;	
		for(var i=0;i<obj[0].length;i++){
			if(op_name){
				if(obj[0][i].value == val && obj[0][i].text == op_name){
					obj[0][i].selected = true;
					break;
				}			
			}else{
				if(obj[0][i].value == val){
					obj[0][i].selected = true;
					break;
				}
			}
		}
	}else if(obj[0].type == 'text'){
		obj[0].value = val;
	}
}


// 선택된 값 알아내기
function radio_val(input_name){

	var obj = document.getElementsByName(input_name);

	if(!obj) return;

	
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked == true){
			return obj[i].value
		}
	}

	return false;
}


// 셀렉트 박스 자동 선택하게 하기
function auto_select(input_name,val){
	var obj = document.getElementsByName(input_name)[0];

	if(!obj) return;

	// <option>이 한개만 달랑 있는 경우
	if(!obj.length) return;
	
	for(var i=0;i<obj.length;i++){
		if(obj[i].value == val){
			obj[i].selected = true;
			break;
		}
	}
}

function auto_select2(obj,val){
	// <option>이 한개만 달랑 있는 경우
	if(!obj.length) return;
	
	for(var i=0;i<obj.length;i++){
		if(obj[i].value == val){
			obj[i].selected = true;
			break;
		}
	}
}

function shop_view(shop_id,magic_all_idx,sel_lan){

	if(!magic_all_idx) magic_all_idx = '';
	if(!sel_lan) sel_lan = '';

	if(!shop_id){
		if(LAN == 'en'){
			var alert_str = "Coming soon";
		}else if(LAN == 'cn'){
			var alert_str = "即将推出";
		}else if(LAN == 'jp'){
			var alert_str = "準備中です";
		}else{
			var alert_str = "준비중 입니다.";
		}
		alert(alert_str);

	}else{
		window.open("/shop_admin/shop_link.php?mobile_conn=off&shop_id="+shop_id+"&magic_all_idx="+magic_all_idx+"&sel_lan="+sel_lan);

	}
}

function m_shop_view(shop_id,magic_all_idx,sel_lan){
	
	if(!magic_all_idx) magic_all_idx = '';
	if(!sel_lan) sel_lan = '';
	

	if(!shop_id){
		if(LAN == 'en'){
			var alert_str = "Coming soon";
		}else if(LAN == 'cn'){
			var alert_str = "即将推出";
		}else if(LAN == 'jp'){
			var alert_str = "準備中です";
		}else{
			var alert_str = "준비중 입니다.";
		}
		alert(alert_str);

	}else{
		
		var w = 700;
		var h = 810;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var m_shop_view_url_win = window.open('/shop_popup/mobile_view.htm?mobile_conn=1&sample_yn=1&shop_id='+shop_id+"&magic_all_idx="+magic_all_idx+"&sel_lan="+sel_lan,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,location=no');
		m_shop_view_url_win.focus();
	}
}


// ----------------- 타임스템플를 날짜형으로 변환 --------------------------- 
function timeToHuman( time_num ){

	time_num += (3600*9); // 이게 있어야 맞아 떨어짐 ㅡㅡ;

	var theDate = new Date(time_num * 1000);
	dateString = theDate.toGMTString();
	
	arrDateStr = dateString.split(" ");
	var tmp_m = getMonthNum(arrDateStr[2])*1;
	var tmp_d = arrDateStr[1]*1;
	var tmp_y  = arrDateStr[3];
	var tmp_h = arrDateStr[4].substr(0,2)*1;
	var tmp_i = arrDateStr[4].substr(3,2)*1;
	var tmp_s = arrDateStr[4].substr(6,2)*1;

	if(tmp_m<10)tmp_m = '0'+tmp_m;
	if(tmp_d<10)tmp_d = '0'+tmp_d;
	if(tmp_h<10)tmp_h = '0'+tmp_h;
	if(tmp_i<10)tmp_i = '0'+tmp_i;
	if(tmp_s<10)tmp_s = '0'+tmp_s;

	return tmp_y+"-"+tmp_m+"-"+tmp_d+" "+tmp_h+":"+tmp_i+":"+tmp_s;
}

function getMonthNum(abbMonth){
	var arrMon = new Array("Jan","Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct","Nov","Dec");

	for(i=0; i<arrMon.length; i++){
		if(abbMonth == arrMon[i]){
			return i+1;
		}
	}
}




var httpReq_etc = null;
var httpReq_etc2 = null;

function getInstance_etc(){
	var httpReq_etc = null;

	try{
		httpReq_etc = new ActiveXObject("Msxml2.XMLHTTP");	
	} catch(Ex) {
		try{
			httpReq_etc = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (Ex2) {
			httpReq_etc = null;
		}
	}
	return httpReq_etc;	
}


var naver_map_key = '';
var naver_map_w = 300;
var naver_map_h = 300;
var naver_map_x = 0;
var naver_map_y = 0;

/*
function naver_map(addr,w,h){
	
	if(!w)w = 300;
	if(!h)h = 300;

	document.write("<div id='mapContainer' style='width:"+w+"px;height:"+h+"px'></div>");
	
	httpReq_etc = getInstance_etc();

	//addr = escape(addr);
	
	var url = "/sys_load/naver_map_xy_load.php?addr="+addr;
	naver_map_w = w;
	naver_map_h = h;

	httpReq_etc.onreadystatechange = naver_map_result;	
	httpReq_etc.open("GET", url, true);
	httpReq_etc.send();	
}
*/

function naver_map(addr,w,h){
	
	if(!w)w = 300;
	if(!h)h = 300;

	document.write("<iframe id='mapContainer' src='/sys_load/naver_map_xy_load.php?go_yn=1&map_w="+w+"&map_h="+h+"&addr="+addr+"' width='"+w+"' height='"+h+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' ></iframe>");
	
}


function naver_map_result(){
	

	if (httpReq_etc.readyState==4) {

		// alert(httpReq_etc.responseText);

		var xy_arr = httpReq_etc.responseText.split(" ");
		naver_map_key = xy_arr[0];
		naver_map_x = xy_arr[1];
		naver_map_y = xy_arr[2];
		
		if(!naver_map_key || !naver_map_x || !naver_map_x){
			if(LAN == 'en'){
				var alert_str = "Map search fails";
			}else if(LAN == 'cn'){
				var alert_str = "地图搜索失败";
			}else if(LAN == 'jp'){
				var alert_str = "地図検索に失敗し";
			}else{
				var alert_str = "네이버 지도 검색 실패.";
			}
			alert(alert_str);
			alert(httpReq_etc.responseText);
			return;
		}
		// alert(naver_map_x + ' // ' + naver_map_y);
		//return;

		naver_map_js.src = "http://openapi.map.naver.com/js/naverMap.naver?key="+naver_map_key;
		naver_map_output();
		
	}
}



function naver_map_output(chk_i){

	if(chk_i > 100) return; // 무한 반복 방지
	
	if(window.NMap) { 
		//alert('js load 성공');
	}else{
		//alert('js load 실패');
		setTimeout("naver_map_output()",100);
		return;
	}	

	var opts = {width:naver_map_w, height:naver_map_h, mapMode:0};
	var mapObj = new NMap(document.getElementById("mapContainer"),opts);

	mapObj.setCenterAndZoom(new NPoint(naver_map_x,naver_map_y),3);
	
	var zoom = new NZoomControl();
	
	zoom.setAlign('right');
	zoom.setValign('top');
	mapObj.addControl(zoom);
	
	
	var mapBtns = new NMapBtns();
	mapBtns.setAlign('right');
	mapBtns.setValign('top');
	mapObj.addControl(mapBtns);
	
	var infowin = new NInfoWindow();
	mapObj.addOverlay(infowin);
	
	//alert("x:"+naver_map_x+", y:"+naver_map_y);

	mapObj.addOverlay(createMarker(new NPoint(naver_map_x,naver_map_y), 1, ""));

	return;
}

function createMarker(pos, count, subject) {
	
	var iconUrl = '/img/pin1.png';
	var marker = new NMark(pos, new NIcon(iconUrl, new NSize(23, 30)));

	NEvent.addListener(marker, "mouseover", function(pos) {
			infowin.set(pos, '<div style="width:100px; height:50px; background-color:#ffffff; border:solid 1px #999999;">dddd</div>');
			infowin.showWindow();
			
	});

	NEvent.addListener(marker, "mouseout", function() {
			infowin.hideWindow();
	});

	return marker;
}


function checkSpace( str ){ // 공백이 있다면 1을 반환한다.
	return ''; // 익스10에서 에러나는 관계로 임시 처리
	
     if(str.search(/\s/) != -1){
     	return 1;
     }else {
         return "";
     }
}


function email_chk( str ){

	if(str == ""){
		if(LAN == 'en'){
			var alert_str = "Please enter your email address";
		}else if(LAN == 'cn'){
			var alert_str = "请输入您的E-mail地址";
		}else if(LAN == 'jp'){
			var alert_str = "メールアドレスを入力してください";
		}else{
			var alert_str = "이메일 주소를 입력하세요.";
		}
		alert(alert_str);
		return false;
	}
	var retVal = checkSpace( str );
	if( retVal != "") {
		if(LAN == 'en'){
			var alert_str = "Please enter your email address without spaces";
		}else if(LAN == 'cn'){
			var alert_str = "请没有空格输入电子邮件地址";
		}else if(LAN == 'jp'){
			var alert_str = "メールアドレスをスペースなし入れてください";
		}else{
			var alert_str = "이메일 주소를 공백 없이 넣으세요.";
		}
		alert(alert_str);
		return false;
	}

	var isEmail = /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
	if( !isEmail.test(str) ) {
		if(LAN == 'en'){
			var alert_str = "Form of e-mail is not correct";
		}else if(LAN == 'cn'){
			var alert_str = "电子邮件的形式是不正确的";
		}else if(LAN == 'jp'){
			var alert_str = "電子メールの形式が正しくありません";
		}else{
			var alert_str = "이메일 형식이 잘못 되었습니다.";
		}
		alert(alert_str);
		return false;
	}
	if( str.length > 60 ) {
		if(LAN == 'en'){
			var alert_str = "E-mail address is valid up to 60 characters";
		}else if(LAN == 'cn'){
			var alert_str = "电子邮件地址是有效的最多60个字符";
		}else if(LAN == 'jp'){
			var alert_str = "E-mailアドレスは、60文字まで有効です";
		}else{
			var alert_str = "이메일 주소는 60자까지 유효합니다.";
		}
		alert(alert_str);
		return false;
	}
	/*
	if( str.lastIndexOf("daum.net") >= 0 || str.lastIndexOf("hanmail.net") >= 0 ) {
	alert("다음 메일 계정은 사용하실 수 없습니다.");
	document.mem_reg_form.email.focus();  
	return 0;
	}
	*/

     return true;
}


function more_hms(chk_time,red_time){
	
	var end_time_h,end_time_m,end_time_s

	var ori_chk_time = chk_time;
	
	if(!red_time) red_time = 15;

	end_time_h = Math.floor(chk_time/3600)*1;

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;

	if(end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}

	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;
	// else if(end_time_h > 99 ) end_time_h =99;
	
	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	
	var more_time_str = end_time_h+":"+end_time_m+":"+end_time_s;
	
	if(ori_chk_time<=red_time){
		more_time_str = "<font color=red>"+more_time_str+"</font>";
	}
	return more_time_str;

}


function more_openbay(chk_time,red_time,red_color){
	
	var end_time_day,end_time_h,end_time_m,end_time_s
	var date_arr = new Array();
	
	chk_time = chk_time*1;
	var end_time_h,end_time_m,end_time_s
	var ori_chk_time = chk_time;

	red_time = red_time*1;
	if(!red_time) red_time = 15;

	end_time_h = Math.floor(chk_time/3600)*1;

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;

	if(end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}

	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;
	else if(end_time_h > 99 ) end_time_h =99;

	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	

	if(ori_chk_time<=red_time){
		date_arr['h'] = "<font color='"+red_color+"'>"+end_time_h+"</font>";
		date_arr['m'] = "<font color='"+red_color+"'>"+end_time_m+"</font>";
		date_arr['s'] = "<font color='"+red_color+"'>"+end_time_s+"</font>";
	}else{
		date_arr['h'] = end_time_h;
		date_arr['m'] = end_time_m;
		date_arr['s'] = end_time_s;
	}		
	return date_arr;
}


function more_openbay3(chk_time,red_time,red_color){
	
	var end_time_day,end_time_h,end_time_m,end_time_s
	var date_arr = new Array();
	
	chk_time = chk_time*1;
	var end_time_h,end_time_m,end_time_s
	var ori_chk_time = chk_time;

	red_time = red_time*1;
	if(!red_time) red_time = 15;

	end_time_h = Math.floor(chk_time/3600)*1;

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;

	if(end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}
	
	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;
	else if(end_time_h > 999 ) end_time_h =999;
	
	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	

	if(ori_chk_time<=red_time){
		date_arr['h'] = "<font color='"+red_color+"'>"+end_time_h+"</font>";
		date_arr['m'] = "<font color='"+red_color+"'>"+end_time_m+"</font>";
		date_arr['s'] = "<font color='"+red_color+"'>"+end_time_s+"</font>";
	}else{
		date_arr['h'] = end_time_h;
		date_arr['m'] = end_time_m;
		date_arr['s'] = end_time_s;
	}		
	return date_arr;
}


function more_seebay(chk_time,red_time,red_color){
	
	var end_time_day,end_time_d,end_time_h,end_time_m,end_time_s,end_time_h99
	var date_arr = new Array();
	
	chk_time = chk_time*1;

	var ori_chk_time = chk_time;

	red_time = red_time*1;
	if(!red_time) red_time = 15;

	end_time_d = Math.floor(chk_time/86400)*1;

	chk_time -= (end_time_d*86400);
	end_time_h = Math.floor(chk_time/3600)*1;

	// -- 99 시간제 ---
	end_time_h99 = end_time_h+(end_time_d*24);
	if(end_time_h99 > 99) end_time_h99 = 99;
	if(end_time_h99 < 10 ) end_time_h99 = '0'+end_time_h99;
	// ----------------

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;

	if(end_time_d < 0 || end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_d = 0;
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}


	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;	
	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	

	if(ori_chk_time<=red_time){
		date_arr['d'] = "<font color='"+red_color+"'>"+end_time_d+"</font>";
		date_arr['h'] = "<font color='"+red_color+"'>"+end_time_h+"</font>";
		date_arr['m'] = "<font color='"+red_color+"'>"+end_time_m+"</font>";
		date_arr['s'] = "<font color='"+red_color+"'>"+end_time_s+"</font>";
		date_arr['h99'] = "<font color='"+red_color+"'>"+end_time_h99+"</font>";

	}else{
		date_arr['d'] = end_time_d;
		date_arr['h'] = end_time_h;
		date_arr['m'] = end_time_m;
		date_arr['s'] = end_time_s;
		date_arr['h99'] = end_time_h99;
	}		
	return date_arr;
}



function more_dhms(chk_time,red_time){
	
	var ori_chk_time = chk_time;
	if(!red_time) red_time = 0;

	var end_time_day,end_time_h,end_time_m,end_time_s
	var date_arr = new Array();

	end_time_day = Math.floor(chk_time/86400)*1;

	chk_time -= (end_time_day*86400);
	end_time_h = Math.floor(chk_time/3600)*1;

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;


	if(end_time_day<0 || end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_day = 0;
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}

	if(end_time_day < 10 ) end_time_day = '0'+end_time_day;
	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;
	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	
	
	if(ori_chk_time<=red_time){
		date_arr['day'] = "<font color=red>"+end_time_day+"</font>";
		date_arr['h'] = "<font color=red>"+end_time_h+"</font>";
		date_arr['m'] = "<font color=red>"+end_time_m+"</font>";
		date_arr['s'] = "<font color=red>"+end_time_s+"</font>";

	}else{
		date_arr['day'] = end_time_day;
		date_arr['h'] = end_time_h;
		date_arr['m'] = end_time_m;
		date_arr['s'] = end_time_s;
	}		
	return date_arr;
}


function more_hms2(chk_time,red_time){
	
	var ori_chk_time = chk_time;
	if(!red_time) red_time = 0;

	var end_time_h,end_time_m,end_time_s
	var date_arr = new Array();

	end_time_h = Math.floor(chk_time/3600)*1;

	chk_time -= (end_time_h*3600);
	end_time_m = Math.floor(chk_time/60)*1;

	chk_time -= (end_time_m*60);
	end_time_s = chk_time*1;


	if(end_time_h < 0 || end_time_m < 0 || end_time_s < 0) {
		end_time_h = 0;
		end_time_m = 0;
		end_time_s = 0;
	}

	if(end_time_h < 10 ) end_time_h = '0'+end_time_h;
	if(end_time_m < 10 ) end_time_m = '0'+end_time_m;
	if(end_time_s < 10 ) end_time_s = '0'+end_time_s;
	
	
	if(ori_chk_time<=red_time){
		date_arr['h'] = "<font color=red>"+end_time_h+"</font>";
		date_arr['m'] = "<font color=red>"+end_time_m+"</font>";
		date_arr['s'] = "<font color=red>"+end_time_s+"</font>";

	}else{
		date_arr['h'] = end_time_h;
		date_arr['m'] = end_time_m;
		date_arr['s'] = end_time_s;
	}		
	return date_arr;
}



function web_resize_iframe(f_name){
	if (parent){
		setTimeout('parent.ok_resize_iframe(\''+f_name+'\',1)',3);
		setTimeout('parent.ok_resize_iframe(\''+f_name+'\',0)',300);
		setTimeout('parent.ok_resize_iframe(\''+f_name+'\',0)',1000);
		setTimeout('parent.ok_resize_iframe(\''+f_name+'\',0)',2000);
	}
}


function ok_resize_iframe(f_name,first_yn){
	/*
	var aaa = oBody.offsetTop; //상위모체와의 상대적인 y좌표값을 반환합니다.
	var bbb = oBody.offsetHeight; //객체의 스크립트가 적용되는 영역의 높이입니다.
	var ccc = oBody.clientTop; //객체의 스크립트가 표현되는 영역의 상대적인 y좌표입니다.
	var ddd = oBody.clientHeight; //객체의 스크립트가 표현되는 영역의 높이입니다.
	var eee = oBody.posTop; //top속성값을 수치화합니다.
	var fff = oBody.posHeight; //height값을 수치화합니다.
	var ggg = oBody.pixelTop; //Top속성값을 pixel단위로 수치화합니다.
	var hhh = oBody.pixelheight; //height값을 pixel단위로 수치화합니다.
	var iii = oBody.scrollHeight;

	alert(aaa + ' // ' + bbb + ' // ' + ccc + ' // ' + ddd + ' // ' + eee + ' // ' + fff + ' // ' + ggg + ' // ' + hhh + ' // ' + iii  );
	*/

	try{
		//css 에서 html height 가 100% 일 경우 사이즈가 계속 증가되어 auto 로 변경처리
		document.getElementById(f_name).contentDocument.body.style.height = 'auto';

		var oBody   = document.getElementById(f_name).contentDocument.body;
		var oIFrame = document.getElementById(f_name);

		//var frmHeight = oBody.offsetHeight*1; //css 에서 html height 가 100% 일 경우 리사이즈 안됨..
		var frmHeight = oBody.scrollHeight*1;

		//크롬, 사파리에서는 body 높이값이 누적되어 별도로 처리
		var browser_str = window.navigator.userAgent;
		if(browser_str.indexOf('Chrome') > 0 || browser_str.indexOf('Safari') > 0){
			//frmHeight = $('#'+f_name).contents().find('body').height();
			frmHeight = oBody.offsetHeight;
		}

		if(first_yn == 1){
			frmHeight = frmHeight+20;
			oIFrame.style.height = frmHeight+'px';
		}else{
			if(frmHeight - oIFrame.style.height > 20){
				oIFrame.style.height = frmHeight+'px';
			}
		}	
	}catch (e){		
		
		try{
			var oBody   = document.frames(f_name).document.body;
			var oIFrame = document.getElementById(f_name);
			
			var frmHeight = oBody.scrollHeight*1;

			if(first_yn == 1){
				frmHeight = frmHeight+20;
				oIFrame.style.height = frmHeight+'px';
			}else{
				if(frmHeight - oIFrame.style.height > 20){
					oIFrame.style.height = frmHeight+'px';
				}
			}	
		}catch (e){	

		}
	}	
}



// GET 변수 가져오기...
var GET_ARR = new Array();

function get_load(){
	var b_url=window.location;
	b_url_arr=String(b_url).split('?');

	if(b_url_arr.length > 1){

		b_url_arr=b_url_arr[1].split('&');
		for(var i=0;i<b_url_arr.length;i++){
			var get_str = b_url_arr[i];
			var get_arr=get_str.split('=');

		
			GET_ARR[get_arr[0]] = get_arr[1];

			//document.write(get_arr[0]+' '+get_arr[1]+'<br>');
		}
	}
}




// 깜박이게함 -------------------------------------------------------------------------- 
function doBlink() { 
	// alert("실행");
	var blink = document.getElementsByTagName("blink");
	for (var i=0; i < blink.length; i++){
		blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "";
	}
}

function startBlink() { 
	if(document.getElementsByTagName("blink").length){
		setInterval("doBlink()",500);
	}
}

window.onload=startBlink;



// -----------------------------------------------------------------------

function oneday_scrap_cyworld_pop(){
	var w = 450;
	var h = 410;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var cyopenscrap = window.open("/oneday/goods_view_scrap_cyworld.php","cyopenscrap",'top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	cyopenscrap.focus();
}

function oneday_scrap_twitter_pop(){
	window.open("/oneday/goods_view_scrap_twitter.php");
}

function oneday_scrap_me2day_pop(){
	window.open("/oneday/goods_view_scrap_me2day.php");
}

function oneday_scrap_facebook_pop(){
	window.open("/oneday/goods_view_scrap_facebook.php");
}


function oneday_goods_email_chu(w,h){
	if(!w) w = 440;
	if(!h) h = 416;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var goods_mail_win = window.open('/oneday/goods_mail_form.htm','goods_mail_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
	goods_mail_win.focus();
}

function oneday_goods_sms_chu(w,h){
	if(!w) w = 440;
	if(!h) h = 416;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var goods_sms_win = window.open('/oneday/goods_sms_form.htm','goods_sms_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
	goods_sms_win.focus();
}


function alrim_mem_form_chk(){
	var form = document.alrim_mem_form
	if(!form.email.value && !form.hp.value ){
		if(LAN == 'en'){
			var alert_str = "Please enter your e-mail or mobile phone number";
		}else if(LAN == 'cn'){
			var alert_str = "请输入您的电子邮件或手机号码";
		}else if(LAN == 'jp'){
			var alert_str = "メールまたは携帯電話番号を入力してください";
		}else{
			var alert_str = "이메일 또는 휴대전화를 입력해주세요.";
		}
		alert(alert_str);
		return;
	}

	if(LAN == 'en'){
		var alert_str = "Would you like to apply for subscription?";
	}else if(LAN == 'cn'){
		var alert_str = "你想申请订阅？";
	}else if(LAN == 'jp'){
		var alert_str = "購読しますか？";
	}else{
		var alert_str = "구독 신청 하시겠습니까?";
	}

	if(confirm(alert_str)){
		form.action="/oneday/alrim_mem_exec.php";
		form.method='post';
		form.target=create_iframe();
		form.submit();
	}
}

//페이스북 좋아요, 추천버튼 출력
function facebookLikeShare(like,share,layout,url){
	/*
	like : like, recommend -> 좋아요 , 추천
	share : true, false -> 공유하기 버튼 출력, 미출력
	layout : standard -> 버튼 우측에 0명이 좋아합니다. 출력
			 box_count -> 버튼 상단 0명 출력
			 bunnton_count -> 버튼 우측 0명 출력
			 button -> 버튼만 출력
	url : 링크 url
	*/

	if(!share) share = 'false';
	if(like == 'false' && share == 'false') like = 'true';
	if(!layout) layout = 'button';

	var output_str = '<div id="fb-root"></div>';
	output_str += '<div class="fb-like" data-href="'+url+'" data-layout="'+layout+'" data-action="'+like+'" data-show-faces="false" data-share="'+share+'"></div>';

	var js, fjs = document.getElementsByTagName('script')[0];
	if (document.getElementById('facebook-jssdk')) return;
	js = document.createElement('script');
	js.id = 'facebook-jssdk';
	js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.3";
	fjs.parentNode.insertBefore(js, fjs);

	return output_str;
}

function sendFaceBook(title,url) {
	if(!url) url = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;

	//var wp = window.open("http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(title), 'facebook', '');
	
	if(APP_CONN_YN){
		//var re_url="http://www.facebook.com/sharer.php?t=" + encodeURIComponent(title)+"&u=___url___";
		var re_url="https://www.facebook.com/sharer/sharer.php?u=___url___";
		var web_url = "/shop_popup/shorturl_location.php?re_url="+escape(re_url)+"&short_url="+escape(url);
		app_default_browser(web_url);

	}else{
		//var re_url="http://www.facebook.com/sharer.php?t=" + encodeURIComponent(title)+"&u=___url___";
		var re_url="https://www.facebook.com/sharer/sharer.php?u=___url___";
		var wp = window.open("/shop_popup/shorturl_location.php?re_url="+escape(re_url)+"&short_url="+escape(url), 'facebook', '');
		if ( wp ) {
			wp.focus();
		}
	}
}

//위 압축 url 사용시 보안확인창이 뜬다..
function sendFaceBook2(title,url) {
	if(!url) url = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;

	if(APP_CONN_YN){
		var web_url="https://www.facebook.com/sharer/sharer.php?u="+escape(url);
		app_default_browser(web_url);

	}else{
		var re_url="https://www.facebook.com/sharer/sharer.php?u="+escape(url);
		var wp = window.open(re_url, 'facebook', '');
		if(wp){
			wp.focus();
		}
	}
}

function sendTwitter(title,url) {
	if(!url) url = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;

	var re_url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(title)+"&url=___url___";
	if(APP_CONN_YN){		
		var web_url = "/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url);
		app_default_browser(web_url);
	}else{
		var wp = window.open("/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url), 'twitter', '');
		if(wp) wp.focus();
	}
	/*
	//구버전.. 모바일에서 정상작동안됨.. 트위터앱 설치해야 작동됨 2015-02-06 윤
	//var wp = window.open("http://twitter.com/home?status=" + encodeURIComponent(title) + " " + encodeURIComponent(url), 'twitter', '');
	var re_url="http://twitter.com/home?status=" + encodeURIComponent(title)+" ___url___";
	if(APP_CONN_YN){
		var web_url = "/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url);
		app_default_browser(web_url);
	}else{
		var wp = window.open("/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url), 'twitter', '');
		if ( wp ) {
			wp.focus();
		}
	}
	*/
}

function sendMe2Day(title,url,tag) {
	
	if(!url) url = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;
	if(!tag) tag = title;

	//var wp = window.open("http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title) + " " + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag), 'me2Day', '');

	if(APP_CONN_YN){
		var re_url="http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title)+" ___url___&new_post[tags]=" + encodeURIComponent(tag);
		var web_url = "/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url);
		app_default_browser(web_url);

	}else{
		var re_url="http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title)+" ___url___&new_post[tags]=" + encodeURIComponent(tag);
		var wp = window.open("/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url), 'me2Day', '');
		if ( wp ) {
			wp.focus();
		}
	}
}

function goCyWorld(code) {
	var href = "http://api.cyworld.com/openscrap/post/v1/?xu=/cyworldApi.php?code=" + code +"&sid=s0300011";
	var a = window.open(href, 'cyworld', 'width=450,height=410');
	if ( a ) {
		a.focus();
	}
}

function goYozmDaum(title,link,parameter) {	
	if(!link) link = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;

	var re_url="http://yozm.daum.net/api/popup/prePost?prefix=" + encodeURIComponent(title) + "&parameter=" + encodeURIComponent(parameter)+"&link=___url___";
	var wp = window.open("/shop_popup/shorturl_location.php?re_url="+escape(re_url)+"&short_url="+escape(link), 'yozmSend', '');

	if ( wp ) {
		wp.focus();
	}
}

function sendPinterest(title, url, img){
	if(!img) return;
	if(!url) url = document.location;
	if(!title) title = page_title;
	if(!title) title = document.domain;
	//단축URL 사용시 등록안됨..
	//var re_url="//kr.pinterest.com/pin/create/button/?url=___url___&media="+img+"&description="+title;
	//var wp = window.open("/shop_popup/shorturl_location.php?re_url="+encodeURIComponent(re_url)+"&short_url="+encodeURIComponent(url), 'pinterest', '');
	var img_url_chk = img.substr(0,8);

	if(img_url_chk == '/img_up/' || img_url_chk == '/thum_im'){
		img = 'http://'+document.domain+img;
	}
	
	if(APP_CONN_YN){
		var re_url="https://kr.pinterest.com/pin/create/button/?url="+escape(url)+"&media="+img+"&description="+encodeURIComponent(title);
		app_default_browser(re_url);

	}else{
		var re_url="https://kr.pinterest.com/pin/create/button/?url="+escape(url)+"&media="+img+"&description="+encodeURIComponent(title);
		var wp = window.open(re_url);

		if(wp) wp.focus();
	}
}

function sns_logout(){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/shop_login/logout_sns.php";
}
function sns_myhome(){
	window.open("/shop_etc/sns_myhome.php")
}

function time_stemp(){
	var time = Math.floor(new Date().getTime() / 1000);
	return time;
}

function web_href(web_mode,link){
	if(!link) link = document.location;

	link = escape(link);
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/shop_etc/mobile_change.php?web_mode="+web_mode+"&go_url="+link;	
}

//cpc광고 그룹디자인 함수/////////////////////////
function gp_cpc_go(cpc_cate,idx,code){
	location.href="/shop_cpc_ad/cpc_shop_list.htm?cpc_shop_category="+cpc_cate+"&idx="+idx+"&main_code="+code;
}

function gp_cpc_chk(idx,reg_state,code){
	if(reg_state != 1){
		alert("광고가 중단되었습니다. \\n\\n관리자에게 문의하세요.");
		return;
	}
	window.open("../shop_cpc_ad/page_move.htm?gp_shopmall_idx="+idx+"&main_code="+code+"&popup_chk=0","");
}

function gp_cpc_gd_chk(idx,reg_state,code){
	if(reg_state != 1){
		alert("<?=LTS('광고가 중단되었습니다. \\n\\n관리자에게 문의하세요.')?>");
		return;
	}

	window.open("../shop_cpc_ad/page_move.htm?gp_goods_idx="+idx+"&main_code="+code,"");
}
//cpc광고 그룹디자인 함수/////////////////////////


//쇼핑몰 간편상세보기 함수/////////////////////////
function goods_div_open(idx,top_size,dtd){
	goods_bg_view_chk();
	if(!top_size) top_size = 100;

	//dtd 가 1인경우 xhtml, 빈값일경우 html4 --->> xhtml에서는 document.body.scrollTop 이 안된다. 대신 document.documentElement.scrollTop 로 사용.
	if(dtd == 1){
		document.getElementById("goods_div_content").style.top = document.documentElement.scrollTop + top_size;
	}else{
		document.getElementById("goods_div_content").style.top = document.body.scrollTop + top_size;
	}

	goods_div_frame.location.href="../shop_goods/goods_view_div.htm?goods_idx="+idx;	
	document.getElementById("goods_view_div").style.display = "block";	
}

function goods_div_close(){	
	document.getElementById("goods_view_div").style.display = "none";
	goods_div_frame.location.href="../shop_goods/goods_view_div.htm?adout:blank";	
}
//쇼핑몰 간편상세보기 함수/////////////////////////

//경품이벤트 통계팝업보기 함수/////////////////////////
function goods_stats_view(idx,type){
	var w = 1024;
	var h = 600;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var stats_view_pop = window.open('auction_ad_goods_stats_view.htm?type='+type+'&idx='+idx,'stats_view_pop','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	stats_view_pop.focus();
}

function goods_view(idx){
	location.href = "../shop_auction_ad/goods_view.htm?idx="+idx;
}

function event_view(idx){
	location.href = "../shop_auction_ad/event_view.htm?idx="+idx;
}
//경품이벤트 통계팝업보기 함수/////////////////////////

function coupon_read(idx,send_yn){
	if(!idx) idx = '';
	var w = 570;
	var h = 380;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var coupon_read = window.open('../shop_mypage/auction_ad_coupon_read.htm?idx='+idx+'&mode=read&send_yn='+send_yn,'coupon_read','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	coupon_read.focus();
}


// <a href="javascript:sendTwitter('배도라지즙+양파즙')" >sendTwitter</a>
// <a href="javascript:sendMe2Day('배도라지즙+양파즙')">sendMe2Day</a>
// <a href="javascript:sendFaceBook('배도라지즙+양파즙')">sendFaceBook</a>
// <a href="javascript:goYozmDaum('/접속경로.htm')">goYozmDaum</a>

function editor_img_pop_no(){
	alert("현재 페이지가 쿼크모드(HTML 4.0)으로 설정되어 있는경우 이미지를 업로드 할 수 없습니다.\n\n[디자인관리 > 고급 디자인 관리 > 전체 화면 구성]에서 문서를 XHTML 또는 HTML5로 변경하시기 바랍니다.");
}

function editor_img_pop_no_han(){
	alert("한글도메인에서는 다중 업로드 기능이 지원되지 않습니다.\n\n문제를 해결하시려면 익스플로어10으로 업그래이드 하시기 바랍니다.");
}

function editor_youtube_pop_no(){
	alert("현재 페이지가 쿼크모드(HTML 4.0)으로 설정되어 있는경우 유튜브 동영상을 업로드 할 수 없습니다.\n\n[디자인관리 > 고급 디자인 관리 > 전체 화면 구성]에서 문서를 XHTML 또는 HTML5로 변경하시기 바랍니다.");
}

function editor_youtube_pop(var_name,file_path,img_water_type){
	
	if(document.getElementById(var_name+"_editor_mode")){
		if(document.getElementById(var_name+"_editor_mode").value == 'ckeditor' ){
			var oEditor = eval("CKEDITOR.instances."+var_name);
			if ( oEditor.mode != 'wysiwyg' ){
				oEditor.execCommand( 'source' );
			}
		}
	}

	if(!file_path)file_path = '';
	file_path = encodeURIComponent(file_path);
	if(!img_water_type)img_water_type = '';
	
	if(MOBILE_CONN_YN == true){
		x_popup('/API/youtube/youtube_step1.htm?var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path);	

	}else{
		var w = 450;
		var h = 300;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var editor_img_pop_win = window.open('/API/youtube/youtube_step1.htm?var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		editor_img_pop_win.focus();
	}
}

function editor_youtube_pop2(var_name){
	
	if(document.getElementById(var_name+"_editor_mode")){
		if(document.getElementById(var_name+"_editor_mode").value == 'ckeditor' ){
			var oEditor = eval("CKEDITOR.instances."+var_name);
			if ( oEditor.mode != 'wysiwyg' ){
				oEditor.execCommand( 'source' );
			}
		}
	}

	if(MOBILE_CONN_YN == true){
		x_popup('/bbs_shop/popup/youtube_link_form.htm?var_name='+var_name);

	}else{
		var w = 450;
		var h = 300;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var editor_img_pop_win = window.open('/bbs_shop/popup/youtube_link_form.htm?var_name='+var_name,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		editor_img_pop_win.focus();
	}
}

function editor_img_pop(var_name,file_path,img_water_type){
	
	if(document.getElementById(var_name+"_editor_mode")){
		if(document.getElementById(var_name+"_editor_mode").value == 'ckeditor' ){
			var oEditor = eval("CKEDITOR.instances."+var_name);
			if ( oEditor.mode != 'wysiwyg' ){
				oEditor.execCommand( 'source' );
			}
		}
	}

	if(!file_path)file_path = '';
	file_path = encodeURIComponent(file_path);
	if(!img_water_type)img_water_type = '';
	
	if(MOBILE_CONN_YN == true){
		x_popup('/html_editor/upload/imgup_form.htm?mode=one&var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path);	

	}else{
		var w = 500;
		var h = 730;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var editor_img_pop_win = window.open('/html_editor/upload/imgup_form.htm?mode=one&var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		editor_img_pop_win.focus();
	}
}

function editor_m_img_pop(var_name,file_path,img_water_type){
	
	if(document.getElementById(var_name+"_editor_mode")){
		if(document.getElementById(var_name+"_editor_mode").value == 'ckeditor' ){
			var oEditor = eval("CKEDITOR.instances."+var_name);
			if ( oEditor.mode != 'wysiwyg' ){
				oEditor.execCommand( 'source' );
			}
		}
	}

	if(!file_path)file_path = '';
	file_path = encodeURIComponent(file_path);
	if(!img_water_type)img_water_type = '';

	if(MOBILE_CONN_YN == true){
		x_popup('/html_editor/upload/imgup_form.htm?mode=multi&var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path);

	}else{
		var w = 500;
		var h = 900;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2 - 50;	
		var editor_m_img_pop_win = window.open('/html_editor/upload/imgup_form.htm?mode=multi&var_name='+var_name+'&img_water_type='+img_water_type+'&file_path='+file_path,'','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		editor_m_img_pop_win.focus();

	}
}


function bbs_auto_category(board_code,cate_sub_idx,cate_sub_name,cate_admin_id){

	if(!cate_sub_idx)cate_sub_idx = '';
	if(!cate_sub_name)cate_sub_name = '';
	if(!cate_admin_id)cate_admin_id = '';

	document.write("<iframe src='/bbs_shop/auto_category_exec.php?cate_sub_idx="+cate_sub_idx+"&cate_sub_name="+encodeURIComponent(cate_sub_name)+"&board_code="+board_code+"&cate_admin_id="+cate_admin_id+"&me_popup=3&auto_frame=bbs_iframe_"+cate_sub_idx+"' width=100% height=100 style='border:0' title='' name='bbs_iframe_"+cate_sub_idx+"'  id='bbs_iframe_"+cate_sub_idx+"' scrolling=no></iframe>");
}

function bbs_auto_category_create(board_code,cate_sub_idx,cate_sub_name,cate_admin_id){

	if(!cate_sub_idx)cate_sub_idx = '';
	if(!cate_sub_name)cate_sub_name = '';
	if(!cate_admin_id)cate_admin_id = '';

	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src = "/bbs_shop/auto_category_exec.php?&cate_sub_idx="+cate_sub_idx+"&cate_sub_name="+encodeURIComponent(cate_sub_name)+"&board_code="+board_code+"&cate_admin_id="+cate_admin_id;
}


//업체정보 네이버맵연동 관련 그룹디자인 함수

function site_naver_map_xy(){
	var form = document.search_map_xy_form;

	get_load();
	var page_code = GET_ARR['page_code'];
	if(page_code) form.page_code.value = page_code;

	form.method = 'get';
	form.action = '';
	form.target = '';	
	form.submit();
}

function search_site_naver_map_value(){
	get_load();
	var search_site_naver_map = GET_ARR['search_site_naver_map'];
	if(search_site_naver_map){
		search_site_naver_map = decodeURI(search_site_naver_map);
		search_site_naver_map = search_site_naver_map.replace("+"," ");

	}else search_site_naver_map = '';

	if(document.getElementById('search_site_naver_map')) document.getElementById('search_site_naver_map').value = search_site_naver_map;
}

//쪽지
function sendmemo2(susin_id,job2){
	if(!job2) job2 = '';
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/s_paper_form.htm?susin_id='+susin_id);
	}else{
		var w = 400;
		var h = 400;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var asendmemo_win = window.open('/shop_mypage/s_paper_form.htm?susin_id='+susin_id+'&job2='+job2,'asendmemo_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		asendmemo_win.focus();
	}
}

function all_email_sel_chk(obj,input_value){
	if(input_value != null){
		if(document.getElementById(obj)) document.getElementById(obj).value = input_value;
	}
}

function mypage_job2(reg_type){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src='/job2/mypage_chk.php?reg_type='+reg_type;
}

//검색시 검색키워드 강조하기
function search_keyword_block(class_name, search_str,style_class){
	if(!class_name || !search_str || !style_class) return;
	var search_str = {words:search_str,wordsOnly:true};

	if (search_str.words.length == 0) return;

	pattern = new RegExp(search_str.words, "ig");
	rep_str = "<span class='"+style_class+"'>"+search_str.words+"</span>";

	$('.'+class_name).each(function() {
		var content = $(this).html();
		if (!content) return;
		$(this).html(content.replace(pattern, rep_str));
	});
}

function memlv_up_form(){
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/memlv_up_form.htm');
	}else{
		var w = 400;
		var h = 400;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var memlv_up_win = window.open('/shop_mypage/memlv_up_form.htm','memlv_up_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		memlv_up_win.focus();
	}
}


function email_ch(){
	var w = 500;
	var h = 300;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;	
	var email_ch_win = window.open('../shop_mypage/email_ch_form.htm','email_ch_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=no,resizable=no,status=yes,menubar=no,location=no');
	email_ch_win.focus();
}

//admin_sendmemo(수신자ID, 타입(board, myboard), 코드값(board_code, myboard_code), 고유번호)
function admin_sendmemo(susin_id, type, code, idx){
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/s_paper_form.htm?susin_id='+susin_id+'&type='+type+'&code='+code+'&idx='+idx);
	}else{
		var w = 400;
		var h = 400;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var asendmemo_win = window.open('/shop_mypage/s_paper_form.htm?susin_id='+susin_id+'&type='+type+'&code='+code+'&idx='+idx,'asendmemo_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		asendmemo_win.focus();
	}
}

function emoney_present(){
	if(MOBILE_CONN_YN == true){
		x_popup('/shop_mypage/emoney_present_form.htm');
	}else{
		var w = 400;
		var h = 400;
		var window_left = (screen.width-w)/2;
		var window_top = (screen.height-h)/2;	
		var emoney_present_win = window.open('/shop_mypage/emoney_present_form.htm','emoney_present_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
		emoney_present_win.focus();
	}
}

function page_x_reload(url){
	if(url){
		ok_frame.location.replace('about:blank');
		setTimeout("location.href='"+url+"';",10);
	}
}

function currency_round(price){
	price *= 100;
	price = Math.round(price);
	price /= 100;
	return price;
}

function lan_change(lan){
	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/shop_main/lan_change_exec.php?site_lan="+lan;
}


function img_download(img_path){
	if(APP_CONN_YN == true){
		var tmp_file_arr = img_path.split('/');
		var tmp_cnt = tmp_file_arr.length;
		var file_name = tmp_file_arr[tmp_cnt-1];
		app_download(img_path, file_name);

	}else if(MOBILE_CONN_YN == true){
		location.href="/etc/img_download.php?img_path="+escape(img_path);

	}else{
		var iframe_name = create_iframe();
		document.getElementById(iframe_name).src="/etc/img_download.php?img_path="+escape(img_path);
	}
}


function create_iframe(h,fn_var_name) { 
	
	if(!h) h = 0;
		
	if(fn_var_name){
		var var_name = fn_var_name;
	}else{
		var rand_num = Math.floor(Math.random() * 100000) + 1;
		var var_name = "ok_frame_"+rand_num;
	}
	
	/*
	if(document.getElementById(var_name)){
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			if(iframes[i].name == var_name){
				iframes[i].parentNode.removeChild(iframes[i]);
			}
		}
	}
	*/

    var ifrObj = document.createElement("iframe"); 
    ifrObj.setAttribute("id", var_name); // ifrObj.id = "ifr"; 
    ifrObj.setAttribute("name", var_name); // ifrObj.id = "ifr"; 

	if(h > 0){
		ifrObj.style.width = '100px'; 
		ifrObj.style.height = h+'px'; 
	}else{
		ifrObj.style.width = '0px'; 
		ifrObj.style.height = '0px'; 
		ifrObj.style.display = 'none'; 
	}

    document.body.appendChild(ifrObj);
	
	window.frames[var_name].name = var_name;
	

	return var_name;

}

function kakao_api_link(subject,img_url,bt_name,link_url){

	if(!subject) subject = page_title;
	if(!subject) subject = document.domain;
	if(!link_url) link_url = document.location;
	if(!img_url) img_url = '';
	if(!bt_name) bt_name = '';
	
	// url 주소인경우 : escape(go_url);
	// 한글인경우 : encodeURIComponent(go_url);

	var iframe_name = create_iframe();
	document.getElementById(iframe_name).src="/API/kakao/kako_link.php?subject="+encodeURIComponent(subject)+"&bt_name="+encodeURIComponent(bt_name)+"&img_url="+escape(img_url)+"&link_url="+escape(link_url);

	//사파리에서는 프레임으로 넘어간 후 click 이벤트가 되지 않아 별도로 처리한다.
	var br_info = navigator.userAgent.toLowerCase();
	if(br_info.indexOf('safari') > 0 && br_info.indexOf('mobile') > 0){
		setTimeout("kakao_api_link_click('"+iframe_name+"')",500);
	}
}

function kakao_api_link_click(iframe_name){
	window.frames[iframe_name].document.getElementById('kakao-link-btn').click();
}


function naver_blog_post(type,idx){
	var w = 400;
	var h = 400;
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height-h)/2;
	var naver_login_form_win = window.open('/API/naver/blog_oauth_chk.php?type='+type+'&idx='+idx,'naver_login_form_win','top='+window_top+',left='+window_left+',width='+w+',height='+h+',toolbar=no,scrollbars=yes,resizable=yes,status=yes,menubar=no,location=no');
	naver_login_form_win.focus();
}

function multi_file_download_chk(down_type,url,file_name){
	if(down_type == 'app'){
		app_download(url,file_name);
	}else if(down_type == 'mobile'){
		location.href = url;
	}else{
		var iframe_name = create_iframe();
		document.getElementById(iframe_name).src = url;
	}
}
