function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown-1', deadline);
initializeClock('countdown-2', deadline);
initializeClock('countdown-3', deadline);

// $(document).ready(function() {
//   $('.hamburger').click(function(event) {
//       $('.hamburger').toggleClass('is-active');
//       $('body').toggleClass('lock');
//       $('.header-nav').toggleClass('active');
//       $('.btn-login').toggleClass('active');
//   })
// })

// $(document).ready(function() {
//   $('.slick-slider').slick({
//       dots: false,        
//       infinite: true,
//       speed: 300,
//       slidesToShow: 6,
//       slidesToScroll: 4,
//       variableWidth: true,        
//       responsive: [
//         {
//           breakpoint: 1124,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }          
//       ]
//     });
// });