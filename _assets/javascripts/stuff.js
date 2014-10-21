//= require vendor/jquery.fitvids

$(".video-pusher").fitVids();

$(".toggleNav").on("click", function() {
    $(".mobile-nav").toggleClass("MenuIsOpen");
});

$(".toggleTopBar").on("click", function() {
  $("body").toggleClass("BarShow");
})
