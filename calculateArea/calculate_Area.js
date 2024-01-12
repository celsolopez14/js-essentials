let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById("length").ariaValueMax);
    width = parseFloat(document.getElementById("length").ariaValueMax);

    let area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}