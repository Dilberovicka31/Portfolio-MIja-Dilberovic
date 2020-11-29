$(document).ready(function() {
$("#projects").hide();
$("#contact-info").hide();
  });
  
  $('#work').click(function() {
    $('#projects').show(1000);
    $('#contact-info').hide();
    $('#first').hide(1000);
    // $('#aboutMe').hide();
  });
  
  $('#contact').click(function() {
    $('#projects').hide(1000);
    $('#contact-info').show(1000);
    $('#first').hide();
  });
  
  $('#home').click(function() {
    $('#projects').hide();
    $('#contact-info').hide();
    $('#first').show(1000);
  });
