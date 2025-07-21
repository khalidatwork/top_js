console.log("Camelize started !")

function capetalize(wrd){

    let arr = wrd.split("")
    arr[0] = arr[0].toUpperCase()

    return arr.join("")
}

function camelize(input){
    let arr = input.split("-")
    return arr[0].toLowerCase().concat(arr.slice(1).map((elem) => capetalize(elem)).join(""))
}

const user_input = prompt("text to camelize !")
console.log(camelize(user_input))