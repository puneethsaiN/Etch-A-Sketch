const container = document.querySelector(".container");
const eraseBtn = document.querySelector(".btn-erase");
const sizeBtn = document.querySelector(".btn-size");
let isActive = false;
let containerSize = 600;

sizeBtn.addEventListener("click", (e) => {
    let numSquares;
    while(!numSquares){
        const input = parseInt(prompt("Enter number of squares in each side"));
        if(input > 64){
            alert("Size is too Large! Maximum allowed size is 64 squares");
        }
        else{
            numSquares = input;
        }
    }
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((box) => {
        container.removeChild(box);
    });
    drawGrid(600, numSquares);
});

eraseBtn.addEventListener("click", (e) => {
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((box) => {
        box.classList.remove("marked");
    });
});

container.addEventListener('mousedown', (e) => {
    isActive = true;
    e.preventDefault();
});
container.addEventListener('mouseup', () => {
    isActive = false;
});
container.addEventListener('mouseleave', () => {
    isActive = false;
});

function drawGrid(containerSize, n_row){
    for(let i=0;i<n_row*n_row;i++){
        const square = document.createElement("div");
        square.classList.add("square");

        let squareSize = (containerSize - (n_row - 1)) / n_row;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
    
        square.addEventListener('mousemove', () => {
            if(isActive){
                square.classList.add("marked"); // Dragging to color
            }
        });
        square.addEventListener('click', () => {
            square.classList.add("marked"); // Dragging to color
        });

        container.appendChild(square);
    }
}


drawGrid(containerSize, 16);


