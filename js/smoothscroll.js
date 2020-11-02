$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var page = $(this.hash);
    if (page.length == 0) {
      page = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (page.length == 0) {
      page = $('html');
    }
    $('html, body').animate({ scrollTop: page.offset().top }, 700);
    return false;
  });
});