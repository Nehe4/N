const Display = document.querySelector('.input');

function button(btn) {
  Display.value += btn;
}

function Eraze() {
  Display.value = '';
}

function backspace() {
  Display.value = Display.value.slice(0, -1);
}

function cal() {
  try {
    Display.value = eval(Display.value);
  } catch (errors) {
    Display.value = 'ERROR';
  }
}
