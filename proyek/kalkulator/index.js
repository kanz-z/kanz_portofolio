// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.innerText += input; // Menggunakan innerText daripada value
}

function clearDisplay(){
    display.innerText = ""; // Menggunakan innerText daripada value
}

function calculate(){
    try{
        display.innerText = eval(display.innerText); // Menggunakan innerText daripada value
    }
    catch(error){
        display.innerText = "Error"; // Menggunakan innerText daripada value
    }
}