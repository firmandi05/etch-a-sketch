let isDrawing = false;

function createGrid() {
  const container = document.querySelector("div.grid-container");
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.addEventListener("mousedown", (event) => {
      isDrawing = true;
      event.target.classList.add("change-color");
      console.log("enter");
    });

    gridItem.addEventListener("mouseover", (event) => {
      if (isDrawing) {
        event.target.classList.add("change-color");
      }
      console.log("enter");
    });

    gridItem.addEventListener("mouseup", (event) => {
      isDrawing = false;
    });

    container.appendChild(gridItem);
  }
}

function createNewGrid() {
  let squarePerSide = prompt(
    "enter the number of square per side for the new grid (max 100):"
  );

  squarePerSide = parseInt(squarePerSide);

  if (isNaN(squarePerSide) || squarePerSide < 1 || squarePerSide > 100) {
    alert("please enter a valid number between 1 and 100.");
    return;
  }

  const gridContainer = document.querySelector(".grid-container");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `calc(100% / ${squarePerSide})`;
    gridItem.style.height = `calc(100% / ${squarePerSide})`;
    gridItem.addEventListener("mouseenter", (event) => {
      event.target.classList.add("change-color");
    });
    gridContainer.appendChild(gridItem);
  }
}

const btn = document.querySelector("div.btn-container button");
btn.addEventListener("click", (event) => {
  return createNewGrid();
});

window.onload = createGrid;
