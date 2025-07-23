
const gridContainer = document.querySelector(".gridContainer")
let cell 

function pexilate(elem){

    elem.target.style.backgroundColor = "gray"
    console.log("here")
}

for(let i = 0; i<150; i++){
    cell = document.createElement("div")
    cell.addEventListener("mouseover", pexilate)
    gridContainer.appendChild(cell)
}

