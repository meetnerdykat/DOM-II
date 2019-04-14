// Your code goes here

// RESIZE
const delay = 75; // Your delay here

const originalResize = evt => {
  let w = window.outerWidth;
  let h = window.outerHeight;
  let txt = 'WINDOW SIZE: <br/> width=' + w + ', height=' + h;
  document.getElementById('demo').innerHTML = txt;
  console.log(evt); // Your resize function here
};

(() => {
  resizeTaskId = null;

  window.addEventListener('resize', evt => {
    if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }

    resizeTaskId = setTimeout(() => {
      resizeTaskId = null;
      originalResize(evt);
    }, delay);
  });
})();

// FOCUS / BLUR
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', event => {
  event.target.style.background = '#ffecca';
});

password.addEventListener('blur', event => {
  event.target.style.background = '';
});

// LOAD
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent = '';
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener('load', event => {
  log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', event => {
  log.textContent = log.textContent + `Readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', event => {
  log.textContent = log.textContent + `DOMContentLoaded\n`;
});

// DRAG / DROP
let dragged;

/* events fired on the draggable target */
document.addEventListener('drag', function(event) {}, false);

document.addEventListener(
  'dragstart',
  function(event) {
    // store a ref. on the dragged element
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  'dragend',
  function(event) {
    // reset the transparency
    event.target.style.opacity = '';
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  'dragover',
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  'dragenter',
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == 'dropzone') {
      event.target.style.background = 'white';
    }
  },
  false
);

document.addEventListener(
  'dragleave',
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == 'dropzone') {
      event.target.style.background = '';
    }
  },
  false
);

document.addEventListener(
  'drop',
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == 'dropzone') {
      event.target.style.background = '';
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);
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
  scale = Math.min(Math.max(0.8, scale), 1.5);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('#holder');
holder.onwheel = zoom;

// MOUSEOVER - this handler will be executed every time the cursor is moved over a different list item
mouseOver.addEventListener(
  'mouseover',
  function(event) {
    // highlight the mouseover target
    event.target.style.color = '#9fecff';

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = '';
    }, 500);
  },
  false
);

// KEYDOWN
const input = document.querySelector('input');
const keyDown = document.getElementById('keyDown');

input.addEventListener('keydown', welcome);

function welcome(e) {
  keyDown.textContent += `Hello and Welcome! `;
}
