const g = 7;
const p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
];
var moretrigoVisible = false;
var buttonClicked = true;
var secondbuttonInTrigoFunctionBoolean = true;
var hyperBolicBoolean = true;
var notation = false;
let angleUnit = 0;
let displayValue1 = '';
let displayValue2 = '';
let EvaulatedValue = '';
var disableButtons = false;
var infunctionOnce = 0;
var thatNumber = '';
var thatIndex = -1;
var functionKeyPressed = false
const myButton = document.getElementById("secondButton");

function toggleTrigoButtons() {
    var moreTrigoButtons = document.getElementById('moreTrigo');
    if (moreTrigoButtons.style.display === 'none') {
        moreTrigoButtons.style.display = 'grid';
        moretrigoVisible = true;
    } else {
        moreTrigoButtons.style.display = 'none';
        moretrigoVisible = false;
    }
}
function toggleFunctionButtons() {
    let moreFunctionButtons = document.getElementById('moreFunctions');
    if (moreFunctionButtons.style.display === 'none') {
        moreFunctionButtons.style.display = 'grid';
    } else {
        moreFunctionButtons.style.display = 'none';
    }
}
function secondbuttonInTrigoFunction() {
    if (secondbuttonInTrigoFunctionBoolean && hyperBolicBoolean) {
        document.getElementById('sin').innerHTML = "sin<sup>-1</sup>";
        document.getElementById('cos').innerHTML = "cos<sup>-1</sup>";
        document.getElementById('tan').innerHTML = "tan<sup>-1</sup>";
        document.getElementById('sec').innerHTML = "sec<sup>-1</sup>";
        document.getElementById('csc').innerHTML = "csc<sup>-1</sup>";
        document.getElementById('cot').innerHTML = "cot<sup>-1</sup>";
        secondbuttonInTrigoFunctionBoolean = false;
    }
    else if (secondbuttonInTrigoFunctionBoolean == false && hyperBolicBoolean) {
        document.getElementById('sin').innerHTML = "sin";
        document.getElementById('cos').innerHTML = "cos";
        document.getElementById('tan').innerHTML = "tan";
        document.getElementById('sec').innerHTML = "sec";
        document.getElementById('csc').innerHTML = "csc";
        document.getElementById('cot').innerHTML = "cot";
        secondbuttonInTrigoFunctionBoolean = true;
    }
    else if (hyperBolicBoolean == false && secondbuttonInTrigoFunctionBoolean) {
        document.getElementById('sin').innerHTML = "sinh<sup>-1</sup>";
        document.getElementById('cos').innerHTML = "cosh<sup>-1</sup>";
        document.getElementById('tan').innerHTML = "tanh<sup>-1</sup>";
        document.getElementById('sec').innerHTML = "sech<sup>-1</sup>";
        document.getElementById('csc').innerHTML = "csch<sup>-1</sup>";
        document.getElementById('cot').innerHTML = "coth<sup>-1</sup>";
        secondbuttonInTrigoFunctionBoolean = false;
    }
    else if (hyperBolicBoolean == false && secondbuttonInTrigoFunctionBoolean == false) {
        document.getElementById('sin').innerHTML = "sinh";
        document.getElementById('cos').innerHTML = "cosh";
        document.getElementById('tan').innerHTML = "tanh";
        document.getElementById('sec').innerHTML = "sech";
        document.getElementById('csc').innerHTML = "csch";
        document.getElementById('cot').innerHTML = "coth";
        secondbuttonInTrigoFunctionBoolean = true;
    }
}
function hyperBolic() {
    if (hyperBolicBoolean) {
        document.getElementById('sin').innerHTML = "sinh";
        document.getElementById('cos').innerHTML = "cosh";
        document.getElementById('tan').innerHTML = "tanh";
        document.getElementById('sec').innerHTML = "sech";
        document.getElementById('csc').innerHTML = "csch";
        document.getElementById('cot').innerHTML = "coth";
        hyperBolicBoolean = false;
    }
    else {
        if (secondbuttonInTrigoFunctionBoolean = false) {
            document.getElementById('sin').innerHTML = "sin<sup>-1</sup>";
            document.getElementById('cos').innerHTML = "cos<sup>-1</sup>";
            document.getElementById('tan').innerHTML = "tan<sup>-1</sup>";
            document.getElementById('sec').innerHTML = "sec<sup>-1</sup>";
            document.getElementById('csc').innerHTML = "csc<sup>-1</sup>";
            document.getElementById('cot').innerHTML = "cot<sup>-1</sup>";
            secondbuttonInTrigoFunctionBoolean = true;
        }
        else {
            document.getElementById('sin').innerHTML = "sin";
            document.getElementById('cos').innerHTML = "cos";
            document.getElementById('tan').innerHTML = "tan";
            document.getElementById('sec').innerHTML = "sec";
            document.getElementById('csc').innerHTML = "csc";
            document.getElementById('cot').innerHTML = "cot";
            hyperBolicBoolean = true;
        }

    }

}
 function handleClick() {
    if (buttonClicked) {
        document.getElementById('XSquare').innerHTML = "x<sup>3</sup>";
        document.getElementById('underrootX').innerHTML = "<sup>3</sup><span>&#8730;</span>x";
        document.getElementById('xPower').innerHTML = "<sup>y</sup><span>&#8730;</span>x";
        document.getElementById('tenPower').innerHTML = "2<sup>x</sup>";
        document.getElementById('log').innerHTML = "log<sub>y</sub>x";
        document.getElementById('ln').innerHTML = "e<sup>x</sup>";
        buttonClicked = false;
    }
    else {
        document.getElementById('XSquare').innerHTML = "x<sup>2</sup>";
        document.getElementById('underrootX').innerHTML = "<sup>2</sup><span>&#8730;</span>x";
        document.getElementById('xPower').innerHTML = "x<sup>y</sup>";
        document.getElementById('tenPower').innerHTML = "10<sup>x</sup>";
        document.getElementById('log').innerHTML = "log";
        document.getElementById('ln').innerHTML = "ln";
        buttonClicked = true;
    }
}
myButton.onclick = handleClick;


document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        var buttonNumber = parseInt(event.key);
        var button = document.getElementById("button" + buttonNumber);
        button.click();
        button.classList.add("active");
        setTimeout(function () {
            button.classList.remove("active");
        }, 100);

    }
    else if (event.key === "+") {
        document.getElementById("plus").click();

    }
    else if (event.key === "-") {
        document.getElementById("minus").click();

    }
    else if (event.key === "*") {
        document.getElementById("multiplication").click();

    }
    else if (event.key === "/") {
        document.getElementById("divide").click();

    }
    else if (event.key === ".") {
        document.getElementById("decimal").click();

    }
    else if (event.key === "Enter") {
        document.getElementById("Enter").click();
        if (disableButtons) {
            EnableAllButtons();
        }
    }
    else if (event.key === "Backspace") {
        if (disableButtons) {
            EnableAllButtons();
        }
        let backspace = document.getElementById("backspace");
        backspace.click();
        backspace.classList.add("active");
        setTimeout(function () {
            backspace.classList.remove("active");
        }, 100);

    }
    else if (event.key === "Escape") {
        document.getElementById("clear").click();
    }
});
for (var i = 0; i <= 9; i++) {
    document.getElementById("button" + i).addEventListener("click", function () {
        appendToDisplay(this.textContent);
        if (disableButtons) {
            EnableAllButtons();
        }
    });
}
function plusClick() {
    appendToDisplay('+');
}
function minusClick() {
    appendToDisplay('-');
}
function intoClick() {
    appendToDisplay('*');
}
function divideClick() {
    appendToDisplay('/');
}
function decimalClick() {
    appendToDisplay('.');
}
function appendToDisplay(value) {
    if (value >= 0 && value <= 9 || value == '.') {
        displayValue2 += value;
        document.getElementById('display2').innerText = displayValue2;
    }
    else {
        if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%' || value == '^') {
            infunctionOnce = 0;

            EvaulatedValue += displayValue2 + value;
            if (value == '%') {
                displayValue1 += displayValue2 + 'Mod';
            }
            else if (value == '/') {
                displayValue1 += displayValue2 + '÷';
            }

            else {
                // displayValue1 += displayValue2 + value;
                if (functionKeyPressed == true) {
                    displayValue1 += value;
                    functionKeyPressed = false;
                }
                else {
                    displayValue1 += displayValue2 + value;
                }
            }
        }
        else {
            displayValue1 += value;
        }
        displayValue2 = '';
        document.getElementById('display1').innerText = displayValue1;
    }
}

function clearDisplay() {
    displayValue1 = '';
    displayValue2 = '';
    EvaulatedValue = '';
    infunctionOnce = 0;
    functionKeyPressed = false;
    thatIndex = -1
    document.getElementById('display1').innerText = '';
    document.getElementById('display2').innerText = '';
}
function backspace() {
    // if we click this after enter
    let tempValue = document.getElementById('display1').innerText;
    let lastIndex = tempValue.length - 1;
    if (tempValue[lastIndex] == '=') {
        document.getElementById('display1').innerText = '';
        displayValue1 = '';
        EvaulatedValue = '';
    }
    else {
        if (displayValue2.length == 0) {
            displayValue2 = '';
            document.getElementById('display2').innerText = '0';
        }
        else {
            displayValue2 = displayValue2.slice(0, -1);
            if (displayValue2.length == 0) {
                displayValue2 = '';
                document.getElementById('display2').innerText = '0';
            }
            else {
                document.getElementById('display2').innerText = displayValue2;
            }
        }

    }
}
function calculate() {
    try {
        let lastIndex = EvaulatedValue.length - 1;
        let lastElement = EvaulatedValue[lastIndex]
        if (lastElement == '+' || lastElement == '-' || lastElement == '*' || lastElement == '/' || lastElement == '%' || lastElement == '^' || EvaulatedValue.length == 0) {
            if ((document.getElementById('display2').innerText)[0] == '-') {
                EvaulatedValue += '(' + document.getElementById('display2').innerText + ')';
                if (functionKeyPressed == false) {
                    displayValue1 += document.getElementById('display2').innerText;
                }
            }
            else {
                EvaulatedValue += document.getElementById('display2').innerText;
                if (functionKeyPressed == false) {
                    displayValue1 += document.getElementById('display2').innerText;
                }
            }
        }
        console.log(EvaulatedValue)
        const result = bodmas(EvaulatedValue)
        displayValue1 += '=';
        displayValue2 = result.toString();
        EvaulatedValue = '';
        document.getElementById('display2').innerText = result;
        document.getElementById('display1').innerText = displayValue1;
        displayValue1 = '';
        infunctionOnce = 0;
        thatIndex = -1;
    } catch (error) {
        displayValue1 = '';
        document.getElementById('display2').innerText = 'Error';
        DisableAllButtons();
    }
}
document.getElementById("notationButton").addEventListener("click", function () {
    if (notation == false) {
        document.getElementById("notationButton").innerText = "E-F";
        notation = true;
    }
    else {
        document.getElementById("notationButton").innerText = "F-E";
        notation = false;
    }
})
document.getElementById("angleButton").addEventListener("click", function () {
    angleUnit = angleUnit + 1;
    switch (angleUnit) {
        case 1:
            document.getElementById("angleButton").innerText = "RAD";
            break;
        case 2:
            document.getElementById("angleButton").innerText = "GRAD";
            break;
        case 3:
            document.getElementById("angleButton").innerText = "DEG";
            angleUnit = 0;
            break;
    }
})
document.getElementById("history").addEventListener("click", function () {
    let historyBlock = document.getElementById('historyBlock');
    let memoryBlock = document.getElementById('memoryBlock');
    if (historyBlock) {
        if (historyBlock.style.display == 'none') {
            historyBlock.style.display = 'block';
            memoryBlock.style.display = 'none';
        }
        else {
            historyBlock.style.display = 'none';
        }
    }
})
document.getElementById("memory").addEventListener("click", function () {
    let memoryBlock = document.getElementById('memoryBlock');
    let historyBlock = document.getElementById('historyBlock');
    if (memoryBlock.style.display === 'none') {
        memoryBlock.style.display = 'block';
        historyBlock.style.display = 'none';
    } else {
        memoryBlock.style.display = 'none';
    }
})

function DisableAllButtons() {
    const buttonIds = ['secondButton', 'pi', 'e', 'XSquare', 'oneByX', 'modX', 'exp', 'mod', 'underrootX', 'leftBracket', 'rightBracket', 'factorial', 'divide', 'xPower', 'multiplication', 'tenPower', 'minus', 'log', 'plus', 'ln', 'neogate', 'decimal', 'button_trigo', 'button_function'];
    for (let i = 0; i < buttonIds.length; i++) {
        const button = document.getElementById(buttonIds[i]);
        if (button) {
            button.disabled = true;
        }
    }
    disableButtons = true;
}
function EnableAllButtons() {
    const buttonIds = ['secondButton', 'pi', 'e', 'XSquare', 'oneByX', 'modX', 'exp', 'mod', 'underrootX', 'leftBracket', 'rightBracket', 'factorial', 'divide', 'xPower', 'multiplication', 'tenPower', 'minus', 'log', 'plus', 'ln', 'neogate', 'decimal', 'button_trigo', 'button_function'];

    for (let i = 0; i < buttonIds.length; i++) {
        const button = document.getElementById(buttonIds[i]);
        if (button) {
            button.disabled = false;
        }
    }
    disableButtons = false;
}
// math functions ====================================================================================

function piValue() {
    appendToDisplay(Math.PI);
}
/*function eValue() {
    appendToDisplay(Math.E)
}*/

// Function to handle the e value
function eValue() {
    // Set the display value to Math.E directly
    document.getElementById('display2').innerText = Math.E;
}

/*function naturalLog() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'log(' + thatNumber + ')';
    let tempValue = Math.log10(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'log(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}*/
let xForLog;
let baseForLog;

function naturalLog() {
    let displayValue2 = document.getElementById('display2').innerText;
    formating();

    if (baseForLog !== undefined && xForLog !== undefined) {
        let x = parseFloat(xForLog);
        let y = parseFloat(baseForLog);
        let result;
        if (!isNaN(x) && !isNaN(y) && x > 0 && y > 0 && y !== 1) {
            result = Math.log(x) / Math.log(y);
            displayValue1 += xForLog + 'log<sub>' + baseForLog + '</sub>';
            displayValue2 = result;
            xForLog = undefined; // Reset x for next calculation
            baseForLog = undefined; // Reset base for next calculation
        } else {
            displayValue1 = "Invalid input";
            displayValue2 = "";
        }
    } else {
        displayValue1 += 'log(' + thatNumber + ')';
        let tempValue = Math.log10(displayValue2);
        displayValue2 = tempValue;
        thatNumber = 'log(' + thatNumber + ')';
    }

    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerHTML = displayValue1;
}

function setXForLog(x) {
    xForLog = x;
    document.getElementById('display1').innerText = xForLog + 'log';
}

function setBaseForLog(base) {
    baseForLog = base;
    document.getElementById('display1').innerText += '<sub>' + baseForLog + '</sub>';
}

function ln_baseElog() {
    if (document.getElementById('ln').innerText == 'ln') {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += 'ln(' + thatNumber + ')';
        let tempValue = Math.log(displayValue2);
        displayValue2 = tempValue;
        thatNumber = 'ln(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += 'e^(' + thatNumber + ')';
        let tempValue = Math.exp(displayValue2);
        displayValue2 = tempValue;
        thatNumber = 'e^(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }

}

function squareroot() {
    // Check if buttonClicked is true, indicating cubic root operation
    if (buttonClicked) {        
     // Perform square root operation
     displayValue2 = document.getElementById('display2').innerText;
     let tempnumber = parseFloat(displayValue2);
    try {
        if (tempnumber < 0) {
          throw new Error("Invalid input");
        }
       let tempValue = Math.sqrt(tempnumber);
       displayValue1 = '√(' + tempnumber + ')';
       displayValue2 = tempValue;
       thatNumber = '√(' + tempnumber + ')';
       document.getElementById('display1').innerText = displayValue1;
       document.getElementById('display2').innerText = displayValue2;
    } catch (error) {
     displayValue1 = '';
     displayValue2 = '';
     EvaulatedValue = '';
     document.getElementById('display2').innerText = 'Invalid Input';
     DisableAllButtons();
 }

    } else {
       // Perform cubic root operation
       displayValue2 = document.getElementById('display2').innerText;
       let tempnumber = parseFloat(displayValue2);
       try {
           let tempValue = Math.cbrt(tempnumber);
           displayValue1 = '∛(' + tempnumber + ')';
           displayValue2 = tempValue;
           thatNumber = '∛(' + tempnumber + ')';
           document.getElementById('display1').innerText = displayValue1;
           document.getElementById('display2').innerText = displayValue2;
       } catch (error) {
           displayValue1 = '';
           displayValue2 = '';
           EvaulatedValue = '';
           document.getElementById('display2').innerText = 'Invalid Input';
           DisableAllButtons();
       }
    }
}



function sqaure() {
    if (document.getElementById('XSquare').innerHTML == "x<sup>2</sup>") {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += 'sqr(' + thatNumber + ')';
        let tempValue = Math.pow(displayValue2, 2);
        displayValue2 = tempValue;
        thatNumber = 'sqr(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += 'cube(' + thatNumber + ')';
        let tempValue = Math.pow(displayValue2, 3);
        displayValue2 = tempValue;
        thatNumber = 'cube(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
}


function inverse() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += '1/(' + thatNumber + ')';
    document.getElementById('display1').innerText = displayValue1;
    let tempValue = 1 / displayValue2;;
    displayValue2 = tempValue;
    thatNumber = '1/(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
}
function abs() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'abs(' + thatNumber + ')';
    let tempValue = Math.abs(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'abs(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}
function leftBracket() {
    appendToDisplay('(')
}
function rightBracket() {
    appendToDisplay(')')
}

// Function to handle x^y and Y√x button click
function xtoThePowerY() {
    if (document.getElementById('xPower').innerHTML == "x<sup>y</sup>") {
        appendToDisplay('^'); 
    } else {
    }
}

function neogate() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'negate(' + thatNumber + ')';
    if (parseFloat(displayValue2)) {
        if (displayValue2 <= 0) {
            displayValue2 = Math.abs(displayValue2)
        }
        else {
            displayValue2 = 0 - displayValue2;
        }
    }
    thatNumber = 'negate(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;

}
function formating() {
    functionKeyPressed = true;
    if (infunctionOnce == 0) {
        thatNumber = displayValue2;
        thatIndex = displayValue1.length;
    }
    if (displayValue1.length - thatNumber.length >= 0 && infunctionOnce != 0) {
        displayValue1 = displayValue1.slice(0, displayValue1.length - thatNumber.length);
    }
    infunctionOnce++;
}
function Factorial() {
    displayValue2 = document.getElementById('display2').innerText;
    let tempnumber = parseFloat(displayValue2)
    let tempnumber2 = parseInt(displayValue2)
    formating();
    try {
        displayValue1 += 'fact(' + thatNumber + ')';
        if (tempnumber < 0) {
            throw new Error("Invalid input");
        }
        let tempValue = MyGammaDouble(tempnumber + 1);
        if (tempnumber == tempnumber2) {
            displayValue2 = Math.round(tempValue)
        }
        else {
            displayValue2 = tempValue
        }
        thatNumber = 'fact(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    catch {
        displayValue1 = '';
        displayValue2 = '';
        EvaulatedValue = '';
        document.getElementById('display2').innerText = 'Invalid Input';
        DisableAllButtons();
    }
}
function MyGammaDouble(z) {
    if (z < 0.5) {
        return Math.PI / (Math.sin(Math.PI * z) * MyGammaDouble(1 - z));
    }
    z -= 1;
    let x = p[0];
    for (let i = 1; i < g + 2; i++) {
        x += p[i] / (z + i);
    }
    let t = z + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
}
function rand() {
    displayValue2 = Math.random();
    document.getElementById('display2').innerText = displayValue2;
}
function floor() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'floor(' + thatNumber + ')';
    let tempValue = Math.floor(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'floor(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}
function ceiling() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'ceil(' + thatNumber + ')';
    let tempValue = Math.ceil(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'ceil(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}
function tensPower() {
    if (document.getElementById('tenPower').innerHTML == "10<sup>x</sup>") {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += '10^(' + thatNumber + ')';
        let tempValue = Math.pow(10, parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = '10^(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else {
        displayValue2 = document.getElementById('display2').innerText;
        formating();
        displayValue1 += '2^(' + thatNumber + ')';
        let tempValue = Math.pow(2, parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = '2^(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
}
function ConvertToDMS(angle1) {
    let degrees = Math.floor(angle1);
    let minutes = (angle1 - degrees) * 60;
    let minutesInt = Math.floor(minutes);
    let seconds = (minutes - minutesInt) * 60;
    let result = degrees + minutesInt / 100.0 + seconds / 10000.0;
    return result;
}
function DMSToDegree(angle1) {
    let degrees = Math.floor(angle1);
    let minutes = (angle1 - degrees);
    let result = degrees + (minutes / 60);
    return result;
}
function dms() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'dms(' + thatNumber + ')';
    let tempValue = ConvertToDMS(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'dms(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}
function deg() {
    displayValue2 = document.getElementById('display2').innerText;
    formating();
    displayValue1 += 'degrees(' + thatNumber + ')';
    let tempValue = DMSToDegree(displayValue2);
    displayValue2 = tempValue;
    thatNumber = 'degrees(' + thatNumber + ')';
    document.getElementById('display2').innerText = displayValue2;
    document.getElementById('display1').innerText = displayValue1;
}

// trigo function==================================================================================================================
function sinFunction() {
    if (document.getElementById('sin').innerText == 'sin') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'sin₀'
        }
        else if (status == 'RAD') {
            symbol = 'sinᵣ'
        }
        else {
            symbol = 'sin₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Sine(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sin').innerHTML == 'sin<sup>-1</sup>') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'sin₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'sinᵣ⁻¹'
        }
        else {
            symbol = 'sin₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SineInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sin').innerText == 'sinh') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'sinh';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SineHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sin').innerHTML == 'sinh<sup>-1</sup>') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'sinh⁻¹';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SineHypInverse(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
}
function cosFunction() {
    if (document.getElementById('cos').innerText == 'cos') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'cos₀'
        }
        else if (status == 'RAD') {
            symbol = 'cosᵣ'
        }
        else {
            symbol = 'cos₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Cosine(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('cos').innerHTML == 'cos<sup>-1</sup>') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'cos₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'cosᵣ⁻¹'
        }
        else {
            symbol = 'cos₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosineInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('cos').innerText == 'cosh') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'cosh';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosineHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('cos').innerHTML == 'cosh<sup>-1</sup>') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'cosh⁻¹';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosineHypInverse(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
}
function tanFunction() {
    if (document.getElementById('tan').innerText == 'tan') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'tan₀'
        }
        else if (status == 'RAD') {
            symbol = 'tanᵣ'
        }
        else {
            symbol = 'tan₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Tangent(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('tan').innerHTML == 'tan<sup>-1</sup>') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'tan₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'tanᵣ⁻¹'
        }
        else {
            symbol = 'tan₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = TangentInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('tan').innerText == 'tanh') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'tanh';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = TangentHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('tan').innerHTML == 'tanh<sup>-1</sup>') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'tanh';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = TangentHypInverse(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }

}
function secFunction() {
    if (document.getElementById('sec').innerText == 'sec') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'sec₀'
        }
        else if (status == 'RAD') {
            symbol = 'secᵣ'
        }
        else {
            symbol = 'sec₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Sec(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sec').innerHTML == 'sec<sup>-1</sup>') {
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'sec₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'secᵣ⁻¹'
        }
        else {
            symbol = 'sec₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SecInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sec').innerText == 'sech') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'sech';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SecHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if (document.getElementById('sec').innerHTML == 'sech<sup>-1</sup>') {
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'sech⁻¹';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = SecHypInverse(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
}
function cscFunction() {
    if(document.getElementById('csc').innerText=='csc'){
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'csc₀'
        }
        else if (status == 'RAD') {
            symbol = 'cscᵣ'
        }
        else {
            symbol = 'csc₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Cosec(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if(document.getElementById('csc').innerHTML=='csc<sup>-1</sup>'){
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'csc₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'cscᵣ⁻¹'
        }
        else {
            symbol = 'csc₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosecInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if(document.getElementById('csc').innerText=='csch'){
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'csch';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosecHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if(document.getElementById('csc').innerHTML=='csch<sup>-1</sup>'){
       displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'csch⁻¹';
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CosecHypInverse(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }

   
}
function cotFunction() {
    if(document.getElementById('cot').innerText=='cot'){
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'cot₀'
        }
        else if (status == 'RAD') {
            symbol = 'cotᵣ'
        }
        else {
            symbol = 'cot₉'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = Cot(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    if(document.getElementById('cot').innerHTML=='cot<sup>-1</sup>'){
        let status = document.getElementById('angleButton').innerText;
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = '';
        formating();
        if (status == 'DEG') {
            symbol = 'cot₀⁻¹'
        }
        else if (status == 'RAD') {
            symbol = 'cotᵣ⁻¹'
        }
        else {
            symbol = 'cot₉⁻¹'
        }
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CotInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    else if(document.getElementById('cot').innerText=='coth'){
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'coth';
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CotHyp(parseFloat(displayValue2));
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }
    if(document.getElementById('cot').innerHTML=='coth<sup>-1</sup>'){
        displayValue2 = document.getElementById('display2').innerText;
        let symbol = 'coth⁻¹';
        formating();
        displayValue1 += symbol + '(' + thatNumber + ')';
        let tempValue = CotHypInverse(parseFloat(displayValue2), status);
        displayValue2 = tempValue;
        thatNumber = symbol + '(' + thatNumber + ')';
        document.getElementById('display2').innerText = displayValue2;
        document.getElementById('display1').innerText = displayValue1;
    }  
}
// Function for "exp" button functionality
document.getElementById('exp').addEventListener('click', function() {
    // Get the current value in the display
    let currentValue = parseFloat(document.getElementById('display2').innerText);

    // Check if currentValue is a valid number
    if (!isNaN(currentValue)) {
        // Calculate the exponential value of the current value
        let exponentialValue = Math.exp(currentValue);

        // Check if the exponential value is a valid number
        if (!isNaN(exponentialValue)) {
            // Convert the exponential value to a string with desired format
            let expString;
            if (Number.isInteger(currentValue)) {
                expString = `${currentValue}.e+0`;
            } else {
                expString = exponentialValue.toExponential(0);
            }

            // Update the display with the exponential value
            document.getElementById('display2').innerText = expString;
        } else {
            // Handle case where exponential value is NaN
            document.getElementById('display2').innerText = 'NaN';
        }
    } else {
        // Handle case where currentValue is NaN
        document.getElementById('display2').innerText = 'NaN';
    }
});


// JavaScript code for the "F-E" button functionality
document.getElementById('notationButton').addEventListener('click', function() {
    // Get the current value in the display
    let currentValue = parseFloat(document.getElementById('display2').innerText);
    
    // Convert the value to scientific notation format (F-E)
    let scientificNotation = currentValue.toExponential();
    
    // Update the display with the scientific notation value
    document.getElementById('display2').innerText = scientificNotation;
});

//Memory Functions
        document.addEventListener('DOMContentLoaded', function() {
            // Function to enable memory buttons
            function enableMemoryButtons() {
                document.getElementById('mcButton').disabled = false;
                document.getElementById('mrButton').disabled = false;
            }
        
            // Function to disable memory buttons
            function disableMemoryButtons() {
                document.getElementById('mcButton').disabled = true;
                document.getElementById('mrButton').disabled = true;
            }
        
            // Initially disable memory buttons
            disableMemoryButtons();
        
            // Memory Functions
            document.getElementById('mcButton').addEventListener('click', function() {
                // Clear the memory register
                localStorage.removeItem('memory');
                // Update the memory display in the Memory section
                document.getElementById('memoryBlock').innerText = 'Memory: Empty';
                // Disable memory buttons again
                disableMemoryButtons();
            });
        
            document.getElementById('mrButton').addEventListener('click', function() {
                // Retrieve the value stored in the memory register and display it on the screen
                let memoryValue = localStorage.getItem('memory');
                if (memoryValue !== null) {
                    document.getElementById('display2').innerText = memoryValue; // Update the display2 element with the memory value
                    document.getElementById('memoryBlock').innerText = 'Memory: ' + memoryValue;
                } else {
                    document.getElementById('display2').innerText = ''; // Clear the display2 element if memory is empty
                    document.getElementById('memoryBlock').innerText = 'Memory: Empty';
                }
            });
        
            document.getElementById('msButton').addEventListener('click', function() {
                // Store the currently displayed value into the memory register
                let currentValue = parseFloat(document.getElementById('display2').innerText);
                localStorage.setItem('memory', currentValue.toString());
                // Update the memory display in the Memory section
                document.getElementById('memoryBlock').innerText = 'Memory: ' + localStorage.getItem('memory');
                // Enable memory buttons
                enableMemoryButtons();
            });
        
            
            document.getElementById('mPlusButton').addEventListener('click', function() {
                // Add the currently displayed value to the value stored in the memory register
                let currentValue = parseFloat(document.getElementById('display2').innerText);
                let memoryValue = localStorage.getItem('memory');
                if (memoryValue !== null) {
                    memoryValue = parseFloat(memoryValue);
                    localStorage.setItem('memory', (memoryValue + currentValue).toString());
                } else {
                    localStorage.setItem('memory', currentValue.toString());
                }
                // Update the memory display in the Memory section
                document.getElementById('memoryBlock').innerText = 'Memory: ' + localStorage.getItem('memory');
            });
        
            document.getElementById('mMinusButton').addEventListener('click', function() {
                // Subtract the currently displayed value from the value stored in the memory register
                let currentValue = parseFloat(document.getElementById('display2').innerText);
                let memoryValue = localStorage.getItem('memory');
                if (memoryValue !== null) {
                    memoryValue = parseFloat(memoryValue);
                    localStorage.setItem('memory', (memoryValue - currentValue).toString());
                } else {
                    localStorage.setItem('memory', currentValue.toString());
                }
                // Update the memory display in the Memory section
                document.getElementById('memoryBlock').innerText = 'Memory: ' + localStorage.getItem('memory');
            });

//History Functions

// Function to add an entry to the history
function addToHistory(entry) {
    let history = JSON.parse(localStorage.getItem('history')) || []; // Retrieve existing history or initialize as empty array
    history.push(entry); // Add the new entry to the history array
    localStorage.setItem('history', JSON.stringify(history)); // Save the updated history array back to localStorage
}

// Function to display history
function updateHistoryDisplay() {
    let historyList = document.getElementById('historyList');
    let history = JSON.parse(localStorage.getItem('history'));

    if (history && history.length > 0) {
        let historyItems = '';

        history.forEach((item, index) => {
            historyItems += `<li>${index + 1}. ${item}</li>`;
        });

        historyList.innerHTML = historyItems;
    } else {
        historyList.innerHTML = '<li>No history available.</li>';
    }
}

// Function to clear history
function clearHistory() {
    localStorage.removeItem('history'); // Remove history from localStorage
    updateHistoryDisplay(); // Update the history display
}

// Bind event listener to the clear history button
document.getElementById('clearHistory').addEventListener('click', clearHistory);

// Call updateHistoryDisplay when the page loads to display existing history
document.addEventListener('DOMContentLoaded', updateHistoryDisplay);
});
