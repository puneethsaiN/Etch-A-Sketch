const container = document.querySelector(".container");

function drawGrid(sideLength){
    for(let i=0;i<sideLength*sideLength;i++){
        const square = document.createElement("div");
        square.classList.add("square");
    
          square.addEventListener('mouseover', () => {
              square.style.backgroundColor = 'grey'; // Dragging to color
          });
          container.appendChild(square);
    }
}

drawGrid(15);


