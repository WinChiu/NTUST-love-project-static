$('.marquee-landing').marquee({
  duration: 9000,
  gap: 2,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  startVisible: true,
});
$('.landing__cart').click(function () {
  location.href = 'shopCart.html';
});

const switchImgs = [
  'switchedImg_1',
  'switchedImg_2',
  'switchedImg_3',
  'switchedImg_4',
];
let nowImg = 0;

setInterval(() => {
  $('.switchedImg').attr(
    'src',
    `./asset/img/landingPage/${switchImgs[nowImg]}.webp`
  );
  if (nowImg === 3) {
    nowImg = 0;
  } else {
    nowImg += 1;
  }
}, 800);
