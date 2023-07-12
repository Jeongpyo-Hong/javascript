/**
 * 탭 기능 만들기
 */
const tab = $(".tab-button");
for (let i = 0; i < tab.length; i++) {
  tab.eq(i).on("click", function () {
    tab.removeClass("orange");
    $(this).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(i).addClass("show");
  });
}
