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
/*
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.json", true);
  xhttp.send();}