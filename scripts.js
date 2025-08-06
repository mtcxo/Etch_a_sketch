const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
  const square = document.createElement('div'); // 1
  square.classList.add('square');               // 2
  container.appendChild(square);                // 3
}

function changeColor(event){
    event.target.style.backgroundColor = "black";
}

const sq_divs = document.querySelectorAll(".square");
for(const sq_div of sq_divs){
    sq_div.addEventListener("mouseenter",changeColor);
}