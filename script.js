const Display = document
.querySelector('.input');

function button(btn) {
 Display.value += btn
}

function Eraze() {
  Display.value ='';
}


function cal() {
try {
Display.value = eval(Display.value)
}
 catch (errors) {
 Display.value = 'ERROR';
}
}
