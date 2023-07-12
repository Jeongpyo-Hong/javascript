/**
 * 탭 기능 만들기
 */
let tab = $(".tab-button");

$(".list").click(function (e) {
  tabOpen(+e.target.dataset.id);
});

const tabOpen = (idx) => {
  tab.eq(idx).on("click", function () {
    tab.removeClass("orange");
    $(this).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(idx).addClass("show");
  });
};
