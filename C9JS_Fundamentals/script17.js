$(function() {
  //alert('got here');
  $("#tabs").tabs();
  $("#datepicker").datepicker({
    onSelect: function(dateText, inst) {
      $('#title').text("You picked: " + dateText);
    }
  });
});