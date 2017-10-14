





//create a function 
function Calculate  (num1, degrees) {
    //Set variables
let answer;
let input = document.getElementById("input")
let temp = document.getElementById("temp")

    switch (degrees) {
        //If case F calculate to Celsius
        case 'F': 
        answer = `${(parseFloat(num1) * (9 / 5) + 32)} Celsius` ;
        break;             
        
        //If case C calculte to Fahrenheit
        case 'C':
        answer = `${(parseFloat(num1) - 32) * (5 / 9)} Fahrenheit` ;
        break;
         
        default:
        answer = 'No valid operator'
        break
    }
        //Return
    return answer
}







