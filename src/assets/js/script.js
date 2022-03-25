$('.owl-carousel.header-wow').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  touchDrag: false,
  mouseDrag: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000
})
var clipboard1 = new ClipboardJS('.s-copy1')
clipboard1.on('success', function (e) {
  $('.s-copy1').text('Copied ip')
})
var clipboard2 = new ClipboardJS('.s-copy2')
clipboard2.on('success', function (e) {
  $('.s-copy2').text('copied-ip')
})
var clipboard3 = new ClipboardJS('.s-promo')
clipboard3.on('success', function (e) {
  $('.s-promo').text('Скопировано')
})

$('.owl-carousel.header-wow').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  touchDrag: false,
  mouseDrag: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000
})
var clipboard1 = new ClipboardJS('.-copy1')
clipboard1.on('success', function (e) {
  $('.-copy1').text('Copied ip')
})
var clipboard2 = new ClipboardJS('.-copy2')
clipboard2.on('success', function (e) {
  $('.-copy2').text('copied-ip')
})
var clipboard3 = new ClipboardJS('.s-promo')
clipboard3.on('success', function (e) {
  $('.s-promo').text('Скопировано')
})
