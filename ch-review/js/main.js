var x = $('#nav')

$(window).on('resize', function(){
  var win = $(this); //this = window
  if (win.width() >= 1024) {
    x.removeClass('hidden')
  } else {
    x.addClass('hidden')
  }
});

$(() => {
  $('#nav-toggle').click(() => {
    console.log('clicked')
    x.toggleClass('hidden')
  })
})
