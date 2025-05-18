$(function(){
  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/

	document.addEventListener("DOMContentLoaded", function() {
		const toggle = document.getElementById("site-nav__toggle");
		const menuItems = document.querySelectorAll(".main-nav__item a");
	
		// メニューリンクをクリックしたらハンバーガーメニューを閉じる
		menuItems.forEach(item => {
			item.addEventListener("click", function() {
				toggle.checked = false;
			});
		});
	});


  /*-------------------------------
  応募はこちらボタン
  ---------------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $("#fixed-btn").fadeIn();
    } else {
      $("#fixed-btn").fadeOut();
    }
  });
});
