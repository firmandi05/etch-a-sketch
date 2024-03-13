function createGrid() {
  const container = document.querySelector("div.grid-container");
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
  }
}

window.onload(createGrid());