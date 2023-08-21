function CalculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value
    const base = parseFloat(baseValueText);
    console.log(base);

    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value
    const height = parseFloat(heightValueText);
    console.log(height)

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function CalculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value
    const width = parseFloat(widthValueText);
    console.log(width)

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value
    const length = parseFloat(lengthValueText)
    console.log(length)
    //calculate area
    const area = width * length;

    // show rectangle area
    constRectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;
}



// reusable function --> reduce duplicate code
function CalculateParallelogramArea(){
 const base = getInputValue('parallelogram-base')
//  console.log(base)

const height = getInputValue('parallelogram-height');
// console.log(height)

const area = base * height;
setElementInnerText('Parallelogram-area', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}


// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const InputValueText = inputField.value
    const value = parseFloat(InputValueText);
    return value
}


// reusable set span,p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area

    
}

