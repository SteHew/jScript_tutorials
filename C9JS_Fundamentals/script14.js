/*
jQuery(document).ready(function() {
  // Start up code goes here
  alert("This works!");
*/


$(function() {
  // start up code goes here
  // alert("This works!");

  jQuery('#title').fadeOut(1000).fadeIn(500);

  // $("#title").text("Yay, I can now get at the H1 immediately!");

  // $("#first").html("<h2>Great quotes</h2>");

  // append and prepend work INSIDE the given selection
  $("#first").prepend("<h2>Great quotes</h2>");
  $("#first").append("<h3>... for you to ponder ... </h3>");

  // before, after, insertBefore, insertAfter work OUTSIDE
  // the given selection.

  // $("#myAnchor").attr("href", "http://channel9.msdn.com");

  $("#title").addClass("standout");



});


// $('<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"</div)')

// $.myCustomMethod = function() {alert('Hi');};

// $.listBox = {
//   show: function() { },
//   hide: function() { },
//   position: function() { },
//   initiate: function() { }
// };


