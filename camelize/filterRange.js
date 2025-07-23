//todo: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, a, b){
    arr = arr.filter((elem) => (elem>a || elem == a) && (elem <b || elem ==b)) 
}