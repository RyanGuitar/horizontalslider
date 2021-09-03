import Slider from './includes/slider.js'

function getId(id) {
  return document.getElementById(id)
}

function getIdAdd(id, add) {
  document.getElementById(id).innerHTML = add
}

function addEvent(id, action, fn) {
  getId(id).addEventListener(action, fn)
}

function back(e) {
  //alert(e.target.id)
  alert('hello')
}

getIdAdd('container', Slider)
addEvent('back', 'click', backScroll)
addEvent('forward', 'click', forwardScroll)

const start = getId("start");
const end = getId('end')

function forwardScroll() {
  end.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}

function backScroll() {
  start.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}
/*element.scrollIntoView(false);
element.scrollIntoView({block: "end"});

/*                                                                                     */