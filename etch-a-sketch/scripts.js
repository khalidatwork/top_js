
const gridContainer = document.querySelector(".gridContainer")
const gridSize = 400

function pexilate(elem){
    elem.target.style.backgroundColor =  `rgb(${(Math.random())*200}, ${(Math.random())*200}, ${(Math.random())*200})`
    // elem.target.style.backgroundColor =  `rgb(${(Math.random())*100, (Math.random())*100, (Math.random())*100})`
}

function createGrid(N){
    
    const cellWidth = 100 / N; // Calculate percentage width
    let cell 
    gridContainer.style.setProperty('--grid-size', N/4);
    gridContainer.style.setProperty('--cell-size', `${N*3}px`);
    gridContainer.style.setProperty('width', `${gridSize}px`);
    gridContainer.style.setProperty('height', `${gridSize}px`);

    for(let i = 0; i<N*N; i++){
        cell = document.createElement("div")

        cell.className = 'gridCell';
        cell.style.setProperty('flex',`0 0 ${cellWidth}%`) 
        cell.style.setProperty('width',`${gridSize/N}px`  ) 
        cell.style.setProperty('height', `${gridSize/N}px` ) 

        cell.addEventListener("mouseover", pexilate)

        gridContainer.appendChild(cell)
    }

}

function resetGrid(element){
    
    let N = parseInt(prompt("Input the number of squares per side !")) 

    if(N == null){
        N = 16
        return ;
    } 

    while (N > 100) {
        N = parseInt(prompt("Please input a value less than 100 !")) 
    }
        
    gridContainer.innerHTML = ""
    createGrid(N)
    
}

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", resetGrid)

createGrid(16)