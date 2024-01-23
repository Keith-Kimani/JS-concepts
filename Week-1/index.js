/**
 * parsefloat can be used in instances where there is percentages and it will pick it up
 * parseint when used it doesn't pick up on decimals
 * prompt is used to be to give a user a box to input the needed information
*/





let length = prompt('enter a length')
let width  = prompt('enter a width')

let finallegth = parsefloat(lenght)
let finalwidth = parsefloat(width)

let area = finallength * finalwidth
let perimeter = (finallegth + finalwidth) * 2

console.log(perimeter)
console.log('perimeter')
console.log(area)
console.log('area')