let isDrawing = false;

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

    gridContainer.appendChild(gridItem);
  }
}

const btn = document.querySelector("div.btn-container button:nth-child(1)");
btn.addEventListener("click", () => {
  return createNewGrid();
});

const btnTwo = document.querySelector("div.btn-container button:nth-child(2)");
btnTwo.addEventListener("click", () => {
  const gridItems = document.querySelectorAll("div.grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "#ccc";
  });
});

//initial grid
window.onload = () => {
  const container = document.querySelector("div.grid-container");
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.addEventListener("mousedown", (event) => {
      isDrawing = true;
      event.target.style.backgroundColor = "red";
      console.log("enter");
    });

    gridItem.addEventListener("mouseover", (event) => {
      if (isDrawing) {
        event.target.style.backgroundColor = "red";
      }
      console.log("enter");
    });

    gridItem.addEventListener("mouseup", (event) => {
      isDrawing = false;
    });

    container.appendChild(gridItem);
  }
};
