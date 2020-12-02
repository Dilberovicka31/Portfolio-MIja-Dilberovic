$(document).ready(function () {
  $("#second").hide();
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#project4").hide();
  $("#contact-info").hide();
});

$("#about").click(function () {
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#project4").hide();
  $("#contact-info").hide(1000);
  $("#first").hide();
  $("#second").show(1000);
});

$("#work").click(function () {
  $("#project1").show(1000);
  $("#project2").show(1000);
  $("#project3").show(1000);
  $("#project4").show(1000);
  $("#contact-info").hide();
  $("#first").hide(1000);
  $("#second").hide(1000);
});

$("#contact").click(function () {
  $("#project1").hide(1000);
  $("#project2").hide(1000);
  $("#project3").hide(1000);
  $("#project4").hide(1000);
  $("#contact-info").show(1000);
  $("#first").hide();
  $("#second").hide();
});

$("#home").click(function () {
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#project4").hide();
  $("#contact-info").hide(1000);
  $("#first").show(1000);
});
