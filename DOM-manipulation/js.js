console.log("DOM manipulation started !")

const container = document.querySelector("#container")

const pelem = document.createElement("p")
pelem.innerText = "I'm Red"
pelem.style.color = "red"


const h3 = document.createElement("h3")
h3.innerText = "I'm blue"
h3.style.color = "blue"

container.appendChild(pelem)
container.appendChild(h3)