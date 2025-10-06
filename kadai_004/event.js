// window の load, scroll イベントに変更
$(window).on('load', function(){
	console.log('loadイベントが発生しました');
	// window の load を受けて document 側にも通知しておく
	$(document).trigger('load');
});

$(window).on('scroll', function(){
	console.log('scrollイベントが発生しました');
	// window の scroll を受けて document 側にも通知しておく
	$(document).trigger('scroll');
});

// document 側でもハンドラを追加しておく（documentで出るようにするため）
$(document).on('load', function(){
	console.log('document: loadイベントが発生しました');
});

$(document).on('scroll', function(){
	console.log('document: scrollイベントが発生しました');
});