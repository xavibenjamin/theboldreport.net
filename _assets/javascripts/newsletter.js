$(function () {
  $('#subForm').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      if (data.Status === 400) {
        alert("Error: " + data.Message);
      }
      else { // 200
        $("form").remove("#subForm");
        $(".newsletter__thankyou").addClass("js-submitted");
        $(".newsletter__thankyou").append("<p>Thanks for subscribing. You’ll be receiving a confirmation email shortly.</p>");
      }
    });
  });
});
