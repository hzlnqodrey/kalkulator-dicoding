// membuat objek dan item pada kalkulator
const calculator = {
    displayNumber : '0',
    operator : null,
    firstNumber : null,
    waitingForSecondNumber : false
}

// 1. fungsi update display untuk mendapatkan objek calculator.displaynumber
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

// input digit untuk memanipulasi objek calculator.displaynumber dengan inner text terus di incerementkan
function inputDigit(digit) {
    if( calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if( calculator.displayNumber === '0' ) {
        return;
    } else {
        calculator.displayNumber = calculator.displayNumber * -1;
    }
}

// argumen operator berasal dari target.innerText
function handleOperator(operator) {
    if(!calculator.waitingForSecondNumber) {
        // mengambil event target listener ke object calc operator
        calculator.operator = operator;
        // membuat wfsn ke true
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

// fungsi perform kalkulasi
function performCalculation() {
    if( calculator.firstNumber == null || calculator.displayNumber == null ) {
        alert("anda belum menetapkan apapun");
    } else {

        let result = 0;
        if(calculator.operator === "+") {
            result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
        } else {
            result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
        }

        calculator.displayNumber = result;

    }
}



// membuat event listerner 'click' pada setiap button
const buttons = document.querySelectorAll(".button");

// perulangan memencet button pada kalkulator
for( let button of buttons ) {
    // event handler
     button.addEventListener('click', function(event){

        // mendapatkan objek yang di-klik
        const target = event.target;

        // clear class list
        if(target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        // inverse to negative
        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
  
        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
  
        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }


        inputDigit(target.innerText);
        updateDisplay();
     });
}