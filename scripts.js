const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
    const square = document.createElement('div'); // 1
    square.classList.add('square');               // 2
    container.appendChild(square);                // 3
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor();
}

const sq_divs = document.querySelectorAll(".square");
for (const sq_div of sq_divs) {
    sq_div.addEventListener("mouseenter", changeColor);
}


function createNewSketchPad() {

    let size = prompt('Enter sketch pad size (e.g. 16 = 16x16).\nMax: 100');

    // if user cancels, exit the function
    if (size === null) return;

    // keep asking until it's a valid number
    size = parseInt(size);
    while ( isNaN(size) || size <= 0 || size > 100) {
        
        size = prompt('Make sure you are using a number between 1 and 100!');
        if(size==null)return;
        size = parseInt(size);
    }

    container.innerHTML = ''; //clear the existing grids

    for (let i = 1; i <= size * size; i++) {
        //generate new grid with user's desired grid count
        const sq = document.createElement("div");

        sq.style.flex = `0 0 calc(100% / ${size})`;
        sq.style.aspectRatio = '1 / 1';
        sq.style.boxSizing = 'border-box';
        sq.style.border = "1px solid #ccc";
        sq.addEventListener('mouseenter', changeColor);
        container.appendChild(sq);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', createNewSketchPad);