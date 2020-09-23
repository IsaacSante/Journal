// Wrap every letter in a span
var textWrapper = document.querySelector('.container');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.container .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 20,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.container',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 10
  });