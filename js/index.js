// Your code goes here
// WHEEL
function zoom(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  } else {
    // Zoom out
    scale /= event.deltaY * 2;
  }
  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 1.5);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('#holder');
window.onwheel = zoom;

// MOUSEOVER - this handler will be executed every time the cursor is moved over a different list item
mouseOver.addEventListener(
  'mouseover',
  function(event) {
    // highlight the mouseover target
    event.target.style.color = '#04AEFF';

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = '';
    }, 500);
  },
  false
);

// 2nd custom KEYDOWN event
const input = document.querySelector('input');
const keyDown = document.getElementById('keyDown');

input.addEventListener('keydown', welcome);

function welcome(e) {
  keyDown.textContent += `Hello and Welcome!`;
}
