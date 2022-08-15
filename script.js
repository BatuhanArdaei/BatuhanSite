var textWrapper = document.querySelector('.m16');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false }).add({

    targets: '.m16 .letter',

    translateX: [40,0],

    translateZ: 0,

    opacity: [0,1],

    easing: "easeOutExpo",

    duration: 2500,

    delay: (el, i) => 500 + 30 * i

  }).add({

    targets: '.m16 .letter',

    translateX: [0,-30],

    opacity: [1,0],

    easing: "easeInExpo",

    duration: 3400,

    delay: (el, i) => 100 + 30 * i

  });

anime.timeline({loop: false }).add({

    targets: '.ml15 .word',

    scale: [14,1],

    opacity: [0,1],

    easing: "easeOutCirc",

    duration: 800,

    delay: (el, i) => 800 * i

  });

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
 $("#btn-full").hide();
$("#btn-fullc").show(); 
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  $("#btn-full").show();
$("#btn-fullc").hide();
}
