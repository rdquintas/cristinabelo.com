var $ = window.$

$(document).ready(function () {
  // assignt mobile images for the home page
  if ($('section#home').length > 0) {
    $('.block-image-mobile').each(function () {
      var arr = $(this).attr('src').split('.')
      arr[arr.length - 2] = arr[arr.length - 2] + '_mobile'
      $(this).attr('src', arr.join('.'))
    })
    $('body').addClass('home-page')
  } else {
    $('body').removeClass('home-page')
  }

  // initialize video formatting
  if ($('section#default-page').length > 0) {
    $('video').attr('poster', 'user/themes/zrq/images/transparent.png')
  }

  // copy the language switcher into the slide menu
  $('#header ul.langswitcher li').clone().prependTo('.sb-slidebar ul.navigation')

  // apply the CSS colors to the nav menu (desktop only)
  var colorNumber = 0
  $.each($('#header ul.navigation li'), function (index, value) {
    colorNumber += 1
    $(value).addClass('color' + colorNumber)
    if (colorNumber >= 4) {
      colorNumber = 0
    }
  })
})
