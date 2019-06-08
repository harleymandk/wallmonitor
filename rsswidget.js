(function(){
var a = window;
a.rssmikle_frame_width = a.rssmikle_frame_width ? a.rssmikle_frame_width : 180;
a.rssmikle_frame_height = a.rssmikle_frame_height ? a.rssmikle_frame_height : 500;
a.rssmikle_item_description_tag = a.rssmikle_item_description_tag ? a.rssmikle_item_description_tag : '';

var url = 'http://feed.mikle.com/feeds/rssmikle.cgi'
	+ '?rssmikle_url=' + (a.rssmikle_url ? encodeURIComponent(a.rssmikle_url) : '')
	+ '&rssmikle_type=' + (a.rssmikle_type ? a.rssmikle_type : '')
	+ '&rssmikle_frame_width=' + a.rssmikle_frame_width
	+ '&rssmikle_frame_height=' + a.rssmikle_frame_height
	+ '&rssmikle_frame_rico=' + (a.rssmikle_frame_rico ? a.rssmikle_frame_rico : '')
	+ '&rssmikle_target=' + (a.rssmikle_target ? a.rssmikle_target : '')
	+ '&rssmikle_font=' + (a.rssmikle_font ? a.rssmikle_font : '')
	+ '&rssmikle_font_size=' + (a.rssmikle_font_size ? a.rssmikle_font_size : '')
	+ '&rssmikle_border=' + (a.rssmikle_border ? a.rssmikle_border : '')
	+ '&rssmikle_css_url=' + (a.rssmikle_css_url ? encodeURIComponent(a.rssmikle_css_url) : '')
	+ '&rssmikle_title=' + (a.rssmikle_title ? a.rssmikle_title : '')
	+ '&rssmikle_title_bgcolor=' + (a.rssmikle_title_bgcolor ? encodeURIComponent(a.rssmikle_title_bgcolor) : '')
	+ '&rssmikle_title_color=' + (a.rssmikle_title_color ? encodeURIComponent(a.rssmikle_title_color) : '')
	+ '&rssmikle_title_bgimage=' + (a.rssmikle_title_bgimage ? encodeURIComponent(a.rssmikle_title_bgimage) : '')
	+ '&rssmikle_item_bgcolor=' + (a.rssmikle_item_bgcolor ? encodeURIComponent(a.rssmikle_item_bgcolor) : '')
	+ '&rssmikle_item_bgimage=' + (a.rssmikle_item_bgimage ? encodeURIComponent(a.rssmikle_item_bgimage) : '')
	+ '&rssmikle_item_title_length=' + (a.rssmikle_item_title_length ? a.rssmikle_item_title_length : '')
	+ '&rssmikle_item_title_color=' + (a.rssmikle_item_title_color ? encodeURIComponent(a.rssmikle_item_title_color) : '')
	+ '&rssmikle_item_border_bottom=' + (a.rssmikle_item_border_bottom ? a.rssmikle_item_border_bottom : '')
	+ '&rssmikle_item_description=' + (a.rssmikle_item_description ? a.rssmikle_item_description : '')
	+ '&rssmikle_item_description_length=' + (a.rssmikle_item_description_length ? a.rssmikle_item_description_length : '')
	+ '&rssmikle_item_description_color=' + (a.rssmikle_item_description_color ? encodeURIComponent(a.rssmikle_item_description_color) : '')
	+ '&rssmikle_item_description_tag=' + (a.rssmikle_item_description_tag ? a.rssmikle_item_description_tag : '')
	+ '&rssmikle_item_date=' + (a.rssmikle_item_date ? a.rssmikle_item_date : '')
	+ '&rssmikle_item_podcast=' + (a.rssmikle_item_podcast ? a.rssmikle_item_podcast : '');
//	+ '&rssmikle_ref=' + encodeURIComponent(document.URL);

if(a.rssmikle_border != 'off' && !a.rssmikle_css_url){
	a.rssmikle_frame_width = parseInt(a.rssmikle_frame_width) + 2;
	a.rssmikle_frame_height = parseInt(a.rssmikle_frame_height) + 2;
}

var scroll_flag = 'no';
if (a.rssmikle_item_description_tag == 'on_scrollbar'){
	scroll_flag = 'auto';
}

document.write('<iframe name="rssmikle_frame" width="' + a.rssmikle_frame_width + '" height="' + a.rssmikle_frame_height + '" frameborder="0" src="' + url + '" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="' + scroll_flag + '"></iframe>');

a.rssmikle_url = '';
a.rssmikle_type = '';
a.rssmikle_frame_width = '';
a.rssmikle_frame_height = '';
a.rssmikle_frame_rico = '';
a.rssmikle_target = '';
a.rssmikle_font = '';
a.rssmikle_font_size = '';
a.rssmikle_border = '';
a.rssmikle_css_url = '';
a.rssmikle_title = '';
a.rssmikle_title_bgcolor = '';
a.rssmikle_title_color = '';
a.rssmikle_title_bgimage = '';
a.rssmikle_item_bgcolor = '';
a.rssmikle_item_bgimage = '';
a.rssmikle_item_title_length = '';
a.rssmikle_item_title_color = '';
a.rssmikle_item_border_bottom = '';
a.rssmikle_item_description = '';
a.rssmikle_item_description_length = '';
a.rssmikle_item_description_color = '';
a.rssmikle_item_description_tag = '';
a.rssmikle_item_date = '';
a.rssmikle_item_podcast = '';

})()