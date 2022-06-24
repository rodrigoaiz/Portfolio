
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
    $('body').css("overflowY","scroll");
  }
});
$('.js-btn-modal').on('click', function(){
  $('#overlay').fadeIn();
  $('body').css("overflowY","hidden");
  var id = $(this).data('id');
  $('.js-modal[data-id="modal' + id + '"]').fadeIn();
});

$('.js-close-btn').on('click', function(){
  $('body').css("overflowY","scroll");
  $('#overlay').fadeOut();
  $('.js-modal').fadeOut();
});
/* $('#overlay').on('click', function(){
  $('body').css("overflowY","scroll");
  $('#overlay').fadeOut();
  $('.js-modal').fadeOut();
});
 */
