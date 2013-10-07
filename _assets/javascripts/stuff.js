//= require vendor/jquery.fitvids

$(".video-pusher").fitVids();

$(".open-menu").on("click", function() {
    $(".primary-navigation").toggleClass("MenuIsOpen");
    $(".site__wrapper").toggleClass("MenuIsOpen");

});

$(".open-search").on("click", function() {
    $(".search-wrapper").toggleClass("searchIsOpen")
});
