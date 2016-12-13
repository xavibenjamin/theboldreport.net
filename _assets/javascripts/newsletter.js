$(function () {
  $('#subForm').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      var $newsletter_thankyou = $('.newsletter__thankyou');
      var $submitted_class = 'js-submitted';
      if (data.Status === 400) {
        alert("Error: " + data.Message);
      }
      else {
        $("form").remove("#subForm");
        $newsletter_thankyou.addClass($submitted_class);
        $newsletter_thankyou.append("<p>Thanks for subscribing. You’ll be receiving a confirmation email shortly.</p>");
      }
    });
  });
});
