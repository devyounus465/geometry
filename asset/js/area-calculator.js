function TriangleCalculateArea() {
  // get triangle basse value
  const triangleBaseElement = document.getElementById("triangle-base");
  const baseValuText = triangleBaseElement.value;
  const base = parseFloat(baseValuText);

  // get triangle height
  const triangleHeightElement = document.getElementById("triangle-height");
  const height = parseFloat(triangleHeightElement.value);

  // input validation: base and height
  if (isNaN(base) || isNaN(height)) {
    alert("please insert a number");
    return;
  }
  triangleHeightElement.value = " ";
  // calculation

  const area = 0.5 * base * height;

  // show triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;

  /**
   * add to parallelogram
   */

  addCalculationEntry("triangle", area);
}

// ractangle area calculation
function calculateRactangleArea() {
  // get width of ractangle
  const widthField = document.getElementById("ractangle-width");
  const width = parseFloat(widthField.value);

  // get length pf ractangle
  const lengthField = document.getElementById("ractangle-length");
  const length = parseFloat(lengthField.value);

  // calculation
  const area = width * length;
  console.log(area);

  // show ractangle
  const ractangleSpan = document.getElementById("ractangle-area");
  ractangleSpan.innerText = area;
  /**
   * add to ractangle
   */

  addCalculationEntry("ractangle", area);
}

// reusable function ----> reduce duplicate code

// parallelogram area calculation

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  if (isNaN(base) || isNaN(height)) {
    alert("please insert a number");
    return;
  }
  // calculation
  const areaParallelogram = base * height;

  // show area
  const areaShow = getAreaValue("parallelogram-area", areaParallelogram);

  /**
   * add to parallelogram
   */

  addCalculationEntry("parallelogram", areaParallelogram);
}

// Ellipse area calculation

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  //   calculation
  const ellipsArea = 3.1416 * majorRadius * minorRadius;
  const ellipsAreaTwoDecimal = ellipsArea.toFixed(2);
  // show area
  const ellipsSpan = getAreaValue("ellipse-area", ellipsAreaTwoDecimal);

  addCalculationEntry("ellips", ellipsAreaTwoDecimal);
}

// defult function
// reusable input value field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputvalue = parseFloat(inputField.value);
  return inputvalue;
}

function getAreaValue(areaId, area) {
  const areaSpan = document.getElementById(areaId);
  areaSpan.innerText = area;
}

/****
 *
 * Add to calculation entry
 */
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create a elemnt you want to add
 * 3. if needed some class
 * 4. set inner html. it could be dynamic template
 * 5. append the created element of the child of the parent
 */

function addCalculationEntry(areaType, area) {
  console.log(areaType + " " + area);
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = ` ${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class=" bg-red-400 px-4 py-2 text-white">convert</button>`;
  calculationEntry.appendChild(p);
}

// Data Validation
/**
 * 1. set the proper type of input field( number, email, text, data)
 * 2. check type using typeof
 * 3. NaN means: Not a number. isNaN  is checking whether a input is not a number or not
 *
 *
 *
 *
 *
 */
