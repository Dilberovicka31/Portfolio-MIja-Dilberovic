$(document).ready(function () {
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#contact-info").hide();
});

$("#work").click(function () {
  $("#project1").show(1000);
  $("#project2").show(1000);
  $("#project3").show(1000);
  $("#contact-info").hide();
  $("#first").hide(1000);
  // $('#aboutMe').hide();
});

$("#contact").click(function () {
  $("#project1").hide(1000);
  $("#project2").hide(1000);
  $("#project3").hide(1000);
  $("#contact-info").show(1000);
  $("#first").hide();
});

$("#home").click(function () {
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#contact-info").hide();
  $("#first").show(1000);
});
