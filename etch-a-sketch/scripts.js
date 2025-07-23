
const gridContainer = document.querySelector(".gridContainer")
let cell 

function pexilate(elem){

    elem.target.style.backgroundColor = "gray"
    console.log("here")
}

const N = 100

for(let i = 0; i<N; i++){
    cell = document.createElement("div")
    cell.addEventListener("mouseover", pexilate)
    cell.style.width = `calc(100% / ${N/2})`;
    cell.style.height = `calc(100% / ${N/2})`;
    
    gridContainer.appendChild(cell)
}

