const container = document.querySelector(".container");

const eraseBtn = document.querySelector(".btn-erase");

eraseBtn.addEventListener("click", (e) => {
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((box) => {
        box.classList.remove("marked");
    });
});

function drawGrid(n_row){
    for(let i=0;i<n_row*n_row;i++){
        const square = document.createElement("div");
        square.classList.add("square");
    
          square.addEventListener('mouseover', () => {
              square.classList.add("marked"); // Dragging to color
          });
          container.appendChild(square);
    }
}

drawGrid(16);


