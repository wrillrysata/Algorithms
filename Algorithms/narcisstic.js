function narcissistic( value ) {
var power= value.toString().length;
var i;
var alldigits = []; /** array to hold the number in singular digits**/
var result = [];
power = parseInt(power); /** convert back to integer for further operations**/
digits = value.toString() /** convert value to string in preparation for an operation**/
for(i=0;i<digits.length;i++) 
{
alldigits.push(parseInt(digits[i])) /** push appends each digit to an array **/
}
for(let i=0;i<alldigits.length;i++)
{
result.push(Math.pow(alldigits[i],power)); /** loop through the array and multiply each digit by the power **/
}
var sum = result.reduce(add, 0); /**add the result **/
function add(a, b) {
    return a + b;
}
if(sum == value)
{
console.log("True")
}else
{
console.log("False")
}
}
narcissistic(153) /** call the function **/

