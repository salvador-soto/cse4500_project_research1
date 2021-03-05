let colors = ["yellow", "red", "orange", "blue", "magenta", "pink", "black", "cyan", "teal", "maroon", "canary", "gold", "daffodil"];

let button = document.getElementById('button');

button.addEventListener('click', function () {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let square = document.getElementById('square');
    square.style.background = randomColor;
})