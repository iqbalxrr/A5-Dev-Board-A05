function randomeCOlorBg() {
  let r = Math.floor(Math.random() * 100) + 155;
  let g = Math.floor(Math.random() * 100) + 155;
  let b = Math.floor(Math.random() * 100) + 155;

  const randomColor = `rgb(${r}, ${g}, ${b})`;

  return randomColor;
}

function changeBgColor() {
  const randomColor = randomeCOlorBg();
  document.body.style.backgroundColor = randomColor;
}
