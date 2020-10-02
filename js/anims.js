let fst_controller = document.querySelector('.fst-cntrl-hover')
let snd_controller = document.querySelector('.snd-cntrl-hover')
let alesha = document.querySelector('.aleksey-photo')
let pavel = document.querySelector('.pavel-photo')

fst_controller.onmouseover = fst_controller.onmouseout = fst_photo;
snd_controller.onmouseover = snd_controller.onmouseout = snd_photo;

function fst_photo(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  if (event.type == 'mouseover') {
    // event.target.style.background = 'pink'
    alesha.style.left = "-150px";
  }
  if (event.type == 'mouseout') {
    alesha.style.left = "0px";
  }
}

function snd_photo(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  if (event.type == 'mouseover') {
    pavel.style.left = "150px";
  }
  if (event.type == 'mouseout') {
    pavel.style.left = "0px";
  }
}