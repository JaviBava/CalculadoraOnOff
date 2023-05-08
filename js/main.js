let screen = document.getElementById('screen');

function addToScreen(value) {
    if (!screen.disabled) {
      screen.value += value;
    }
  }

function clearScreen() {
  screen.value = '';
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch(err) {
    screen.value = 'Error';
  }
}

function turnOn() {
    screen.value = '';
    screen.placeholder = '0';
    screen.disabled = false;
    screen.classList.remove('off');
    screen.classList.add('on');
  }

function turnOff() {
    screen.value = '';
    screen.placeholder = '';
    screen.disabled = true;
    screen.classList.remove('on');
    screen.classList.add('off');
  }
  
  