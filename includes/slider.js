import {
  images
} from '../data/images.js'

function Slider() {
  let template = '';
  for (let {
      name,
      title
    } of images) {
    if (title == 'start') {
      template +=
        `<div id="startContainer">
          <img src=${name} alt=${name} id=${title} width="512" height="512" class="sticker-gallery" loading="lazy">
          <span id="forward">></span>
        </div>`
    } else if (title == 'end') {
      template += `
        <div id="endContainer">
          <img src=${name} alt=${name} id=${title} width="512" height="512" class="sticker-gallery" loading="lazy">
          <span id="back"><</span>
        </div>`
    } else {
      template += `<img src=${name} alt=${name} id=${title} width="512" height="512" class="sticker-gallery" loading="lazy">`
    }
  }
  return template;
}

export default Slider()