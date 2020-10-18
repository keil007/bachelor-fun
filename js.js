$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 440) {
      $("#topnav").addClass("topnav-stick");
      //$("#topnav ul").addClass("topnav-stick-ul");
    } else {
      $("#topnav").removeClass("topnav-stick");
      //$("#topnav ul").removeClass("topnav-stick-ul");
    }
  });
});