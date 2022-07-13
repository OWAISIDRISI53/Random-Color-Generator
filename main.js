let display = document.querySelector('span');

function random() {
  let r1 = Math.round(Math.random() * 255)
  let r2 = Math.round(Math.random() * 255)
  let r3 = Math.round(Math.random() * 255)
  let randomColor = `rgb(${r1},${r2},${r3})`;
  let color = document.querySelector('.color');
  color.style.background = randomColor;
  display.innerHTML = randomColor;
  copy(randomColor);
}

function copy(randomColor) {
  let copyBtn = document.querySelector('.copy');

  copyBtn.addEventListener('click', copyText)
  display.addEventListener('click', copyText)

  function copyText() {
    
    window.navigator.clipboard.writeText(randomColor);
    swal({
      icon: "success",
      text: "Text Copied",
    });
  }

}

window.addEventListener('load', random)

console.log(window.innerWidth);
