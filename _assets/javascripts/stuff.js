//= require vendor/jquery.fitvids

$(".video-pusher").fitVids();

$(function () {
    $('#subForm').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                $(".page__newsletter-form").append("<p>" + "<strong class='form-error'>Error:</strong> " + data.Message);
            } else { // 200
                $("form").remove("#subForm");
                $(".page__newsletter-form").append("<p><strong class='form-success'>Success:</strong> Your subscription has been confirmed. Thank you for signing up!</p>");
            }
        });
    });
});

$(".open-search").on("click", function() {
    $(".search-wrapper").toggleClass("searchIsOpen")
});

$(".open-nav").on("click", function() {
    $(".site__left-nav, .page-wrap").toggleClass("navIsOpen");
});

$(".close-nav").on("click", function() {

 $(".site__left-nav, .page-wrap").removeClass("navIsOpen");

});

